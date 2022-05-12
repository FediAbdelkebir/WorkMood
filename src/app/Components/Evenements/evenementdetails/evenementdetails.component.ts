import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { Event } from '../../../Models/event'
import { EvenementService } from '../../../Services/evenement.service';

@Component({
  selector: 'app-evenementdetails',
  templateUrl: './evenementdetails.component.html',
  styleUrls: ['./evenementdetails.component.css']
})
export class EvenementdetailsComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private es:EvenementService) {
    this.event=new Event();
   }
  eventid:any
   event!:Event
   listrecommended:any;
   iduser=1;
  ngOnInit(): void {
    this.eventid=this.route.snapshot.paramMap.get('id');
    this.es.FindEvenementById(this.eventid).subscribe(
      (data:any) => {
        this.event=data;
        console.log(data)
        this.es.RecommendedEvents(this.event.eventTags).subscribe((data)=>{
          this.listrecommended=data;
        })
      },
      (error)=>{
        console.log(error)
      }
      );
      
  }

}
