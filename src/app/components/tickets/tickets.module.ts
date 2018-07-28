import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TicketsService } from '../../services/tickets/tickets.service';
import { TicketsComponent } from './list/tickets.component';
import { TicketComponent } from './details/ticket.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TicketsComponent,
    TicketComponent
  ],
  providers: [
    TicketsService
  ]
})
export class TicketsModule { }
