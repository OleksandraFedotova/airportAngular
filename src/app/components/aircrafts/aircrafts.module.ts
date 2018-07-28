import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AircraftsService } from '../../services/aircraft/aircrafts.service';
import { AircraftComponent } from './details/aircraft.component';
import { AircraftsComponent } from './list/aircrafts.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AircraftComponent,
    AircraftsComponent
  ],
  providers:[
    AircraftsService
  ]
})
export class AircraftsModule { }
