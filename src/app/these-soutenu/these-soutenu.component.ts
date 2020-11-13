import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheseSoutenuService } from '../services/these-soutenu.service';
@Component({
  selector: 'app-these-soutenu',
  templateUrl: './these-soutenu.component.html',
  styleUrls: ['./these-soutenu.component.css']
})
export class TheseSoutenuComponent implements OnInit {
  public theseSoutenus;
  public titre;
  constructor(private httpClient: HttpClient, public router: Router, private theseSoutenuService: TheseSoutenuService) { }

  ngOnInit(): void {
    this.theseSoutenuService.getTheses().subscribe(data =>{
      this.theseSoutenus = data;
      this.theseSoutenus = this.theseSoutenus._embedded.theseSoutenus;
      //console.log(this.theseSoutenus._embedded.theseSoutenus);
    }, err => {
      console.log(err);
    })
  }
  updateThese(id: number){
    this.router.navigate(['update-theseSoutenu', id]);
  }
  deleteThese(id: number) {
    this.theseSoutenuService.deleteThese(id).subscribe(data =>{
      this.theseSoutenuService.getTheses().subscribe(data =>{
        this.theseSoutenus = data;
      })
    }, err =>{
      console.log(err);
    })
  }
  Search(){
    if(this.titre == "") {
      this.ngOnInit();
    }
    else{
      //this.users = this.listUser._embedded.users;

        this.theseSoutenus = this.theseSoutenus.filter(res =>{
          return res.titre.toLocaleLowerCase().match(this.titre.toLocaleLowerCase());
        })

    }
  }
}
