import { Module } from '@nestjs/common';

import { ApiContactsService } from './api-contacts.service';
import { AppController } from './app.controller';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [],
  controllers: [AppController, ContactsController],
  providers: [ApiContactsService],
})
export class AppModule {}
