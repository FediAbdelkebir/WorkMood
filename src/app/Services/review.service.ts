import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryReview } from '../Models/category-review';
import { Classification } from '../Models/classification';
import { Review } from '../Models/review';
import { TypeReview } from '../Models/type-review';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getreview():Observable<Review[]>{
    return this.http.get<Review[]>('http://localhost:8089/work-mood/review/retrieve-all-review');
  }

  deletereview(id:any):Observable<Review[]>{
    return this.http.delete<Review[]>('http://localhost:8089/work-mood/review/remove-review/'+id);
  }

  addreviewetAffecterE (s:any , id:any): Observable<Review[]> {
    return this.http.post<Review[]>('http://localhost:8089/work-mood/review/add-reviewetAffecterE/'+id,s);
  }

  addreviewetAffecterS (s:any , id:any): Observable<Review[]> {
    return this.http.post<Review[]>('http://localhost:8089/work-mood/review/add-reviewetAffecterS/'+id,s);
  }

  getReviewByUsers (id:any): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:8089/work-mood/review/FindReviewByUsers/'+id);
  }
  getReviewGoodByUsers (id:any): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:8089/work-mood/review/FindReviewByUsersGood/'+id);
  }
  getReviewBadByUsers (id:any): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:8089/work-mood/review/FindReviewByUsersBad/'+id);
  }

  getReviewByClass (classf:Classification): Observable<Classification[]> {
    return this.http.get<Classification[]>('http://localhost:8089/work-mood/review/ReviewClass?classf= /'+classf);
  }

  getReviewByCatg (categorie:CategoryReview): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:8089/work-mood/review/ReviewCategorie?categorie='+categorie);
  }

  getReviewByType (review:TypeReview): Observable<TypeReview[]> {
    return this.http.get<TypeReview[]>('http://localhost:8089/work-mood/review/ReviewType?review='+review);
  }
  

}

