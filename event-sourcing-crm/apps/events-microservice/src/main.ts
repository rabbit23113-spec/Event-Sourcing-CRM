/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import * as constants from "./app/constants/constants";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${constants.rmq_user}:${constants.rmq_pass}@${constants.rmq_container}:${constants.rmq_port}`],
      queue: constants.rmq_queue,
      queueOptions: {
        durable: true,
      },
    }
  });
  await app.listen();
  Logger.log(
    `🚀 Application is listening on RabbitMQ`,
  );
}

bootstrap();
