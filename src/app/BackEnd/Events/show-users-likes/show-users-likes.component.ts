import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-users-likes',
  templateUrl: './show-users-likes.component.html',
  styleUrls: ['./show-users-likes.component.css']
})
export class ShowUsersLikesComponent implements OnInit {
  filterTerm:any;
  constructor(private bs:EvenementService,private router: Router,private route: ActivatedRoute) { }
userid!:any;
showLoader = true;
listuserlikedevents:any;
listevents:any;
show=false;
affectid!:number;
public async ngOnInit(): Promise<void> {
    this.FindAllEvents();
    this.userid=this.route.snapshot.paramMap.get('id');
    this.LikedE()
  }
  async FindAllEvents(){
  await this.bs.FindAllEvenements().subscribe((data)=>{
    this.listevents=data
  })
}
  RemoveEvent(id:number){
    this.bs.DisLike(id,this.userid).subscribe( 
      (data)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Events Successfully Disliked From The User .'
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
  LikedE(){
    this.bs.LikedEventsByUserId(this.userid).subscribe(
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
        this.listuserlikedevents=data;
        console.log(this.listuserlikedevents)
      },
      (error)=>{
        console.log(error)
      }
      );
  }
  Remove(id:number){
    Swal.fire({
      title: '<strong>Dislike This Event From user?</strong>',
      icon: 'info',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-check"></i> Yes, Dislike it !',
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
      title: '<strong>Force Like This Event to user?</strong>',
      icon: 'info',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-check"></i> Yes, Like it !',
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
    this.bs.LikeEvent(id,this.userid).subscribe( 
      (data)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Liked Event Successfully Added to The User .'
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
      title: '<strong>Dislike the user from This Event ?</strong>',
      icon: 'info',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-check"></i> Yes, Dislike it !',
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
  
  SortTitle(){
    
    this.listuserlikedevents.sort((a:any,b:any)=>(a.title>b.title ? 1:1))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      icon: 'success',
      title: 'Successfully Sorted the list by Title.'
    })
      }
      SortDateStart(){
        this.listuserlikedevents.sort((a:any,b:any)=>(a.dateStart>b.dateStart ? 1:1))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      icon: 'success',
      title: 'Successfully Sorted the list by DateStart.'
    })
      }
      SortDateEnd(){ 
        this.listuserlikedevents.sort((a:any,b:any)=>(a.dateEnd>b.dateEnd ? 1:1))
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          icon: 'success',
          title: 'Successfully Sorted the list by DateStart.'
        })
      }

}
