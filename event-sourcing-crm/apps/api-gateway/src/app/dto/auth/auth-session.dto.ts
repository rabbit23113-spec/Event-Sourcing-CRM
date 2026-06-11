import {ApiProperty} from "@nestjs/swagger";

export class AuthSessionDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  refreshTokenHash: string;

  @ApiProperty()
  expiresAt: Date;

  @ApiProperty()
  ip: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
