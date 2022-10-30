import { Strategy } from 'passport-42';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationProvider } from '../auth';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authService: AuthenticationProvider,
  ) {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ['public'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const login = profile?._json['login'].toLowerCase();
    const firstName = profile?._json['first_name'].toLowerCase();
    const lastName = profile?._json['last_name'].toLowerCase();
    const imageUrl = profile?._json['image_url'];
    const userDetails = {
      username: login,
      firstName,
      lastName,
      imageUrl,
    };
    return this.authService.validateUser(userDetails as User);
  }
}
