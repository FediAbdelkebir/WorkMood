import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/Models/answer';
import { SurveyAnswer } from 'src/app/Models/survey-answer';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { AnswerService } from 'src/app/Services/answer.service';
import { SurveyService } from 'src/app/Services/survey.service';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  SurveyQuestion !: SurveyQuestion[];
  
  idServQuest : any;
  content : any
  dateExp : any
  idd!:any;
  idreponse!:any;
  SurveyAnswer !: SurveyAnswer[];
  AnswerEnum: any = Answer;
  keys: string[] = [];
  selected!:  Answer;

  selectedOption: any;
  

  constructor(private ms : SurveyService,private router: Router) { }

  ngOnInit(): void {
   this.getList();
   
   

  }

  getList(){
    this.ms.getSurvey().subscribe((data : SurveyQuestion[])=>{
      
      console.log(data);
      
      this.SurveyQuestion = data;
    })
    
  }
  UpdateRoute(id:any){
    this.router.navigate(['reponsesurvey',id]);
  }
  

  deleteSurvey(m:SurveyQuestion){
    
    this.ms.deleteSurvey(m.id).subscribe(res => {
      this.getList();
    });
  }
  
}

