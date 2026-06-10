export class CreateNoteDto {
  content: string;
  authorId: string;
  clientId?: string;
  leadId?: string;
  dealId?: string;
}
