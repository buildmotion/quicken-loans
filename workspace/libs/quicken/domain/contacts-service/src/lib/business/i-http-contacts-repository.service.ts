import { Observable } from 'rxjs';

export interface IHttpContactsRepositoryService {
  addContact(): Observable<any>;
}
