import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Models/reclamation';
import { StatusReclamation } from 'src/app/Models/status-reclamation';
import { ReclamationService } from 'src/app/Services/reclamation.service';

import {faArrowDownShortWide} from '@fortawesome/free-solid-svg-icons';
import {faArrowUpWideShort} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-reclamations-by-user',
  templateUrl: './list-reclamations-by-user.component.html',
  styleUrls: ['./list-reclamations-by-user.component.css']
})
export class ListReclamationsByUserComponent implements OnInit {

  reclamationsUser!: Reclamation[];
  reclamations!: Reclamation[];
  reclamation!: any;
  statusReclamationEnum: any = StatusReclamation;
  keys: string[]=[];
  status!: StatusReclamation;
  id!: number;

  faArrowDownShortWide=faArrowDownShortWide;
  faArrowUpWideShort=faArrowUpWideShort;

  idCurrentReclamation!: number;

  constructor(private s: ReclamationService, private router: Router, private activate: ActivatedRoute) {
    this.keys = Object.keys(this.statusReclamationEnum);
  }

  ngOnInit(): void {
    this.getAllByUser();
  }

  getAllByUser(){
    let idUser=1; 
    this.s.findByUser(idUser).subscribe(
      (d)=>{
        this.reclamationsUser=d;
      }
    );
  }

  getById(r:any){
    Swal.fire({
      title: '<strong>Complaint :<u><br>'+r.objet+'</u></strong>',
      icon: 'info',
      html:
        '<br>Processing Date : '+r.processingDate +
        '<br>Response :'+ r.response,
      showCloseButton: true,
      //showCancelButton: true,
      focusConfirm: true,
      confirmButtonText: 'Close',
      confirmButtonColor: '#1fb79b',
        //'<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
    this.s.showById(r.idrec).subscribe(
      (d)=>{
        this.reclamation=d;
        console.log(this.reclamation)
      }
    );
  }

  getByStatus(c: StatusReclamation){
    let id=1;
    console.log(c);
    console.log(this.status);
    
    this.s.findByType(c, id).subscribe(
      (d)=>{
        //this.reclamations=d;
        this.reclamationsUser=d;
        console.log(d);
        
      }
    );
  }
  onChange(){
    let id=1;
    this.s.findByType(this.status, id).subscribe(
      (d)=>{
        //this.reclamations=d;
        this.reclamationsUser=d;
        console.log(d);
      }
    );
  }

  sortByCreationDateAsc(){
    this.s.findByCreationDateAsc().subscribe(
      (e)=>{
        this.reclamations=e;
        console.log(e);
        
      }
    );
  }
  sortByCreationDateDesc(){
    this.s.findByCreationDateDesc().subscribe(
      (e)=>{
        this.reclamations=e;
        console.log(e);
        
      }
    );
  }
  sortByProcessingDateAsc(){
    this.s.findByProcessingDateAsc().subscribe(
      (e)=>{
        this.reclamations=e;
        console.log(e);
        
      }
    );
  }
  sortByProcessingDateDesc(){
    this.s.findByProcessingDateDesc().subscribe(
      (e)=>{
        this.reclamations=e;
        console.log(e);
        
      }
    );
  }
  
  /* User Methods */
  getByStatusByUser(c: StatusReclamation){
    let id=1;
    console.log(c);
    console.log(this.status);
    
    this.s.findByTypeByUser(c, id).subscribe(
      (d)=>{
        //this.reclamations=d;
        this.reclamationsUser=d;
        console.log(d);
        
      }
    );
  }
  onChangeUser(){
    let id=1;
    this.s.findByTypeByUser(this.status, id).subscribe(
      (d)=>{
        //this.reclamations=d;
        this.reclamationsUser=d;
        console.log(d);
      }
    );
  }

  sortByCreationDateAscByUser(){
    let id=1;
    this.s.findByCreationDateAscByUser(id).subscribe(
      (e)=>{
        this.reclamationsUser=e;
        console.log(e);
        
      }
    );
  }
  sortByCreationDateDescByUser(){
    let id=1;
    this.s.findByCreationDateDescByUser(id).subscribe(
      (e)=>{
        this.reclamationsUser=e;
        console.log(e);
        
      }
    );
  }
  sortByProcessingDateAscByUser(){
    let id=1;
    this.s.findByProcessingDateAscByUser(id).subscribe(
      (e)=>{
        this.reclamationsUser=e;
        console.log(e);
        
      }
    );
  }
  sortByProcessingDateDescByUser(){
    let id=1;
    this.s.findByProcessingDateDescByUser(id).subscribe(
      (e)=>{
        this.reclamationsUser=e;
        console.log(e);
        
      }
    );
  }
  save(f: any) {
    let id = 1;
    //id= this.userService.getCurrentUser().getId();
    this.s.addReclamation(f, id).subscribe(() => {
      this.router.navigate(['Reclamations']);
    });
  }

}
