import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-getreview-badbyusers',
  templateUrl: './getreview-badbyusers.component.html',
  styleUrls: ['./getreview-badbyusers.component.css']
})
export class GetreviewBadbyusersComponent implements OnInit {

  Review !: Review [];
  iid!:any;
  searchText!:any; 
  
  constructor(private r : ReviewService,private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getreviewbadByusers();
    console.log("review", this.Review);
  }
  getreviewbadByusers(){

  this.r.getReviewBadByUsers(Number(localStorage.getItem('idUser'))).subscribe(
      (re)=>{
        console.log("test",re[0]);
        
        this.Review=re;
      }
    )
  }
}
