import {ApiProperty} from "@nestjs/swagger";
import {IsJWT} from "class-validator";

export class BodyAccessTokenDto {
  @ApiProperty()
  @IsJWT()
  accessToken: string;
}
