import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Meteo } from '../models/meteo.model';
import { HttpParams } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })
  export class MeteoApiService {
  
    
    constructor(private httpClient : HttpClient) {}
  
    getMeteos(): Observable<Meteo[]> {
  
      return this.httpClient.get<Meteo[]>( `meteoapi/all`);
  
    }
  
    
  }