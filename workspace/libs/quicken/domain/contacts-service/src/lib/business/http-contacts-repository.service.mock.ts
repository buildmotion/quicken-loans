import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { IHttpContactsRepositoryService } from './i-http-contacts-repository.service';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ContactDto } from '@valencia/quicken/domain/common';
import { Observable } from 'rxjs';
import { HttpService } from '@valencia/http-service';
import { LoggingService } from '@valencia/logging';
import { ConfigurationService } from '@valencia/configuration';

@Injectable({
  providedIn: 'root',
})
export class HttpContactsRepositoryServiceMock extends ServiceBase implements IHttpContactsRepositoryService {
  constructor(private httpService: HttpService, private configService: ConfigurationService, loggingService: LoggingService) {
    super('HttpSearchRepositoryService', loggingService);
  }

  addContact<T>(contact: ContactDto): Observable<any> {
    throw new Error('Not implemented.');
  }

  retrieveContacts<T>(): Observable<any> {
    throw new Error('Not implemented.');
  }
}
