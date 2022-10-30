import { Injectable } from '@nestjs/common';
import { AuthenticationProvider } from './auth';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService implements AuthenticationProvider {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(userDetails: User) {
    const { username } = userDetails;
    const user = await this.usersService.findOneByLogin(username);
    if (user) return user;
    return this.usersService.create(userDetails);
  }

  findUser(username: string): Promise<User> | undefined {
    return this.usersService.findOneByLogin(username);
  }
}
