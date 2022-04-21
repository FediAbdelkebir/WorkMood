import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LatestmediaComponent } from './latestmedia/latestmedia.component';
import { TopreviewsComponent } from './topreviews/topreviews.component';
import { TeamComponent } from './team/team.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { ServicesComponent } from './services/services.component';
import { OurproudComponent } from './ourproud/ourproud.component';
import { OurfaqComponent } from './ourfaq/ourfaq.component';
import { HeaderComponent } from './header/header.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { AddevenementComponent } from './addevenement/addevenement.component';
import { UpdateevenementComponent } from './updateevenement/updateevenement.component';
import { HeadComponent } from './head/head.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { WorkinprogressComponent } from './workinprogress/workinprogress.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LatestupdatesComponent } from './latestupdates/latestupdates.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AddeventsliderComponent } from './addeventslider/addeventslider.component';

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
    AddeventsliderComponent
  ],
  imports: [
    BrowserModule,
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
      component:HomeComponent
      },
      {
        path:'AddEvent',
          component:AddevenementComponent
        }
        ,
        {
          path:'404NotFound',
            component:PagenotfoundComponent
          },
        {path: '**', redirectTo: '404NotFound'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
