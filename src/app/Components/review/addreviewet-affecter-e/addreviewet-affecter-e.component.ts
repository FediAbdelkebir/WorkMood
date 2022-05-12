import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryReview } from 'src/app/Models/category-review';
import { Classification } from 'src/app/Models/classification';
import { TypeReview } from 'src/app/Models/type-review';
import { ReviewService } from 'src/app/Services/review.service';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addreviewet-affecter-e',
  templateUrl: './addreviewet-affecter-e.component.html',
  styleUrls: ['./addreviewet-affecter-e.component.css']
})
export class AddreviewetAffecterEComponent implements OnInit {
  
  categoryReviewEnum: any = CategoryReview;
  classfReviewEnum: any = Classification;
  typeReviewEnum: any = TypeReview;
  faAngleDown = faAngleDown;
  keys: string[] = [];
  keysclas: string[] = [];
  keystype: string[] = [];
  selected!:  CategoryReview;
  selected2!:Classification;
  selected3!:TypeReview;

  constructor(private r : ReviewService,private router: Router) { 
  this.keys = Object.keys(this.categoryReviewEnum);
  this.keysclas = Object.keys(this.classfReviewEnum);
  this.keystype = Object.keys(this.typeReviewEnum);
}
  ngOnInit(): void {
   
  }

  addReview(rr:any){   
    let id= 1;
    rr.category = this.selected;
    rr.classf = this.selected2;
    rr.review = this.selected3;
     this.r.addreviewetAffecterE(rr,id).subscribe(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Question has been saved',
        showConfirmButton: false,
        timer: 1000
        
      })
      this.router.navigate(['choiceadd'])
    });
        
        
     
   }
  //  get(o: any) {
  //   Swal.fire({
  //     title: '<strong>Do you want to Confirm this  ?</strong>',
  //     icon: 'error',
  //     showCancelButton: true,
  //     cancelButtonText: 'Cancel',
  //     focusConfirm: true,
  //     confirmButtonText: 'Confirm',
  //     confirmButtonColor: '#1fb79b',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.r.addreviewetAffecterE(o,o.id).subscribe((d) => {
  //         () => {
  //           Swal.fire('Succes to send review with Email!', '', 'success');
            
  //         };
  //       });
      
  //     }
  //   });
  // }
}
