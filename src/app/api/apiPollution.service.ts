import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Pollution } from '../models/pollution.model';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
  })
  export class PollutionApiService {
  
    private apiUrl = environment.apiUrl;
    
    constructor(private httpClient : HttpClient) {}
  
    getPollutions(): Observable<Pollution[]> {
  
      return this.httpClient.get<Pollution[]>( this.apiUrl + `/pollutionapi/all`);
  
    }
  
    
  }