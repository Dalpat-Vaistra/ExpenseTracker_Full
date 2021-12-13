import { Request, Response, NextFunction } from "express";

const errorHandler = (
  error: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message = error.message;
  return res.status(status).json({ Error: message });
};

export default errorHandler;
