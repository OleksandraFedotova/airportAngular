import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Ticket,TicketList } from '../ticket';
import { TicketsService } from '../../../services/tickets/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  
  public tickets: TicketList;
  public ticket: Ticket = new Ticket();

  constructor(private router: Router, private ticketsService: TicketsService) { }

  ngOnInit() {
    this.ticketsService.getTickets()
      .subscribe((tickets:TicketList) => this.tickets= tickets);
  }

  create() {
    this.ticketsService.createTicket(this.ticket);
  }

  delete(id: string) {
    this.ticketsService.deleteTicket(id);
    this.tickets.tickets = this.tickets.tickets.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/tickets/', id]);
  }

}
