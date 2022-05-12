import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from '../app/BackEnd/landing/landing.component'
import { AddBadgesComponent } from './BackEnd/badges/add-badges/add-badges.component';
import { BadgesComponent } from './BackEnd/badges/badges.component';
import { ShowUserBadgesComponent } from './BackEnd/badges/show-user-badges/show-user-badges.component';
import { UpdateBadgesComponent } from './BackEnd/badges/update-badges/update-badges.component';
import { UserBadgesComponent } from './BackEnd/badges/user-badges/user-badges.component';
import { AddEventComponent } from './BackEnd/Events/add-event/add-event.component';
import { SendRewardsComponent } from './BackEnd/Events/send-rewards/send-rewards.component';
import { ShowUsersEventsComponent } from './BackEnd/Events/show-users-events/show-users-events.component';
import { ShowUsersLikesComponent } from './BackEnd/Events/show-users-likes/show-users-likes.component';
import { StatsEventsComponent } from './BackEnd/Events/stats-events/stats-events.component';
import { UpdateeventComponent } from './BackEnd/Events/updateevent/updateevent.component';
import { UpdateeventlistComponent } from './BackEnd/Events/updateeventlist/updateeventlist.component';
import { UserLikesComponent } from './BackEnd/Events/user-likes/user-likes.component';
import { UsersEventsComponent } from './BackEnd/Events/users-events/users-events.component';
import { AddOfferBackComponent } from './BackEnd/offer/add-offer-back/add-offer-back.component';
import { DeleteOfferBackComponent } from './BackEnd/offer/delete-offer-back/delete-offer-back.component';
import { FullOfferBackComponent } from './BackEnd/offer/full-offer-back/full-offer-back.component';
import { ListOffersBackComponent } from './BackEnd/offer/list-offers-back/list-offers-back.component';
import { ShowOfferBackComponent } from './BackEnd/offer/show-offer-back/show-offer-back.component';
import { UpdateOfferBackComponent } from './BackEnd/offer/update-offer-back/update-offer-back.component';
import { ListReclamationsBackComponent } from './BackEnd/reclamation/list-reclamations-back/list-reclamations-back.component';
import { UpdateReclamationBackComponent } from './BackEnd/reclamation/update-reclamation-back/update-reclamation-back.component';
import { StatsGlobalComponent } from './BackEnd/stats-global/stats-global.component';
import { AnswerSurveyComponent } from './Components/answer-survey/answer-survey.component';
import { AddArticleComponent } from './Components/article/add-article/add-article.component';
import { AddPostComponent } from './Components/article/add-post/add-post.component';
import { ArticleComponent } from './Components/article/article/article.component';
import { GetByIdArticleComponent } from './Components/article/get-by-id-article/get-by-id-article.component';
import { PostComponent } from './Components/article/post/post.component';
import { TableauAdminArticleComponent } from './Components/article/tableau-admin-article/tableau-admin-article.component';
import { UpdateArticleComponent } from './Components/article/update-article/update-article.component';
import { BadgesEventComponent } from './Components/badges-event/badges-event.component';
import { GetByIdPostComponent } from './Components/get-by-id-post/get-by-id-post.component';
import { HomeComponent } from './Components/home/home.component';
import { AddOfferComponent } from './Components/offer/add-offer/add-offer.component';
import { DeleteOfferComponent } from './Components/offer/delete-offer/delete-offer.component';
import { ListOffersComponent } from './Components/offer/list-offers/list-offers.component';
import { MyOffersComponent } from './Components/offer/my-offers/my-offers.component';
import { ShowOfferComponent } from './Components/offer/show-offer/show-offer.component';
import { UpdateOfferComponent } from './Components/offer/update-offer/update-offer.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { AddReclamationComponent } from './Components/reclamation/add-reclamation/add-reclamation.component';
import { DeleteReclamationComponent } from './Components/reclamation/delete-reclamation/delete-reclamation.component';
import { ListReclamationsByUserComponent } from './Components/reclamation/list-reclamations-by-user/list-reclamations-by-user.component';
import { ShowReclamationComponent } from './Components/reclamation/show-reclamation/show-reclamation.component';
import { AddchoiceCompanyorEmployeeComponent } from './Components/review/addchoice-companyor-employee/addchoice-companyor-employee.component';
import { AddreviewetAffecterEComponent } from './Components/review/addreviewet-affecter-e/addreviewet-affecter-e.component';
import { AddreviewetAffecterSComponent } from './Components/review/addreviewet-affecter-s/addreviewet-affecter-s.component';
import { GetReviewByUsersComponent } from './Components/review/get-review-by-users/get-review-by-users.component';
import { GetreviewBadbyusersComponent } from './Components/review/getreview-badbyusers/getreview-badbyusers.component';
import { GetreviewGoodbyusersComponent } from './Components/review/getreview-goodbyusers/getreview-goodbyusers.component';
import { ListaddEmplorcompanyComponent } from './Components/review/listadd-emplorcompany/listadd-emplorcompany.component';
import { ReviewComponent } from './Components/review/review.component';
import { AddsurveyComponent } from './Components/survey/addsurvey/addsurvey.component';
import { GetByIdsurveyComponent } from './Components/survey/get-by-idsurvey/get-by-idsurvey.component';
import { SurveyComponent } from './Components/survey/survey.component';
import { TablesurveyComponent } from './Components/survey/tablesurvey/tablesurvey.component';
import { UpdatesurveyComponent } from './Components/survey/updatesurvey/updatesurvey.component';
import { TableauAdminCommentaireComponent } from './Components/tableau-admin-commentaire/tableau-admin-commentaire.component';
import { TableauAdminPostsComponent } from './Components/tableau-admin-posts/tableau-admin-posts.component';
const routes: Routes = [
  {
    path:'Dashboard',
      component:LandingComponent  
  },
  {
    path:'Dashboard/home',
      component:HomeComponent  
  },
  {
    path:'Dashboard/404NotFound',
      component:PagenotfoundComponent
    },
  {
    path:'Dashboard/AddEvent',
      component:AddEventComponent
    },
  {
    path:'Dashboard/UpdateEventList',
      component:UpdateeventlistComponent  
  } ,
  
  {
    path:'Dashboard/Statistiques',
      component:StatsGlobalComponent
  } ,
  {
    path:'Dashboard/StatsEvents',
      component:StatsEventsComponent
  },
  {
    path:'Dashboard/UpdateEvent/:id',
      component:UpdateeventComponent  
  } ,
  {
    path:'Dashboard/AddBadges',
      component:AddBadgesComponent 
  },
  {
    path:'Dashboard/UpdateBadge/:id',
      component:UpdateBadgesComponent
  },
  {
    path:'Dashboard/Badges',
      component:BadgesComponent
  },
  {
    path:'Dashboard/UserBadges',
      component:UserBadgesComponent
  },
  {
    path:'Dashboard/ShowUserBadges/:id',
      component:ShowUserBadgesComponent
  },
  {
    path:'Dashboard/ShowUserEvents/:id',
      component:ShowUsersEventsComponent
  },
  {
    path:'Dashboard/ShowUserLikes/:id',
      component:ShowUsersLikesComponent
  }
  ,
  {
    path:'Dashboard/UserEvents',
      component:UsersEventsComponent
  },
  {
path:'Dashboard/SendRewards',
  component:SendRewardsComponent
  },
  {
    path:'Dashboard/UserLikes',
      component:UserLikesComponent
  },
  {
    path:'Badges',
      component:BadgesEventComponent
  },
    {path: 'Dashboard/**', redirectTo: '404NotFound'},

// survey Admin
{ path: "Dashboard/addsurvey", component:AddsurveyComponent},
{ path: "Dashboard/affichesurvey", component:TablesurveyComponent},
// review Admin
{ path: "Dashboard/afficherreview", component:ReviewComponent},


//Survey Employee
   { path: "affichersurvey", component:SurveyComponent},
   { path: "deleteSurvey/:id", component:SurveyComponent},
   { path: "updatesurvey/:id", component:UpdatesurveyComponent},
   { path: "affichersurveybyid/:id", component:GetByIdsurveyComponent},
   { path: "reponsesurvey/:id", component:GetByIdsurveyComponent},
   //Review Employee
   
   { path: "deletereview/:id", component:ReviewComponent},
   { path: "afficherreviewbyuser", component:GetReviewByUsersComponent,data: { animation: 'isLeft' }},
   { path: "afficherreviewGoodbyuser", component:GetreviewGoodbyusersComponent, data: { animation: 'isTop' }},
   { path: "afficherreviewBadbyuser", component:GetreviewBadbyusersComponent, data: { animation: 'isRight' }},
   { path: "AddreviewEmpl", component:AddreviewetAffecterEComponent},
   { path: "AddreviewCompany", component:AddreviewetAffecterSComponent},
   { path: "review", component:AddchoiceCompanyorEmployeeComponent},
   { path: "choiceadd", component:ListaddEmplorcompanyComponent},
   //Answer  Employee
   { path: "Answer", component:AnswerSurveyComponent},
    // offre Employee
 {path: 'Offers', component:ListOffersComponent, data: { animation: 'isRight' } },
  {path: 'MyOffers', component:MyOffersComponent, data: { animation: 'isLeft' } },
  {path: 'Offers/Delete/:id', component:DeleteOfferComponent},
  
  {path: 'Offers/Update/:id', component:UpdateOfferComponent},
  {path: 'Offers/Show/:id', component:ShowOfferComponent},
  // Reclamation Employee
  {path: 'Reclamations', component:ListReclamationsByUserComponent}, //ReclamationsByUser
  {path: 'Reclamations/Delete/:id', component:DeleteReclamationComponent},
  {path: 'Reclamations/Add', component:AddReclamationComponent},
  {path: 'Reclamations/Show/:id', component:ShowReclamationComponent},

  //Dachboard  offre
  {path: 'Dashboard/Offers', component:ListOffersBackComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Offers/Delete/:id', component:DeleteOfferBackComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Offers/Add', component:AddOfferBackComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Offers/Update/:id', component:UpdateOfferBackComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Offers/Show/:id', component:ShowOfferBackComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Offers/Full', component:FullOfferBackComponent, data: { animation: 'isRight' } },

  //Dachboard  reclamation
  {path: 'Dashboard/Reclamations', component:ListReclamationsBackComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Reclamations/Delete/:id', component:DeleteReclamationComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Reclamations/Update/:id', component:UpdateReclamationBackComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Reclamations/Add', component:AddReclamationComponent, data: { animation: 'isRight' } },
  {path: 'Dashboard/Reclamations/Show/:id', component:ShowReclamationComponent, data: { animation: 'isRight' } },
  
  //article & post
  { path:"afficher-article",component:ArticleComponent},
  { path:"deletearticle/:id",component:ArticleComponent},
  { path:"add-article",component:AddArticleComponent},
  { path:"update/:id",component:UpdateArticleComponent},
  { path:"update-admin-article/:id",component:UpdateArticleComponent},
  { path:"afficher-articlebyid/:idArticle/:catego",component:GetByIdArticleComponent},

  //post
  { path:"afficher-posts",component:PostComponent},
  { path:"deletepost/:id",component:PostComponent},
  { path:"add-posts",component:AddPostComponent},
  { path:"afficher-postbyid/:idPost",component:GetByIdPostComponent},

  //admin article
  { path:"Dashboard/afficher-tabarticle",component:TableauAdminArticleComponent},
  { path:"Dashboard/afficher-tabpostes",component:TableauAdminPostsComponent}, 
  { path:"Dashboard/afficher-tabcomment",component:TableauAdminCommentaireComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
