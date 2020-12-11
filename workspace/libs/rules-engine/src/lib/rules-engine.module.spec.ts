import { TestBed, async, waitForAsync } from '@angular/core/testing';

import { RulesEngineModule } from './rules-engine.module';

describe('RulesEngineModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RulesEngineModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(RulesEngineModule).toBeDefined();
  });
});
