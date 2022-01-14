import { Response } from 'express';
import { BaseError } from '../exceptions/BaseError';
import { Sender } from '../interfaces/sender';

export class ClientSender implements Sender {
  response: Response;
  constructor(response: Response) {
    this.response = response;
  }
  public send(err: BaseError): void {
    const errorBody = {
      statusCode: err.statusCode,
      description: err.description,
      message: err.message,
    };
    this.response.status(err.statusCode).json({ error: errorBody });
  }
}
