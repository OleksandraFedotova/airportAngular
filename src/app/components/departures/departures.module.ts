import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeparturesService } from '../../services/departures/departures.service';
import { DeparturesComponent } from './list/departures.component';
import { DepartureComponent } from './details/departure.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeparturesComponent,
    DepartureComponent
  ],
  providers:[
    DeparturesService
  ]
})
export class DeparturesModule { }
