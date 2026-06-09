import {ApiProperty} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID} from "class-validator";
import {Status} from "./deal.dto";

export class CreateDealDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  value: number;

  @ApiProperty({ enum: Status })
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  ownerId: string;
}
