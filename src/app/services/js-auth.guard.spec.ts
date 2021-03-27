import { TestBed } from '@angular/core/testing';

import { JsAuthGuard } from './js-auth.guard';

describe('JsAuthGuard', () => {
  let guard: JsAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JsAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
