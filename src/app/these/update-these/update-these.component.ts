import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TheseService } from 'src/app/services/these.service';
import { These } from '../these';

@Component({
  selector: 'app-update-these',
  templateUrl: './update-these.component.html',
  styleUrls: ['./update-these.component.css']
})
export class UpdateTheseComponent implements OnInit {
  id: number;
  public these: These = new These();
  constructor(private theseService: TheseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.theseService.getTheseById(this.id).subscribe(data =>{
      this.these = data;
    }, err => console.log(err));
  }
  onSubmit() {
    this.theseService.updateThese(this.id, this.these).subscribe(data => {
      this.goToTheseList();
    }, err => console.log(err));
  }
  goToTheseList(){
    this.router.navigate(['/theses']);
  }
}
