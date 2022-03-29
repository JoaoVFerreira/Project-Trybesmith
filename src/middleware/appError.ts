import { NextFunction, Request, Response } from 'express';

export default class AppError {
  /* public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  } */

  public static defaultError(err: Error, req: Request, res: Response, _next: NextFunction) {
    return res.status(500).json({ message: err.message });
  }
}
