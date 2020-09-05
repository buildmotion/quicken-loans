import { Component } from '@angular/core';
import { ComponentBase } from '@valencia/foundation';
import { LoggingService } from '@valencia/logging';
import { Router } from '@angular/router';

@Component({
  selector: 'valencia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBase {
  title = 'quicken-contacts';

  /**
   * The application components extend from the library project
   * [Foundation] to provide the base class. Logging is a key
   * feature of the application.
   */
  constructor(loggingService: LoggingService, router: Router) {
    super('AppComponent', loggingService, router);
  }
}
