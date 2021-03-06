import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

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
  }
}
