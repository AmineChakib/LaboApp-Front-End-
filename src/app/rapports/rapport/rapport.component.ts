import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RapportService } from 'src/app/services/rapport.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  titre;
  listRapports;
  listRpportsOriginal;
  closeResult = '';
  constructor(private httpClient: HttpClient, public router: Router, public rapportService: RapportService,
     private modalService: NgbModal) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8088/rapports").subscribe(data=>{
      this.listRapports = data;
      this.listRapports = this.listRpportsOriginal = this.listRapports._embedded.rapports;
    }, err=>{
      console.log(err);
    })
  }
  updateRapport(id: number) {
    this.router.navigate(['update-rapport', id]);
  }
  deleteRapport(id: number) {
    this.rapportService.deleteRapport(id).subscribe(data =>{
      this.httpClient.get("http://localhost:8088/rapports").subscribe(data =>{
        this.listRapports = data;
        this.listRapports = this.listRapports._embedded.rapports;
      })
    }, err =>{
      console.log(err);
    })
  }
  Search(){
    if(this.titre == "") {
      this.listRapports = this.listRpportsOriginal;
    }
    else{
      //this.users = this.listUser._embedded.users;
      this.listRapports = this.listRpportsOriginal.filter(res =>{
        return res.titre.toLocaleLowerCase().match(this.titre.toLocaleLowerCase());
      })
    }
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
