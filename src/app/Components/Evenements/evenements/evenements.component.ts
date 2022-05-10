import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Models/event';
import { User } from 'src/app/Models/user';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  constructor(private router: Router,private es:EvenementService) { }
  filterTerm:any;
  listevenements!:Event[];
  iduser=1;
  showLoader = true;
  public async ngOnInit(): Promise<void> {
   this.FindAll()
  }
  async FindAll(){
    await this.es.FindAllEvenements().subscribe(
      (data)=>{
        this.showLoader=false;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        Toast.fire({
          icon: 'success',
          title: 'Events Successfully Loaded From The Database .'
        })
        this.listevenements=data;
console.log(data)
      },(error)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        Toast.fire({
          title: 'Events<strong> Failed </strong>To Load From The Database',
          icon: 'error'
        })
      }
    )
  }
  Home(){
    this.router.navigate(['Home']);
  }
   checknolike(event:Event){
    let u :any; 
    u = new User();
    let check=false;
    if (event.usersLiked.find(x => x.idUser === this.iduser)){
      check=true;
    }
      else {
        check=false
      }
      return  check;
  }
  checknojoin(event:Event){
    let u :any; 
    u = new User();
    let check=false;
    if (event.users.find(x => x.idUser === this.iduser)){
      check=true;
    }
      else {
        check=false
      }
      return  check;
  }
/*
  checknodislike(idevent:any){
    if(){
      return true;
    }else {
      return false;
    }
  }*/
  JoinEvent(idevent:any){
    Swal.fire({
      title: '<strong>Join This Event ?</strong>',
      icon: 'info',
      html:
        'You can win <b>Points</b>, ' +
        'That will help you <b>RankUp</b> ' ,
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-plus"></i> Yes, i would like to Join! !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.es.AffecterEventToUser(idevent,this.iduser).subscribe(
          (data)=>{
    Swal.fire({
      title: '<strong>Joined!</strong>',
      icon: 'success',
      html:
        '<b>Event !</b> Joined Successfully ' 
    }
    )
          },(error)=>{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              title: 'Events<strong> Failed </strong>To Join The event',
              icon: 'error'
            })
            this.ngOnInit();
          }
        )
      
        
        this.ngOnInit();
      } 
    }
    )
   
  }
  QuitEvent(idevent:any){
    Swal.fire({
      title: '<strong>Quit This Event ?</strong>',
      icon: 'info',
      html:
        'You can win <b>Points</b>, ' +
        'That will help you <b>RankUp</b> ' ,
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-plus"></i> Yes, i would like to Quit! !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.es.RemoveUserFromEvent(idevent,this.iduser).subscribe(
          (data)=>{
    Swal.fire({
      title: '<strong>Quitted!</strong>',
      icon: 'success',
      html:
        '<b>Event !</b> Quitted Successfully ' 
    }
    )
          },(error)=>{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              title: 'Events<strong> Failed </strong>To Quit From The Event',
              icon: 'error'
            })
            this.ngOnInit();
          }
        )
        this.ngOnInit();
      } 
    }
    )
   
  }
  LikeEvent(idevent:any){
    Swal.fire({
      title: '<strong>Like This Event ?</strong>',
      icon: 'info',
      html:
        'You can <a href="/Evenements">Check your liked Events</a> <b>later</b>, ',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-heart"></i> Yes, I Like it !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.es.LikeEvent(idevent,this.iduser).subscribe(
          (data)=>{
    Swal.fire({
      title: '<strong>Like !</strong>',
      icon: 'success',
      html:
        '<b>Event !</b> Liked Successfully' 
    }
    )
          },(error)=>{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              title: 'Events<strong> Failed </strong>To Like Event',
              icon: 'error'
            })
            this.ngOnInit();
          }
        )
      this.ngOnInit();
      } 
    }
    
    )
  }
  DisLikeEvent(idevent:any){
    Swal.fire({
      title: '<strong>DisLike This Event ?</strong>',
      icon: 'info',
      html:
        'You can <a href="/Evenements">Check your liked Events</a> <b>later</b>, ',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-close"></i> Yes, I Dislike it !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.es.DisLike(idevent,this.iduser).subscribe(
          (data)=>{
    Swal.fire({
      title: '<strong>DisLiked !</strong>',
      icon: 'success',
      html:
        '<b>Event !</b> DisLiked Successfully' 
    }
    )
    
          },(error)=>{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              title: 'Events<strong> Failed </strong>To Dislike Event',
              icon: 'error'
            })
            this.ngOnInit();
          }
        )
        this.ngOnInit();
      } 
      
    }
    )
  }

}
