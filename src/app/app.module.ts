import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { WeatherComponent } from './modules/general/weather/weather.component';
import { PollutionComponent } from './modules/general/pollution/pollution.component';

@NgModule({
  declarations: [
    AppComponent,
   
    ContactComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        NotFoundComponent,
        WeatherComponent,
        PollutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
