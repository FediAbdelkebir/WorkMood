import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-send-rewards',
  templateUrl: './send-rewards.component.html',
  styleUrls: ['./send-rewards.component.css']
})
export class SendRewardsComponent implements OnInit {

  constructor(private es:EvenementService) { }

  ngOnInit(): void {
  }
  
SendRewards(){
  this.es.EventWinners().subscribe( 
    (data)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      icon: 'success',
      title: 'Rewards Event Successfully Sent to The Users .'
    })
    this.ngOnInit();
  },(error)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    Toast.fire({
      title: 'Oops Sending <strong> Failed </strong>something is wrong',
      icon: 'error'
    })
    this.ngOnInit()
  })
}
  Verif(){
    Swal.fire({
      title: '<strong>Send Rewards Today?</strong>',
      icon: 'info',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-check"></i> Yes, Send Them !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I Changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
    this.SendRewards();
      
      } 
    }
    )
  }
}
