import { IUser } from './user.model';
import { UserRepository } from './user.repository';

const repository = new UserRepository();

export const createNewUser = async (user: IUser): Promise<void | Error> => {
  return repository.create(user).catch(err => err);
};
