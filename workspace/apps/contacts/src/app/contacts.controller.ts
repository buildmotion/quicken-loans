import { Body, Controller, Delete, Get, Patch, Post, Put, Res, HttpStatus } from '@nestjs/common';

import { ApiContactsService } from './api-contacts.service';
import { ContactDto } from './models/contact.dto';
import { Contact } from './models/contact.model';
// import { ContactDto, Contact } from '@valencia/quicken/domain/common';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ApiContactsService) {}

  @Post('/add')
  async createOrder(@Body() contactDto: ContactDto, @Res() response: any) {
    try {
      const newContact: Contact = await this.contactService.add(contactDto);

      // const newContact = {
      //   contactId: '1234',
      //   options: [],
      //   address1: '1234 MAIN ST',
      //   address2: 'Apt #1',
      //   city: 'Denver',
      //   company: 'Build Motion',
      //   emailAddress: 'matt@buildmotion.com',
      //   firstName: 'Matt',
      //   lastName: 'Vaughn',
      //   phone: '303.356.6273',
      //   postalCode: '80504',
      //   state: 'Colorado',
      // };

      this.addCorsToHeader(response);
      if (newContact && this.contactService) {
        return response.status(HttpStatus.CREATED).json({
          isSuccess: true,
          data: newContact,
          message: 'Successfully created new contact.',
        });
      } else {
        return response.status(HttpStatus.BAD_REQUEST).json({
          isSuccess: false,
          message: 'Failed to create new contact.',
          messages: [{ code: 'CONTACT_FAILURE', message: 'Failed to create new contact', messageType: 'Error' }],
        });
      }
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        isSuccess: false,
        message: 'Error while attempting to create new contact.',
        messages: [{ code: 'CONTACT_FAILURE', message: 'Unexpected error while attempting to create new contact', messageType: 'Error' }],
      });
    }
  }

  private addCorsToHeader(response: any) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  }
}
