import { TestBed } from '@angular/core/testing';

import { FooResolveService } from './foo-resolve.service';

describe('FooResolveService', () => {
  let service: FooResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
