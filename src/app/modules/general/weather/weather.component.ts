import { Component, OnInit } from '@angular/core';
import { Meteo } from 'src/app/models/meteo.model';
import { MeteoApiService } from 'src/app/api/apiMeteo.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  constructor(private api:MeteoApiService) {}

  _meteos : Meteo[] = [];

  async ngOnInit(): Promise<void> {
    try {
      this._meteos = await this.getMeteos();
      console.log('Récupération de la météo terminée.');
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération de la météo : ', error);
    }
  }

//get listeMeteo
getMeteos(): Promise<Meteo[]> {
  return new Promise<Meteo[]>((resolve, reject) => {
    this.api.getMeteos().subscribe({
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
