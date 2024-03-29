import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  HttpStatus,
  Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FortyTwoAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  @Get('42/login')
  @UseGuards(FortyTwoAuthGuard)
  login() {
    return ;
  }

  @Get('42/callback')
  @Redirect(process.env.BASE_URL, HttpStatus.FOUND)
  @UseGuards(FortyTwoAuthGuard)
  redirect() {
    return ;
  }

  @Post('42/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout((err) => {
      if (err) {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send('Something went wrong during logout operation');
      }
      res.status(HttpStatus.NO_CONTENT).send('User logged out successfully');
    });
  }
}
