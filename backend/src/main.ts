import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as redis from 'redis';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import * as passport from 'passport';
import { ONE_DAY_IN_MS } from './modules/constants';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Transcendence API')
    .setDescription('The Transcendence REST API description')
    .setVersion('1.0')
    .addTag('Transcendence')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  const client = redis.createClient({
    url: process.env.REDIS_URI,
    legacyMode: true,
  });
  const RedisStore = connectRedis(session);
  client.connect();
  app.use(
    session({
      cookie: {
        maxAge: ONE_DAY_IN_MS,
        secure: process.env.NODE_ENV === 'production',
      },
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({ client }),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(4000);
}
bootstrap();
