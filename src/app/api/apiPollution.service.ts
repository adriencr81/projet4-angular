import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Pollution } from '../models/pollution.model';
import { HttpParams } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })
  export class PollutionApiService {
  
    
    constructor(private httpClient : HttpClient) {}
  
    getPollutions(): Observable<Pollution[]> {
  
      return this.httpClient.get<Pollution[]>( `pollutionapi/all`);
  
    }
  
    
  }