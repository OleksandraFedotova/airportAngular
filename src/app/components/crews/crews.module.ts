import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CrewsService } from '../../services/crews/crews.service';
import { CrewComponent } from './details/crew.component';
import { CrewsComponent } from './list/crews.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CrewComponent,
    CrewsComponent
  ],
  providers:[
    CrewsService
  ]
})
export class CrewsModule { }
