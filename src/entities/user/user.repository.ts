import { BaseMongoRepository } from '../../types/repository';
import { User, IUser } from './user.model';
export class UserRepository extends BaseMongoRepository<IUser> {
  constructor() {
    super(User);
  }
}
