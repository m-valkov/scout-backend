export interface ResponseMessage {
  status: 'OK' | 'FAIL';
  data?: object;
  error?: ErrorData;
}

export interface ErrorData {
  statusCode: number;
  description: string;

  message: string;
}
