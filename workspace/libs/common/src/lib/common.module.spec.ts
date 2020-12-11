import { TestBed, async, waitForAsync } from '@angular/core/testing';

import { CommonModule } from './common.module';

describe('CommonModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(CommonModule).toBeDefined();
  });
});
