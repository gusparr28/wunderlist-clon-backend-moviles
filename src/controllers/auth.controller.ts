import { Request, Response } from 'express';
import { compare, genSaltSync, hashSync } from 'bcryptjs';

import User from '../models/User';
import { createToken } from '../utils/Strategies';

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    const { email, name, password } = req.body;
    try {
        if (!email || !name || !password) return res.status(422).json({
            status: 422,
            error: 'Please complete all fields'
        });
        const savedUser = await User.findOne({ email });
        if (savedUser) return res.status(422).json({
            status: 422,
            error: 'User already exists'
        });
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);
        const newUser = new User({
            email,
            name,
            password: hashedPassword
        });
        console.log(newUser);
        await newUser.save();
        return res.status(200).json({ status: 200, message: 'User successfully signed up' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(422).json({ status: 422, error: 'Please complete all fields' });
        const savedUser: any = await User.findOne({ email });
        if (!savedUser) return res.status(422).json({ status: 422, error: 'Invalid credentials' });
        const correctCreds = await compare(password, savedUser.password);
        if (correctCreds) {
            return res.status(200).json({
                status: 200,
                message: 'User successfully signed in',
                token: createToken(savedUser._id)
            });
        }
        return res.status(422).json({ status: 422, error: 'Invalid credentials' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};