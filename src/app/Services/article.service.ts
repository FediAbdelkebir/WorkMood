import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleCategory } from '../Models/article-category.moel';
import { Article } from '../Models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  public listArticles():Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:8089/WorkMood/article/retrieve-all-article');
  }

  public AddArticle(article:Article,id:any):Observable<Article[]>{
    return this.http.post<Article[]>('http://localhost:8089/WorkMood/article/add-article/'+id,article);
  }

  public updateArticle(article:Article,id:any,iduser:any):Observable<Article>{
    return this.http.put<Article>('http://localhost:8089/WorkMood/article/modify-article/'+id+'/'+iduser,article);
  }

  public deleteArticle(idArticle:any){
    return this.http.delete<Article[]>('http://localhost:8089/WorkMood/article/remove-article/'+idArticle);
  }

  public getArticleById(id:any):Observable<Article>{
    return this.http.get<Article>('http://localhost:8089/WorkMood/article/retrieve-article/'+id);
  }

  getArticleByCatg (categorie:ArticleCategory): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:8089/WorkMood/article/articleCat?category='+categorie);
  }
}
