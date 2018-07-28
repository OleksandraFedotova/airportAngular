import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StewardessesService } from '../../services/stewardesses/stewardesses.service';
import { StewardessesComponent } from './list/stewardesses.component';
import { StewardessComponent } from './details/stewardess.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
