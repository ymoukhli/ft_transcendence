import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: User) {
    return this.usersRepository.insert(createUserDto);
  }

  findOneByLogin(login: string) {
    return this.usersRepository.findOne({
      where: {
        login,
      },
    })
  }
}
