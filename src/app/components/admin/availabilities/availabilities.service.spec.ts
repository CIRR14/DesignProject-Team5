import { TestBed } from '@angular/core/testing';

import { AvailabilitiesService } from './availabilities.service';

describe('AvailabilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailabilitiesService = TestBed.get(AvailabilitiesService);
    expect(service).toBeTruthy();
  });
});
