import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/Models/answer';
import { SurveyAnswer } from 'src/app/Models/survey-answer';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { SurveyService } from 'src/app/Services/survey.service';
import Swal from 'sweetalert2';

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
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
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


getById(o: any) {
  Swal.fire({
    title: '<strong>Do you want to delete this offer ?</strong>',
    icon: 'error',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    focusConfirm: true,
    confirmButtonText: 'Delete',
    confirmButtonColor: '#1fb79b',
  }).then((result) => {
    if (result.isConfirmed) {
      this.ms.deleteSurvey(o.id).subscribe((d) => {
        () => {
          Swal.fire('Deleted!', '', 'success');
          
        };
      });
     
    }
  });
}
sortByDateAsc(){
  this.ms.getSurveyByDateAsc().subscribe(
    (e)=>{
      this.SurveyQuestion=e;
      console.log(e);
      
    }
  );

}
sortByDateDesc(){
  this.ms.getSurveyByDateDesc().subscribe(
    (e)=>{
      this.SurveyQuestion=e;
      console.log(e);
      
    }
  );

}
}
