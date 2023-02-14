import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from './models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiBaseURL = "/compte";
  constructor(private httpClient : HttpClient) {}

  getUsers(): Observable<User[]> {

    return this.httpClient.get<User[]>( `${this.apiBaseURL} + /listerLesUser`);

  }

  
}
