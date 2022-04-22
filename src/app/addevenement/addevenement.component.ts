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
  listeventtype!:any;
  listeventtags!:any;
  constructor(private router: Router,private PS:EvenementService) { 
    this.event= new Event();
  }

  ngOnInit(): void {
    this.listeventtype=[];
    this.listeventtags=[];
    this.listeventtype.push("CHALLENGE","FORMATION")
    this.listeventtags.push("Fun","Music","Dance","Mountains","Exploring","Event","Competition","Rewards","Challenges","Trouphies","CodingParty","Food","Buisness","VideoGames","Online"
      )
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
  if(item.toString()=="Fun"){
    this.event.eventTags=EventTags.Fun;
  }
  if(item.toString()=="Music"){
    this.event.eventTags=EventTags.Music;
  }
  if(item.toString()=="Dance"){
    this.event.eventTags=EventTags.Dance;
  }
  if(item.toString()=="Mountains"){
    this.event.eventTags=EventTags.Mountains;
  }
  if(item.toString()=="Exploring"){
    this.event.eventTags=EventTags.Exploring;
  }
  if(item.toString()=="Event"){
    this.event.eventTags=EventTags.Event;
  }
  if(item.toString()=="Competition"){
    this.event.eventTags=EventTags.Competition;
  }
  if(item.toString()=="Rewards"){
    this.event.eventTags=EventTags.Rewards;
  }
  if(item.toString()=="Challenges"){
    this.event.eventTags=EventTags.Challenges;
  }
  if(item.toString()=="Trouphies"){
    this.event.eventTags=EventTags.Trouphies;
  }
  if(item.toString()=="CodingParty"){
    this.event.eventTags=EventTags.CodingParty;
  }
  if(item.toString()=="Food"){
    this.event.eventTags=EventTags.Food;
  }
  if(item.toString()=="Buisness"){
    this.event.eventTags=EventTags.Food;
  }
  if(item.toString()=="VideoGames"){
    this.event.eventTags=EventTags.VideoGames;
  }
  if(item.toString()=="Online"){
    this.event.eventTags=EventTags.Online;
  }
  console.log(this.event.eventTags)
}

Type(item:EventType){
  if(item.toString()=="CHALLENGE"){
    this.event.type=EventType.CHALLENGE;
  }
  else{
    this.event.type=EventType.FORMATION;
  }
  
  console.log(this.event.type)
}
}
