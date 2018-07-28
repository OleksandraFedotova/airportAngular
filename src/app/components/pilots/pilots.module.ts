import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PilotsService } from '../../services/pilots/pilots.service';
import { PilotsComponent } from './list/pilots.component';
import { PilotComponent } from './details/pilot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PilotsComponent,
    PilotComponent
  ],
  providers: [
    [PilotsService]
  ]
})
export class PilotsModule { }
