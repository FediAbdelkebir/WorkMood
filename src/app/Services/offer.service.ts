import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryOffer } from '../Models/category-offer';
import { Offer } from '../Models/offer';
let headers = new HttpHeaders({
  'Content-Type': 'application/pdf',
  responseType: 'blob',
  Accept: 'application/pdf',
  observe: 'response',
});
@Injectable({
  providedIn: 'root',
})
export class OfferService {
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
  /* ---------- FindBy ---------- */
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
  /* ---------- UserFindBy ---------- */
  findOfferByUsers(idUser: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/FindOfferByUsers/' + idUser);
  }
  findOfferByUserByCategory(
    category: CategoryOffer,
    idUser: number
  ): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      this.apiUrl +
        '/FindOfferByCategoryAndUser/' +
        idUser +
        '?category=' +
        category
    );
  }
  findOfferByUserByDateExpAsc(idUser: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      this.apiUrl + '/FindOfferByDateExpAscAndUser/' + idUser
    );
  }
  findOfferByUserByDateExpDesc(idUser: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      this.apiUrl + '/FindOfferByDateExpDescAndUser/' + idUser
    );
  }
  findOfferByUserByPointAsc(idUser: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      this.apiUrl + '/FindOfferByPointAscAndUser/' + idUser
    );
  }
  findOfferByUserByPointDesc(idUser: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      this.apiUrl + '/FindOfferByPointDescAndUser/' + idUser
    );
  }

  searchOffer(title: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '"/SearchOffer/' + title);
  }
  findFullOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + '/ShowFullOffers');
  }
  findSimilarOffers(id: number, idUser: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(
      this.apiUrl + '/SearchOffersSimilar/' + id + '/' + idUser
    );
  }
  getCoupon(idUser: number, id: number) {
    return this.http.get(this.apiUrl+'/GetOfferAndCoupon/'+idUser+'/'+id,{ headers: headers, responseType: 'blob',});
    /*return this.http.get(
      'http://localhost:8089/WorkMood/Offer/GetOfferAndCoupon/1/17',
      {
        headers: headers,
        responseType: 'blob',
      }
    );*/
  }
}
