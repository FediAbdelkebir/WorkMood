import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleCategory } from 'src/app/Models/article-category.moel';
import { Article } from 'src/app/Models/article.model';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
   keys:string[]=[];
   categoryArti:any = ArticleCategory;
   selected!:ArticleCategory;

  constructor(private articleService: ArticleService,private router:Router) {
    this.keys=Object.keys(this.categoryArti);
  }

  ngOnInit(): void {
  }

  addArticle(a:Article){
    let id=2;
    a.category=this.selected;
    this.articleService.AddArticle(a,id).subscribe(res=>{
      this.router.navigate(['afficher-article'])
    });

  }

}
