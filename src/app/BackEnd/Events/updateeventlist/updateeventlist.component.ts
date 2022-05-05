import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';
import { Event } from 'src/app/Models/event';
@Component({
  selector: 'app-updateeventlist',
  templateUrl: './updateeventlist.component.html',
  styleUrls: ['./updateeventlist.component.css']
})
export class UpdateeventlistComponent implements OnInit {

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
