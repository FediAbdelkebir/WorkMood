import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from '../evenement.service';
import { Event } from '../event';
import { EventTags } from '../event-tags';
import { EventType } from '../event-type';
@Component({
  selector: 'app-addevenement',
  templateUrl: './addevenement.component.html',
  styleUrls: ['./addevenement.component.css']
})
export class AddevenementComponent implements OnInit {

  event!:Event;
  listeventtype!:EventType[];
  listeventtags!:EventTags[];
  constructor(private router: Router,private PS:EvenementService) { 
    this.event= new Event();
  }

  ngOnInit(): void {
    
  }
  save() {
    this.PS.save(this.event).subscribe(
      (data:any) => {
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
      );

}
Tag(item:EventTags){
  this.event.eventTags=item;
  console.log(this.event.eventTags)
}

Type(item:EventType){
  this.event.type=item;
  console.log(this.event.type)
}
}
