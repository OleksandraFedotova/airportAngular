import { Component, OnInit } from '@angular/core';
import {Ticket} from '../ticket';
import {TicketsService} from '../../../services/tickets/tickets.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ticket-component',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket = new Ticket();
  id: string;

  constructor(private ticketsService: TicketsService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.ticketsService.getTicket(this.id).subscribe(data => this.ticket = data);
  }

  update(id: string){
    this.ticketsService.updateTicket(id, this.ticket);

  }

  delete(id: string) {
    this.ticketsService.deleteTicket(id);
    this.location.back();
  }
}
