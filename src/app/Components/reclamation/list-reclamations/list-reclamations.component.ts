import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Models/reclamation';
import { StatusReclamation } from 'src/app/Models/status-reclamation';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import { ListOffersComponent } from '../../offer/list-offers/list-offers.component';

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.css']
})
export class ListReclamationsComponent implements OnInit {

  reclamations!: Reclamation[];
  statusReclamationEnum: any = StatusReclamation;
  keys: string[]=[];
  status!: StatusReclamation;
  id!: number;

  constructor(private s: ReclamationService) {
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

  treatReclamation(){
    let idUSer=1;
    this.s.treatReclamation(this.id,idUSer).subscribe(
      ()=>{
        alert('réclamation traitée !');
      }
    );
  }

}
