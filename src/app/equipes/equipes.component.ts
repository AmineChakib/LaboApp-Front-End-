import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-equi',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  public equipes;
  public listUsers;
  public currentEquipe;
  constructor(public equipeService: EquipeService, private router: Router) { }

  ngOnInit(): void {
    this.equipeService.getEquipes()
    .subscribe(data=>{
      this.equipes = data;
      this.equipes._embedded.equipes.forEach(equipe => {
        this.equipeService.getUsers(equipe)
        .subscribe(data => {
          equipe.members = data;
        }, err => {
          console.log(err);
        })
      })
    }, err=>{
      console.log(err);
    });
  }

//    for (var val of this.listUser._embedded.users) {
//      return val.prenom; // prints values: 10, 20, 30, 40
//    }


}
