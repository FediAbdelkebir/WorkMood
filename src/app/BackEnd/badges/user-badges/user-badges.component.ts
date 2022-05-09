import { Component, OnInit } from '@angular/core';
import { BadgesService } from 'src/app/Services/badges.service';
import Swal from 'sweetalert2';
import { User } from '../../Models/user';

@Component({
  selector: 'app-user-badges',
  templateUrl: './user-badges.component.html',
  styleUrls: ['./user-badges.component.css']
})
export class UserBadgesComponent implements OnInit {

  filterTerm:any;
  listusers!:User[];
  iduser=1;
  showLoader = true;
  constructor(private bs:BadgesService) { }

  ngOnInit(): void {
    this.bs.FindAllUsers().subscribe(
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
