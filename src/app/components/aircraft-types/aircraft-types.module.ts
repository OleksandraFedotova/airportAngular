import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftTypesComponent } from './list/aircraft-types.component';

import { AircraftTypeComponent } from './detail/aircraft.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AircraftTypesComponent,
    AircraftTypeComponent
  ],
  providers:[
    AircraftTypesService
  ]
})
export class AircraftTypesModule { }
