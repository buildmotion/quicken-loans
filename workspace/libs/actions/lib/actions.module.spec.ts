import { TestBed, async, waitForAsync } from '@angular/core/testing';

import { ActionsModule } from './actions.module';

describe('ActionsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ActionsModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ActionsModule).toBeDefined();
  });
});
