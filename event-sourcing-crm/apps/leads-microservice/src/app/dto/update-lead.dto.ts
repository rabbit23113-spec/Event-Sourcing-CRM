import {Status} from "../entities/lead.entity";

export class UpdateLeadDto {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  status?: Status;
  ownerId?: string;
}
