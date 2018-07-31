import { Observable } from "rxjs";
import { HttpClient, HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Configuration } from "../configuration";
import { Injectable } from "@angular/core";

export abstract class AbstractService<T> {
    private actionUrl: string;

  constructor(protected _http: HttpClient,  private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl + 'pilots/';
}

  getAll():Observable<T> {
    return this._http.get(this.actionUrl).map(resp=>resp.json() as T);
  }

  getOne(id:number):Observable<T> {
    return this._http.get(`${this.actionUrl}${id}`).map(resp=>resp.json() as T);
  }

  create(object:Observable<T>){
    this._http.post(`${this.actionUrl}`,object);
  }

  update(id:string,object:Observable<T>){
    this._http.put(`${this.actionUrl}${id}`,object);
  }

  delete(id:string){
    this._http.delete(`${this.actionUrl}${id}`);
  }
}
  @Injectable()
  export class CustomInterceptor implements HttpInterceptor {
  
      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          if (!req.headers.has('Content-Type')) {
              req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
          }
  
          req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
          console.log(JSON.stringify(req.headers));
          return next.handle(req);
      }

}