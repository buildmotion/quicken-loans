import { Observable } from 'rxjs';
import { ApiResponse } from '@valencia/foundation';

export interface IUsersRepository {
  retrieveLatestCourses<T>(): Observable<ApiResponse<T>>;
}
