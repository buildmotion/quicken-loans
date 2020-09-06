import { Module, Global } from '@nestjs/common';
import { ApiContactsService } from './api-contacts.service';

@Global()
@Module({
  controllers: [],
  providers: [ApiContactsService],
  exports: [ApiContactsService],
})
export class ApiContactsModule {}
