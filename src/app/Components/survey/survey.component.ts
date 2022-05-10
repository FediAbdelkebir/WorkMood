import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { SurveyService } from 'src/app/Services/survey.service';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  SurveyQuestion !: SurveyQuestion[];
  

  constructor(private ms : SurveyService, private router: Router) { }

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
