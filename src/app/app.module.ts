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
import { AddEventComponent } from './BackEnd/Events/add-event/add-event.component';
import { UpdateeventComponent } from './BackEnd/Events/updateevent/updateevent.component';
import { UpdateeventlistComponent } from './BackEnd/Events/updateeventlist/updateeventlist.component';
import { LandingComponent } from './BackEnd/landing/landing.component';
import { ManagementComponent } from './BackEnd/management/management.component';
import { NavComponent } from './BackEnd/nav/nav.component';
import { StatistiquesComponent } from './BackEnd/statistiques/statistiques.component';
import { StatsGlobalComponent } from './BackEnd/stats-global/stats-global.component';
import { DashboardcssComponent } from './BackEnd/dashboardcss/dashboardcss.component';
import { DashboardfooterComponent } from './BackEnd/dashboardfooter/dashboardfooter.component';
import { StatsEventsComponent } from './BackEnd/Events/stats-events/stats-events.component';
import { BadgesComponent } from './BackEnd/badges/badges.component';
import { UpdateBadgesComponent } from './BackEnd/badges/update-badges/update-badges.component';
import { AddBadgesComponent } from './BackEnd/badges/add-badges/add-badges.component';
import { UserBadgesComponent } from './BackEnd/badges/user-badges/user-badges.component';
import { ShowUserBadgesComponent } from './BackEnd/badges/show-user-badges/show-user-badges.component';
import { UsersEventsComponent } from './BackEnd/Events/users-events/users-events.component';
import { ShowUsersEventsComponent } from './BackEnd/Events/show-users-events/show-users-events.component';
import { UserLikesComponent } from './BackEnd/Events/user-likes/user-likes.component';
import { ShowUsersLikesComponent } from './BackEnd/Events/show-users-likes/show-users-likes.component';
import { AnswerSurveyComponent } from './Components/answer-survey/answer-survey.component';
import { AddchoiceCompanyorEmployeeComponent } from './Components/review/addchoice-companyor-employee/addchoice-companyor-employee.component';
import { AddreviewetAffecterEComponent } from './Components/review/addreviewet-affecter-e/addreviewet-affecter-e.component';
import { AddreviewetAffecterSComponent } from './Components/review/addreviewet-affecter-s/addreviewet-affecter-s.component';
import { GetReviewByUsersComponent } from './Components/review/get-review-by-users/get-review-by-users.component';
import { GetreviewBadbyusersComponent } from './Components/review/getreview-badbyusers/getreview-badbyusers.component';
import { GetreviewGoodbyusersComponent } from './Components/review/getreview-goodbyusers/getreview-goodbyusers.component';
import { ListaddEmplorcompanyComponent } from './Components/review/listadd-emplorcompany/listadd-emplorcompany.component';
import { ReviewComponent } from './Components/review/review.component';
import { AddreponseComponent } from './Components/survey/addreponse/addreponse.component';
import { AddsurveyComponent } from './Components/survey/addsurvey/addsurvey.component';
import { GetByIdsurveyComponent } from './Components/survey/get-by-idsurvey/get-by-idsurvey.component';
import { SurveyComponent } from './Components/survey/survey.component';
import { UpdatesurveyComponent } from './Components/survey/updatesurvey/updatesurvey.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablesurveyComponent } from './Components/survey/tablesurvey/tablesurvey.component';
import { AddOfferComponent } from './Components/offer/add-offer/add-offer.component';
import { DeleteOfferComponent } from './Components/offer/delete-offer/delete-offer.component';
import { ListOffersComponent } from './Components/offer/list-offers/list-offers.component';
import { MyOffersComponent } from './Components/offer/my-offers/my-offers.component';
import { ShowOfferComponent } from './Components/offer/show-offer/show-offer.component';
import { UpdateOfferComponent } from './Components/offer/update-offer/update-offer.component';
import { AddReclamationComponent } from './Components/reclamation/add-reclamation/add-reclamation.component';
import { DeleteReclamationComponent } from './Components/reclamation/delete-reclamation/delete-reclamation.component';
import { ListReclamationsByUserComponent } from './Components/reclamation/list-reclamations-by-user/list-reclamations-by-user.component';
import { ListReclamationsComponent } from './Components/reclamation/list-reclamations/list-reclamations.component';
import { ShowReclamationComponent } from './Components/reclamation/show-reclamation/show-reclamation.component';
import { AddOfferBackComponent } from './BackEnd/offer/add-offer-back/add-offer-back.component';
import { DeleteOfferBackComponent } from './BackEnd/offer/delete-offer-back/delete-offer-back.component';
import { FullOfferBackComponent } from './BackEnd/offer/full-offer-back/full-offer-back.component';
import { ListOffersBackComponent } from './BackEnd/offer/list-offers-back/list-offers-back.component';
import { ShowOfferBackComponent } from './BackEnd/offer/show-offer-back/show-offer-back.component';
import { UpdateOfferBackComponent } from './BackEnd/offer/update-offer-back/update-offer-back.component';
import { AddReclamationBackComponent } from './BackEnd/reclamation/add-reclamation-back/add-reclamation-back.component';
import { DeleteReclamationBackComponent } from './BackEnd/reclamation/delete-reclamation-back/delete-reclamation-back.component';
import { ListReclamationsBackComponent } from './BackEnd/reclamation/list-reclamations-back/list-reclamations-back.component';
import { ShowReclamationBackComponent } from './BackEnd/reclamation/show-reclamation-back/show-reclamation-back.component';
import { UpdateReclamationBackComponent } from './BackEnd/reclamation/update-reclamation-back/update-reclamation-back.component';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCommentaireComponent } from './Components/add-commentaire/add-commentaire.component';
import { AddArticleComponent } from './Components/article/add-article/add-article.component';
import { AddPostComponent } from './Components/article/add-post/add-post.component';
import { ArticleComponent } from './Components/article/article/article.component';
import { GetByIdArticleComponent } from './Components/article/get-by-id-article/get-by-id-article.component';
import { PostComponent } from './Components/article/post/post.component';
import { TableauAdminArticleComponent } from './Components/article/tableau-admin-article/tableau-admin-article.component';
import { UpdateArticleComponent } from './Components/article/update-article/update-article.component';
import { CommentaireComponent } from './Components/commentaire/commentaire.component';
import { GetByIdPostComponent } from './Components/get-by-id-post/get-by-id-post.component';
import { UpdateAdminArticleComponent } from './Components/update-admin-article/update-admin-article.component';
import { TableauAdminPostsComponent } from './Components/tableau-admin-posts/tableau-admin-posts.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { SendRewardsComponent } from './BackEnd/Events/send-rewards/send-rewards.component';
import { BadgesEventComponent } from './Components/badges-event/badges-event.component';
import { TableauAdminCommentaireComponent } from './Components/tableau-admin-commentaire/tableau-admin-commentaire.component';
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
    HomeComponent,
    NavComponent,
    ManagementComponent,
    StatistiquesComponent,
    StatsGlobalComponent,
    FooterComponent,
    AddEventComponent,
    PagenotfoundComponent,
    UpdateeventComponent,
    UpdateeventlistComponent,
    LandingComponent,
    DashboardcssComponent,
    DashboardfooterComponent,
    StatsEventsComponent,
    BadgesComponent,
    UpdateBadgesComponent,
    AddBadgesComponent,
    UserBadgesComponent,
    ShowUserBadgesComponent,
    UsersEventsComponent,
    ShowUsersEventsComponent,
    UserLikesComponent,
    ShowUsersLikesComponent,
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
    ReviewComponent,
    SurveyComponent,
    AddsurveyComponent,
    UpdatesurveyComponent,
    GetByIdsurveyComponent,
    AddreviewetAffecterEComponent,
    BadgesEventComponent,
    AddreviewetAffecterSComponent,
    GetReviewByUsersComponent,
    GetreviewBadbyusersComponent,
    GetreviewGoodbyusersComponent,
    AddchoiceCompanyorEmployeeComponent,
    ListaddEmplorcompanyComponent,
    AddreponseComponent,
    AnswerSurveyComponent,
    TablesurveyComponent,
    ListOffersComponent,
    AddOfferComponent,
    DeleteOfferComponent,
    UpdateOfferComponent,
    ShowOfferComponent,
    AddReclamationComponent,
    DeleteReclamationComponent,
    ListReclamationsComponent,
    ShowReclamationComponent,
    ListReclamationsByUserComponent,
    MyOffersComponent,
    DeleteOfferBackComponent,
    UpdateOfferBackComponent,
    ListOffersBackComponent,
    AddOfferBackComponent,
    ShowOfferBackComponent,
    ShowReclamationBackComponent,
    ListReclamationsBackComponent,
    AddReclamationBackComponent,
    DeleteReclamationBackComponent,
    UpdateReclamationBackComponent,
    FullOfferBackComponent,
    ArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    GetByIdArticleComponent,
    PostComponent,
    AddPostComponent,
    CommentaireComponent,
    AddCommentaireComponent,
    AddArticleComponent,
    GetByIdPostComponent,
    TableauAdminArticleComponent,
    TableauAdminPostsComponent,
    UpdateAdminArticleComponent,
    SendRewardsComponent,
    TableauAdminCommentaireComponent


    
    
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    CarouselModule,
    FontAwesomeModule,
    NgxPaginationModule,
    NgChartsModule,
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
        {path: '**', redirectTo: '404NotFound'}
    ]),
          FontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
