import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SurveyAnswer } from '../Models/survey-answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http:HttpClient) { }

  getAnswers():Observable<SurveyAnswer[]>{
    return this.http.get<SurveyAnswer[]>('http://localhost:8089/work-mood/Answer/retrieve-all-Answer');
  }
  getAnswerById (id:any): Observable<SurveyAnswer[]> {
    return this.http.get<SurveyAnswer[]>('http://localhost:8089/work-mood/Answer/retrieve-Answer/'+id);
  }

}
