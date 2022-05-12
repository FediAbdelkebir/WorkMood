import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryOffer } from '../Models/category-offer';
import { Offer } from '../Models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferBackService {

  readonly apiUrl: string = 'http://localhost:8089/work-mood/Offer';

  constructor(private http: HttpClient) {}

  /* ---------- CRUD ---------- */
  listOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/ShowAllOffers');
  }
  showById(id: any): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/ShowOffer/' + id);
  }
  addOffer(b: any, id: any): Observable<Offer[]> {
    return this.http.post<Offer[]>(this.apiUrl + '/AddOffer/' + id, b);
  }
  updateOffer(b: any, id: any): Observable<Offer[]> {
    return this.http.put<Offer[]>(this.apiUrl + '/UpdateOffer/' + id, b);
  }
  deleteOffer(id: any): Observable<Offer[]> {
    return this.http.delete<Offer[]>(this.apiUrl + '/DeleteOffer/' + id);
  }
  
  findByCategory(category: CategoryOffer): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      this.apiUrl + '/FindOfferByCategory?category=' + category
    );
  }
  findOfferByDateExpAsc(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/FindOfferByDateExpAsc');
  }
  findOfferByDateExpDesc(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/FindOfferByDateExpDesc');
  }
  findOfferByPointAsc(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/FindOfferByPointAsc');
  }
  findOfferByPointDesc(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/FindOfferByPointDesc');
  }
  findFullOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/ShowFullOffers');
  }

}
