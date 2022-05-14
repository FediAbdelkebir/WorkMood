import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';
import { Event } from 'src/app/Models/event';
@Component({
  selector: 'app-likedevents',
  templateUrl: './likedevents.component.html',
  styleUrls: ['./likedevents.component.css']
})
export class LikedeventsComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private es:EvenementService) { }
  filterTerm:any;
  ListLiked!:Event[];
  iduser=1;
  showLoader = true;
  pages: number = 1;
  public async ngOnInit(): Promise<void> {
    this.FindAll()
  }
  async FindAll(){
await this.es.LikedEventsByUserId(this.iduser).subscribe(
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
      title: 'Liked Events Successfully Loaded From The Database .'
    })
    this.ListLiked=data;
console.log(data)
  },(error)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    Toast.fire({
      title: 'Your Liked Events<strong> Failed </strong>To Load From The Database',
      icon: 'error'
    })
  }
)
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
}
