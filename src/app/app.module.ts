import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WhoComponent } from './components/who/who.component';
import { CaresComponent } from './components/cares/cares.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { HeadbandComponent } from './components/headband/headband.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { SearchComponent } from './components/search/search.component';
import { LegalnoticeComponent } from './components/legalnotice/legalnotice.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { GuidanceComponent } from './components/guidance/guidance.component';
import { MagnetismeComponent } from './components/magnetisme/magnetisme.component';
import { WellbeingComponent } from './components/wellbeing/wellbeing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    WhoComponent,
    CaresComponent,
    CardComponent,
    FooterComponent,
    OpinionsComponent,
    HeadbandComponent,
    ContactComponent,
    ConnexionComponent,
    ShoppingComponent,
    SearchComponent,
    LegalnoticeComponent,
    InscriptionComponent,
    GuidanceComponent,
    MagnetismeComponent,
    WellbeingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }