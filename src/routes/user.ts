import { Router } from 'express';
const router = Router();

import passport from 'passport';

import { deleteUser, getUserInfo, updateUser } from '../controllers/user.controller';

router.route('/profile')
    .get(passport.authenticate('jwt', { session: false }), getUserInfo)
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

export default router;
