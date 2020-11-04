import Router, { Request, Response } from 'express';
const router = Router();

import Task from '../models/Task';

export const getTasksByUser = async (req: any, res: Response) => {
    const { _id } = req.user;
    try {
        const tasks = await Task.find({ author: _id });
        return res.status(200).json({ status: 200, tasks });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const getTaskById = async (req: any, res: Response) => {
    const { _id } = req.user;
};

// req es de tipo any debido a que al asignarle el tipo Request da error de tipado
export const createTask = async (req: any, res: Response) => {
    const { title, description, priority, date, time, pinned } = req.body;
    const { _id } = req.user;
    try {
        const newTask = new Task({
            title,
            description,
            priority,
            date,
            time,
            pinned,
            author: _id
        });
        await newTask.save();
        return res.status(200).json({ status: 200, message: 'Task successfully created', task: { title, description } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const deleteTask = async (req: Request, res: Response) => {
    try {

    } catch (e) {

    };
};

export default router;