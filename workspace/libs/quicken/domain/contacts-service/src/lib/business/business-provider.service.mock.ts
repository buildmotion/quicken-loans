import { Injectable, Inject } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { ApiResponse } from '@valencia/common';
import { Observable } from 'rxjs';
import { IBusinessProviderService } from './i-business-provider.service';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ContactDto } from '@valencia/quicken/domain/common';

@Injectable({
  providedIn: 'root',
})
export class BusinessProviderServiceMock extends ServiceBase implements IBusinessProviderService {
  add<T>(contact: ContactDto): Observable<ApiResponse<T>> {
    throw new Error('Method not implemented.');
  }
  retrieveContacts<T>(): Observable<ApiResponse<T>> {
    throw new Error('Method not implemented.');
  }
}
