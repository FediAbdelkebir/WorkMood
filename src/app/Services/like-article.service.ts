import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/article.model';
import { LikeArticle } from '../Models/like-article';

@Injectable({
  providedIn: 'root'
})
export class LikeArticleService {

  constructor(private http:HttpClient) { }
  public AddLikeArticle(like:LikeArticle,idArticle:Article,iduser:any):Observable<LikeArticle[]>{
    return this.http.post<LikeArticle[]>('http://localhost:8089/WorkMood/like/articlelike/'+idArticle+'/'+iduser,like);
  }
}
