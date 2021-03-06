import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { ConfigurationService } from '@valencia/configuration';
import { HttpService, HttpRequestMethod } from '@valencia/http-service';
import { LoggingService, Severity } from '@valencia/logging';
import { Observable } from 'rxjs';
import { IHttpContactsRepositoryService } from './i-http-contacts-repository.service';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ContactDto } from '@valencia/quicken/domain/common';

@Injectable({
  providedIn: 'root',
})
export class HttpContactsRepositoryService extends ServiceBase implements IHttpContactsRepositoryService {
  constructor(private httpService: HttpService, private configService: ConfigurationService, loggingService: LoggingService) {
    super('HttpSearchRepositoryService', loggingService);
  }

  addContact<T>(contact: ContactDto): Observable<any> {
    const requestURL = `https://juz537ocx2.execute-api.us-west-1.amazonaws.com/dev/contacts/add`;
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to [add contact] at ${requestURL}.`);
    const options = this.httpService.createOptions(HttpRequestMethod.post, this.httpService.createHeader(), requestURL, contact, false);
    return this.httpService.execute(options);
  }

  removeContact<T>(contactId: string): Observable<any> {
    const requestURL = `https://juz537ocx2.execute-api.us-west-1.amazonaws.com/dev/contacts/${contactId}`;
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to [retrieve all contacts].`);
    const options = this.httpService.createOptions(HttpRequestMethod.delete, this.httpService.createHeader(), requestURL, null, false);
    return this.httpService.execute(options);
  }

  retrieveContacts<T>(): Observable<any> {
    const requestURL = `https://juz537ocx2.execute-api.us-west-1.amazonaws.com/dev/contacts`;
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to [retrieve all contacts].`);
    const options = this.httpService.createOptions(HttpRequestMethod.get, this.httpService.createHeader(), requestURL, null, false);
    return this.httpService.execute(options);
  }

  retrieveRates<T>(): Observable<any> {
    const requestURL = `https://juz537ocx2.execute-api.us-west-1.amazonaws.com/dev/rates`;

    https: this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to [retrieve all rates].`);
    const options = this.httpService.createOptions(HttpRequestMethod.get, this.httpService.createHeader(), requestURL, null, false);
    return this.httpService.execute(options);
  }
}
