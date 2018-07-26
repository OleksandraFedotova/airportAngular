import { AircraftsModule } from './aircrafts.module';

describe('AircraftModule', () => {
  let aircraftsModule: AircraftsModule;

  beforeEach(() => {
    aircraftsModule = new AircraftsModule();
  });

  it('should create an instance', () => {
    expect(aircraftsModule).toBeTruthy();
  });
});
