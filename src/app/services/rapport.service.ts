import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rapport } from '../rapports/rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  public host: string = "http://localhost:8088";
  private baseURL = "http://localhost:8088/rapports";
  //private URLPDF = "http://localhost:8088/rapport";
  private jwtToken = null;
  constructor(private http: HttpClient, public router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getRapportById(id: number): Observable<Rapport>{
    if(this.jwtToken == null) this.loadToken();
    return this.http.get<Rapport>(`${this.baseURL}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  updateRapport(id: number, rapport: Rapport): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.put(`${this.baseURL}/${id}`,rapport, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  deleteRapport(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getRapports(): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/rapports", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  /*getPdf(id: number) {
    if(this.jwtToken == null) this.loadToken();
    //return this.http.get(`${this.URLPDF}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    return this.router.navigateByUrl(`${this.URLPDF}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }*/

}
