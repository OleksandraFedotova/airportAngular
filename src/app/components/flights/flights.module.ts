import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsService } from '../../services/flights/flights.service';
import { FlightComponent } from './details/flight.component';
import { FlightsComponent } from './list/flights.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlightsComponent,
    FlightComponent
  ],
  providers:[
    FlightsService
  ]
})
export class FlightsModule { }
