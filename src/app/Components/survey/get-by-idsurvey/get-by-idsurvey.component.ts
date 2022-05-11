import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/Models/answer';
import { SurveyAnswer } from 'src/app/Models/survey-answer';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { AnswerService } from 'src/app/Services/answer.service';
import { SurveyService } from 'src/app/Services/survey.service';


@Component({
  selector: 'app-get-by-idsurvey',
  templateUrl: './get-by-idsurvey.component.html',
  styleUrls: ['./get-by-idsurvey.component.css']
})
export class GetByIdsurveyComponent implements OnInit {
  
  SurveyQuestion!:any;
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

  constructor(private ms : SurveyService,private mm : AnswerService, private router: Router,private activate: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getById();
    this.getList();
   
  }
  getList(){
    
    this.mm.getAnswers().subscribe((data : SurveyAnswer[])=>{
      
    console.log(data);
    
    this.SurveyAnswer = data;
    })
    
  }
  test(){
    console.log("id", Number(this.selectedOption));
  }
  getById(){
    
     this.idd=this.activate.snapshot.params['id']
     this.ms.getSurveyById(this.idd).subscribe(
       (s : any)=>{
         this.idServQuest = s.id;
         this.content = s.content;
         this.dateExp = s.dateExp;
       }
     );
     
   }
  
  ajouterReponse(f: SurveyQuestion){
  
  console.log(f);
  let iduser=1;
  this.ms.AjouterReponse(f, iduser,this.idd,this.selectedOption).subscribe(
    (h)=>{

      console.log(h);
    }
  );
}
}
