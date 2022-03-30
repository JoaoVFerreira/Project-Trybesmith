import { Router } from 'express';

import UsersController from '../controller/users';

import usersValidation from '../middleware/usersValidation';

const router = Router();

const usersController = new UsersController();

router.post('/', usersValidation, usersController.newUser);

export default router;