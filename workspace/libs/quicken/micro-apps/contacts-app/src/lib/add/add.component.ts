import { BehaviorSubject, Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentBase } from '@valencia/foundation';
import { LoggingService, Severity } from '@valencia/logging';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { Contact } from '@valencia/quicken/domain/common';

import { AddContactUIService } from '../add-contact-ui.service';

@Component({
  selector: 'valencia-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent extends ComponentBase implements OnInit {
  contact$: Observable<Contact> = this.uiService.contact$;

  constructor(private uiService: AddContactUIService, loggingService: LoggingService, router: Router) {
    super('AddComponent', loggingService, router);
  }

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to add a new [contact].`);
    // const contact = new ContactDto();
    // contact.address1 = '1234 MAIN ST';
    // contact.address2 = 'Apt #1';
    // contact.city = 'Denver';
    // contact.company = 'Build Motion';
    // contact.emailAddress = 'matt@buildmotion.com';
    // contact.firstName = 'Matt';
    // contact.lastName = 'Vaughn';
    // contact.phone = '303.356.6273';
    // contact.postalCode = '80504';
    // contact.state = 'Colorado';

    // this.uiService.add(contact);
  }
}
