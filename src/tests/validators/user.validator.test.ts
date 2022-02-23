import { isValid } from '../../entities/user/user.validators';

describe('User validator', () => {
  it('should return false if empty payload', () => {
    const payload: unknown = {};
    expect(isValid(payload)).toBe(false);
  });
  it('should return false if payload type not is UserParams', () => {
    const payload: unknown = {
      name: 'mike'
    };
    expect(isValid(payload)).toBe(false);
  });
  it('should return false if payload is not object', () => {
    const payload: unknown = 2;
    expect(isValid(payload)).toBe(false);
  });
  it('should return false if name to short', () => {
    const payload: unknown = {
      name: '',
      password: 'password_is_good'
    };
    expect(isValid(payload)).toBe(false);
  });
  it('should return false if name to long', () => {
    const payload: unknown = {
      name: '1234567890123456789012345678901234567',
      password: 'password_is_good'
    };
    expect(isValid(payload)).toBe(false);
  });
  it('should return false if password to short', () => {
    const payload: unknown = {
      name: '123',
      password: 'pass'
    };
    expect(isValid(payload)).toBe(false);
  });
  it('should return false if password to long', () => {
    const payload: unknown = {
      name: '123',
      password: '123456789012345678901234567890123456712345678901234567890123456789012345671234567890123456789012345678901234567123456789012345678901234567890123456712345678901234567890123456789012345671234567890123456789012345678901234567'
    };
    expect(isValid(payload)).toBe(false);
  });
  it('should return false if payload have to much props', () => {
    const payload: unknown = {
      name: '123',
      password: '1234567890123456789012345678901',
      injetion: 'ha ha'
    };
    expect(isValid(payload)).toBe(false);
  });
  it('should return true if payload is valid', () => {
    const payload: unknown = {
      name: '123',
      password: '1234567890123456789012345678901',
    };
    expect(isValid(payload)).toBe(true);
  });
});