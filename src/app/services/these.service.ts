import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { These } from '../these/these';

@Injectable({
  providedIn: 'root'
})
export class TheseService {
  private baseURL = "http://localhost:8088/theses";
  public host: string = "http://localhost:8088";
  constructor(private http: HttpClient) { }

  getTheses(): Observable<Object> {
    return this.http.get("http://localhost:8088/theses");
  }
  getTheses2() {
    return this.http.get<These[]>(this.baseURL);
  }
  createThese(these: These): Observable<object> {
    return this.http.post(this.host + "/theses", these);
  }
  getTheseById(id: number): Observable<These>{
    return this.http.get<These>(`${this.baseURL}/${id}`);
  }
  updateThese(id: number, these: These): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, these);
  }
  deleteThese(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
