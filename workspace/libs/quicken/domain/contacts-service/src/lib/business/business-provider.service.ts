import { Injectable, Inject } from '@angular/core';
import { HttpContactsRepositoryService } from './http-contacts-repository.service';
import { ConfigurationService } from '@valencia/configuration';
import { LoggingService } from '@valencia/logging';
import { ServiceBase } from '@valencia/foundation';
import { ApiResponse } from '@valencia/common';
import { Observable } from 'rxjs';
import { IBusinessProviderService } from './i-business-provider.service';
import { AddContactAction } from './actions/add-contact.action';
import { ContactDto } from '@valencia/quicken/domain/common';

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

  // removeAlert<T>(alert: AlertItem): Observable<ApiResponse<T>> {
  //   const action = new RemoveAlertAction<T>(alert);
  //   action.Do(this);
  //   return action.response;
  // }

  add<T>(contact: ContactDto): Observable<ApiResponse<T>> {
    const action = new AddContactAction<T>(contact);
    action.Do(this);
    return action.response;
  }
}
