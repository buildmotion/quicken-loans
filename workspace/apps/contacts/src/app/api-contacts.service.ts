import { Injectable } from '@nestjs/common';
import { ContactDto } from './models/contact.dto';
import { Contact } from './models/contact.model';
import { ContactRepository } from './contact.repository';
// import { Contact, ContactDto } from '@valencia/quicken/domain/common';

@Injectable()
export class ApiContactsService {
  constructor(private repository: ContactRepository) {}

  add(contactDto: ContactDto): Contact | PromiseLike<Contact> {
    /**
     * 1. VALIDATE INPUT(S)
     * 2. PROCESS ANY BUSINESS RULES;
     * 3. SET UUID FOR DTO
     * 4. CALL REPOSITORY
     * 5. SETUP CONNECTION TO DYNAMODB;
     * 6. EXECUTE DATA TRANSACTION/OPERATION
     * 7. GET RESULT;
     * 8. RETRIEVE NEW ITEM USING UUID
     */
    return this.repository.add(contactDto);
  }
}
