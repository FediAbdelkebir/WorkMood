import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';

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
  ngOnInit(): void {
    this.es.LikedEventsByUserId(this.iduser).subscribe(
      (data)=>{
        this.ListLiked=data;
console.log(data)
      }
    )
  }
  QuitEvent(){
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
        Swal.fire({
          title: '<strong>Success!</strong>',
          icon: 'success',
          html:
            '<b>Congratulations !</b> You Liked The Event ' 
        }
        )
      } 
    }
    )
  }
  LikeEvent(){
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
        Swal.fire({
          title: '<strong>Success!</strong>',
          icon: 'success',
          html:
            '<b>Congratulations !</b> You Liked The Event ' 
        }
        )
      } 
    }
    )
  }
}
