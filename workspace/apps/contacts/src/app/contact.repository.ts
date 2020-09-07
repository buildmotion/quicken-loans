import * as AWS from 'aws-sdk';
import { InternalServerErrorException, NotFoundException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ContactDto } from './models/contact.dto';
import { Contact } from './models/contact.model';

@Injectable()
export class ContactRepository {
  constructor() {}

  async add(contactDto: ContactDto): Contact {
    let contact: Contact;
    try {
      contact = Object.assign(contact, contactDto);
      contact.contactId = uuid();
      await new AWS.DynamoDB.DocumentClient()
        .put({
          TableName: 'contactsTable2',
          Item: contact,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return contact;
  }

  async retrieveContact(id: string) {
    let contact;
    try {
      const result = await new AWS.DynamoDB.DocumentClient()
        .get({
          TableName: 'contactsTable2',
          Key: { id },
        })
        .promise();

      contact = result.Item;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!contact) {
      throw new NotFoundException(`Order with ID "${id}" not found`);
    }

    return contact;
  }
}
