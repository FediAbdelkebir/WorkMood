import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryReview } from 'src/app/Models/category-review';
import { Classification } from 'src/app/Models/classification';
import { Review } from 'src/app/Models/review';
import { TypeReview } from 'src/app/Models/type-review';
import { ReviewService } from 'src/app/Services/review.service';
import Swal from 'sweetalert2';




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
  searchText!:any; 
  keysclas: string[] = [];
  keystype: string[] = [];
  selected!:  CategoryReview;
  selected2!:Classification;
  selected3!:TypeReview;
  classfReviewEnum: any = Classification;
  typeReviewEnum: any = TypeReview;
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  constructor(private r : ReviewService,private router: Router) { }

  ngOnInit(): void {
    
    this.getListReview();
    this.keys = Object.keys(this.categoryReviewEnum);
    this.keysclas = Object.keys(this.classfReviewEnum);
    this.keystype = Object.keys(this.typeReviewEnum);
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

getById(o: any) {
  Swal.fire({
    title: '<strong>Do you want to delete this offer ?</strong>',
    icon: 'error',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    focusConfirm: true,
    confirmButtonText: 'Delete',
    confirmButtonColor: '#1fb79b',
  }).then((result) => {
    if (result.isConfirmed) {
      this.r.deletereview(o.id).subscribe((d) => {
        () => {
          Swal.fire('Deleted!', '', 'success');
          
        };
      });
    
    }
  });
}



}
