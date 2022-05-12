import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/Models/badge';
import { User } from 'src/app/Models/user';
import { BadgesService } from 'src/app/Services/badges.service';
import Swal from 'sweetalert2';
import { Event } from 'src/app/Models/event';
import { EvenementService } from 'src/app/Services/evenement.service';

@Component({
  selector: 'app-badges-event',
  templateUrl: './badges-event.component.html',
  styleUrls: ['./badges-event.component.css']
})
export class BadgesEventComponent implements OnInit {
  filterTerm:any;
  listbadges:any;
  iduser=1;
  showLoader = true;
  listuserbadges:any[];
  constructor(private bs:BadgesService,private es:EvenementService) { 
    this.listuserbadges=[]
  }

  ngOnInit(): void {
    this.FindAll();
   this.FinAllUserBadges();
  }
FindAll(){
  this.bs.FindAllBadges().subscribe(
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
        title: 'Badges Successfully Loaded From The Database .'
      })
      this.listbadges=data;
console.log(data)
    },(error)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        title: 'Badges<strong> Failed </strong>To Load From The Database',
        icon: 'error'
      })
    }
  )
  
}
FinAllUserBadges(){
  this.es.FindUserById(this.iduser).subscribe(
    (data) => {
      this.showLoader=false;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Users Successfully Loaded From The Database .'
      })
      this.listuserbadges.push(data.acquiredBadges);
      console.log(this.listuserbadges)
     
        
    },
    (error)=>{
      console.log(error)
    }
    );
}

Buy(idbadge:number){
  Swal.fire({
    title: '<strong>Affect This Badge to user?</strong>',
    icon: 'info',
    showCloseButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-check"></i> Yes, Affect it !',
    confirmButtonAriaLabel: '',
    cancelButtonText:
      '<i class="fa fa-close"></i> No,I Changed My mind',
    cancelButtonAriaLabel: ''
  }).then((result) => {
    if (result.isConfirmed) {
  this.AddUserBadge(idbadge);
    
    } 
  }
  )
}

AddUserBadge(id:number){
  this.bs.AffecterBadgeToUser(id,this.iduser).subscribe( 
    (data)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      icon: 'success',
      title: 'Badges Successfully Added to The User .'
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
      title: 'Oops Add <strong> Failed </strong>something is wrong',
      icon: 'error'
    })
  })
}
}
