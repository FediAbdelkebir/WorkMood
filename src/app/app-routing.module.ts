import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreviewetAffecterEComponent } from './Components/review/addreviewet-affecter-e/addreviewet-affecter-e.component';
import { AddreviewetAffecterSComponent } from './Components/review/addreviewet-affecter-s/addreviewet-affecter-s.component';
import { GetReviewByUsersComponent } from './Components/review/get-review-by-users/get-review-by-users.component';
import { GetreviewBadbyusersComponent } from './Components/review/getreview-badbyusers/getreview-badbyusers.component';
import { GetreviewGoodbyusersComponent } from './Components/review/getreview-goodbyusers/getreview-goodbyusers.component';
import { ReviewComponent } from './Components/review/review.component';
import { AddsurveyComponent } from './Components/survey/addsurvey/addsurvey.component';
import { GetByIdsurveyComponent } from './Components/survey/get-by-idsurvey/get-by-idsurvey.component';
import { SurveyComponent } from './Components/survey/survey.component';
import { UpdatesurveyComponent } from './Components/survey/updatesurvey/updatesurvey.component';

const routes: Routes = [
   //Survey
   { path: "affichersurvey", component:SurveyComponent},
   { path: "deleteSurvey/:id", component:SurveyComponent},
   // { path: "affichersurvey/:id", Component:SurveyComponents},
   { path: "addsurvey", component:AddsurveyComponent},
   { path: "updatesurvey/:id", component:UpdatesurveyComponent},
   { path: "affichersurveybyid/:id", component:GetByIdsurveyComponent},
   //REview
   { path: "afficherreview", component:ReviewComponent},
   { path: "deletereview/:id", component:ReviewComponent},
   { path: "afficherreviewbyuser", component:GetReviewByUsersComponent},
   { path: "afficherreviewGoodbyuser", component:GetreviewGoodbyusersComponent},
   { path: "afficherreviewBadbyuser", component:GetreviewBadbyusersComponent},
   { path: "AddreviewEmpl", component:AddreviewetAffecterEComponent},
   { path: "AddreviewCompany", component:AddreviewetAffecterSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
