import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { SurveyService } from 'src/app/Services/survey.service';


@Component({
  selector: 'app-updatesurvey',
  templateUrl: './updatesurvey.component.html',
  styleUrls: ['./updatesurvey.component.css']
})
export class UpdatesurveyComponent implements OnInit {
  // SurveyQuestion !: SurveyQuestion[];
  id!: number;
  SurveyQuestion!:any;
  
  constructor(private ms : SurveyService, private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.id=this.activate.snapshot.params['id'];
    this.ms.getSurveyById(this.id).subscribe(
      (d)=>{
        this.SurveyQuestion=d;
      }
    );
  }

  save(s:SurveyQuestion){
    this.ms.updateSurvey(s,this.id ).subscribe(
      ()=>{
        alert('good');
      }
    );
  }

}
