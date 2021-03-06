import { BehaviorSubject, Observable } from 'rxjs';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { Contact, ContactDto } from '@valencia/quicken/domain/common';
import { LoggingService, Severity } from '@valencia/logging';

import { ApiResponse } from '@valencia/common';
import { ContactsService } from '@valencia/quicken/domain/contacts-service';
import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';

@Injectable({
  providedIn: 'root',
})
export class AddContactUIService extends ServiceBase {
  private contactSubject: BehaviorSubject<Contact> = new BehaviorSubject<Contact>(null);
  private failMessageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  private showSpinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private successMessageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  public readonly contact$: Observable<Contact> = this.contactSubject.asObservable();
  public readonly failMessage$: Observable<string> = this.failMessageSubject.asObservable();
  public readonly showSpinner$: Observable<boolean> = this.showSpinnerSubject.asObservable();
  public readonly successMessage$: Observable<string> = this.successMessageSubject.asObservable();

  private contact: Contact;

  constructor(private contactsService: ContactsService, loggingService: LoggingService) {
    super('AddContactUIService', loggingService);
  }

  add(contact: ContactDto): void {
    this.showSpinnerSubject.next(true);

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
        this.contact = response.data;
        this.contactSubject.next(response.data);
        this.successMessageSubject.next(`Successfully created contact for [${this.contact.firstName} ${this.contact.lastName}].`);
      } else {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process [unsuccessful] API response`);
        this.failMessageSubject.next(response.message);
      }
    }
  }

  private handleAddContactError(error: any): void {
    this.showSpinnerSubject.next(false);
    const failedMessage = this.contactsService.serviceContext.Messages[0].Message;
    this.failMessageSubject.next(failedMessage);
    this.handleError(error);
  }

  private finishAddContactRequest(): void {
    this.showSpinnerSubject.next(false);
  }
}
