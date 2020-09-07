import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
// import { ApiContactsService } from '@valencia/api/contacts';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // ApiContactsService
  ],
})
export class AppModule {}
