import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { BadgesService } from 'src/app/Services/badges.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-user-badges',
  templateUrl: './show-user-badges.component.html',
  styleUrls: ['./show-user-badges.component.css']
})
export class ShowUserBadgesComponent implements OnInit {
  filterTerm:any;
  constructor(private bs:BadgesService,private router: Router,private route: ActivatedRoute) { }
userid!:any;
showLoader = true;
listuserbadges:any;
listbadges:any;
show=false;
affectid!:number;
public async ngOnInit(): Promise<void>{
  await this.bs.FindAllBadges().subscribe((data)=>{
      this.listbadges=data
    })
    this.userid=this.route.snapshot.paramMap.get('id');
    this.bs.FindUserById(this.userid).subscribe(
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
        this.listuserbadges=data.acquiredBadges;
        console.log(this.listuserbadges)
      },
      (error)=>{
        console.log(error)
      }
      );
  }

  RemoveBadge(id:number){
    this.bs.RemoveBadgeFromUser(id,this.userid).subscribe( 
      (data)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Badges Successfully Removed From The User .'
      })
      
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
    })
    this.ngOnInit();
  }
  Remove(id:number){
    Swal.fire({
      title: '<strong>Delete This Badge From user?</strong>',
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
    this.RemoveBadge(id);
      
      } 
    }
    )
  }
  SelectBadge(t:number){
    console.log("ttest")
    this.affectid=t;
    console.log(t)
      }
  Show(reverse:boolean){
this.show=reverse;
  }
  Affect(){
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
    this.AddUserBadge(this.affectid);
      
      } 
    }
    )
  }
 
AddUserBadge(id:number){
    this.bs.AffecterBadgeToUser(id,this.userid).subscribe( 
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
  delete(id:any){
    Swal.fire({
      title: '<strong>Remove This Badge ?</strong>',
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
        this.RemoveBadge(id);
      
      } 
    }
    )
  }
}
