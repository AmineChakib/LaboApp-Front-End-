import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  titre;
  listRapports;
  constructor(private httpClient: HttpClient, public router: Router, public rapportService: RapportService) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8088/rapports").subscribe(data=>{
      this.listRapports = data;
      this.listRapports = this.listRapports._embedded.rapports;
    }, err=>{
      console.log(err);
    })
  }
  updateRapport(id: number) {

  }
  deleteRapport(id: number) {

  }
  Search(){
    if(this.titre == "") {
      this.ngOnInit();
    }
    else{
      //this.users = this.listUser._embedded.users;
      this.listRapports = this.listRapports.filter(res =>{
        return res.titre.toLocaleLowerCase().match(this.titre.toLocaleLowerCase());
      })
    }
  }
}
