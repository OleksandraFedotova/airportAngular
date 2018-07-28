import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { PilotsList,Pilot } from '../../components/pilots/pilot';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotsService {
  private headers: HttpHeaders;
  private url = 'http://localhost:56455/api/pilots';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

  getPilots() : Observable<PilotsList> {
    return this.http.get<PilotsList>(this.url);
  }
  

  getPilot(id: string): Observable<Pilot> {
    return this.http.get<Pilot>(this.url +'/'+ id);
  }

  createPilot(pilot: Pilot) {
    this.http.post<Pilot>(this.url, pilot).subscribe();
  }

  updatePilot(id: string, pilot: Pilot) {
    this.http.put<Pilot>(this.url +'/'+ id, pilot).subscribe();//, { params: urlParams});
  }

  deletePilot(id: string) {
    this.http.delete(this.url +'/'+ id).subscribe();//, { params: urlParams});
  }

}
