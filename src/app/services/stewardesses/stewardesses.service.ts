import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Stewardess,StewardessList} from '../../components/stewardesses/stewardess';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StewardessesService {

  private url = 'http://localhost:56455/api/stewardesses';

  constructor(private http: HttpClient) { }

  getStewardesses():Observable<StewardessList> {
    return this.http.get<StewardessList>(this.url);
  }

  getStewardess(id: string): Observable<Stewardess>  {
    return this.http.get<Stewardess>(this.url + "/" + id);
  }

  createStewardess(stewardess: Stewardess) {
    return this.http.post<Stewardess>(this.url, stewardess).subscribe();
  }
  updateStewardess(id: string, stewardess: Stewardess) {
    return this.http.put<Stewardess>(this.url + "/" + id, stewardess).subscribe() ;//, { params: urlParams});
  }
  deleteStewardess(id: string) {
    return this.http.delete(this.url + "/" + id).subscribe();  //, { params: urlParams});
  }
}
