import { TestBed, async, waitForAsync } from '@angular/core/testing';

import { NotificationModule } from './notification.module';

describe('NotificationModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NotificationModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NotificationModule).toBeDefined();
  });
});
