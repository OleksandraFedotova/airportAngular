import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  AircraftTypesService } from '../../services/aircraft-types/aircraft-types.service';
import { AircraftTypesComponent } from './list/aircraft-types.component';
import { AircraftTypeComponent } from './details/aircraft-type.component';


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
