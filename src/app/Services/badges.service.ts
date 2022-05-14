import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Badge } from '../Models/badge';
import { User } from '../Models/user';
const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8')  
     let options = { headers : headers };
     
let httpOptions = { responseType: 'text' };
@Injectable({
  providedIn: 'root'
})
export class BadgesService {
 
  
  
  id:any;
  item!:any;
  private BackEndURL: string;
  constructor(private http: HttpClient,private router:Router) {
   this.BackEndURL = 'http://localhost:8089/work-mood/Badges/';
   }

   /*List des Badge*/
   public FindAllBadges(): Observable<any> {
    return this.http.get(this.BackEndURL+"Badges")
  }
  FindAllUsers(): Observable<any> {
    return this.http.get("http://localhost:8089/work-mood/get-all-users")
  }
  FindUserById(userid: any) {
    return this.http.get<User>("http://localhost:8089/work-mood/get-user/"+userid)
  }
  public SortBadgeByTitleAsc(){return this.http.get<Badge>(this.BackEndURL+'SortBadgesByTitleAsc'); }
  public SortBadgeByDescriptioneAsc(){return this.http.get<Badge>(this.BackEndURL+'SortBadgesByDescriptionAsc'); }
  /*Ajouter Badge*/
  public save(badge: Badge) {
    console.log(Badge);
  return this.http.post(this.BackEndURL+"addBadge",badge,{ ...options, responseType: 'text' });
  }
  /*Supprimer Badge*/
  DeleteBadge(id:number){
      return this.http.delete(this.BackEndURL+'DeleteBadge/'+id).pipe(
        map(
          userData => {
            
          }
        )
    
      );
      
    }
	/* Update Badge */
	UpdateBadge(badge:Badge){
       return this.http.put(this.BackEndURL+'UpdateBadge',badge).pipe(
          map(
            userData => {
            }
          )
    
        );
    }
    /* Find Badge By Id*/
	public FindBadgeById(id:number): Observable<any>{
    return this.http.get<Badge>(this.BackEndURL+'FindBadge/'+id); 
  }
  /* Find Badge By Title*/
  public FindBadgeByTitle(title:String): Observable<any>{
    return this.http.get<Badge>(this.BackEndURL+'FindBadge/Title/'+title); 
  }
    /* Affect Badge To User*/
    public AffecterBadgeToUser(idbadge:number,iduser:number){
      return this.http.post(this.BackEndURL+'AffecterBadgeToUser/'+idbadge+'/'+iduser,httpOptions); 
    }
    /* Remove Badge From User*/
  public RemoveBadgeFromUser(idbadge:number,iduser:number){
    return this.http.delete(this.BackEndURL+'DeleteBadgeFromUser/'+idbadge+"/"+iduser); 
  }
}
