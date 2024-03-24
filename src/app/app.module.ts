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
import { MediumComponent } from './components/medium/medium.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { CookieService } from 'ngx-cookie-service';

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
    MediumComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }