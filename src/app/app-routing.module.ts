import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './Components/article/add-article/add-article.component';
import { AddPostComponent } from './Components/article/add-post/add-post.component';
import { ArticleComponent } from './Components/article/article/article.component';
import { GetByIdArticleComponent } from './Components/article/get-by-id-article/get-by-id-article.component';
import { PostComponent } from './Components/article/post/post.component';
import { UpdateArticleComponent } from './Components/article/update-article/update-article.component';

const routes: Routes = [
  { path:"afficher-article",component:ArticleComponent},
  { path:"deletearticle/:id",component:ArticleComponent},
  { path:"add-article",component:AddArticleComponent},
  { path:"update/:id",component:UpdateArticleComponent},
  { path:"afficher-articlebyid/:idArticle",component:GetByIdArticleComponent},
  { path:"afficher-posts",component:PostComponent},
  { path:"deletepost/:id",component:PostComponent},
  { path:"add-posts",component:AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
