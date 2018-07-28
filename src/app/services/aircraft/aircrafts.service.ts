import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Aircraft,AircraftList} from '../../components/aircrafts/aircraft';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {

  private url = 'http://localhost:56455/api/AirCrafts';

  constructor(private http: HttpClient) { }

  getAircrafts():Observable<AircraftList> {
    return this.http.get<AircraftList>(this.url);
  }

  getAircraft(id: string):Observable<Aircraft> {
    return this.http.get<Aircraft>(this.url + "/" + id);
  }

  createAircraft(aircraft: Aircraft) {
    return this.http.post<Aircraft>(this.url, aircraft).subscribe();
  }
  updateAircraft(id: string, aircraft: Aircraft) {
    return this.http.put<Aircraft>(this.url + "/" + id, aircraft).subscribe(); //, { params: urlParams});
  }
  deleteAircraft(id: string) {
    return this.http.delete(this.url + "/" + id).subscribe(); //, { params: urlParams});
  }
}
