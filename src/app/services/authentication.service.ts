import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host: string = "http://localhost:8088";
  private jwtToken = null;
  private roles: Array<any>;
  constructor(private http: HttpClient, private router: Router) { }
  login(user) {
    return this.http.post(this.host+"/login", user, {observe: 'response'});
  }
  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).role;
    console.log(localStorage.getItem('token'));
  }
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  securePath() {
    if(!this.isUser()) {
      this.logout();
    }
  }
  isUser() {
    this.jwtToken = localStorage.getItem('token');
    if (this.jwtToken == null) return false;
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).role;
    for (let r of this.roles) {
      if (r.authority == 'USER') return true;
    }
    return false;
    //if(this.jwtToken == null)
  }

  isProf() {
    this.jwtToken = localStorage.getItem('token');
    if (this.jwtToken == null) return false;
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).role;
    for (let r of this.roles) {
      if (r.authority == 'PROF') return true;
    }
    return false;
  }

  isAdmin() {
    this.jwtToken = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).role;
    for (let r of this.roles) {
      if (r.authority == 'ADMIN') return true;
    }
    return false;
  }

  isSuperAdmin() {
    this.jwtToken = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).role;
    for(let r of this.roles) {
      if (r.authority == 'SUPERADMIN') return true;
    }
    return false;
  }

}
