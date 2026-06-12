import {Module} from '@nestjs/common';
import {DealsService} from './deals.service';
import {DealsController} from './deals.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import * as constants from "../constants/constants";

@Module({
  imports: [
    ClientsModule.register([{
      name: constants.RMQ_DEALS_CLIENT_ID,
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${constants.RMQ_USER}:${constants.RMQ_PASS}@${constants.RMQ_HOST}:${constants.RMQ_PORT}`],
        queue: constants.RMQ_DEALS_QUEUE,
        queueOptions: {
          durable: true,
        },
      }
    }]),
  ],
  controllers: [DealsController],
  providers: [DealsService],
})
export class DealsModule {
}
