import { Injectable, Inject } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { ApiResponse } from '@valencia/common';
import { Observable } from 'rxjs';
import { IBusinessProviderService } from './i-business-provider.service';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ContactDto } from '@valencia/quicken/domain/common';
import { HttpContactsRepositoryService } from './http-contacts-repository.service';
import { ConfigurationService } from '@valencia/configuration';
import { LoggingService } from '@valencia/logging';

@Injectable({
  providedIn: 'root',
})
export class BusinessProviderServiceMock extends ServiceBase implements IBusinessProviderService {
  constructor(
    @Inject(HttpContactsRepositoryService) public apiService: HttpContactsRepositoryService,
    public configService: ConfigurationService,
    loggingService: LoggingService
  ) {
    super('BusinessProviderService', loggingService);
  }

  add<T>(contact: ContactDto): Observable<ApiResponse<T>> {
    throw new Error('Method not implemented.');
  }
  retrieveContacts<T>(): Observable<ApiResponse<T>> {
    throw new Error('Method not implemented.');
  }
}
