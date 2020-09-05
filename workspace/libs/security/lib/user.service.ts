import { Injectable, Inject } from '@angular/core';
import { LoggingService } from '@valencia/logging';
import { ServiceBase } from '@valencia/foundation';
import { Observable } from 'rxjs';
import { BusinessProviderService } from './business/business-provider.service';

@Injectable()
export class UserService extends ServiceBase {
  constructor(@Inject(BusinessProviderService) private businessProvider: BusinessProviderService, loggingService: LoggingService) {
    super('AuthorizationService', loggingService);

    this.businessProvider.serviceContext = this.serviceContext;
  }

  retrieveUsers<T>(): Observable<T> {
    // return a list of users from Firebase:
    throw new Error('Not implemented...yet.');
  }

  retrieveUser<T>(userId: string): Observable<T> {
    return this.businessProvider.retrieveUser<T>(userId);
  }
}
