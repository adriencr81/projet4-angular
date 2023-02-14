import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service'; 
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
  constructor(private api:ApiService) {}

  _users : User[] = [];

  async ngOnInit(): Promise<void> {
    try {
      this._users = await this.getUsers();
      console.log('Récupération des utilisateurs terminée.');
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des utilisateurs : ', error);
    }
  }


  

  //get listeUser
  getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.api.getUsers().subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }

}
