import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Badge } from 'src/app/Models/badge';
import { BadgesService } from 'src/app/Services/badges.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-badges',
  templateUrl: './add-badges.component.html',
  styleUrls: ['./add-badges.component.css']
})
export class AddBadgesComponent implements OnInit {
  badge!:Badge
  constructor(private router:Router,private BS:BadgesService) {
    this.badge = new Badge();
   }

  ngOnInit(): void {
  }
  save() {
       console.log(this.badge)
       this.BS.save(this.badge).subscribe(
         (data:any) => {
           Swal.fire({
             title: '<strong>Success!</strong>',
             icon: 'success',
             html:
               '<b>Congratulations !</b> You Added The badge ' 
           }
           )
           console.log(data) 
           this.router.navigateByUrl('/Dashboard/Badges')
         },
         (error)=>{
           Swal.fire({
             title: '<strong>Error!</strong>',
             icon: 'error',
             html:
               '<b>Something Is Wrong !</b> Check ' 
           }
           )
           console.log(error)
         }
         );
   
   }
   
AddBadge(){
  Swal.fire({
    title: '<strong>Add This badge ?</strong>',
    icon: 'info',
    html:
      'You can <a href="/Evenements">Check your Posted badges</a> <b>later</b>, ',
    showCloseButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-heart"></i> Yes, Add it !',
    confirmButtonAriaLabel: '',
    cancelButtonText:
      '<i class="fa fa-close"></i> No,I Changed My mind',
    cancelButtonAriaLabel: ''
  }).then((result) => {
    if (result.isConfirmed) {
      this.save();
    
    } 
  }
  )
}
}
