import { HttpModule, Module } from '@nestjs/common';

import { ApiContactsService } from './api-contacts.service';
import { AppController } from './app.controller';
import { ContactsController } from './contacts.controller';
import { ContactRepository } from './contact.repository';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ContactsController],
  providers: [ApiContactsService, ContactRepository],
})
export class AppModule {}
