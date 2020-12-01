import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RapportService } from 'src/app/services/rapport.service';
import { Rapport } from '../rapport';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-create-rapport',
  templateUrl: './create-rapport.component.html',
  styleUrls: ['./create-rapport.component.css']
})
export class CreateRapportComponent implements OnInit {

  public formData = new FormData();
  public rapport: Rapport = new Rapport();
  public selectedFile: File = null;
  public host: string = "http://localhost:8088/postFile";
  constructor(private rapportService: RapportService,
    private router: Router,
    private http: HttpClient, public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(title) {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    fd.append('titre', title);
    console.log(title);
    this.http.post(this.host, fd)
    .subscribe(res => {
      console.log(res);
      this.goToRapportList();
    })

  }
  onSubmit(){
    console.log(this.rapport);
    //this.saveRapport();
  }

  goToRapportList(){
    this.router.navigate(['/rapports']);
  }
}
