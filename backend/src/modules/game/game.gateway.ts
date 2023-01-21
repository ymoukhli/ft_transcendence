import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameSevice: GameService) {}

  async handleConnection(@ConnectedSocket() client: Socket) {
    await this.gameSevice.getUserFromSocket(client);
    client.join('gameroom');
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    // disconnect from rooms
    client.leave('gameroom');
  }

  @SubscribeMessage('send_message')
  async listenForMessages(
    @MessageBody() content: string,
    @ConnectedSocket() client: Socket,
  ) {
    const author = await this.gameSevice.getUserFromSocket(client);

    this.server.sockets.emit('receive_message', {
      content,
      author,
    });
  }
}
