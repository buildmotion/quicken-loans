import { Observable } from 'rxjs';
import { ApiResponse } from '@angular-architecture/foundation';

export interface IUsersRepository {
  retrieveLatestCourses<T>(): Observable<ApiResponse<T>>;
}
