import { Component, Directive, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit{

  public user: User = new User();
  constructor(private userService: UserService,
    private router: Router,  public authService: AuthenticationService) { }

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
    err => catchError(this.handleError));
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public fonctions = [
    { value: 'Administrateur', display: 'Administrateur' },
    { value: 'Enseignant', display: 'Enseignant(e)' },
    { value: 'Doctorant', display: 'Doctorant(e)' },
    { value: 'Etudiant', display: 'Etudiant(e)' }
];
}
