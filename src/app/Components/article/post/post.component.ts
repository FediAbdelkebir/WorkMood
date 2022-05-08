import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listPostes !: any;
   postes !: Post[];

  constructor(private postService: PostService,private router:Router) { }

  ngOnInit(): void {
    this.getpostes();
  }
  public getpostes():void{
    this.postService.listPostes().subscribe(
      (d)=>{
        this.postes=d;
        console.log(this.postes);
      }
    );
    }

    deletePost(idPost:any){
      this.postService.deletepostes(idPost).subscribe(res => {
        this.getpostes()
    });
    }
}
