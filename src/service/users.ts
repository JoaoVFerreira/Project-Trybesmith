import IUser from '../interface/users';
import connection from '../models/connection';
import UsersModel from '../models/users';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async newUser(user: IUser): Promise<void> {
    return this.model.newUser(user);
  }
}