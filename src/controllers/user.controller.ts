import { Response } from 'express';
import { genSaltSync, hashSync } from 'bcryptjs';

import User from '../models/User';

export const getUserInfo = async (req: any, res: Response) => {
    const { _id } = req.user;
    try {
        const user = await User.findOne({ _id }).select("-password");
        return res.status(200).json({ status: 200, user });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
}

export const updateUser = async (req: any, res: Response) => {
    const { name, email, password } = req.body;
    const { _id } = req.user;
    try {
        const savedUser = await User.findOne({ email, password });
        if (savedUser) return res.status(422).json({
            status: 422,
            error: 'User already exists'
        });
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);
        const updatedUser = await User.findByIdAndUpdate(_id, {
            name,
            email,
            password: hashedPassword
        }, { new: true }).select("-password");
        return res.status(200).json({ status: 200, message: 'User successfully updated', user: updatedUser })
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
};

export const deleteUser = async (req: any, res: Response) => {
    const { _id } = req.user;
    try {
        await User.findByIdAndDelete(_id);
        return res.status(200).json({ status: 200, message: 'User successfully deleted' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
};