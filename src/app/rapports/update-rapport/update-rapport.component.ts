import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RapportService } from 'src/app/services/rapport.service';
import { Rapport } from '../rapport';

@Component({
  selector: 'app-update-rapport',
  templateUrl: './update-rapport.component.html',
  styleUrls: ['./update-rapport.component.css']
})
export class UpdateRapportComponent implements OnInit {
  id: number;
  public selectedFile: File = null;
  public rapport: Rapport = new Rapport();
  public host: string = "http://localhost:8088/postFile";
  closeResult = '';
  constructor(private rapportService: RapportService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router, private modalService: NgbModal, public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rapportService.getRapportById(this.id).subscribe(data =>{
      this.rapport = data;
    }, error => console.log(error))
  }
  onSubmit(){
    this.rapportService.updateRapport(this.id, this.rapport).subscribe(data => {
      this.goToRapportList();
    }, error => console.log(error));
  }
  goToRapportList(){
    this.router.navigate(['/rapports']);
  }

}
