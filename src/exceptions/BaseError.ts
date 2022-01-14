export class BaseError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public description: string;
  constructor(message: string, statusCode: number, isOperational: boolean, description: string) {
    super(description);

    this.message = message;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.description = description;
    Error.captureStackTrace(this);
  }
}
