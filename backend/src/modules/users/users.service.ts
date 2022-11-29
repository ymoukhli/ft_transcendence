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

  private readonly users = [
    {
      id: "1",
      username: "user1",
      email: "user@user.com",
      password: "password1",
      displayedName: "userOne",
      firstName: "user",
      lastName: "one",
      imageUrl: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png",
      bio: "user one bio",
      createdAt: "2022-11-29T23:01:02.662Z",
      updatedAt: "2022-11-29T23:01:02.662Z"
    },
    {
      id: "2",
      username: "user2",
      email: "user2@user.com",
      password: "password2",
      displayedName: "userTwo",
      firstName: "user",
      lastName: "two",
      imageUrl: "https://media.istockphoto.com/id/485575238/photo/portrait-of-cute-little-kitten-outdoors-in-flowers.jpg?s=1024x1024&w=is&k=20&c=NKdjWei5tLKHeiISrfvNF4Coo3OsjQvcyZkxAPnQuhE=",
      bio: "user one bio",
      createdAt: "2022-11-29T23:01:02.662Z",
      updatedAt: "2022-11-29T23:01:02.662Z"
    }
  ]

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find(user => user.username === username);
  }

  
  create(createUserDto: User) {
    return this.usersRepository.insert(createUserDto);
  }

  findOneByLogin(login: string) {
    return this.usersRepository.findOne({
      where: {
        username: login,
      },
    })
  }
}
