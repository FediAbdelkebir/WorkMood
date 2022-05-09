import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Badge } from 'src/app/Models/badge';
import { BadgesService } from 'src/app/Services/badges.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-badges',
  templateUrl: './update-badges.component.html',
  styleUrls: ['./update-badges.component.css']
})
export class UpdateBadgesComponent implements OnInit {
  badgeid!:any
  badge!:Badge
  constructor(private BS:BadgesService,private router: Router,private route: ActivatedRoute) { 
    this.badge= new Badge();
  }

  ngOnInit(): void {
    
    this.badgeid=this.route.snapshot.paramMap.get('id');
    this.BS.FindBadgeById(this.badgeid).subscribe(
      (data:any) => {
        this.badge=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
      );
  }
  
  update() {
    //this.badge.dateStart =this.datepipe.transform(this.badge.dateStart, 'yyyy-MM-dd');
    //this.badge.dateEnd =this.datepipe.transform(this.badge.dateEnd, 'yyyy-MM-dd');
       console.log(this.badge)
       this.BS.UpdateBadge(this.badge).subscribe(
         (data:any) => {
           Swal.fire({
             title: '<strong>Success!</strong>',
             icon: 'success',
             html:
               '<b>Congratulations !</b> You Updated The Badge ' 
           }
           )
           console.log(data) 
           this.router.navigateByUrl("/Dashboard/Badges");
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
   
   UpdateBadge(){
    Swal.fire({
      title: '<strong>Update This Badge ?</strong>',
      icon: 'info',
      html:
        'You can <a href="/Badges">Check your Posted Badges</a> <b>later</b>, ',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-heart"></i> Yes, Update it !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I Changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.update();
      
      } 
    }
    )
  }

}
