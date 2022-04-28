import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { SurveyService } from 'src/app/Services/survey.service';


@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {

  constructor(private ms : SurveyService, private router: Router) { }

  ngOnInit(): void {
    //  this.addSurvey(ss:SurveyQuestion);
  }

  addSurvey(ss:SurveyQuestion){   
   let id= 1;
    this.ms.addSurvey(ss,id).subscribe(res => {
      this.router.navigate(['affichersurvey'])
    });

  }
}
