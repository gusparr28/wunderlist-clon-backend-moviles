import jwt from 'jsonwebtoken';
import { config as dotenv } from 'dotenv';
dotenv();

const JWT_SECRET: any = process.env.JWT_SECRET || '28552455565g'; 

export const createToken = (id: any) => {
    return jwt.sign({ id }, JWT_SECRET);
};