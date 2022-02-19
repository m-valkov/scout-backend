import { IUser } from './user.model';

export const isEmpty = (payload: unknown): boolean => {
  if (payload && payload !== {}) {
    return false;
  }
  return true;
};

export const isUser = (payload: unknown): payload is IUser => {
  return Object.prototype.hasOwnProperty.call(payload, 'name');
};
