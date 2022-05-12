import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentaireService } from 'src/app/Services/commentaire.service';

@Component({
  selector: 'app-tableau-admin-commentaire',
  templateUrl: './tableau-admin-commentaire.component.html',
  styleUrls: ['./tableau-admin-commentaire.component.css']
})
export class TableauAdminCommentaireComponent implements OnInit {
  commentaire!:any;
  constructor(private commentaireservice:CommentaireService,private router:Router) { }

  ngOnInit(): void { 
    this.getcomment()
  } 

  public getcomment():void{
    this.commentaireservice.getAllcomment().subscribe(
      (d)=>{
        this.commentaire=d;
        console.log(this.commentaire);
      }
    );
    }

    deletecomment(id:any){
      this.commentaireservice.deletecomments(id).subscribe(res => {
        this.getcomment()
    });
    }

}
