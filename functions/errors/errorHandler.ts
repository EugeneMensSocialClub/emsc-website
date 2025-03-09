import { HttpsError } from "firebase-functions/v2/https";

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

export const errorHandler = (err: Error | AppError) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const isDevelopment = process.env.NODE_ENV === "development";

  throw new HttpsError(
    statusCode === 500 ? "internal" : "invalid-argument",
    err.message,
    isDevelopment ? { stack: err.stack, detail: err } : undefined
  );
};
