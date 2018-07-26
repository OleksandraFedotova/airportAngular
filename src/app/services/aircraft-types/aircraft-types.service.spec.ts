import { TestBed, inject } from '@angular/core/testing';

import { AircraftTypesService } from './aircraft-types.service';

describe('AircraftTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AircraftTypesService]
    });
  });

  it('should be created', inject([AircraftTypesService], (service: AircraftTypesService) => {
    expect(service).toBeTruthy();
  }));
});
