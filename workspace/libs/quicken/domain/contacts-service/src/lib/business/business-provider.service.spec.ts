import { LoggingService, LoggingServiceMock } from '@valencia/logging';

import { BusinessProviderService } from './business-provider.service';
import { ConfigurationService } from '@valencia/configuration';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('BusinessProviderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: ConfigurationService,
          useClass: ConfigurationService,
        },
        {
          provide: LoggingService,
          useClass: LoggingServiceMock,
        },
      ],
    })
  );

  it('should be created', () => {
    const service: BusinessProviderService = TestBed.inject<BusinessProviderService>(BusinessProviderService);
    expect(service).toBeTruthy();
  });
});
