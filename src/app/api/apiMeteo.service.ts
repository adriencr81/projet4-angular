import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Meteo } from '../models/meteo.model';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
  })
  export class MeteoApiService {
  
    private apiUrl = environment.apiUrl;
    
    constructor(private httpClient : HttpClient) {}
  
    getMeteos(): Observable<Meteo[]> {
  
      return this.httpClient.get<Meteo[]>( this.apiUrl + '/meteoapi/all');
  
    }
  
    
  }