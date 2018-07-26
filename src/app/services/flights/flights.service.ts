import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Flight} from '../../components/flights/flight';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private url = 'http://localhost:5000/api/flights';

  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get(this.url);
  }

  getFlight(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createFlight(flight: Flight) {
    return this.http.post(this.url, flight);
  }
  updateFlight(id: number, flight: Flight) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, flight) //, { params: urlParams});
  }
  deleteFlight(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }

}
