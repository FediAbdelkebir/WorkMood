import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../../Models/reclamation';
import { StatusReclamation } from '../../Models/status-reclamation';
import { ReclamationBackService } from '../../Services/reclamation-back.service';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-reclamations-back',
  templateUrl: './list-reclamations-back.component.html',
  styleUrls: ['./list-reclamations-back.component.css']
})
export class ListReclamationsBackComponent implements OnInit {

  reclamations!: Reclamation[];
  statusReclamationEnum: any = StatusReclamation;
  keys: string[]=[];
  status!: StatusReclamation;
  id!: number;
  reclamation!: Reclamation;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
  searchText!:any;
  constructor(private s: ReclamationBackService) {
    this.keys = Object.keys(this.statusReclamationEnum);
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.s.listReclamations().subscribe(
      (d)=>{
        this.reclamations=d;
      }
    );
  }

  getById(r: any) {
    Swal.fire({
      title: '<strong>Do you want to delete this reclamation ?</strong>',
      icon: 'error',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      focusConfirm: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#1fb79b',
    }).then((result) => {
      if (result.isConfirmed) {
        this.s.deleteReclamation(r.idReclamation).subscribe((d) => {
          () => {
            Swal.fire('Deleted!', '', 'success');
            
          };
        });
       window.location.reload();
      }
    });
  }

  /*showById(r:any){
    this.s.showById(r.idReclamation).subscribe(
      (d)=>{
        this.reclamation=d;
      }
    );
  }*/

  getByStatus(c: StatusReclamation){
    let id=1;
    console.log(c);
    console.log(this.status);
    
    this.s.findByType(c, id).subscribe(
      (d)=>{
        this.reclamations=d;
        console.log(d);
      }
    );
  }
  onChange(){
    let id=1;
    this.s.findByType(this.status, id).subscribe(
      (d)=>{
        this.reclamations=d;
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
  treat(){
    
  }

}
