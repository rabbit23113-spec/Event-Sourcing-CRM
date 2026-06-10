import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional, IsString, IsUUID} from "class-validator";

export class CreateNoteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsUUID()
  authorId: string;

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
