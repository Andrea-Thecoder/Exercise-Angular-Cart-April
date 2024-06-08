import { TestBed } from '@angular/core/testing';

import { ThrustService } from './thrust.service';

describe('ThrustService', () => {
  let service: ThrustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThrustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
