import { Injectable } from '@nestjs/common';
import { ContactDto } from './models/contact.dto';
import { Contact } from './models/contact.model';
// import { Contact, ContactDto } from '@valencia/quicken/domain/common';

@Injectable()
export class ApiContactsService {
  constructor() {}

  add(contactDto: ContactDto): Contact | PromiseLike<Contact> {
    /**
     * 1. VALIDATE INPUT(S)
     * 2. PROCESS ANY BUSINESS RULES;
     * 3. DETERMINE STATE
     * // SET UUID FOR DTO
     * 4. CALL REPOSITORY
     * 5. SETUP CONNECTION TO DYNAMODB;
     * 6. EXECUTE DATA TRANSACTION/OPERATION
     * 7. GET RESULT;
     * 8. RETRIEVE NEW ITEM USING UUID
     */
    const contact = new Contact();
    contact.address1 = '1234 MAIN ST';
    contact.address2 = 'Apt #1';
    contact.city = 'Denver';
    contact.company = 'Build Motion';
    contact.emailAddress = 'matt@buildmotion.com';
    contact.firstName = 'Matt';
    contact.lastName = 'Vaughn';
    contact.phone = '303.356.6273';
    contact.postalCode = '80504';
    contact.state = 'Colorado';

    return contact;
  }
}
