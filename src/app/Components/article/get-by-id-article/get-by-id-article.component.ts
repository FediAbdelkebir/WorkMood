import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/Models/article.model';
import { ArticleCategory } from 'src/app/Models/article-category.moel';

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
 // articlee!: Article[];
  constructor(private articleservice:ArticleService,private activate:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getById();
    //this.getByCategory(this.article.category);

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
