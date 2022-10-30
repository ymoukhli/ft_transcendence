import { User } from "../users/entities/user.entity";

export interface AuthenticationProvider {
  validateUser(userDetails: User);
  findUser(username: string): Promise<User> | undefined;
}
