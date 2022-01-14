import { BaseError } from '../exceptions/BaseError';

export interface Sender {
  send(err: BaseError): void;
}
