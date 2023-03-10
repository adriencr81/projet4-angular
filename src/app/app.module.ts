import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { WeatherComponent } from './modules/general/weather/weather.component';
import { PollutionComponent } from './modules/general/pollution/pollution.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './modules/general/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeUsersComponent } from './modules/general/liste-users/liste-users.component';
import { ApiService } from './api/api.service'; 

@NgModule({
  declarations: [
    AppComponent,
   
    ContactComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        NotFoundComponent,
        WeatherComponent,
        PollutionComponent,
        ListeUsersComponent,
        
        HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule,
    CommonModule, 
    FormsModule
  ],
  
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
