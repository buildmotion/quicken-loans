import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { ConfigurationService } from '@valencia/configuration';
import { HttpService, HttpRequestMethod } from '@valencia/http-service';
import { LoggingService, Severity } from '@valencia/logging';
import { Observable } from 'rxjs';
import { IHttpContactsRepositoryService } from './i-http-contacts-repository.service';

@Injectable({
  providedIn: 'root',
})
export class HttpContactsRepositoryService extends ServiceBase implements IHttpContactsRepositoryService {
  constructor(private httpService: HttpService, private configService: ConfigurationService, loggingService: LoggingService) {
    super('HttpSearchRepositoryService', loggingService);
  }

  addContact<T>(): Observable<any> {
    const requestURL = `https://juz537ocx2.execute-api.us-west-1.amazonaws.com/dev/`;
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to [add contact].`);
    const options = this.httpService.createOptions(HttpRequestMethod.get, this.httpService.createHeader(), requestURL, null, false);
    return this.httpService.execute(options);
  }

  // removeAlert<T>(alertId: string): Observable<any> {
  //   const requestURL = `${this.configService.settings.apiURL}DeleteMonitoredTerm`;
  //   this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to [remove monitored].`);
  //   const options = this.httpService.createOptions(
  //     HttpRequestMethod.delete,
  //     this.httpService.createHeader(),
  //     requestURL,
  //     { id: alertId },
  //     false
  //   );
  //   return this.httpService.execute(options);
  // }
}
