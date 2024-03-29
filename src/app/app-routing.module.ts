import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WhoComponent } from './components/who/who.component';
import { CaresComponent } from './components/cares/cares.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { SearchComponent } from './components/search/search.component';
import { LegalnoticeComponent } from './components/legalnotice/legalnotice.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MediumComponent } from './components/medium/medium.component';

const routes: Routes = [
  { path: 'guidance', component: MediumComponent},
  { path: 'magnetisme', component: MediumComponent},
  { path: 'wellbeing', component: MediumComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'legalnotice', component: LegalnoticeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'opinions', component: OpinionsComponent },
  { path: 'cares', component: CaresComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'who', component: WhoComponent },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
