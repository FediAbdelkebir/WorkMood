import { Injectable } from '@angular/core';
import { HttpClientModule,HttpHeaders,HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { Event } from '../Models/event';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Roles } from '../Models/roles';
import { EventTags } from '../Models/event-tags';
import { EventType } from '../Models/event-type';
import { User } from '../Models/user';
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
  FindAllUsers(): Observable<any> {
    return this.http.get("http://localhost:8089/work-mood/get-all-users")
  }
  FindUserById(userid: any) {
    return this.http.get<User>("http://localhost:8089/work-mood/get-user/"+userid)
  }
  /*Ajouter Evenement*/
  public save(event: Event) {
    console.log(Event);
  return this.http.post(this.BackEndURL+"AddEvent",event,{ ...options, responseType: 'text' });
  }
  /*Supprimer Evenement*/
  DeleteEvenement(id:number){
      return this.http.delete(this.BackEndURL+'DeleteEvent/'+id).pipe(
        map(
          userData => {
            
          }
        )
    
      );
      
    }
	/* Update Evenement */
	UpdateEvenement(event:Event){
       return this.http.put(this.BackEndURL+'UpdateEvent',event).pipe(
          map(
            userData => {
            }
          )
    
        );
    }
	/* Find Evenement By Id*/
	public FindEvenementById(id:number): Observable<any>{
    return this.http.get<Event>(this.BackEndURL+'FindEvent/'+id); 
  }
  
  /* Find Evenement By Title*/
  public FindEvenementByTitle(title:String): Observable<any>{
    return this.http.get<Event>(this.BackEndURL+'FindEvent/Title/'+title); 
  }
  /* Find Evenement By StartDate*/
  public FindEvenementByStartDate(StartDate:Date): Observable<any>{
    return this.http.get<Event>(this.BackEndURL+'FindEvent/DateStart/'+StartDate); 
  }
  /* Find Evenement By EndDate*/
  public FindEvenementByEndDate(EndDate:Date): Observable<any>{
    return this.http.get<Event>(this.BackEndURL+'FindEvent/DateEnd/'+EndDate); 
  }
  /* Find Evenement By Type*/
  public FindEvenementByType(EndDate:Date): Observable<any>{
    return this.http.get<Event>(this.BackEndURL+'FindEvent/Type/'+EndDate); 
  }
  /* Affect User To Evenement*/
  public AffecterEventToUser(idevent:number,iduser:number){
    return this.http.post(this.BackEndURL+'AffecterEventToUser/'+idevent+'/'+iduser,httpOptions); 
  }
   /* Evennement Winners*/
  public EventWinners(){
    return this.http.post(this.BackEndURL+'SendRewards',httpOptions); 
  }
   /* Remove User From Event*/
  public RemoveUserFromEvent(idevent:number,iduser:number){
    return this.http.delete(this.BackEndURL+'RemoveUserFromEvent/'+idevent+"/"+iduser); 
  }
   /* Like Event*/
  public LikeEvent(idevent:number,iduser:number){
    return this.http.post(this.BackEndURL+"LikeEvent/"+idevent+"/"+iduser,httpOptions); 
  }
   /* DisLike Event*/
  public DisLike(idevent:number,iduser:number){
    return this.http.delete(this.BackEndURL+'DisLikeEvent/'+idevent+"/"+iduser); 
  }
   /* LikedEvents By UserId */
  public LikedEventsByUserId(iduser:number): Observable<any>{
    return this.http.get<Event>(this.BackEndURL+'LikedEventById/'+iduser); 
  }
   /* LikedUsersByEventId */
  public LikedUsersByEventId(idevent:number): Observable<any>{
    return this.http.get<Event>(this.BackEndURL+'LikedUsersByEventId/'+idevent); 
  }
   /* RecommendedEvents By Tags */
  public RecommendedEvents(Tags:EventTags){
    return this.http.get<Event>(this.BackEndURL+Tags); 
  }
   /* Find RecomendedEvents  */
  public RecomendedEvents (userid:number): Observable<any> {
    return this.http.get(this.BackEndURL+'RecomendedEvents/'+userid); 
  }
   /* Find UserJoinedEvents  */
   public UserJoinedEvents (userid:number): Observable<any> {
    return this.http.get(this.BackEndURL+'UserJoinedEvents/'+userid); 
  }
    /*TotalNumberEvents*/
    public  TotalNumberEvents (){
	return this.http.get<number>(this.BackEndURL+'TotalNumberEvents'); 
  }
    /*TotalNumberEventsChallenge*/
    public  TotalNumberEventsChallenge (){
	return this.http.get<number>(this.BackEndURL+'TotalNumberEventsChallenge'); 
  }
    /*TotalNumberEventsFormation*/
    public  TotalNumberEventsFormation (){
	return this.http.get<number>(this.BackEndURL+'TotalNumberEventsFORMATION'); 
  }
    /*TotalNumberEventsTrouphyTrue*/
    public  TotalNumberEventsTrouphyTrue (){
	return this.http.get<number>(this.BackEndURL+'TotalNumberEventsTrouphyTrue'); 
  }
     /*TotalNumberEventsTrouphyFalse*/
    public  TotalNumberEventsTrouphyFalse(){
	return this.http.get<number>(this.BackEndURL+'TotalNumberEventsTrouphyFalse'); 
  }
  //Multiple Critére Search 
	/*Events By StartDate And EndDate*/
    public findByDateStartAndDateEnd (StartDate:Date,DateEnd:Date){
	return this.http.get<Event>(this.BackEndURL+'findByDateStartAndDateEnd/'+StartDate+"/"+DateEnd); 
  }
  /*Events By StartDate And Trouphy*/
    public findByDateStartAndTrouphy (StartDate:Date,troophy:any){
	return this.http.get<Event>(this.BackEndURL+'findByDateStartAndTrouphy/'+StartDate+"/"+troophy); 
  }
   /*Events By StartDate And Trouphy*/
    public findByDateEndAndTrouphy (DateEnd:Date,troophy:any){
	return this.http.get<Event>(this.BackEndURL+'findByDateEndAndTrouphy/'+DateEnd+"/"+troophy); 
  }
    /*Events By Type And Trouphy*/
    public findByTypeAndTrouphy (Type:EventType,troophy:any){
	return this.http.get<Event>(this.BackEndURL+'findByTypeAndTrouphy/'+Type+"/"+troophy); 
  }
    /*Events By DateStart And Type*/
    public  findByDateStartAndType (DateStart:Date,Type:EventType){
	return this.http.get<Event>(this.BackEndURL+'findByDateStartAndType/'+DateStart+"/"+Type); 
  }
    /*Events By DateEnd And Type*/
    public  FindByDateEndAndType (DateEnd:Date,Type:EventType){
	return this.http.get<Event>(this.BackEndURL+'FindByDateEndAndType/'+DateEnd+"/"+Type); 
  }
   /*Events By StartDate And EndDate And Trouphy*/
    public findByDateStartAndDateEndAndTrouphy (DateStart:Date,DateEnd:Date,troophy:any){
	return this.http.get<Event>(this.BackEndURL+'findByDateStartAndDateEndAndTrouphy/'+DateStart+"/"+DateEnd+"/"+troophy); 
  }
     /*Events By StartDate And EndDate And Trouphy And Type*/
    public findByDateStartAndDateEndAndTrouphyAndType (DateStart:Date,DateEnd:Date,troophy:any,Type:EventType){
	return this.http.get<Event>(this.BackEndURL+'findByDateStartAndDateEndAndTrouphyAndType/'+DateStart+"/"+DateEnd+"/"+troophy+"/"+Type); 
  }
    /*findAllByDateStartGreaterThanEqualAndDateEndLessThanEqual*/
    public  findAllByDateStartGreaterThanEqualAndDateEndLessThanEqual (StartDate:Date,EndDate:Date){
	return this.http.get<Event>(this.BackEndURL+'findAllByDateStartGreaterThanEqualAndDateEndLessThanEqual/'+StartDate+"/"+EndDate); 
  }
  /*Sorts And Statistiques*/
	//SortEventsByIdAsc
	  public SortEventsByIdAsc(){
      return this.http.get<Event>(this.BackEndURL+'SortEventsByIdAsc'); 
  }
  //SortEventsByIdDesc
  	  public SortEventsByIdDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByIdDesc'); 
  }
  //SortEventsByTitleAsc
  	  public SortEventsByTitleAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByTitleAsc'); 
  }
  // SortEventsByTitleDesc
  	  public SortEventsByTitleDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByTitleDesc'); 
  }
  // SortEventsByDateStartAsc
  	  public SortEventsByDateStartAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByDateStartAsc'); 
  }
  // SortEventsByDateStartDesc
  	  public SortEventsByDateStartDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByDateStartDesc'); 
  }
  // SortEventsByDateEndAsc
  	  public SortEventsByDateEndAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByDateEndAsc'); 
  }
  // SortEventsByDateEndDesc
  	  public SortEventsByDateEndDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByDateEndDesc'); 
  }
  // SortEventsByNbrplaceAsc
  	  public SortEventsByNbrplaceAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByNbrplaceAsc'); 
  }
  // SortEventsByNbrplaceDesc
  	  public SortEventsByNbrplaceDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByNbrplaceDesc'); 
  }
  // SortEventsByTypeAsc
  	  public SortEventsByTypeAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByTypeAsc'); 
  }
  // SortEventsByTypeDesc
  	  public SortEventsByTypeDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByTypeDesc'); 
  }
  // SortEventsByTrouphyAsc
  	  public SortEventsByTrouphyAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByTrouphyAsc'); 
  }
  // SortEventsByTrouphyDesc
  	  public SortEventsByTrouphyDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByTrouphyDesc'); 
  }
  // SortEventsByDescriptionAsc
  	  public SortEventsByDescriptionAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByDescriptionAsc'); 
  }
  // SortEventsByDescriptionDesc
  	  public SortEventsByDescriptionDesc(){return this.http.get<Event>(this.BackEndURL+'SortEventsByDescriptionDesc'); 
  }
  // SortEventsTop10ByOrderByTitleAsc
  	  public SortEventsTop10ByOrderByTitleAsc(){return this.http.get<Event>(this.BackEndURL+'SortEventsTop10ByOrderByTitleAsc'); 
  }
  // SortEventsTop10ByOrderByTitleDesc
  	  public SortEventsTop10ByOrderByTitleDesc(){
        return this.http.get<Event>(this.BackEndURL+'SortEventsTop10ByOrderByTitleDesc'); 
  }
    /*Sorts And Statistiques*/
	
  /*---------------------------------------------------------------------------------------------------*/
  
    
}