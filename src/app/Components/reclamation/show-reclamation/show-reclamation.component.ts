import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-show-reclamation',
  templateUrl: './show-reclamation.component.html',
  styleUrls: ['./show-reclamation.component.css']
})
export class ShowReclamationComponent implements OnInit {

  id!: number;
  reclamation!: any;

  constructor(private s: ReclamationService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.id=this.activate.snapshot.params['id'];
    this.s.showById(this.id).subscribe(
      (d)=>{
        this.reclamation=d;
      }
    );
  }

}
