import { Injectable, Inject } from '@angular/core';
import { HttpContactsRepositoryService } from './http-contacts-repository.service';
import { ConfigurationService } from '@valencia/configuration';
import { LoggingService } from '@valencia/logging';
import { ServiceBase } from '@valencia/foundation';
import { ApiResponse } from '@valencia/common';
import { Observable } from 'rxjs';
import { IBusinessProviderService } from './i-business-provider.service';
import { AddContactAction } from './actions/add-contact.action';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { Contact, ContactDto } from '@valencia/quicken/domain/common';
import { RetrieveContactsAction } from './actions/retrieve-contacts.action';
import { RemoveContactAction } from './actions/remove-contact.action';

@Injectable({
  providedIn: 'root',
})
export class BusinessProviderService extends ServiceBase implements IBusinessProviderService {
  constructor(
    @Inject(HttpContactsRepositoryService) public apiService: HttpContactsRepositoryService,
    public configService: ConfigurationService,
    loggingService: LoggingService
  ) {
    super('BusinessProviderService', loggingService);
  }

  add<T>(contact: ContactDto): Observable<ApiResponse<T>> {
    const action = new AddContactAction<T>(contact);
    action.Do(this);
    return action.response;
  }

  removeContact<T>(contact: Contact): Observable<ApiResponse<T>> {
    const action = new RemoveContactAction<T>(contact);
    action.Do(this);
    return action.response;
  }

  retrieveContacts<T>(): Observable<ApiResponse<T>> {
    const action = new RetrieveContactsAction<T>();
    action.Do(this);
    return action.response;
  }
}
