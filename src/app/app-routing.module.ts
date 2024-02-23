import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WhoComponent } from './components/who/who.component';
import { CaresComponent } from './components/cares/cares.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
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
