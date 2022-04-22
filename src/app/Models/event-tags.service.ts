import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventTagsService {
  BackEndURL: string;

  constructor(private http: HttpClient) {  this.BackEndURL = 'http://127.0.0.1:8081/';
}

/*List des Evenement*/
public FindAllEvenements(): Observable<any> {
 return this.http.get(this.BackEndURL+"findall/")
}
}
