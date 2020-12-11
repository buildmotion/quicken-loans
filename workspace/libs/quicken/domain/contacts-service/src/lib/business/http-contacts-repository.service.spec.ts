import { ConfigurationService } from '@valencia/configuration';
import { HttpClientModule } from '@angular/common/http';
import { HttpContactsRepositoryService } from './http-contacts-repository.service';
import { LoggingService } from '@valencia/logging';
import { TestBed } from '@angular/core/testing';

describe('HttpContactsRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoggingService, ConfigurationService],
    })
  );

  it('should create HttpContactsRepositoryService', () => {
    const service: HttpContactsRepositoryService = TestBed.inject(HttpContactsRepositoryService);
    expect(service).toBeTruthy();
  });
});
