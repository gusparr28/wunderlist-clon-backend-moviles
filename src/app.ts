// modules importation
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
const app = express();

import authRoutes from './routes/auth';
import taskRoutes from './routes/task';
import userRoutes from './routes/user';

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
passport.use(passportMiddleware);

// app.use(
//     session({
//         secret: process.env.SESSION_SECRET || 'gustavo28',
//         resave: true,
//         saveUninitialized: true,
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, done) => {
//     done(null, JSON.stringify(user));
// });
// passport.deserializeUser((user: string, done) => {
//     done(null, JSON.parse(user));
// });

// routes
app.use(authRoutes);
app.use(taskRoutes);
app.use(userRoutes);

// settings
app.set('port', process.env.PORT || 3000);

export default app;