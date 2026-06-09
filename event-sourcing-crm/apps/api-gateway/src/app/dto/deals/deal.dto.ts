import {ApiProperty} from "@nestjs/swagger";

export enum Status {
  NEW = "new",
  IN_PROGRESS = "in_progress",
  WON = "won",
  LOST = "lost",
}

export class DealDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  value: number;

  @ApiProperty({ enum: Status })
  status: Status;

  @ApiProperty()
  clientId: string;

  @ApiProperty()
  ownerId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
