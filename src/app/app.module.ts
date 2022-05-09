import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from '../app/Components/footer/footer.component';
import { LatestmediaComponent } from '../app/Components/latestmedia/latestmedia.component';
import { TopreviewsComponent } from '../app/Components/topreviews/topreviews.component';
import { TeamComponent } from '../app/Components/team/team.component';
import { PartnershipComponent } from '../app/Components/partnership/partnership.component';
import { ServicesComponent } from '../app/Components/services/services.component';
import { OurproudComponent } from '../app/Components/ourproud/ourproud.component';
import { OurfaqComponent } from '../app/Components/ourfaq/ourfaq.component';
import { HeaderComponent } from '../app/Components/header/header.component';
import { OurworkComponent } from '../app/Components/ourwork/ourwork.component';
import { HomesliderComponent } from '../app/Components/homeslider/homeslider.component';
import { EvenementsComponent } from '../app/Components/Evenements/evenements/evenements.component';
import { AddevenementComponent } from '../app/Components/Evenements/addevenement/addevenement.component';
import { UpdateevenementComponent } from '../app/Components/Evenements/updateevenement/updateevenement.component';
import { HeadComponent } from '../app/Components/head/head.component';
import { ScriptsComponent } from '../app/Components/scripts/scripts.component';
import { WorkinprogressComponent } from '../app/Components/workinprogress/workinprogress.component';
import { ContactusComponent } from '../app/Components/contactus/contactus.component';
import { LatestupdatesComponent } from '../app/Components/latestupdates/latestupdates.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PagenotfoundComponent } from '../app/Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../app/Components/home/home.component';
import { AddeventsliderComponent } from '../app/Components/Evenements/addeventslider/addeventslider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { EvenementdetailsComponent } from '../app/Components/Evenements/evenementdetails/evenementdetails.component';
import { EvenementssliderComponent } from './Components/Evenements/evenementsslider/evenementsslider.component';
import { JoinedeventsComponent } from './Components/Evenements/joinedevents/joinedevents.component';
import { LikedeventsComponent } from './Components/Evenements//likedevents/likedevents.component';
import { JoinedeventssliderComponent } from './Components/Evenements/joinedeventsslider/joinedeventsslider.component';
import { LikedeventssliderComponent } from './Components/Evenements/likedeventsslider/likedeventsslider.component';
import { ArticleComponent } from './Components/article/article/article.component';
import { AddArticleComponent } from './Components/article/add-article/add-article.component';
import { UpdateArticleComponent } from './Components/article/update-article/update-article.component';
import { GetByIdArticleComponent } from './Components/article/get-by-id-article/get-by-id-article.component';
import { PostComponent } from './Components/article/post/post.component';
import { AddPostComponent } from './Components/article/add-post/add-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentaireComponent } from './Components/commentaire/commentaire.component';
import { AddCommentaireComponent } from './Components/add-commentaire/add-commentaire.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LatestmediaComponent,
    TopreviewsComponent,
    TeamComponent,
    PartnershipComponent,
    ServicesComponent,
    OurproudComponent,
    OurfaqComponent,
    HeaderComponent,
    OurworkComponent,
    HomesliderComponent,
    EvenementsComponent,
    AddevenementComponent,
    UpdateevenementComponent,
    HeadComponent,
    ScriptsComponent,
    WorkinprogressComponent,
    ContactusComponent,
    LatestupdatesComponent,
    PagenotfoundComponent,
    AddeventsliderComponent,
    EvenementdetailsComponent,
    EvenementssliderComponent,
    JoinedeventsComponent,
    LikedeventsComponent,
    JoinedeventssliderComponent,
    LikedeventssliderComponent,
    ArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    GetByIdArticleComponent,
    PostComponent,
    AddPostComponent,
    CommentaireComponent,
    AddCommentaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
      path:'',
        component:HomeComponent
      },{
      path:'Home',
      component:HomeComponent, data: { animation: 'isLeft' }
      },
      {
        path:'AddEvent',
          component:AddevenementComponent, data: { animation: 'isRight' }
        }
        ,
        {
          path:'404NotFound',
            component:PagenotfoundComponent
          },

      {
        path:'Evenements',
          component:EvenementsComponent, data: { animation: 'isRight' }
        },
        {
          path:'EventDetails/:id',
            component:EvenementdetailsComponent, data: { animation: 'isRight' }
          },
        {
          path:'JoinedEvents',
            component:JoinedeventsComponent, data: { animation: 'isRight' }
          },
        {
          path:'LikedEvents',
            component:LikedeventsComponent, data: { animation: 'isRight' }
          },
          {
            path:'add-article',
            component:LikedeventsComponent, data: { animation: 'isLeft' }
          },

        {path: '**', redirectTo: '404NotFound'}
    ]),
    FontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
