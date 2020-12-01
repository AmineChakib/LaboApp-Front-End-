import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TheseSoutenuService } from 'src/app/services/these-soutenu.service';
import { TheseSoutenu } from '../these-soutenu';

@Component({
  selector: 'app-update-these-soutenu',
  templateUrl: './update-these-soutenu.component.html',
  styleUrls: ['./update-these-soutenu.component.css']
})
export class UpdateTheseSoutenuComponent implements OnInit {
  id: number;
  public theseSoutenu: TheseSoutenu = new TheseSoutenu();
  constructor(private theseSoutenuService: TheseSoutenuService, private route: ActivatedRoute,
     private router: Router, public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.theseSoutenuService.getTheseById(this.id).subscribe(data =>{
      this.theseSoutenu = data;
    }, err => console.log(err));
  }
  onSubmit() {
    this.theseSoutenuService.updateThese(this.id, this.theseSoutenu).subscribe(data =>{
      this.goToTheseList();
    }, err => console.log(err))
  }
  goToTheseList(){
    this.router.navigate(['/theseSoutenus']);
  }
}
