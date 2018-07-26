import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsService } from '../../services/tickets/tickets.service';
import { TicketsComponent } from './list/tickets.component';
import { TicketComponent } from './details/ticket.component';

@NgModule({
  imports: [
    CommonModule
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
