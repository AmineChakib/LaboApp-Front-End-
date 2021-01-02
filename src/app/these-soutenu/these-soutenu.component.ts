import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TheseSoutenuService } from '../services/these-soutenu.service';
@Component({
  selector: 'app-these-soutenu',
  templateUrl: './these-soutenu.component.html',
  styleUrls: ['./these-soutenu.component.css']
})
export class TheseSoutenuComponent implements OnInit {
  public theseSoutenus;
  public theseSoutenusOriginal;
  public titre;
  constructor(private httpClient: HttpClient, public router: Router, private theseSoutenuService: TheseSoutenuService,
     public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.theseSoutenuService.getTheses().subscribe(data =>{
      this.theseSoutenus = data;
      this.theseSoutenus = this.theseSoutenusOriginal = this.theseSoutenus._embedded.theseSoutenus;
      //console.log(this.theseSoutenus._embedded.theseSoutenus);
    }, err => {
      this.authService.logout();
      this.router.navigateByUrl('/login');
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
      this.theseSoutenus = this.theseSoutenusOriginal;
    }
    else{
      //this.users = this.listUser._embedded.users;
        this.theseSoutenus = this.theseSoutenusOriginal.filter(res =>{
          return res.titre.toLocaleLowerCase().match(this.titre.toLocaleLowerCase());
        })

    }
  }
}
