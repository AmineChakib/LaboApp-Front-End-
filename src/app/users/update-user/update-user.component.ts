import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: number;
  public user: User = new User();

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router, public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data =>{
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.userService.updateUser2(this.user).subscribe(data => {
      this.goToUserList();
    }, error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }
  public fonctions = [
    { value: 'administrateur', display: 'Administrateur' },
    { value: 'enseignant', display: 'Enseignant(e)' },
    { value: 'doctorant', display: 'Doctorant(e)' }
];
}
