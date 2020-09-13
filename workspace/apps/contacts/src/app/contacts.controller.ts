import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';

import { ApiContactsService } from './api-contacts.service';
import { ContactDto } from './models/contact.dto';
import { Contact } from './models/contact.model';
import { ApiResponse } from '@nestjs/swagger';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ApiContactsService) {}

  @ApiResponse({ type: 'ContactDto', status: HttpStatus.CREATED, description: 'Create new contact.' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Error while processing request to create new contact.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Failed to create contact.' })
  @Post('add')
  async createContact(@Body() contactDto: ContactDto, @Res() response: any) {
    try {
      const newContact: Contact = await this.contactService.add(contactDto);
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
        message: `Error while attempting to create new contact. ${JSON.stringify(error)}`,
        messages: [{ code: 'CONTACT_ERROR', message: 'Unexpected error while attempting to create new contact', messageType: 'Error' }],
      });
    }
  }

  @Get(':contactId')
  async retrieveContact(@Param('contactId') id: string, @Res() response: any) {
    try {
      const contact: any = await this.contactService.retrieveContactById(id);
      if (contact && this.contactService) {
        return response.status(HttpStatus.OK).json({
          isSuccess: true,
          data: contact,
          message: 'Successfully retrieved contact.',
        });
      } else {
        return response.status(HttpStatus.BAD_REQUEST).json({
          isSuccess: false,
          data: null,
          message: 'Failed to retrieve contact.',
          messages: [{ code: 'CONTACT_ERROR', message: 'Unexpected error while attempting to retrieve contact', messageType: 'Error' }],
        });
      }
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        isSuccess: false,
        message: `Error while attempting to retrieve contact. Error: ${JSON.stringify(error)}`,
        messages: [{ code: 'CONTACT_ERROR', message: 'Unexpected error while attempting to retrieve contact', messageType: 'Error' }],
      });
    }
  }

  @ApiResponse({ status: HttpStatus.OK, description: 'Retrieve all available contact items.' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Failed to retrieve contacts. See error messages for more details' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Unexpected server error while attempting to process request to retrieve contacts.',
  })
  @Get()
  async retrieveAllContacts(@Res() response: any) {
    try {
      const contacts: any = await this.contactService.retrieveAllContacts();
      if (contacts && this.contactService) {
        return response.status(HttpStatus.OK).json({
          isSuccess: true,
          data: contacts,
          message: 'Successfully retrieved contacts.',
        });
      } else {
        return response.status(HttpStatus.BAD_REQUEST).json({
          isSuccess: false,
          data: null,
          message: 'Failed to retrieve contacts.',
          messages: [{ code: 'CONTACT_FAILURE', message: 'Unexpected error while attempting to retrieve contact', messageType: 'Error' }],
        });
      }
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        isSuccess: false,
        message: `Error while attempting to retrieve contacts. Error: ${JSON.stringify(error)}`,
        messages: [{ code: 'CONTACT_ERROR', message: 'Unexpected error while attempting to retrieve contacts', messageType: 'Error' }],
      });
    }
  }

  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully removed specified contact.' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Failed to remove contact. See error messages for more details.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Unexpected server error while attempting to delete contact item.' })
  @Delete(':contactId')
  async removeContact(@Param('contactId') id: string, @Res() response: any) {
    try {
      const isRemoved: boolean = await this.contactService.removeContact(id);
      if (isRemoved && this.contactService) {
        return response.status(HttpStatus.OK).json({
          isSuccess: true,
          data: isRemoved,
          message: 'Successfully removed contact.',
        });
      } else {
        return response.status(HttpStatus.BAD_REQUEST).json({
          isSuccess: false,
          data: null,
          message: 'Failed to removed contact.',
          messages: [{ code: 'CONTACT_FAILURE', message: 'Unexpected error while attempting to remove contact', messageType: 'Error' }],
        });
      }
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        isSuccess: false,
        message: `Error while attempting to remove contacts. Error: ${JSON.stringify(error)}`,
        messages: [{ code: 'CONTACT_ERROR', message: 'Unexpected error while attempting to remove contact', messageType: 'Error' }],
      });
    }
  }

  private addCorsToHeader(response: any) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  }
}
