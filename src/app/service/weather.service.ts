import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../model/weather-data.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_VERSION = 2.5

  constructor(
    private http: HttpClient,
  ) { }

  getWeatherByCityName(name: string) {
    const weatherByCityNameUrl = environment.baseApiUrl + this.API_VERSION + '/weather?'
      +'q=' + name + '&appid=' + environment.apiKey + '&units=metric';

    return this.http.get<WeatherData>(weatherByCityNameUrl);
  }
}
