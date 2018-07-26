import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {

  private url = 'http://localhost:5000/api/aircrafts';

  constructor(private http: HttpClient) { }

  getAircrafts() {
    return this.http.get(this.url);
  }

  getAircraft(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createAircraft(aircraft: Aircraft) {
    return this.http.post(this.url, aircraft);
  }
  updateAircraft(id: number, aircraft: Aircraft) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, aircraft) //, { params: urlParams});
  }
  deleteAircraft(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }
}
