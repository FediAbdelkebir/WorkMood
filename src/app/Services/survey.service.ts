import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { SurveyQuestion } from '../Models/survey-question';
import { SurveyAnswer } from '../Models/survey-answer';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http:HttpClient) { }
  
  getSurvey():Observable<SurveyQuestion[]>{
    return this.http.get<SurveyQuestion[]>('http://localhost:8089/work-mood/survey/retrieve-all-survey');
  }
  deleteSurvey(id:any):Observable<SurveyQuestion[]>{
    return this.http.delete<SurveyQuestion[]>('http://localhost:8089/work-mood/survey/remove-survey/'+id);
  }
  addSurvey (s:any , id:any): Observable<SurveyQuestion[]> {
    return this.http.post<SurveyQuestion[]>('http://localhost:8089/work-mood/survey/add-survey/'+id,s);
  }
  getSurveyById (id:any): Observable<SurveyQuestion[]> {
    return this.http.get<SurveyQuestion[]>('http://localhost:8089/work-mood/survey/retrieve-Survey/'+id);
  }
  updateSurvey (id:any,ss:any) {
    return this.http.put('http://localhost:8089/work-mood/survey/modify-survey/'+id, ss);
  }

  AjouterReponse (SurveyQuestion:any,iduser:any,id:any,idreponse:any) {
    return this.http.put('http://localhost:8089/work-mood/survey/ajouter-reponse/'+iduser+'/'+id+'/'+idreponse,SurveyQuestion);
  }
  getAnswerById (id:any): Observable<SurveyAnswer[]> {
    return this.http.get<SurveyAnswer[]>('http://localhost:8089/work-mood/Answer/retrieve-Answer/'+id);
  }

}
