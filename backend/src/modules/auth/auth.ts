import { User } from "../users/entities/user.entity";

export interface AuthenticationProvider {
  validateUser(userDetails: User);
  findUser(login: string): Promise<User> | undefined;
}
