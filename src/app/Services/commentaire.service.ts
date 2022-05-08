import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/article.model';
import { Commentaire } from '../Models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }

  public AddCommentArticle(comment:Commentaire,iduser:any,idArticle:Article):Observable<Commentaire[]>{
    return this.http.post<Commentaire[]>('http://localhost:8089/WorkMood/article/add-article/'+iduser+'/'+idArticle,comment);
  }

  public getCommentByArticle(idArticle:any):Observable<Article>{
    return this.http.get<Article>('http://localhost:8089/WorkMood/comment/retrieve-commentaire/article/'+idArticle);
  }
}
