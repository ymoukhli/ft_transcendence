FROM node:16-alpine

RUN npm i -g pnpm
RUN mkdir /home/client

WORKDIR /home/client

CMD "sleep" "5" &&\
    "echo" "client is up..."  &&\
    "pnpm" "i" &&\
    "pnpm" "run" "dev"