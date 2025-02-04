/**
 *
 */
export class AppError extends Error {
    /** */
    constructor(statusCode, message, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
export const errorHandler = (err, _req, res) => {
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const isDevelopment = process.env.NODE_ENV === "development";
    res.status(statusCode).json({
        status: "error",
        message: err.message,
        ...(isDevelopment && { stack: err.stack }),
        ...(isDevelopment && { detail: err }),
    });
};
//# sourceMappingURL=errorHandler.js.map