import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from 'src/app/Services/survey.service';


@Component({
  selector: 'app-get-by-idsurvey',
  templateUrl: './get-by-idsurvey.component.html',
  styleUrls: ['./get-by-idsurvey.component.css']
})
export class GetByIdsurveyComponent implements OnInit {
  
  SurveyQuestion!:any;
  idd!:any;

  constructor(private ms : SurveyService, private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }
  getById(){
     this.idd=this.activate.snapshot.params['id']
     this.ms.getSurveyById(this.idd).subscribe(
       (s)=>{
         this.SurveyQuestion=s;
       }
     );
   }
}
