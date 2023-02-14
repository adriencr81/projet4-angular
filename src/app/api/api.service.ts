import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; 
import { HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private httpClient : HttpClient) {}

  getUsers(): Observable<User[]> {

    return this.httpClient.get<User[]>( `compte/listerLesUser`);

  }

  
}