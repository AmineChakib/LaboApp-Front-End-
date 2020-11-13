import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheseSoutenuService } from 'src/app/services/these-soutenu.service';
import { TheseSoutenu } from '../these-soutenu';

@Component({
  selector: 'app-create-these-soutenu',
  templateUrl: './create-these-soutenu.component.html',
  styleUrls: ['./create-these-soutenu.component.css']
})
export class CreateTheseSoutenuComponent implements OnInit {
  public theseSoutenu: TheseSoutenu = new TheseSoutenu();
  constructor(private theseSoutenuService: TheseSoutenuService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.theseSoutenu);
    this.saveThese();
  }
  saveThese() {
    this.theseSoutenuService.createThese(this.theseSoutenu).subscribe(data =>{
      console.log(data);
      this.goToTheseList();
    }, err => console.log(err))
  }
  goToTheseList(){
    this.router.navigate(['/theseSoutenus']);
  }
}
