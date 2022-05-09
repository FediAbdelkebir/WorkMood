import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/Models/answer';
import { SurveyAnswer } from 'src/app/Models/survey-answer';
import { AnswerService } from 'src/app/Services/answer.service';



@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.css']
})
export class AnswerSurveyComponent implements OnInit {

  SurveyAnswer !: SurveyAnswer[];
  AnswerEnum: any = Answer;
  key: string[] = [];
  selected!:  Answer;
  id: any;
  

  constructor(private ms : AnswerService, private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getList();
    // this.getById();
    this.key = Object.keys(this.AnswerEnum);
  }

  getList(){
    
    this.ms.getAnswers().subscribe((data : SurveyAnswer[])=>{
      
      console.log(data);
    
      this.SurveyAnswer = data;
    })
    
  }
  getById(){
    
    this.id=this.activate.snapshot.params['id']
    this.ms.getAnswerById(this.id).subscribe(
      (s)=>{
        console.log(s);
        
        this.SurveyAnswer=s;
      }
    );
    
  }

  

}
