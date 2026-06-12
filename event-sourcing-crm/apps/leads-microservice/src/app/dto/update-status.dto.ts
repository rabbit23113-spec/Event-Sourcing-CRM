import {Status} from "../entities/lead.entity";

export class UpdateStatusDto {
  id: string;
  status: Status;
}
