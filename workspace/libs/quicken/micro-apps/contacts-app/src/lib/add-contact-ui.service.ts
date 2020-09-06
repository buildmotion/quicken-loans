import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService } from '@valencia/logging';

@Injectable({
  providedIn: 'root',
})
export class AddContactUIService extends ServiceBase {
  constructor(loggingService: LoggingService) {
    super('AddContactUIService', loggingService);
  }
}
