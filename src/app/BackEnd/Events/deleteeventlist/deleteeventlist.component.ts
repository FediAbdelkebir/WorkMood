import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';
import { Event } from 'src/app/Models/event';
@Component({
  selector: 'app-deleteeventlist',
  templateUrl: './deleteeventlist.component.html',
  styleUrls: ['./deleteeventlist.component.css']
})
export class DeleteeventlistComponent implements OnInit {

  constructor(private router: Router,private es:EvenementService) { }
  filterTerm:any;
  listevenements!:Event[];
  iduser=1;
  showLoader = true;
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

}
