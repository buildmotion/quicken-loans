import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiContactsService {
  constructor() {}

  getData() {
    return { message: 'Welcome to contacts...api library service!' };
  }
}
