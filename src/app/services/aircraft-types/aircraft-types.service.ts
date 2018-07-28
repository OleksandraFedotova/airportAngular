import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AircraftType,AircraftTypeList} from '../../components/aircraft-types/aircraft-type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AircraftTypesService {
  private url = 'http://localhost:56455/api/aircraftTypes';

  constructor(private http: HttpClient) { }

  getAircraftTypes():Observable<AircraftTypeList> {
    return this.http.get<AircraftTypeList>(this.url);
  }

  getAircraftType(id: string) :Observable<AircraftType> {
    return this.http.get<AircraftType> (this.url + "/" + id);
  }

  createAircraftType(aircraftType: AircraftType) {
    return this.http.post<AircraftType> (this.url, aircraftType).subscribe();
  }
  updateAircraftType(id: string, aircraftType: AircraftType) {
    return this.http.put<AircraftType> (this.url + "/" + id, aircraftType).subscribe();//, { params: urlParams});
  }
  deleteAircraftType(id: string) {
    return this.http.delete(this.url + "/" + id).subscribe(); //, { params: urlParams});
  }
}
