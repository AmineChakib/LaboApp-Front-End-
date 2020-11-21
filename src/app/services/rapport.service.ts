import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rapport } from '../rapports/rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  public host: string = "http://localhost:8088";
  private baseURL = "http://localhost:8088/rapports";
  constructor(private http: HttpClient) { }

  getRapportById(id: number): Observable<Rapport>{
    return this.http.get<Rapport>(`${this.baseURL}/${id}`);
  }
  updateRapport(id: number, rapport: Rapport): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, rapport);
  }
  deleteRapport(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getRapports(): Observable<Object> {
    return this.http.get("http://localhost:8088/rapports");
  }
}
