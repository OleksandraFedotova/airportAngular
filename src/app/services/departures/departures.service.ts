import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Departure,DepartureList} from '../../components/departures/departure';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeparturesService {
  private url = 'http://localhost:56455/api/departures';

  constructor(private http: HttpClient) { }

  getDepartures():Observable<DepartureList> {
    return this.http.get<DepartureList>(this.url);
  }

  getDeparture(id: string):Observable<Departure> {
    return this.http.get<Departure>(this.url + "/" + id);
  }

  createDeparture(departure: Departure) {
    return this.http.post<Departure>(this.url, departure);
  }
  updateDeparture(id: string, departure: Departure) {
    return this.http.put<Departure>(this.url + "/" + id, departure);//, { params: urlParams});
  }
  deleteDeparture(id: string) {
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }
}
