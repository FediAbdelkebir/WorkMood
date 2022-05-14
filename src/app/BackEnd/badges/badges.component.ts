import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/Models/badge';
import { BadgesService } from 'src/app/Services/badges.service';
import Swal from 'sweetalert2';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  filterTerm:any;
  listevenements!:any;
  iduser=1;
  showLoader = true;
  pages: number = 1;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
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
  SortTitle(){
    this.bs.SortBadgeByTitleAsc().subscribe((data)=>{
      this.listevenements=data
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
    })
      }
      SortDescription(){
        this.bs.SortBadgeByDescriptioneAsc().subscribe((data)=>{
          this.listevenements=data
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            icon: 'success',
            title: 'Successfully Sorted the list by Description.'
          })
        })
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
