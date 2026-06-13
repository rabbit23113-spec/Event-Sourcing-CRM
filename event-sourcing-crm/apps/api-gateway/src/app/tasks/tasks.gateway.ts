import {WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import { Server } from "socket.io";
import {TaskDto} from "../dto/tasks/task.dto";

@WebSocketGateway({ path: "/tasks" })
export class TasksGateway {
  @WebSocketServer()
  server: Server

  async emitTask(task: TaskDto) {
    this.server.emit("tasks:created", task);
  }
}
