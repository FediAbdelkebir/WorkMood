import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from '../app/BackEnd/landing/landing.component'
import { AddEventComponent } from './BackEnd/Events/add-event/add-event.component';
import { DeleteeventlistComponent } from './BackEnd/Events/deleteeventlist/deleteeventlist.component';
import { UpdateeventComponent } from './BackEnd/Events/updateevent/updateevent.component';
import { UpdateeventlistComponent } from './BackEnd/Events/updateeventlist/updateeventlist.component';
import { StatsGlobalComponent } from './BackEnd/stats-global/stats-global.component';
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
    path:'Dashboard/DeleteEventList',
      component:DeleteeventlistComponent  
  } ,
  {
    path:'Dashboard/UpdateEventList',
      component:UpdateeventlistComponent  
  } ,
  
  {
    path:'Dashboard/Statistiques',
      component:StatsGlobalComponent
  } ,
  {
    path:'Dashboard/UpdateEvent/:id',
      component:UpdateeventComponent  
  } ,
  
  {path: 'Offers', component:ListOffersComponent, data: { animation: 'isRight' } },
  {path: 'MyOffers', component:MyOffersComponent, data: { animation: 'isLeft' } },
  {path: 'Offers/Delete/:id', component:DeleteOfferComponent},
  {path: 'Offers/Add', component:AddOfferComponent},
  {path: 'Offers/Update/:id', component:UpdateOfferComponent},
  {path: 'Offers/Show/:id', component:ShowOfferComponent},

  {path: 'Reclamations', component:ListReclamationsByUserComponent}, //ReclamationsByUser
  {path: 'Reclamations/Delete/:id', component:DeleteReclamationComponent},
  {path: 'Reclamations/Add', component:AddReclamationComponent},
  {path: 'Reclamations/Show/:id', component:ShowReclamationComponent},
  
  {path: 'Dashboard/**', redirectTo: '404NotFound'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
