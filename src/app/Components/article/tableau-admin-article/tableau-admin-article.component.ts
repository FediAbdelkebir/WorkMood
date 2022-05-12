import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleCategory } from 'src/app/Models/article-category.moel';
import { Article } from 'src/app/Models/article.model';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-tableau-admin-article',
  templateUrl: './tableau-admin-article.component.html',
  styleUrls: ['./tableau-admin-article.component.css']
})
export class TableauAdminArticleComponent implements OnInit {

  constructor(private articleService: ArticleService,private router:Router) { }
  listarticle !: any;
  article!: Article[];
  searchText:any;
  category!:ArticleCategory;
  keys:string[]=[];
  categoryArti:any = ArticleCategory;
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  ngOnInit(): void {
    this.getArticles();
    this.keys=Object.keys(this.categoryArti);
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

  onChange(){
    this.articleService.getArticleByCatg(this.category).subscribe(
      (e)=>{
        this.article=e;
        console.log(this.category);
      }
    )
    }



}
