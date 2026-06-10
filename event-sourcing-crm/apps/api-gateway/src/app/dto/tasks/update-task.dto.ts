import {Priority, Status} from "./task.dto";


export class UpdateTaskDto {
  id: string;
  title?: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  dueDate?: Date;
  assigneeId?: string;
  relatedLeadId?: string;
  relatedClientId?: string;
  relatedDealId?: string;
}
