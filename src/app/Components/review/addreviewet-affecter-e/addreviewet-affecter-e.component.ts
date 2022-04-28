import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryReview } from 'src/app/Models/category-review';
import { Classification } from 'src/app/Models/classification';
import { TypeReview } from 'src/app/Models/type-review';
import { ReviewService } from 'src/app/Services/review.service';


@Component({
  selector: 'app-addreviewet-affecter-e',
  templateUrl: './addreviewet-affecter-e.component.html',
  styleUrls: ['./addreviewet-affecter-e.component.css']
})
export class AddreviewetAffecterEComponent implements OnInit {
  
  categoryReviewEnum: any = CategoryReview;
  classfReviewEnum: any = Classification;
  typeReviewEnum: any = TypeReview;
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

  addSurvey(rr:any){   
    let id= 1;
    rr.category = this.selected;
    rr.classf = this.selected2;
    rr.review = this.selected3;
     this.r.addreviewetAffecterE(rr,id).subscribe(res => {
       this.router.navigate(['afficherreview'])
     });
 
   }

}
