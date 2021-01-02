import { Component, OnInit } from '@angular/core';
import {RapportProf} from "../rapport";
import {RapportService} from "../../services/rapport.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-rapport-prof',
  templateUrl: './create-rapport-prof.component.html',
  styleUrls: ['./create-rapport-prof.component.css']
})
export class CreateRapportProfComponent implements OnInit {
  public selectedFile: File = null;
  public rapportprof: RapportProf = new RapportProf();
  public host: string = "http://localhost:8088/postFile";
  constructor(
    private rapportService: RapportService,
    private router: Router,
    private http: HttpClient,  public authService: AuthenticationService) { }

  ngOnInit(): void {
    /*if(!this.authService.isUser()){
      this.authService.logout();
      this.router.navigateByUrl('/login');
    }*/

      if(!this.authService.isProf()){
        this.router.navigateByUrl('/rapports');

    }
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
  onSubmit() {
    console.log(this.rapportprof);

  }
  goToRapportList(){
    this.router.navigate(['/rapports']);
  }
}
