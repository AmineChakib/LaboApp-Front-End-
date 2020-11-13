import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheseService } from '../services/these.service';

@Component({
  selector: 'app-these',
  templateUrl: './these.component.html',
  styleUrls: ['./these.component.css']
})
export class TheseComponent implements OnInit {

  public theses;
  public titre;
  constructor(private httpClient: HttpClient, public router: Router, private theseService: TheseService) { }

  ngOnInit(): void {
    this.theseService.getTheses().subscribe(data =>{
      this.theses = data;
      this.theses = this.theses._embedded.theses;
    }, err=>{
      console.log(err);
    })
  }
  updateThese(id: number){
    this.router.navigate(['update-these', id]);
  }
  deleteThese(id: number) {
    this.theseService.deleteThese(id).subscribe(data =>{
      this.theseService.getTheses().subscribe(data =>{
        this.theses = data;
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
      this.theses = this.theses.filter(res =>{
        return res.titre.toLocaleLowerCase().match(this.titre.toLocaleLowerCase());
      })
    }
  }
}
