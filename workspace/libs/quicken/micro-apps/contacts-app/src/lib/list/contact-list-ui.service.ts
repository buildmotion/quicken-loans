import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService, Severity } from '@valencia/logging';
import { ContactsService } from '@valencia/quicken/domain/contacts-service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Contact } from '@valencia/quicken/domain/common';
import { ApiResponse } from '@valencia/common';

@Injectable({
  providedIn: 'root',
})
export class ContactListUIService extends ServiceBase {
  private contactsSubject: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(null);
  private showSpinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public readonly contacts$: Observable<Contact[]> = this.contactsSubject.asObservable();
  public readonly showSpinner$: Observable<boolean> = this.showSpinnerSubject.asObservable();
  contacts: Contact[];

  constructor(private contactsService: ContactsService, loggingService: LoggingService) {
    super('ContactListUIService', loggingService);
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
    throw new Error('Method not implemented.');
  }

  private finishRetrieveContactsRequest(): void {
    this.showSpinnerSubject.next(false);
  }
}
