import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService,private router:Router) { }

  ngOnInit(): void {
  }

  addPost(p:Post){
    let id=1;
    this.postService.AddPost(p,id).subscribe(res=>{
      this.router.navigate(['afficher-posts'])
    });

  }

}
