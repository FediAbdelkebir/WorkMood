import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

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
  constructor(private articleservice:ArticleService,private activate:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getById();
  }
  getById(){
    this.idd=this.activate.snapshot.params['idArticle']
    this.articleservice.getArticleById(this.idd).subscribe(
      (a)=>{
        this.article=a;
      }
    )
  }

}
