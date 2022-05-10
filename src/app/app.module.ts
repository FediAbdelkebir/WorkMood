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
import { SendRewardsComponent } from './BackEnd/Events/send-rewards/send-rewards.component';
import { BadgesEventComponent } from './Components/badges-event/badges-event.component';
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
    SendRewardsComponent,
    BadgesEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
     
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
