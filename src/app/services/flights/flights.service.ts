import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Flight} from '../../components/flights/flight';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private url = 'http://localhost:56455/api/flights';

  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get(this.url);
  }

  getFlight(id: string):Observable<Flight> {
    return this.http.get<Flight>(this.url + "/" + id);
  }

  createFlight(flight: Flight) {
    return this.http.post<Flight>(this.url, flight).subscribe();
  }
  updateFlight(id: string, flight: Flight) {
    return this.http.put<Flight>(this.url + "/" + id, flight).subscribe();//, { params: urlParams});
  }
  deleteFlight(id: string) {
    return this.http.delete(this.url + "/" + id).subscribe();  //, { params: urlParams});
  }

}
