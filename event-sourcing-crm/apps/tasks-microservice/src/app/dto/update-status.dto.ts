import {Status} from "../entities/task.entity";

export class UpdateStatusDto {
  id: string;
  status: Status;
}
