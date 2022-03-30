import { Request, Response, NextFunction } from 'express';
import usersSchema from '../schemas/usersSchema';

const usersValidation = async (req: Request, _res: Response, next: NextFunction) => {
  const { error } = usersSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    const handleError = { status: Number(code), message };

    return next(handleError);
  }

  return next();
};

export default usersValidation;