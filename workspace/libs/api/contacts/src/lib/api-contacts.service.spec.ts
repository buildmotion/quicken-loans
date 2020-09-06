import { Test } from '@nestjs/testing';
import { ApiContactsService } from './api-contacts.service';

describe('ApiContactsService', () => {
  let service: ApiContactsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiContactsService],
    }).compile();

    service = module.get(ApiContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
