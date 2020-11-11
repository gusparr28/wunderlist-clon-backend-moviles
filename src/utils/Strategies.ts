import jwt from 'jsonwebtoken';
import { config as dotenv } from 'dotenv';
dotenv();

const JWT_SECRET: any = process.env.JWT_SECRET; 

export const createToken = (id: any) : string => {
    return jwt.sign({ id }, JWT_SECRET);
};