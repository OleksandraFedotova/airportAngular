import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Ticket} from '../../components/tickets/ticket';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private url = 'http://localhost:5000/api/tickets';

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get(this.url);
  }

  getTicket(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createTicket(ticket: Ticket) {
    return this.http.post(this.url, ticket);
  }
  updateTicket(id: number, ticket: Ticket) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, ticket) //, { params: urlParams});
  }
  deleteTicket(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }
}
