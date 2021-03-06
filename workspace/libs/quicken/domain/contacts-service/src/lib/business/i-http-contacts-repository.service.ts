import { Observable } from 'rxjs';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { ContactDto } from '@valencia/quicken/domain/common';

export interface IHttpContactsRepositoryService {
  addContact(contact: ContactDto): Observable<any>;
  retrieveContacts(): Observable<any>;
}
