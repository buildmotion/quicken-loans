import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ApiResponse } from '@valencia/common';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService, Severity } from '@valencia/logging';
import { Contact, ContactDto } from '@valencia/quicken/domain/common';
import { ContactsService } from '@valencia/quicken/domain/contacts-service';

@Injectable({
  providedIn: 'root',
})
export class AddContactUIService extends ServiceBase {
  private contactSubject: BehaviorSubject<Contact> = new BehaviorSubject<Contact>(null);
  private spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public readonly contact$: Observable<Contact> = this.contactSubject.asObservable();
  public readonly spinner$: Observable<boolean> = this.spinnerSubject.asObservable();

  constructor(private contactsService: ContactsService, loggingService: LoggingService) {
    super('AddContactUIService', loggingService);
  }

  add(contact: ContactDto): void {
    this.spinnerSubject.next(true);

    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to add new [contact].`);
    this.contactsService
      .add<Contact>(contact)
      .subscribe(
        response => this.handleAddContactResponse(response),
        error => this.handleAddContactError(error),
        () => this.finishAddContactRequest()
      );
  }

  private handleAddContactResponse(response: ApiResponse<Contact>): void {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process API response for [adding new contact]`);
    if (response) {
      if (response.isSuccess) {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process [successful] API response`);
        this.contactSubject.next(response.data);
      } else {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process [unsuccessful] API response`);
      }
    }
  }

  private handleAddContactError(error: any): void {
    this.handleError(error);
  }

  private finishAddContactRequest(): void {
    this.spinnerSubject.next(false);
  }
}
