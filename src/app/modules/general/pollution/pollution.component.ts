import { Component, OnInit } from '@angular/core';
import { Pollution } from 'src/app/models/pollution.model';
import { PollutionApiService } from 'src/app/api/apiPollution.service';

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent implements OnInit {

  constructor (private api:PollutionApiService) {}

  _pollutions : Pollution[] =[];

  async ngOnInit(): Promise<void> {
    try {
      this._pollutions = await this.getPollutions();
      console.log('Récupération des utilisateurs terminée.');
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des utilisateurs : ', error);
    }
  }

  //get listeMeteo
getPollutions(): Promise<Pollution[]> {
  return new Promise<Pollution[]>((resolve, reject) => {
    this.api.getPollutions().subscribe({
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
