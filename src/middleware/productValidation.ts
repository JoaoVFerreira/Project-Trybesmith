import { Request, Response, NextFunction } from 'express';
import productSchema from '../schemas/productsSchema';

const productsValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    const handleError = { status: Number(code), message };

    return next(handleError);
  }

  return next();
};

export default productsValidation;