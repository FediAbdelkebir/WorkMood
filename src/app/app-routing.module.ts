import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from '../app/BackEnd/landing/landing.component'
import { AddBadgesComponent } from './BackEnd/badges/add-badges/add-badges.component';
import { BadgesComponent } from './BackEnd/badges/badges.component';
import { UpdateBadgesComponent } from './BackEnd/badges/update-badges/update-badges.component';
import { AddEventComponent } from './BackEnd/Events/add-event/add-event.component';
import { StatsEventsComponent } from './BackEnd/Events/stats-events/stats-events.component';
import { UpdateeventComponent } from './BackEnd/Events/updateevent/updateevent.component';
import { UpdateeventlistComponent } from './BackEnd/Events/updateeventlist/updateeventlist.component';
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
    {path: 'Dashboard/**', redirectTo: '404NotFound'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
