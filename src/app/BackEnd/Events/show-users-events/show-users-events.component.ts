import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-users-events',
  templateUrl: './show-users-events.component.html',
  styleUrls: ['./show-users-events.component.css']
})
export class ShowUsersEventsComponent implements OnInit {
  filterTerm:any;
  constructor(private bs:EvenementService,private router: Router,private route: ActivatedRoute) { }
userid!:any;
showLoader = true;
listuserevents:any;
listevents:any;
show=false;
affectid!:number;
public async ngOnInit(): Promise<void> {
    this.FindAllEvents()
    this.userid=this.route.snapshot.paramMap.get('id');
    this.bs.UserJoinedEvents(this.userid).subscribe(
      (data:any) => {
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
        this.listuserevents=data;
        console.log(this.listuserevents)
      },
      (error)=>{
        console.log(error)
      }
      );
  }
  async FindAllEvents(){
  await this.bs.FindAllEvenements().subscribe((data)=>{
    this.listevents=data
  })
}
  RemoveEvent(id:number){
    this.bs.RemoveUserFromEvent(id,this.userid).subscribe( 
      (data)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Events Successfully Removed From The User .'
      })
      this.ngOnInit()
    },(error)=>{
      
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        title: 'Oops Remove <strong> Failed </strong>something is wrong',
        icon: 'error'
      })
      this.ngOnInit()
    })
    
  }
  Remove(id:number){
    Swal.fire({
      title: '<strong>Delete This Event From user?</strong>',
      icon: 'info',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-check"></i> Yes, Delete it !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I Changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
    this.RemoveEvent(id);
      
      } 
    }
    )
  }
  SelectEvent(t:number){
    this.affectid=t;
    console.log(t)
      }
  Show(reverse:boolean){
this.show=reverse;
  }
  Affect(){
    Swal.fire({
      title: '<strong>Affect This Event to user?</strong>',
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
    this.AddUserEvent(this.affectid);
      
      } 
    }
    )
  }
 
AddUserEvent(id:number){
    this.bs.AffecterEventToUser(id,this.userid).subscribe( 
      (data)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Events Successfully Added to The User .'
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
      this.ngOnInit()
    })
  }
  delete(id:any){
    Swal.fire({
      title: '<strong>Remove This Event ?</strong>',
      icon: 'info',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-check"></i> Yes, Remove it !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I Changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.RemoveEvent(id);
      
      } 
    }
    )
  }

}
