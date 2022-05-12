import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleCategory } from 'src/app/Models/article-category.moel';
import { Article } from 'src/app/Models/article.model';
import { ArticleService } from 'src/app/Services/article.service';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faListAlt} from '@fortawesome/free-solid-svg-icons';
import { faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  faAngleRight=faAngleRight;
  faListAlt=faListAlt;
  faArrowUpShortWide=faArrowUpShortWide;
  faArrowDownShortWide=faArrowDownShortWide;
   listarticle !: any;
   article!: Article[];
    category!:ArticleCategory;
   keys:string[]=[];
   categoryArti:any = ArticleCategory;
  title!:any;
  searchText!:any;
  constructor(private articleService: ArticleService,private router:Router) {
    this.keys=Object.keys(this.categoryArti); }

  ngOnInit(): void {
    this.getArticles();

  }

  public getArticles():void{
  this.articleService.listArticles().subscribe(
    (d)=>{
      this.article=d;
      console.log(this.article);
    }
  );
  }

  deleteArticle(idArticle:any){
    this.articleService.deleteArticle(idArticle).subscribe(res => {
      this.getArticles()
  });
  }

  getByCategory(c: ArticleCategory){
    console.log(c);
    this.articleService.getArticleByCatg(c).subscribe(
      (e)=>{
        this.listarticle=e;
        console.log(e);

      }
    );
}

// hethi recherche bel consomation mch bel pipe
getArticleSearch(title:any){
 this.articleService.rechercheArticle(title).subscribe(
  (e)=>{
    this.listarticle=e;
    console.log(e);

  }
 )
}
onChange(){
  this.articleService.getArticleByCatg(this.category).subscribe(
    (e)=>{
      this.article=e;
      console.log(this.category);
    }
  )
  }

  sortByDateDesc(){
    this.articleService.sortbydatedsc().subscribe(
      (e)=>{
        this.article=e;
        console.log(e);

      }
    );
  }


  sortByDateAsc(){
    this.articleService.sortbydateasc().subscribe(
      (e)=>{
        this.article=e;
        console.log(e);

      }
    );
  }


 /* getColorCat(){
     if(this.category==='Technology'){
       return 'red';
     }else if (this.category==='Education'){
       return 'green';
     }
   }
   */

}
