import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url;

  constructor(
    private http: HttpClient
  ) {
    // this.url = 'https://gestion-tarjetas-ibm.herokuapp.com/api/';
    this.url = 'http://localhost:8080/api/';
  }


  public get<T>(path: string): Observable<T> {
    return this.http.get<T>(this.url + path);
  }

  public post<T>(path: string, data: any): Observable<T> {
    return this.http.post<T>(this.url + path, data);
  }

  public delete<T>(path: string, data: any): Observable<T> {
    return this.http.delete<T>(this.url + path + data);
  }

  public update<T>(path: string, data: any): Observable<T> {
    return this.http.put<T>(this.url + path, data);
  }
  private toURLParams(data: any): string {
    const url = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(btoa(data[k]));
    }).join('&');
    return url;
  }
}