import { Injectable } from '@angular/core';
import { HttpClientModule,HttpHeaders,HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { Event } from '../Models/event';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Roles } from '../Models/roles';
import { EventTags } from '../Models/event-tags';
import { EventType } from '../Models/event-type';
const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8')  
     let options = { headers : headers };
     
let httpOptions = { responseType: 'text' };

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  id:any;
  Roleuser!:Roles;
  item!:any;
  ListRoles!:Roles[];
  customers!:any;
  private BackEndURL: string;
  constructor(private http: HttpClient,private router:Router) {
   this.BackEndURL = 'http://localhost:8089/work-mood/Evenements/';
   }

   /*List des Evenement*/
   public FindAllEvenements(): Observable<any> {
    return this.http.get(this.BackEndURL+"Events")
  }
  /*Ajouter Evenement*/
  public save(event: Event) {
    console.log(Event);
  return this.http.post(this.BackEndURL+"AddEvent",event,{ ...options, responseType: 'text' });
  }
  /*Supprimer Evenement*/
  DeleteEvenement(id:number){
      return this.http.delete('http://localhost:8081/account/delete/'+id).pipe(
        map(
          userData => {
            
          }
        )
    
      );
      
    }
	/* Update Evenement */
	UpdateEvenement(event:Event){
       return this.http.post('http://localhost:8081/account/',event).pipe(
          map(
            userData => {
            }
          )
    
        );
    }
	/* Find Evenement By Id*/
	public FindEvenementById(id:number): Observable<any>{
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+id); 
  }
  /* Find Evenement By Title*/
  public FindEvenementByTitle(title:String): Observable<any>{
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+title); 
  }
  /* Find Evenement By StartDate*/
  public FindEvenementByStartDate(StartDate:Date): Observable<any>{
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+StartDate); 
  }
  /* Find Evenement By EndDate*/
  public FindEvenementByEndDate(EndDate:Date): Observable<any>{
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+EndDate); 
  }
  /* Find Evenement By Type*/
  public FindEvenementByType(EndDate:Date): Observable<any>{
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+EndDate); 
  }
  /* Affect User To Evenement*/
  public AffecterEventToUser(iduser:number,idevent:number){
    return this.http.post<Event>("http://127.0.0.1:8081/account/id/"+iduser+"/"+idevent,httpOptions); 
  }
   /* Evennement Winners*/
  public EventWinners(){
    return this.http.post("http://127.0.0.1:8081/account/id/",httpOptions); 
  }
   /* Remove User From Event*/
  public RemoveUserFromEvent(iduser:number,idevent:number){
    return this.http.post("http://127.0.0.1:8081/account/id/"+idevent+"/"+iduser,httpOptions); 
  }
   /* Like Event*/
  public LikeEvent(idevent:number,iduser:number){
    return this.http.post(this.BackEndURL+"LikeEvent/"+idevent+"/"+iduser,httpOptions); 
  }
   /* DisLike Event*/
  public DisLike(idevent:number,iduser:number){
    return this.http.post("http://127.0.0.1:8081/account/id/"+idevent+"/"+iduser,httpOptions); 
  }
   /* LikedEvents By UserId */
  public LikedEventsByUserId(iduser:number): Observable<any>{
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+iduser); 
  }
   /* LikedUsersByEventId */
  public LikedUsersByEventId(idevent:number): Observable<any>{
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+idevent); 
  }
   /* RecommendedEvents By Tags */
  public RecommendedEvents(Tags:EventTags){
    return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+Tags); 
  }
   /* Find UserJoinedEvents  */
  public UserJoinedEvents (userid:number): Observable<any> {
    return this.http.get("http://127.0.0.1:8081/account/id/"+userid); 
  }
    /*TotalNumberEvents*/
    public  TotalNumberEvents (){
	return this.http.get("http://127.0.0.1:8081/account/id/"); 
  }
    /*TotalNumberEventsChallenge*/
    public  TotalNumberEventsChallenge (){
	return this.http.get("http://127.0.0.1:8081/account/id/"); 
  }
    /*TotalNumberEventsFormation*/
    public  TotalNumberEventsFormation (){
	return this.http.get("http://127.0.0.1:8081/account/id/"); 
  }
    /*TotalNumberEventsTrouphyTrue*/
    public  TotalNumberEventsTrouphyTrue (){
	return this.http.get("http://127.0.0.1:8081/account/id/"); 
  }
     /*TotalNumberEventsTrouphyFalse*/
    public  TotalNumberEventsTrouphyFalse(){
	return this.http.get("http://127.0.0.1:8081/account/id/"); 
  }
  //Multiple Critére Search 
	/*Events By StartDate And EndDate*/
    public findByDateStartAndDateEnd (StartDate:Date,DateEnd:Date){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+StartDate+"/"+DateEnd); 
  }
  /*Events By StartDate And Trouphy*/
    public findByDateStartAndTrouphy (StartDate:Date,troophy:any){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+StartDate+"/"+troophy); 
  }
   /*Events By StartDate And Trouphy*/
    public findByDateEndAndTrouphy (DateEnd:Date,troophy:any){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+DateEnd+"/"+troophy); 
  }
    /*Events By Type And Trouphy*/
    public findByTypeAndTrouphy (Type:EventType,troophy:any){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+Type+"/"+troophy); 
  }
    /*Events By DateStart And Type*/
    public  findByDateStartAndType (DateStart:Date,Type:EventType){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+DateStart+"/"+Type); 
  }
    /*Events By DateEnd And Type*/
    public  FindByDateEndAndType (DateEnd:Date,Type:EventType){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+DateEnd+"/"+Type); 
  }
   /*Events By StartDate And EndDate And Trouphy*/
    public findByDateStartAndDateEndAndTrouphy (DateStart:Date,DateEnd:Date,troophy:any){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+DateStart+"/"+DateEnd+"/"+troophy); 
  }
     /*Events By StartDate And EndDate And Trouphy And Type*/
    public findByDateStartAndDateEndAndTrouphyAndType (DateStart:Date,DateEnd:Date,troophy:any,Type:EventType){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+DateStart+"/"+DateEnd+"/"+troophy+"/"+Type); 
  }
    /*findAllByDateStartGreaterThanEqualAndDateEndLessThanEqual*/
    public  findAllByDateStartGreaterThanEqualAndDateEndLessThanEqual (StartDate:Date,EndDate:Date){
	return this.http.get<Event>("http://127.0.0.1:8081/account/id/"+StartDate+"/"+EndDate); 
  }
  /*Sorts And Statistiques*/
	//SortEventsByIdAsc
	  public SortEventsByIdAsc(){
      return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  //SortEventsByIdDesc
  	  public SortEventsByIdDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  //SortEventsByTitleAsc
  	  public SortEventsByTitleAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByTitleDesc
  	  public SortEventsByTitleDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByDateStartAsc
  	  public SortEventsByDateStartAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByDateStartDesc
  	  public SortEventsByDateStartDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByDateEndAsc
  	  public SortEventsByDateEndAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByDateEndDesc
  	  public SortEventsByDateEndDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByNbrplaceAsc
  	  public SortEventsByNbrplaceAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByNbrplaceDesc
  	  public SortEventsByNbrplaceDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByTypeAsc
  	  public SortEventsByTypeAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByTypeDesc
  	  public SortEventsByTypeDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByTrouphyAsc
  	  public SortEventsByTrouphyAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByTrouphyDesc
  	  public SortEventsByTrouphyDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByDescriptionAsc
  	  public SortEventsByDescriptionAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsByDescriptionDesc
  	  public SortEventsByDescriptionDesc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsTop10ByOrderByTitleAsc
  	  public SortEventsTop10ByOrderByTitleAsc(){return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
  // SortEventsTop10ByOrderByTitleDesc
  	  public SortEventsTop10ByOrderByTitleDesc(){
        return this.http.get<Event>("http://127.0.0.1:8081/account/id/"); 
  }
    /*Sorts And Statistiques*/
	
  /*---------------------------------------------------------------------------------------------------*/
  
    
}