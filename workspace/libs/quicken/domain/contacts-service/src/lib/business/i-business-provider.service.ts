import { Observable } from 'rxjs';
import { ApiResponse } from '@valencia/common';

export interface IBusinessProviderService {
  add<T>(): Observable<ApiResponse<T>>;
}
