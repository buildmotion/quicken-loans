import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentBase } from '@valencia/foundation';
import { LoggingService, Severity } from '@valencia/logging';
import { AddContactUIService } from '../add-contact-ui.service';

@Component({
  selector: 'valencia-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent extends ComponentBase implements OnInit {
  title = 'Getting some data...';
  constructor(private uiService: AddContactUIService, loggingService: LoggingService, router: Router) {
    super('AddComponent', loggingService, router);
  }

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to add a new [contact].`);
    this.uiService
      .add<string>()
      .subscribe(response => (this.title = response.data), error => this.handleServiceErrors(error, this.uiService.serviceContext));
  }
}
