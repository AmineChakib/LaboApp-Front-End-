import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public user: User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToUserList();
    },
    err => console.log(err));
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }
  public fonctions = [
    { value: 'Administrateur', display: 'Administrateur' },
    { value: 'Enseignant', display: 'Enseignant(e)' },
    { value: 'Doctorant', display: 'Doctorant(e)' },
    { value: 'Etudiant', display: 'Etudiant(e)' }
];
}
