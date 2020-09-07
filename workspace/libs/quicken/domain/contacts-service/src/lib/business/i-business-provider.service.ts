import { Observable } from 'rxjs';
import { ApiResponse } from '@valencia/common';
import { ContactDto } from '@valencia/quicken/domain/common';

export interface IBusinessProviderService {
  add<T>(contact: ContactDto): Observable<ApiResponse<T>>;
}
