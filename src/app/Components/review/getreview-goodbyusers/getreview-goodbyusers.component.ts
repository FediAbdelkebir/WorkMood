import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-getreview-goodbyusers',
  templateUrl: './getreview-goodbyusers.component.html',
  styleUrls: ['./getreview-goodbyusers.component.css']
})
export class GetreviewGoodbyusersComponent implements OnInit {

  Review !: Review [];
  iid!:any;
  searchText!:any; 

  constructor(private r : ReviewService,private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getreviewGoodByusers();
    console.log("review", this.Review);
  }
  getreviewGoodByusers(){

this.r.getReviewGoodByUsers(Number(localStorage.getItem('idUser'))).subscribe(
      (re)=>{
        console.log("test",re[0]);
        
        this.Review=re;
      }
    )
  }
}
