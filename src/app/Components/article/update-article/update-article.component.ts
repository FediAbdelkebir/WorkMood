import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/Models/article.model';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
id!:number;
article!:any;
  constructor(private articleService:ArticleService,private activated: ActivatedRoute) { }

  ngOnInit(): void {
 this.getById()
  }

  getById(){
    this.id=this.activated.snapshot.params['id']
    this.articleService.getArticleById(this.id).subscribe(
      (a)=>{
        this.article=a;
        console.log(this.article);
      }
    )
  }

  save(f: Article){
    console.log(f);
    let iduser=1;
    this.articleService.updateArticle(f, this.id,iduser).subscribe(
      ()=>{

        console.log('good');
      }
    );
  }

}
