import { UserParams } from './user.model';
import { isObject } from '../../internal/helpers/Utils';
import { Config } from '../../internal/providers/Config';

const _c = new Config().EntityConfig;

export const hasValidName = (name: unknown): name is UserParams['name'] => {
  return (
    typeof name === 'string'
    && name.length >= _c.USER_LOGIN_MIN_LENGTH
    && name.length <= _c.USER_LOGIN_MAX_LENGTH
  );
};

export const hasValidPassword = (password: unknown): password is UserParams['password'] => {
  return (
    typeof password === 'string'
    && password.length >= _c.USER_PASSWORD_MIN_LENGTH
    && password.length <= _c.USER_PASSWORD_MAX_LENGTH
  );
};

export const isValid = (payload: unknown): payload is UserParams => {
  return (
    isObject(payload)
    && hasValidName(payload['name'])
    && hasValidPassword(payload['password'])
    && Object.keys(payload).length === 2
  );
};
