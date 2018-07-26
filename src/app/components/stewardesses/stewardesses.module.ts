import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StewardessesService } from '../../services/stewardesses/stewardesses.service';
import { StewardessesComponent } from './list/stewardesses.component';
import { StewardessComponent } from './details/stewardess.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StewardessesComponent,
    StewardessComponent
  ],
  providers: [
    StewardessesService
  ]
})
export class StewardessesModule { }
