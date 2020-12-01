import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8088/users";
  public host: string = "http://localhost:8088";
  private jwtToken = null;
  constructor(private http: HttpClient) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  createUser(user: User): Observable<object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.post(this.host + "/create-user", user, {headers: new HttpHeaders({'Authorization': this.jwtToken})});

  }
  getUserById(id: number): Observable<User>{
    if(this.jwtToken == null) this.loadToken();
    return this.http.get<User>(`${this.baseURL}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  updateUser(id: number, user: User): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.put(`${this.baseURL}/${id}`, user, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  updateUser2(user: User): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.put(this.host + "/update-user", user, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  deleteUser(id: number): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.delete(`${this.baseURL}/${id}`, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  /*getUsers(): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.get("http://localhost:8088/users", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }*/
  /*getUsers2():Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.get(this.baseURL, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }*/
  getUsers(): Observable<Object> {
    if(this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/users", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
