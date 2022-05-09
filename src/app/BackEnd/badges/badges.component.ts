import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/Models/badge';
import { BadgesService } from 'src/app/Services/badges.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  filterTerm:any;
  listevenements!:Badge[];
  iduser=1;
  showLoader = true;
  constructor(private bs:BadgesService) { }

  ngOnInit(): void {
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
          title: 'Badges<strong> Failed </strong>To Load From The Database',
          icon: 'error'
        })
      }
    )
  }
  
  delete(id:any){
    Swal.fire({
      title: '<strong>Delete This Badge ?</strong>',
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
        this.DeleteBadge(id);
      
      } 
    }
    )
  }
  DeleteBadge(id:number){
    this.bs.DeleteBadge(id).subscribe( 
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
        title: 'Badges Successfully Deleted From The Database .'
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
        title: 'Oops Delete <strong> Failed </strong>something is wrong',
        icon: 'error'
      })
    })
  }

  updatebadge(id:number){
    this.bs.DeleteBadge(id).subscribe( 

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
        title: 'Badges Successfully Deleted From The Database .'
      })
    },(error)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        title: 'Oops Delete <strong> Failed </strong>something is wrong',
        icon: 'error'
      })
    })
  }


}
