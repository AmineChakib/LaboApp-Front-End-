import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TheseService } from 'src/app/services/these.service';
import { These } from '../these';

@Component({
  selector: 'app-create-these',
  templateUrl: './create-these.component.html',
  styleUrls: ['./create-these.component.css']
})
export class CreateTheseComponent implements OnInit {
  public these: These = new These();
  constructor(private theseService: TheseService,
    private router: Router, public authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.these);
    this.saveThese();
  }

  saveThese() {
    this.theseService.createThese(this.these).subscribe(data =>{
      console.log(data);
      this.goToTheseList();
    }, err => console.log(err))
  }
  goToTheseList(){
    this.router.navigate(['/theses']);
  }

}
