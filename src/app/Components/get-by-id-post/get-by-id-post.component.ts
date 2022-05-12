import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CommentaireService } from 'src/app/Services/commentaire.service';
import { Commentaire } from 'src/app/Models/commentaire';
@Component({
  selector: 'app-get-by-id-post',
  templateUrl: './get-by-id-post.component.html',
  styleUrls: ['./get-by-id-post.component.css']
})
export class GetByIdPostComponent implements OnInit {

  constructor(private postservice: PostService,private commentaireservice : CommentaireService,private activate:ActivatedRoute ,private router:Router ) { }
  post!:any;
  idd!:any;
  faHeart=faHeart;
  listcomment!:any;
  ngOnInit(): void {
    this.getById();
    this.getcommentpost(this.idd);
  }


  Addcommentairearticle(c:Commentaire){
    let id=2;
    this.commentaireservice.AddCommentPost(c,id,this.idd).subscribe(
      res=>{
        this.router.navigate(['afficher-posts'])
      });
  }

    getcommentpost(idPost:any){
    this.commentaireservice.getCommentByPost(idPost).subscribe(

      (d)=>{
        this.listcomment=d;
        console.log(this.listcomment);
      }
    );
    }
  getById(){
    this.idd=this.activate.snapshot.params['idPost']
    this.postservice.getPostById(this.idd).subscribe(
      (a)=>{
        this.post=a;
      }
    )
  }

}
