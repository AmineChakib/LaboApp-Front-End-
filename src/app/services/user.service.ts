import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8088/users";
  public host: string = "http://localhost:8088";
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<object> {
    return this.http.post(this.host + "/user", user);
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, user);
  }
  deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getUsers(): Observable<Object> {
    return this.http.get("http://localhost:8088/users");
  }
  getUsers2() {
    return this.http.get<User[]>(this.baseURL);
  }
}
