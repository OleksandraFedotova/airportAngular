import { AircraftTypesModule } from './aircraft-types.module';

describe('AircraftTypesModule', () => {
  let aircraftTypesModule: AircraftTypesModule;

  beforeEach(() => {
    aircraftTypesModule = new AircraftTypesModule();
  });

  it('should create an instance', () => {
    expect(aircraftTypesModule).toBeTruthy();
  });
});
