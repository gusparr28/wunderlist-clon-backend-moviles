import { Router } from 'express';
const router = Router();

import passport from 'passport';

import { deleteUser, getUserInfo, signOutUser, updateUser } from '../controllers/user.controller';

router.route('/profile')
    .get(passport.authenticate('jwt', { session: false }), getUserInfo)
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

router.route('/signout')
    .get(passport.authenticate('jwt', { session: false }), signOutUser)

export default router;
