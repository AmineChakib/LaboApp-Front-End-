import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mode: number = 0;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(user) {
    //console.log(dataForm);
    this.authService.login(user).subscribe(resp => {
      let jwt = resp.headers.get('Authorization');
      //console.log(jwt);
      this.authService.saveToken(jwt);
      this.router.navigateByUrl('/users');
    }, err =>{
      this.mode = 1;
    })
  }

}
