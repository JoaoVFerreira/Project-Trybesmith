import { NextFunction, Request, Response } from 'express';
import generateToken from '../helpers/generateToken';
import UsersService from '../service/users';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  newUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      await this.usersService.newUser(req.body);
      const token = generateToken();
      return res.status(201).json({ token });
    } catch (e) {
      next(e);
    }
  };
}