import { Router } from 'express';
const router = Router();

import passport from 'passport';

import { deleteUser, updateUser } from '../controllers/user.controller';

router.route('/profile')
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

export default router;
