import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheseSoutenu } from '../these-soutenu/these-soutenu';

@Injectable({
  providedIn: 'root'
})
export class TheseSoutenuService {
  private baseURL = "http://localhost:8088/theseSoutenus";
  public host: string = "http://localhost:8088";
  private jwtToken = null;
  constructor(private http: HttpClient) { }
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  getTheses(): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.get("http://localhost:8088/theseSoutenus", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  getTheses2() {
    if(this.jwtToken == null) this.loadToken();
    return this.http.get<TheseSoutenu[]>(this.baseURL);
  }
  createThese(these: TheseSoutenu): Observable<object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.post(this.host + "/theseSoutenus", these, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  getTheseById(id: number): Observable<TheseSoutenu>{
    if(this.jwtToken == null) this.loadToken();
    return this.http.get<TheseSoutenu>(`${this.baseURL}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  updateThese(id: number, these: TheseSoutenu): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.put(`${this.baseURL}/${id}`, these, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  deleteThese(id: number): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.delete(`${this.baseURL}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
