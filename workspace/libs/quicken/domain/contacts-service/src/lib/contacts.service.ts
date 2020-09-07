import { Observable } from 'rxjs';

import { Inject, Injectable } from '@angular/core';
import { ApiResponse } from '@valencia/common';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService } from '@valencia/logging';
import { ContactDto } from '@valencia/quicken/domain/common';

import { BusinessProviderService } from './business/business-provider.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService extends ServiceBase {
  constructor(@Inject(BusinessProviderService) private businessProvider: BusinessProviderService, loggingService: LoggingService) {
    super('ContactsService', loggingService);
    this.businessProvider.serviceContext = this.serviceContext;
  }

  add<T>(contact: ContactDto): Observable<ApiResponse<T>> {
    return this.businessProvider.add<T>(contact);
  }
}
