import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeparturesService {
  private url = 'http://localhost:5000/api/departures';

  constructor(private http: HttpClient) { }

  getDepartures() {
    return this.http.get(this.url);
  }

  getDeparture(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createDeparture(departure: Departure) {
    return this.http.post(this.url, departure);
  }
  updateDeparture(id: number, departure: Departure) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, departure) //, { params: urlParams});
  }
  deleteDeparture(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }
}
