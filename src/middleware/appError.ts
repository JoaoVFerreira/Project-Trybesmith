import { NextFunction, Request, Response } from 'express';

interface CustomError {
  status?: number,
  message: string, 
}

function appError(err: CustomError, _req: Request, res: Response, _next: NextFunction) {
  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }
  return res.status(500).json({ message: err.message });
}

export default appError;
