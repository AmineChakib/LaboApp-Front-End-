import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-us',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsersOriginal;
  listUser;
  username: any;
  constructor(private httpClient: HttpClient, public router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers2().subscribe(data=>{
      this.listUser = data;
      this.listUser = this.listUsersOriginal = this.listUser._embedded.users;
    }, err=>{
      console.log(err);
    })
  }
  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data =>{
      this.userService.getUsers2().subscribe(data =>{
        this.listUser = data;
        this.listUser = this.listUser._embedded.users;
      })
    }, err =>{
      console.log(err);
    })
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }
  Search(){
    if(this.username == "") {
      this.listUser = this.listUsersOriginal;
    }
    else{
      //this.users = this.listUser._embedded.users;
      this.listUser = this.listUsersOriginal.filter(res =>{
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
}
