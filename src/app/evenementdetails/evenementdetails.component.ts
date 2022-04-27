import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../Models/event';
import { EvenementService } from '../Services/evenement.service';

@Component({
  selector: 'app-evenementdetails',
  templateUrl: './evenementdetails.component.html',
  styleUrls: ['./evenementdetails.component.css']
})
export class EvenementdetailsComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private es:EvenementService) { }
  eventid:any
   event!:any
  ngOnInit(): void {
    this.eventid=this.route.snapshot.paramMap.get('id');
    this.es.FindEvenementById(this.eventid).subscribe(
      (data:any) => {
        this.event=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
      );
  }

}
