import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';
import { Event } from 'src/app/Models/event';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-updateeventlist',
  templateUrl: './updateeventlist.component.html',
  styleUrls: ['./updateeventlist.component.css']
})
export class UpdateeventlistComponent implements OnInit {

  constructor(private router: Router,private es:EvenementService) { }
  filterTerm:any;
  listevenements!:any;
  iduser=1;
  showLoader = true;
  pages: number = 1;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  ngOnInit(): void {
    
    this.es.FindAllEvenements().subscribe(
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
  SortTitle(){
this.es.SortEventsByTitleAsc().subscribe((data)=>{
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
  SortDateStart(){
    this.es.SortEventsByDateStartAsc().subscribe((data)=>{
      this.listevenements=data
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
    })
  }
  SortDateEnd(){
    this.es.SortEventsByDateEndAsc().subscribe((data)=>{
      this.listevenements=data
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Successfully Sorted the list by DateEnd.'
      })
    })
  }
  SortnpDisponible(){
    this.es.SortEventsByNbrplaceAsc().subscribe((data)=>{
      this.listevenements=data
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Successfully Sorted the list by nPdisponible.'
      })
    })
  }
  SortnpMax(){
    console.log('famech minha :)')
  }
  Sortnbrlikes(){
    console.log('famech minha :)')
  }
  SortType(){
    this.es.SortEventsByTypeAsc().subscribe((data)=>{
      this.listevenements=data
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Successfully Sorted the list by Type.'
      })
    })
  }
  SortEventTags(){
    
    console.log('famech minha :)')
  }
  SortTrouphy(){
    this.es.SortEventsByTrouphyAsc().subscribe((data)=>{
      this.listevenements=data
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: 'success',
        title: 'Successfully Sorted the list by Trouphy.'
      })
    })
  }
  SortEventPoints(){
    console.log('famech minha :)')
  }
  SortDescription(){
    this.es.SortEventsByDescriptionAsc().subscribe((data)=>{
      this.listevenements=data
    })
  }
  delete(id:any){
    Swal.fire({
      title: '<strong>Delete This Event ?</strong>',
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
        this.DeleteEvent(id);
      
      } 
    }
    )
  }
  DeleteEvent(id:number){
    this.es.DeleteEvenement(id).subscribe( 
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
        title: 'Events Successfully Deleted From The Database .'
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

  updateevent(id:number){
    this.es.DeleteEvenement(id).subscribe( 

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
        title: 'Events Successfully Deleted From The Database .'
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
