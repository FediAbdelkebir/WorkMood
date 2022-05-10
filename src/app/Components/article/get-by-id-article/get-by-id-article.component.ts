import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/Models/article.model';
import { ArticleCategory } from 'src/app/Models/article-category.moel';
import { CommentaireService } from 'src/app/Services/commentaire.service';
import { Commentaire } from 'src/app/Models/commentaire';
import { LikeArticleService } from 'src/app/Services/like-article.service';
import { LikeArticle } from 'src/app/Models/like-article';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-by-id-article',
  templateUrl: './get-by-id-article.component.html',
  styleUrls: ['./get-by-id-article.component.css']
})
export class GetByIdArticleComponent implements OnInit {
  article!:any;
  idd!:any;
  faAngleRight=faAngleRight;
  faCalendarAlt=faCalendarAlt;
  faHeart=faHeart;
  faThumbsUp=faThumbsUp;
  faThumbsDown=faThumbsDown;
  listcomment!:any;
 // articlee!: Article[];
  constructor(private articleservice:ArticleService,private commentaireservice : CommentaireService,private likeservice : LikeArticleService, private activate:ActivatedRoute ,private router:Router ) { }

  ngOnInit(): void {
    this.getById();
    //this.getByCategory(this.article.category);
   this.getcommentarticle(this.idd);
  }

  Addcommentairearticle(c:Commentaire){
    let id=2;
    this.commentaireservice.AddCommentArticle(c,id,this.idd).subscribe(
      res=>{
        this.router.navigate(['afficher-article'])
      });
  }

  Addlikearticle(a:LikeArticle){
    let id=3;
    this.likeservice.AddLikeArticle(a,this.idd,id).subscribe(
      res=>{
        this.router.navigate(['afficher-article'])
      });
  }

  getcommentarticle(idArticle:any){
    this.commentaireservice.getCommentByArticle(idArticle).subscribe(

      (d)=>{
        this.listcomment=d;
        console.log(this.listcomment);
      }
    );



  }

  getById(){
    this.idd=this.activate.snapshot.params['idArticle']
    this.articleservice.getArticleById(this.idd).subscribe(
      (a)=>{
        this.article=a;
      }
    )
  }

 // getByCategory(c: ArticleCategory){
   // console.log(c);
    //this.articleservice.getArticleByCatg(c).subscribe(
      //(e)=>{
        //this.articlee=e;
        //console.log(e);

      //}
    //);
//}

}
