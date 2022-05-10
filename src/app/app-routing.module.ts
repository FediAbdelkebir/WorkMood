import { NgModule } from '@angular/core';
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
import { StatsGlobalComponent } from './BackEnd/stats-global/stats-global.component';
import { HomeComponent } from './Components/home/home.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
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
  {
    path:'Dashboard/SendRewards',
      component:SendRewardsComponent
  },
    {path: 'Dashboard/**', redirectTo: '404NotFound'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
