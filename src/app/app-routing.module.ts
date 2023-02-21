import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { WeatherComponent } from './modules/general/weather/weather.component';
import { PollutionComponent } from './modules/general/pollution/pollution.component';
import { ListeUsersComponent } from './modules/general/liste-users/liste-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'contact', component: ContactComponent },
  { path: 'meteoapi/all', component: WeatherComponent },
  { path: 'pollutionapi/all', component: PollutionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'compte/listerLesUser', component: ListeUsersComponent },
 // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
