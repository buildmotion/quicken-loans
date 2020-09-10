import * as AWS from 'aws-sdk';

import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

import { ContactDto } from './models/contact.dto';
import { Contact } from './models/contact.model';
import { Guid } from 'guid-typescript';

@Injectable()
export class ContactRepository {
  constructor() {}

  async add(contactDto: ContactDto) {
    const newContact: Contact = {
      contactId: Guid.create().toString(),
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
          TableName: 'ContactsTable-dev',
          Item: newContact,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return newContact;
  }

  async removeContact(id: string) {
    let isRemoved;
    try {
      const result = await new AWS.DynamoDB.DocumentClient()
        .delete({
          TableName: 'ContactsTable-dev',
          Key: { contactId: id },
        })
        .promise();

      isRemoved = result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!isRemoved) {
      throw new NotFoundException(`Contact not found for ID: ${id}.`);
    }

    return isRemoved;
  }

  /**
   * Use to retrieve a [contact] item from the data store.
   *
   * @param id The unique identifier/primary key for the [contact] item.
   */
  async retrieveContact(id: string) {
    let contact;
    try {
      const result = await new AWS.DynamoDB.DocumentClient()
        .get({
          TableName: 'ContactsTable-dev',
          Key: { contactId: id },
        })
        .promise();

      contact = result.Item;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!contact) {
      throw new NotFoundException(`Contact not found for ID: ${id}.`);
    }

    return contact;
  }

  async retrieveAllContacts() {
    let contacts = [];
    try {
      const result = await new AWS.DynamoDB.DocumentClient()
        .scan({
          TableName: 'ContactsTable-dev',
        })
        .promise();

      contacts = result.Items;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!contacts) {
      throw new NotFoundException(`Unable to find any contacts.`);
    }
    return contacts;
  }
}
