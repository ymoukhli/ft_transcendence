FROM node:16-alpine

RUN npm i -g pnpm
RUN mkdir /home/client

WORKDIR /home/client

CMD "pnpm" "i" && "pnpm" "run" "dev"
