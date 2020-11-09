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

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
    origin: (origin: any, callback: any) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
})

// routes
app.use(authRoutes);
app.use(taskRoutes);
app.use(userRoutes);

// settings
app.set('port', process.env.PORT || 3000);

export default app;