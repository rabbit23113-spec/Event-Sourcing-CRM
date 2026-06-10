import {ApiProperty} from "@nestjs/swagger";

export class NoteDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty()
  clientId: string;

  @ApiProperty()
  leadId: string;

  @ApiProperty()
  dealId: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
