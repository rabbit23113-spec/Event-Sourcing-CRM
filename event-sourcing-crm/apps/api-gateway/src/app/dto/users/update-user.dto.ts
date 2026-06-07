import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString, IsUUID, Length} from "class-validator";

export class UpdateUserDto {
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Length(8, 48)
  password: string;
}
