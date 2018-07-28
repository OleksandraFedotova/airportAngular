import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Crew,CrewList} from '../../components/crews/crew';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrewsService {

  private url = 'http://localhost:56455/api/crews';

  constructor(private http: HttpClient) { }

  getCrews():Observable<CrewList> {
    return this.http.get<CrewList>(this.url);
  }

  getCrew(id: string):Observable<Crew> {
    return this.http.get<Crew>(this.url + "/" + id);
  }

  createCrew(crew: Crew) {
    return this.http.post<Crew>(this.url, crew).subscribe();
  }
  updateCrew(id: string, crew: Crew) {
    debugger;
    return this.http.put<Crew>(this.url + "/" + id, crew).subscribe();//, { params: urlParams});
  }
  deleteCrew(id: string) {
    return this.http.delete(this.url + "/" + id).subscribe(); //, { params: urlParams});
  }
}
