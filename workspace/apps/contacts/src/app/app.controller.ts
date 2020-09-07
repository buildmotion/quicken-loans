import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';

// import { ApiContactsService } from '@valencia/api/contacts';

@Controller()
export class AppController {
  constructor() // private readonly contactService: ApiContactsService
  {}

  @Get()
  getData() {
    const result = `hello from the app.controller (NestJS app)`;
    const response = {
      data: result,
      isSuccess: true,
      message: `Successfully created new contact.`,
    };
    return response;
    // return this.contactService.getData();
  }
}
