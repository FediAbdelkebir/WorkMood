import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  public listPostes():Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8089/WorkMood/post/retrieve-all-posts');
  }

  public AddPost(post:Post,id:any):Observable<Post[]>{
    return this.http.post<Post[]>('http://localhost:8089/WorkMood/post/add-post/'+id,post);
  }

  public getPostById(id:any):Observable<Post>{
    return this.http.get<Post>('http://localhost:8089/WorkMood/post/retrieve-post/'+id);
  }


  // public updateArticle(article:Article,id:any,iduser:any):Observable<Article>{
  //   return this.http.put<Article>('http://localhost:8089/WorkMood/article/modify-article/'+id+'/'+iduser,article);
  // }

  public deletepostes(idPost:any){
    return this.http.delete<Post[]>('http://localhost:8089/WorkMood/post/remove-post/'+idPost);
  }

  // public getArticleById(id:any):Observable<Article>{
  //   return this.http.get<Article>('http://localhost:8089/WorkMood/article/retrieve-article/'+id);
  // }

  // getArticleByCatg (categorie:ArticleCategory): Observable<Article[]> {
  //   return this.http.get<Article[]>('http://localhost:8089/WorkMood/article/articleCat?category='+categorie);
  // }
}
