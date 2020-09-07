import { Injectable, Inject } from '@angular/core';
import { HttpContactsRepositoryService } from './http-contacts-repository.service';
import { ConfigurationService } from '@valencia/configuration';
import { LoggingService } from '@valencia/logging';
import { ServiceBase } from '@valencia/foundation';
import { ApiResponse } from '@valencia/common';
import { Observable } from 'rxjs';
import { IBusinessProviderService } from './i-business-provider.service';
import { AddContactAction } from './actions/add-contact.action';

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

  add<T>(): Observable<ApiResponse<T>> {
    const action = new AddContactAction<T>();
    action.Do(this);
    return action.response;
  }
}
