import {Role} from "./create-user.dto";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({uniqueItems: true})
  email: string;

  @ApiProperty()
  passwordHash: string;

  @ApiProperty({enum: Role})
  role: Role;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
