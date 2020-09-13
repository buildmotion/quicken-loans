import { TestBed, inject } from '@angular/core/testing';

import { ActionResult, Action } from '@valencia/actions';
import { LoggingService, LoggingServiceMock } from '@valencia/logging';
import { ServiceContext } from '@valencia/rules-engine';

import { BusinessProviderService } from '../business-provider.service';
import { ConfigurationService } from '@valencia/configuration';
import { AddContactAction } from './add-contact.action';
import { Contact, ContactDto } from '@valencia/quicken/domain/common';
import { BusinessProviderServiceMock } from '../business-provider.service.mock';
import { HttpContactsRepositoryService } from '../http-contacts-repository.service';
import { HttpContactsRepositoryServiceMock } from '../http-contacts-repository.service.mock';

describe('VerifyAccountsAction', () => {
  beforeEach(() => {
    this.fixture = new AddContactAction<Contact>(new ContactDto());
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BusinessProviderService,
          useClass: BusinessProviderServiceMock,
        },
        {
          provide: LoggingService,
          useClass: LoggingServiceMock,
        },
        {
          provide: HttpContactsRepositoryService,
          useClass: HttpContactsRepositoryServiceMock,
        },
        {
          provide: ConfigurationService,
          useClass: ConfigurationService,
        },
      ],
    }).compileComponents();
  });

  it('should create an instance', () => {
    expect(new AddContactAction(new ContactDto())).toBeTruthy();
  });
});
