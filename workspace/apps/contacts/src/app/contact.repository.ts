import * as AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

import { ContactDto } from './models/contact.dto';
import { Contact } from './models/contact.model';

@Injectable()
export class ContactRepository {
  constructor() {}

  async add2(contactDto: ContactDto) {
    let contact: Contact;
    try {
      contact = Object.assign(contact, contactDto);
      contact.contactId = uuid();
      await new AWS.DynamoDB.DocumentClient()
        .put({
          TableName: 'contactsTable3',
          Item: contact,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return contact;
  }

  async add(contactDto: ContactDto) {
    const newContact: Contact = {
      contactId: uuid(),
      address1: contactDto.address1,
      address2: contactDto.address2,
      city: contactDto.city,
      company: contactDto.company,
      emailAddress: contactDto.emailAddress,
      firstName: contactDto.firstName,
      lastName: contactDto.lastName,
      phone: contactDto.phone,
      postalCode: contactDto.postalCode,
      state: contactDto.state,
    };

    try {
      await new AWS.DynamoDB.DocumentClient()
        .put({
          TableName: process.env.ORDERS_TABLE_NAME,
          Item: newContact,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return newContact;
  }

  async retrieveContact(id: string) {
    let contact;
    try {
      const result = await new AWS.DynamoDB.DocumentClient()
        .get({
          TableName: 'contactsTable3',
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
