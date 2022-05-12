import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-tableau-admin-posts',
  templateUrl: './tableau-admin-posts.component.html',
  styleUrls: ['./tableau-admin-posts.component.css']
})
export class TableauAdminPostsComponent implements OnInit {
  listPostes !: any;
  postes !: Post[];
  searchText:any;
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10']
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
