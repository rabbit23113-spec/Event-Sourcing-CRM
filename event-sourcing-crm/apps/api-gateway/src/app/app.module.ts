import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EventsModule} from './events/events.module';
import { UsersModule } from './users/users.module';
import { LeadsModule } from './leads/leads.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [EventsModule, UsersModule, LeadsModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
