import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-getreview-goodbyusers',
  templateUrl: './getreview-goodbyusers.component.html',
  styleUrls: ['./getreview-goodbyusers.component.css']
})
export class GetreviewGoodbyusersComponent implements OnInit {

  constructor(private r : ReviewService,private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
