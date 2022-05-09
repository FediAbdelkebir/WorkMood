import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentaireService } from 'src/app/Services/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  constructor(private commetaire: CommentaireService,private router:Router) { }

  ngOnInit(): void {

  }

  


}
