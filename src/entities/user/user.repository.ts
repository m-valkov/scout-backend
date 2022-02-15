import { BaseRepository } from '../../types/repository';
import { User, IUser } from './user.model';
export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User);
  }
}
