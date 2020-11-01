import { Router } from 'express';
const router = Router();

router.route('/task')
    .get()
    .post()

router.route('/task/:id')
    .get()
    .put()
    .delete()

export default router;