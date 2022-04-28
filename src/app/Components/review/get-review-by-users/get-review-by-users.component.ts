import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/Services/review.service';


@Component({
  selector: 'app-get-review-by-users',
  templateUrl: './get-review-by-users.component.html',
  styleUrls: ['./get-review-by-users.component.css']
})
export class GetReviewByUsersComponent implements OnInit {

  Review !: Review [];
  iid!:any;

  constructor(private r : ReviewService,private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getreviewByusers();
    console.log("review", this.Review);
    
  }
  getreviewByusers(){
    
    // this.iid=this.activate.snapshot.params['id']
    this.r.getReviewByUsers(Number(localStorage.getItem('idUser'))).subscribe(
      (re)=>{
        console.log("test",re[0]);
        
        this.Review=re;
      }
    )
  }
}
