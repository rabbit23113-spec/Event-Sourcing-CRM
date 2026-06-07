import {Action, Domain} from "./create-event.dto";

class EventDto {
  id: string;
  domain: Domain;
  action: Action;
  actorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export default EventDto;
