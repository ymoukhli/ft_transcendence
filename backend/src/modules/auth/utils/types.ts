import { User } from '../../users/entities/user.entity';

export type Done = (err: Error, user: User) => void;
