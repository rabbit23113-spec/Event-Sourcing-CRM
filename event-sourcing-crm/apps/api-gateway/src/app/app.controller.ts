import {Controller, Get, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {CurrentUser} from "./decorators/current-user.decorator";
import {JwtGuard} from "./guards/jwt/jwt.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtGuard)
  @Get()
  getData(@CurrentUser() user: any
    ) {
    console.log(user)
    return this.appService.getData();
  }
}
