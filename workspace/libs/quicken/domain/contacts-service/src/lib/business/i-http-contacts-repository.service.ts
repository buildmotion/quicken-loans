import { Observable } from 'rxjs';
import { ContactDto } from '@valencia/quicken/domain/common';

export interface IHttpContactsRepositoryService {
  addContact(contact: ContactDto): Observable<any>;
}
