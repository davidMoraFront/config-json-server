import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  addConfig(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/config', JSON.stringify(data), this.httpOptions);
  }

  deleteConfig(id: number) {
    return this.http.delete<any>(this.apiUrl + '/config/' + id, this.httpOptions);
  }

  getConfigs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/config');
  }

}
