import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import * as constants from "../constants/constants";

@Module({
  imports: [
    ClientsModule.register([{
      name: constants.RMQ_LEADS_CLIENT_ID,
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${constants.RMQ_USER}:${constants.RMQ_PASS}@${constants.RMQ_HOST}:${constants.RMQ_PORT}`],
        queue: constants.RMQ_LEADS_QUEUE,
        queueOptions: {
          durable: true,
        },
      }
    }]),
  ],
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}
