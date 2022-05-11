import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from '../app/BackEnd/landing/landing.component'
import { AddBadgesComponent } from './BackEnd/badges/add-badges/add-badges.component';
import { BadgesComponent } from './BackEnd/badges/badges.component';
import { ShowUserBadgesComponent } from './BackEnd/badges/show-user-badges/show-user-badges.component';
import { UpdateBadgesComponent } from './BackEnd/badges/update-badges/update-badges.component';
import { UserBadgesComponent } from './BackEnd/badges/user-badges/user-badges.component';
import { AddEventComponent } from './BackEnd/Events/add-event/add-event.component';
import { ShowUsersEventsComponent } from './BackEnd/Events/show-users-events/show-users-events.component';
import { ShowUsersLikesComponent } from './BackEnd/Events/show-users-likes/show-users-likes.component';
import { StatsEventsComponent } from './BackEnd/Events/stats-events/stats-events.component';
import { UpdateeventComponent } from './BackEnd/Events/updateevent/updateevent.component';
import { UpdateeventlistComponent } from './BackEnd/Events/updateeventlist/updateeventlist.component';
import { UserLikesComponent } from './BackEnd/Events/user-likes/user-likes.component';
import { UsersEventsComponent } from './BackEnd/Events/users-events/users-events.component';
import { StatsGlobalComponent } from './BackEnd/stats-global/stats-global.component';
import { AnswerSurveyComponent } from './Components/answer-survey/answer-survey.component';
import { HomeComponent } from './Components/home/home.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
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
    path:'Dashboard/UserLikes',
      component:UserLikesComponent
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
