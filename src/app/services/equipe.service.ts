import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  public host: string = "http://localhost:8088";
  constructor(private http: HttpClient) { }

  public getEquipes() {
    return this.http.get(this.host + "/equipes");
  }
  public getUsers(equipe) {
    let url = equipe._links.membres.href;
    return this.http.get(url);
  }
}
