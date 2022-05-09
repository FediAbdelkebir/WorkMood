import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/Models/answer';
import { SurveyAnswer } from 'src/app/Models/survey-answer';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { AnswerService } from 'src/app/Services/answer.service';
import { SurveyService } from 'src/app/Services/survey.service';

@Component({
  selector: 'app-addreponse',
  templateUrl: './addreponse.component.html',
  styleUrls: ['./addreponse.component.css']
})
export class AddreponseComponent implements OnInit {
  
  SurveyQuestion!:any;
  
  idd!:any;
  idreponse!:any;
  SurveyAnswer !: SurveyAnswer[];
  AnswerEnum: any = Answer;
  keys: string[] = [];
  selected!:  Answer;

  constructor(private ms : SurveyService, private mm : AnswerService, private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
    this.getreponseById();
    this.keys = Object.keys(this.AnswerEnum);
  }
  getById(){
     this.idd=this.activate.snapshot.params['id']
     this.ms.getSurveyById(this.idd).subscribe(
       (s)=>{
        console.log(this.idd);
         this.SurveyQuestion=s;
       }
     );
   }
   getreponseById(){
    this.idreponse=this.activate.snapshot.params['id']
    this.mm.getAnswerById(this.idreponse).subscribe(
      (d)=>{
        console.log(this.idreponse);
        this.SurveyAnswer=d;
      }
    );
  }
   save(f: SurveyQuestion){
    console.log(f);
    let iduser=1;
    // this.ms.AjouterReponse(f, this.idreponse,this.idd).subscribe(
    //   ()=>{

    //     console.log('good');
    //   }
    // );
  }
}
