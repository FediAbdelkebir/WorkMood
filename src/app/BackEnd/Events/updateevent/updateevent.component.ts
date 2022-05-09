import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTags } from 'src/app/Models/event-tags';
import { EventType } from 'src/app/Models/event-type';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';
import { Event } from 'src/app/Models/event';
@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {
  Typetoggle = true;
  Typestatus = 'Enable'; 
  Tagtoggle = true;
  Tagstatus = 'Enable'; 
  event!:Event;
  listeventtype!:any;
  listeventtags!:any;
  eventid:any
  constructor(private router: Router,private route: ActivatedRoute,private ES:EvenementService,private datepipe:DatePipe) { 
    this.event= new Event();
  }

  ngOnInit(): void {
    this.eventid=this.route.snapshot.paramMap.get('id');
    this.ES.FindEvenementById(this.eventid).subscribe(
      (data:any) => {
        this.event=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
      );
    this.listeventtype=[];
    this.listeventtags=[];
    this.listeventtype.push("CHALLENGE","FORMATION")
    this.listeventtags.push("Fun","Music","Dance","Mountains","Exploring","Event","Competition","Rewards","Challenges","Trouphies","CodingParty","Food","Buisness","VideoGames","Online"
      )
  }
  Yes(){
    this.event.trouphy=true;
  }
  No(){
this.event.trouphy=false
  }
  update() {
    //this.event.dateStart =this.datepipe.transform(this.event.dateStart, 'yyyy-MM-dd');
    //this.event.dateEnd =this.datepipe.transform(this.event.dateEnd, 'yyyy-MM-dd');
       console.log(this.event)
       this.ES.UpdateEvenement(this.event).subscribe(
         (data:any) => {
           Swal.fire({
             title: '<strong>Success!</strong>',
             icon: 'success',
             html:
               '<b>Congratulations !</b> You Updated The Event ' 
           }
           )
           console.log(data) 
           this.router.navigateByUrl("UpdateEventList");
         },
         (error)=>{
           Swal.fire({
             title: '<strong>Error!</strong>',
             icon: 'error',
             html:
               '<b>Something Is Wrong !</b> Check ' 
           }
           )
           console.log(error)
         }
         );
   
   }
   
   Tag(item:EventTags){
     this.Tagtoggle = !this.Tagtoggle;
     this.Tagstatus = this.Tagstatus ? 'Enable' : 'Disable';
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
     console.log("EventTag"+this.event.eventTags)
   }
   
   Type(item:EventType){
     this.Typetoggle = !this.Typetoggle;
     this.Typestatus = this.Typestatus ? 'Enable' : 'Disable';
     if(item.toString()=="CHALLENGE"){
       this.event.type=EventType.CHALLENGE;
     }
     else{
       this.event.type=EventType.FORMATION;
     }
     
     console.log("EventType"+this.event.type)
   }
   UpdateEvent(){
     Swal.fire({
       title: '<strong>Update This Event ?</strong>',
       icon: 'info',
       html:
         'You can <a href="/Evenements">Check your Posted Events</a> <b>later</b>, ',
       showCloseButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       showCancelButton: true,
       focusConfirm: false,
       confirmButtonText:
         '<i class="fa fa-heart"></i> Yes, Update it !',
       confirmButtonAriaLabel: '',
       cancelButtonText:
         '<i class="fa fa-close"></i> No,I Changed My mind',
       cancelButtonAriaLabel: ''
     }).then((result) => {
       if (result.isConfirmed) {
         this.update();
       
       } 
     }
     )
   }

}
