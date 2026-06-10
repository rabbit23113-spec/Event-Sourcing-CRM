import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional, IsString, IsUUID} from "class-validator";

export class UpdateNoteDto {

  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  authorId?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  clientId?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  leadId?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  dealId?: string;
}
