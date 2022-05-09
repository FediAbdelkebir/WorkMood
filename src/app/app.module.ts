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
import { EvenementdetailsComponent } from './evenementdetails/evenementdetails.component';
import { ReviewComponent } from './Components/review/review.component';
import { AddreviewetAffecterEComponent } from './Components/review/addreviewet-affecter-e/addreviewet-affecter-e.component';
import { AddreviewetAffecterSComponent } from './Components/review/addreviewet-affecter-s/addreviewet-affecter-s.component';
import { GetReviewByUsersComponent } from './Components/review/get-review-by-users/get-review-by-users.component';
import { AddsurveyComponent } from './Components/survey/addsurvey/addsurvey.component';
import { GetByIdsurveyComponent } from './Components/survey/get-by-idsurvey/get-by-idsurvey.component';
import { SurveyComponent } from './Components/survey/survey.component';
import { UpdatesurveyComponent } from './Components/survey/updatesurvey/updatesurvey.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetreviewBadbyusersComponent } from './Components/review/getreview-badbyusers/getreview-badbyusers.component';
import { GetreviewGoodbyusersComponent } from './Components/review/getreview-goodbyusers/getreview-goodbyusers.component';
import { AddchoiceCompanyorEmployeeComponent } from './Components/review/addchoice-companyor-employee/addchoice-companyor-employee.component';
import { ListaddEmplorcompanyComponent } from './Components/review/listadd-emplorcompany/listadd-emplorcompany.component';
import { AddreponseComponent } from './Components/survey/addreponse/addreponse.component';
import { AnswerSurveyComponent } from './Components/answer-survey/answer-survey.component';



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
    ReviewComponent,
    SurveyComponent,
    AddsurveyComponent,
    UpdatesurveyComponent,
    GetByIdsurveyComponent,
    AddreviewetAffecterEComponent,

    AddreviewetAffecterSComponent,
    GetReviewByUsersComponent,
    GetreviewBadbyusersComponent,
    GetreviewGoodbyusersComponent,
    AddchoiceCompanyorEmployeeComponent,
    ListaddEmplorcompanyComponent,
    AddreponseComponent,
    AnswerSurveyComponent,
    
 
   
    
    
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
        {path: '**', redirectTo: '404NotFound'}
    ]),
    FontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
