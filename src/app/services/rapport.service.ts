import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  public host: string = "http://localhost:8088";
  constructor() { }
}
