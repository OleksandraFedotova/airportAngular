import { TestBed, inject } from '@angular/core/testing';

import { AircraftsService } from './aircrafts.service';

describe('AircraftsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AircraftsService]
    });
  });

  it('should be created', inject([AircraftsService], (service: AircraftsService) => {
    expect(service).toBeTruthy();
  }));
});
