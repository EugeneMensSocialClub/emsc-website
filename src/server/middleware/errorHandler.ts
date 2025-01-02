import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational: boolean = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;

  const isDevelopment = process.env.NODE_ENV === "development";

  res.status(statusCode).json({
    status: "error",
    message: err.message,
    ...(isDevelopment && { stack: err.stack }),
    ...(isDevelopment && { detail: err }),
  });
};
