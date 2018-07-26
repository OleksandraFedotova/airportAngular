import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotsService } from '../../services/pilots/pilots.service';
import { PilotsComponent } from './list/pilots.component';
import { PilotComponent } from './details/pilot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PilotsComponent,
    PilotComponent
  ],
  providers: [
    PilotsService
  ]
})
export class PilotsModule { }
