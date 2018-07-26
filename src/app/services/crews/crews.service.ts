import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Crew} from '../../components/crews/crew';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrewsService {

  private url = 'http://localhost:5000/api/crews';

  constructor(private http: HttpClient) { }

  getCrews() {
    return this.http.get(this.url);
  }

  getCrew(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createCrew(crew: Crew) {
    return this.http.post(this.url, crew);
  }
  updateCrew(id: number, crew: Crew) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, crew) //, { params: urlParams});
  }
  deleteCrew(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }
}
