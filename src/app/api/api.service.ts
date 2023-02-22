import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; 
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userUrl = environment.userUrl;

  constructor(private httpClient : HttpClient) {}

  getUsers(): Observable<User[]> {

    return this.httpClient.get<User[]>( this.userUrl +`compte/listerLesUser`);

  }

  
}