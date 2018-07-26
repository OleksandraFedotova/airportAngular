import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotServiceService {
  private url = 'http://localhost:5000/api/Pilots';

  constructor(private http: HttpClient) { }

  getPilots() {
    return this.http.get(this.url);
  }

  getPilot(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createPilot(pilot: Pilot) {
    return this.http.post(this.url, pilot);
  }
  updatePilot(id: number, pilot: Pilot) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, pilot) //, { params: urlParams});
  }
  deletePilot(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }

}
