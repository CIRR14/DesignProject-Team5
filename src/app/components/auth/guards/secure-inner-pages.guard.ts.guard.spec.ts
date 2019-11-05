import { TestBed, async, inject } from '@angular/core/testing';

import { SecureInnerPages } from './secure-inner-pages.guard.ts.guard';

describe('SecureInnerPages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureInnerPages]
    });
  });

  it('should ...', inject([SecureInnerPages], (guard: SecureInnerPages) => {
    expect(guard).toBeTruthy();
  }));
});
