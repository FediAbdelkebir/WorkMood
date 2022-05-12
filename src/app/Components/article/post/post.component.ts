import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listPostes !: any;
   postes !: Post[];
   faCalendar=faCalendar;

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

    async addPost(){
      let
      p = new Post();
      const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Add Your Post',
        inputPlaceholder: 'Add Your news with coworker',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })

      if (text) {
        p.contenu=text
      }

      let id=1;
      this.postService.AddPost(p,id).subscribe((res)=>{
        this.router.navigate(['afficher-posts'])
        Swal.fire({
          icon: 'success',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        this.ngOnInit()
      },(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
      );


    }

    // AddPoste(){
    //   let id=1;
    //   let p =new Post();
    //   Swal.fire({
    //     title: '<strong>Add This Event ?</strong>',
    //     icon: 'info',
    //     html:
    //       'You can <a href="/">Check your Posted Events</a> <b>later</b>, ',
    //     showCloseButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     showCancelButton: true,
    //     focusConfirm: false,
    //     confirmButtonText:
    //       '<i class="fa fa-heart"></i> Yes, Add it !',
    //     confirmButtonAriaLabel: '',
    //     cancelButtonText:
    //       '<i class="fa fa-close"></i> No,I Changed My mind',
    //     cancelButtonAriaLabel: ''
    //   }).then((result) => {
    //     if (result.isConfirmed) {


    //        this.postService.AddPost(p,id).subscribe((res)=>{

    //        });

    //     }
    //   }
    //   )
    // }
}
