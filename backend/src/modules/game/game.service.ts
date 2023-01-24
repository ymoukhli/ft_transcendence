import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { parse } from 'cookie';
import { WsException } from '@nestjs/websockets';
import { IGame, IPlayer } from './interfaces';
import { randomUUID } from 'crypto';
import Game from './classes/game';

const users: IPlayer[] = [
  { username: 'vmod', id: 'vmod' },
  { username: 'qbeast', id: 'qbeast' },
  { username: 'ymoukhli', id: 'ymoukhli' },
];

@Injectable()
export class GameService {
  private games: IGame[] = [];

  async getUserFromSocket(socket: Socket) {
    const cookie = socket.handshake.headers.cookie;
    const { Authentication: authenticationToken } = parse(cookie);
    // @TODO: get user from auth service
    const user = users.find((user) => user.username == authenticationToken);
    if (!user) {
      throw new WsException('Invalid credentials.');
    }
    return user;
  }

  create(game: Omit<IGame, 'id'>) {
    const gameId = randomUUID();
    this.games.push(new Game(gameId, game.players));
    return { gameId };
  }

  findAll() {
    return this.games;
  }

  findOne(id: string) {
    return this.games.find((game) => game.id == id);
  }
}
