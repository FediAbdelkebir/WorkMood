import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-getreview-badbyusers',
  templateUrl: './getreview-badbyusers.component.html',
  styleUrls: ['./getreview-badbyusers.component.css']
})
export class GetreviewBadbyusersComponent implements OnInit {

  constructor(private r : ReviewService,private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
