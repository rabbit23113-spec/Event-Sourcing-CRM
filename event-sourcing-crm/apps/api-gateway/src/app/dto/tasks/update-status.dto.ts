import {Status} from "./task.dto";
import {ApiProperty} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsUUID} from "class-validator";

export class UpdateStatusDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({ enum: Status })
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
}
