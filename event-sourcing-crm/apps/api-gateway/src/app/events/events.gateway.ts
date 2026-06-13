import {WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server} from "socket.io";
import {EventDto} from "../dto/events/event.dto";

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server

  async handleMessage(event: EventDto) {
    this.server.emit("events:created", event);
  }
}
