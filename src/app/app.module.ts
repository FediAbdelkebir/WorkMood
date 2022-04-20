import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LatestmediaComponent,
    TopreviewsComponent,
    TeamComponent,
    PartnershipComponent,
    ServicesComponent,
    OurproudComponent,
    OurfaqComponent,
    HeaderComponent,
    OurworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
