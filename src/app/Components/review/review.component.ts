import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryReview } from 'src/app/Models/category-review';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/Services/review.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  Review !: Review[];
  categoryReviewEnum: any = CategoryReview;
  keys: string[] = [];
  category!: CategoryReview;

  constructor(private r : ReviewService,private router: Router) { }

  ngOnInit(): void {
    this.getListReview();
    this.keys = Object.keys(this.categoryReviewEnum);
  }

  getListReview(){
    this.r.getreview().subscribe((data : Review[])=>{
      
      console.log(data);
      
      this.Review = data;
    })
    
  }
  // Update(id:any){
  //   this.router.navigate(['updatereview',id]);
  // }
  deleteReview(re:Review){
    
    this.r.deletereview(re.id).subscribe(res => {
      this.getListReview();
    });
  }
  getByCategory(c: CategoryReview){
    console.log(c);
    this.r.getReviewByCatg(c).subscribe(
      (e)=>{
        this.Review=e;
        console.log(e);
        
      }
    );
  }
  onChange(){
    this.r.getReviewByCatg(this.category).subscribe(
      (e)=>{
        this.Review=e;
        console.log(this.category);
      }
    )
}
}
