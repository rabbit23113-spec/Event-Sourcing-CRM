import {ApiProperty} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID} from "class-validator";
import {Status} from "./deal.dto";

export class UpdateDealDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  value?: number;

  @ApiProperty({enum: Status})
  @IsNotEmpty()
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  @IsOptional()
  clientId?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  @IsOptional()
  ownerId?: string;
}
