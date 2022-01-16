export class BaseError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public description: string;
  constructor(name: string, message: string, statusCode: number, isOperational: boolean, description: string) {
    super(description);
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.description = description;
  }
}
