import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/article.model';
import { Commentaire } from '../Models/commentaire';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }

  public AddCommentArticle(comment:Commentaire,iduser:any,idArticle:Article):Observable<Commentaire[]>{
    return this.http.post<Commentaire[]>('http://localhost:8089/work-mood/comment/add-comment-inarticle/'+iduser+'/'+idArticle,comment);
  }

  public getCommentByArticle(idArticle:any):Observable<Commentaire>{
    return this.http.get<Commentaire>('http://localhost:8089/work-mood/comment/retrieve-commentaire/article/'+idArticle);
  }

  // post comment

  public AddCommentPost(comment:Commentaire,iduser:any,idPost:Post):Observable<Commentaire[]>{
    return this.http.post<Commentaire[]>('http://localhost:8089/work-mood/comment/add-comment-inpost/'+iduser+'/'+idPost,comment);
  }

  public getCommentByPost(idPost:any):Observable<Commentaire>{
    return this.http.get<Commentaire>('http://localhost:8089/work-mood/comment/retrieve-commentaire/post/'+idPost);
  }

}
