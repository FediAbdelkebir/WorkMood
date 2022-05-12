import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/Models/commentaire';
import { CommentaireService } from 'src/app/Services/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  commentaire!: Commentaire[];
  constructor(private commetaireservice: CommentaireService,private router:Router) { }

  ngOnInit(): void {

  }

  getCommentByArticle(){

  }

  getCommentByPost(){

  }


}
