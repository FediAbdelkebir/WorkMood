import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../Models/reclamation';
import { StatusReclamation } from '../Models/status-reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly apiUrl: string = 'http://localhost:8089/WorkMood/Reclamation';
  
  constructor(private http:HttpClient) { }

  listReclamations():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/ShowAllReclamations');
  }
  showById(id:any):Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/ShowReclamation?idUser='+id);
  }
  addReclamation(b:any, id:any):Observable<Reclamation[]>{
    return this.http.post<Reclamation[]>(this.apiUrl+'/AddReclamation/'+id,b);
  }
  deleteReclamation(id:any):Observable<Reclamation[]>{
    return this.http.delete<Reclamation[]>(this.apiUrl+'/DeleteReclamation/'+id);
  }
  
  findByType(status: StatusReclamation, id: number):Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByType?idUser='+id+'&status='+ status);
  }
  findByCreationDateAsc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByCreationDateAsc');
  }
  findByCreationDateDesc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByCreationDateDesc');
  }
  findByProcessingDateAsc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByProcessingDateAsc');
  }
  findByProcessingDateDesc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByProcessingDateDesc');
  }
  findByUser(id: number):Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/ShowReclamationByUser/'+id);
  }

  showByKeyword(keyword: string):Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/ShowByKeyword/'+keyword);
  }
  treatReclamation(id: number, idUSer: number):Observable<Reclamation[]>{
    return this.http.put<Reclamation[]>(this.apiUrl+'/TreatReclamation/'+id+'/'+idUSer, null);
  }
  verifReclamationOffer(idOffer: number, idUser: number, r: Reclamation):Observable<Reclamation[]>{
    return this.http.post<Reclamation[]>(this.apiUrl+'/VerifReclamationOffer/'+idOffer+'/'+idUser, r);
  }

}
