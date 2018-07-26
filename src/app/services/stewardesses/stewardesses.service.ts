import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Stewardess} from '../../components/stewardesses/stewardess';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StewardessesService {

  private url = 'http://localhost:5000/api/stewardesses';

  constructor(private http: HttpClient) { }

  getStewardesses() {
    return this.http.get(this.url);
  }

  getStewardess(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createStewardess(stewardess: Stewardess) {
    return this.http.post(this.url, stewardess);
  }
  updateStewardess(id: number, stewardess: Stewardess) {
    //const urlParams = new HttpParams().set("id", id.toString());
    debugger;
    return this.http.put(this.url + "/" + id, stewardess) //, { params: urlParams});
  }
  deleteStewardess(id: number) {
    //const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
  }
}
