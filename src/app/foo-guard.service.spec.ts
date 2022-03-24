import { TestBed } from '@angular/core/testing';

import { FooGuardService } from './foo-guard.service';

describe('FooGuardService', () => {
  let service: FooGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
