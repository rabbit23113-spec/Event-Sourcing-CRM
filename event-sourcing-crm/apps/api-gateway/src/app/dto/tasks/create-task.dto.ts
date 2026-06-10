import {Priority} from "./task.dto";

export class CreateTaskDto {
  title: string;
  description: string;
  priority: Priority;
  dueDate?: Date;
  assigneeId: string;
  relatedLeadId?: string;
  relatedClientId?: string;
  relatedDealId?: string;
}
