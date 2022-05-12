import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/Models/article.model';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-update-admin-article',
  templateUrl: './update-admin-article.component.html',
  styleUrls: ['./update-admin-article.component.css']
})
export class UpdateAdminArticleComponent implements OnInit {
  id!:number;
article!:any;
  constructor(private articleService:ArticleService,private activated: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
 this.getById()
  }

  getById(){
    this.id=this.activated.snapshot.params['id']
    this.articleService.getArticleById(this.id).subscribe(
      (a)=>{
        this.article=a;
        console.log("getbyid "+this.article);
      }
    )
  }

  save(f: Article){
    console.log("f:"+f);
    let iduser=1;
    this.articleService.updateArticle(f,iduser,this.id).subscribe(
      ()=>{
        this.router.navigate(['afficher-article'])
        console.log('good');
      }
    );
  }

}
