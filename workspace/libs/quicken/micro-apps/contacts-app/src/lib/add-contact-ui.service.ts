import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService, Severity } from '@valencia/logging';
import { ContactsService } from '@valencia/quicken/domain/contacts-service';
import { Observable } from 'rxjs';
import { ApiResponse } from '@valencia/common';

@Injectable({
  providedIn: 'root',
})
export class AddContactUIService extends ServiceBase {
  constructor(private contactsService: ContactsService, loggingService: LoggingService) {
    super('AddContactUIService', loggingService);
  }

  add<T>(): Observable<ApiResponse<T>> {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to add new [contact].`);
    return this.contactsService.add<T>();
  }
}
