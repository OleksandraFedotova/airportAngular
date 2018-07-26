import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AircraftType} from '../../components/aircraft-types/aircraft-type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AircraftTypesService {
  private url = 'http://localhost:5000/api/AircraftTypes';

  constructor(private http: HttpClient) { }

  getAircraftTypes() {
    return this.http.get(this.url);
  }

  getAircraftType(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createAircraftType(aircraftType: AircraftType) {
    return this.http.post(this.url, aircraftType);
  }
  updateAircraftType(id: number, aircraftType: AircraftType) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, aircraftType) //, { params: urlParams});
  }
  deleteAircraftType(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }
}
