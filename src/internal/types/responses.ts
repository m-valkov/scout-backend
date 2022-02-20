export interface ResponseMessage {
  status: 'OK' | 'FAIL';
  data?: ResponseData;
  error?: ErrorData;
}

export interface ErrorData {
  statusCode: number;
  description: string;

  message: string;
}

export interface ResponseData {
  message: string;
  statusCode: number;
  payload?: unknown;
}
