import { Inject, Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService } from '@valencia/logging';

import { BusinessProviderService } from './business/business-provider.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '@valencia/common';

@Injectable({
  providedIn: 'root',
})
export class ContactsService extends ServiceBase {
  constructor(@Inject(BusinessProviderService) private businessProvider: BusinessProviderService, loggingService: LoggingService) {
    super('ContactsService', loggingService);
    this.businessProvider.serviceContext = this.serviceContext;
  }

  add<T>(): Observable<ApiResponse<T>> {
    return this.businessProvider.add<T>();
  }
}
