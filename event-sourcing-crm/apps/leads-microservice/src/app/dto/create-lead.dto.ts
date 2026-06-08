import {Status} from "../entities/lead.entity";

export class CreateLeadDto {
  name: string;
  email: string;
  phone: string;
  source: string;
  status: Status;
  ownerId: string;
}
