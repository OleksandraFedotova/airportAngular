import { AircraftModule } from './aircraft.module';

describe('AircraftModule', () => {
  let aircraftModule: AircraftModule;

  beforeEach(() => {
    aircraftModule = new AircraftModule();
  });

  it('should create an instance', () => {
    expect(aircraftModule).toBeTruthy();
  });
});
