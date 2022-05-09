import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-events',
  templateUrl: './users-events.component.html',
  styleUrls: ['./users-events.component.css']
})
export class UsersEventsComponent implements OnInit {

  filterTerm:any;
  listusers!:User[];
  iduser=1;
  showLoader = true;
  constructor(private es:EvenementService) { }

  ngOnInit(): void {
    this.es.FindAllUsers().subscribe(
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
          title: 'Users Successfully Loaded From The Database .'
        })
        this.listusers=data;
console.log(data)
      },(error)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        Toast.fire({
          title: 'Users<strong> Failed </strong>To Load From The Database',
          icon: 'error'
        })
      }
    )
  }

}
