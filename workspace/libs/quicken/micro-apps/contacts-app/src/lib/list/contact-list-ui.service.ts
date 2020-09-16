import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService, Severity } from '@valencia/logging';
import { ContactsService } from '@valencia/quicken/domain/contacts-service';
import { Observable, BehaviorSubject } from 'rxjs';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { Contact } from '@valencia/quicken/domain/common';
import { ApiResponse } from '@valencia/common';

@Injectable({
  providedIn: 'root',
})
export class ContactListUIService extends ServiceBase {
  private contactsSubject: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(null);
  private removeContactSpinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private showSpinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public readonly contacts$: Observable<Contact[]> = this.contactsSubject.asObservable();
  public readonly removeContactSpinner$: Observable<boolean> = this.removeContactSpinnerSubject.asObservable();
  public readonly showSpinner$: Observable<boolean> = this.showSpinnerSubject.asObservable();

  contacts: Contact[];

  constructor(private contactsService: ContactsService, loggingService: LoggingService) {
    super('ContactListUIService', loggingService);
  }

  removeContact(contact: Contact) {
    this.removeContactSpinnerSubject.next(true);

    this.loggingService.log(`${this.serviceName}.removeContact`, Severity.Information, `Preparing to remove contact.`);
    this.contactsService
      .removeContact<boolean>(contact)
      .subscribe(
        response => this.handleRemoveContactResponse(response),
        error => this.handleRemoveContactError(error),
        () => this.finishRemoveContactRequest()
      );
  }

  retrieveContacts() {
    this.showSpinnerSubject.next(true);

    this.contactsService
      .retrieveContacts<Contact[]>()
      .subscribe(
        response => this.handleRetrieveContactsResponse(response),
        error => this.handleRetrieveContactsError(error),
        () => this.finishRetrieveContactsRequest()
      );
  }

  private handleRemoveContactResponse(response: ApiResponse<boolean>): void {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process API response for [remove contact]`);
    if (response) {
      if (response.isSuccess) {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process [successful] API response`);
        this.retrieveContacts();
      } else {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process [unsuccessful] API response`);
      }
    }
  }

  private handleRemoveContactError(error: any): void {
    this.handleError(error);
    //TODO: DISPLAY ERROR MESSAGE TO USER;
  }

  private finishRemoveContactRequest(): void {
    this.removeContactSpinnerSubject.next(false);
    this.loggingService.log(this.serviceName, Severity.Information, `Finished processing request to remove contact..`);
  }

  private handleRetrieveContactsResponse(response: ApiResponse<Contact[]>): void {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process API response for [retrieving contacts]`);
    if (response) {
      if (response.isSuccess) {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process [successful] API response`);
        this.contacts = response.data;
        this.contactsSubject.next(this.contacts);
      } else {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to process [unsuccessful] API response`);
      }
    }
  }

  private handleRetrieveContactsError(error: any): void {
    this.showSpinnerSubject.next(false);
    this.handleError(error);
    // display error message to user;
  }

  private finishRetrieveContactsRequest(): void {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to stop spinner for contact list.`);
    this.showSpinnerSubject.next(false);
  }
}
