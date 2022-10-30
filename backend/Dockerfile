FROM node:16-alpine

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

CMD "sleep" "5" &&\
    "echo" "Postgres is up..."  &&\
    "npm" "i" &&\
    "npm" "run" "start:dev"