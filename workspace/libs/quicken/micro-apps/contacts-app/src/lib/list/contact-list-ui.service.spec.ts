import { TestBed } from '@angular/core/testing';

import { ContactListUIService } from './contact-list-ui.service';

describe('ContactListUIService', () => {
  let service: ContactListUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactListUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
