import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as constants from "./constants/constants"
import Event from "./entities/event.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: constants.type,
    host: constants.host,
    port: constants.port,
    username: constants.user,
    password: constants.password,
    database: constants.name,
    synchronize: true,
    entities: [Event]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
