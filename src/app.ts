// modules importation
import express from 'express';
import passport from 'passport';
import cors from 'cors';
import passportMiddleware from './middlewares/passport';
const app = express();

import authRoutes from './routes/auth';
import taskRoutes from './routes/task';
import userRoutes from './routes/user';

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);
app.use(cors({
    origin: true
}));

// routes
app.use(authRoutes);
app.use(taskRoutes);
app.use(userRoutes);

// settings
app.set('port', process.env.PORT || 3000);

export default app;