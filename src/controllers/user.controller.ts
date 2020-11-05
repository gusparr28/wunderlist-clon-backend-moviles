import { Response } from 'express';

import User from '../models/User';

export const updateUser = (req: any, res: Response) => {
    const { name, email, password } = req.body;
    const { _id } = req.user;
    try {

    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
};

export const deleteUser = (req: any, res: Response) => {
    const { _id } = req.user;
    try {

    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
};