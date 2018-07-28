import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Ticket, TicketList} from '../../components/tickets/ticket';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private url = 'http://localhost:56455/api/tickets';

  constructor(private http: HttpClient) { }

  getTickets():Observable<TicketList> {
    return this.http.get<TicketList>(this.url);
  }

  getTicket(id: string):Observable<Ticket> {
    return this.http.get<Ticket>(this.url + "/" + id);
  }

  createTicket(ticket: Ticket) {
    return this.http.post<Ticket>(this.url, ticket).subscribe();
  }
  updateTicket(id: string, ticket: Ticket) {
    return this.http.put<Ticket>(this.url + "/" + id, ticket).subscribe() ;//, { params: urlParams});
  }
  deleteTicket(id: string) {
    return this.http.delete(this.url + "/" + id).subscribe();  //, { params: urlParams});
  }
}
