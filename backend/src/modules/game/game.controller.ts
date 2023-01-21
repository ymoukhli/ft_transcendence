import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game-dto';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }
}
