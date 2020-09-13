import { Observable } from 'rxjs';
import { ApiResponse } from '@valencia/common';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { ContactDto } from '@valencia/quicken/domain/common';

export interface IBusinessProviderService {
  add<T>(contact: ContactDto): Observable<ApiResponse<T>>;
  retrieveContacts<T>(): Observable<ApiResponse<T>>;
}
