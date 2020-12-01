import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { These } from '../these/these';

@Injectable({
  providedIn: 'root'
})
export class TheseService {
  private baseURL = "http://localhost:8088/theses";
  public host: string = "http://localhost:8088";
  private jwtToken = null;
  constructor(private http: HttpClient) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  getTheses(): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.get("http://localhost:8088/theses", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  createThese(these: These): Observable<object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.post(this.host + "/theses", these, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  getTheseById(id: number): Observable<These>{
    if(this.jwtToken == null) this.loadToken();
    return this.http.get<These>(`${this.baseURL}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  updateThese(id: number, these: These): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.put(`${this.baseURL}/${id}`, these, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  deleteThese(id: number): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.delete(`${this.baseURL}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
