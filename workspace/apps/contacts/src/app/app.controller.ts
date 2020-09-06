import { Controller, Get } from '@nestjs/common';

import { ApiContactsService } from '@valencia/api/contacts';

@Controller()
export class AppController {
  constructor(private readonly contactService: ApiContactsService) {}

  @Get()
  getData() {
    return this.contactService.getData();
  }
}
