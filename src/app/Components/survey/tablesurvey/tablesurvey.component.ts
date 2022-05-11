import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/Models/answer';
import { SurveyAnswer } from 'src/app/Models/survey-answer';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { SurveyService } from 'src/app/Services/survey.service';

@Component({
  selector: 'app-tablesurvey',
  templateUrl: './tablesurvey.component.html',
  styleUrls: ['./tablesurvey.component.css']
})
export class TablesurveyComponent implements OnInit {

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
  searchText!:any;
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
  deleteSurvey(m:SurveyQuestion){
    
    this.ms.deleteSurvey(m.id).subscribe(res => {
      this.getList();
    });
  }
}
