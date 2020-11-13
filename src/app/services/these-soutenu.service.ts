import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheseSoutenu } from '../these-soutenu/these-soutenu';

@Injectable({
  providedIn: 'root'
})
export class TheseSoutenuService {
  private baseURL = "http://localhost:8088/theseSoutenus";
  public host: string = "http://localhost:8088";
  constructor(private http: HttpClient) { }
  getTheses(): Observable<Object> {
    return this.http.get("http://localhost:8088/theseSoutenus");
  }
  getTheses2() {
    return this.http.get<TheseSoutenu[]>(this.baseURL);
  }
  createThese(these: TheseSoutenu): Observable<object> {
    return this.http.post(this.host + "/theseSoutenus", these);
  }
  getTheseById(id: number): Observable<TheseSoutenu>{
    return this.http.get<TheseSoutenu>(`${this.baseURL}/${id}`);
  }
  updateThese(id: number, these: TheseSoutenu): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, these);
  }
  deleteThese(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
