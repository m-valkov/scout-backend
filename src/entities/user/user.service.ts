import { IUser } from './user.model';
import { UserRepository } from './user.repository';

const repository = new UserRepository();

export const createNewUser = (user: IUser) => {
  repository.create(user);
};
