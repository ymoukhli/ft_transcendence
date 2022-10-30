import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { Done } from './types';
import { AuthenticationProvider } from '../auth';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authService: AuthenticationProvider,
  ) {
    super();
  }
  serializeUser(user: User, done: Done) {
    done(null, user);
  }

  async deserializeUser(user: User, done: Done) {
    const userDB = await this.authService.findUser(user.username);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
