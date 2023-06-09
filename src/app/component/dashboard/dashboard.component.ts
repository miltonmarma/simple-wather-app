import { Component } from '@angular/core';
import { WeatherData } from 'src/app/model/weather-data.model';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  weatherData: WeatherData;
  constructor(
    private weatherService: WeatherService,
  ) {
    this.getWeatherByCityName();
  }

  getWeatherByCityName() {
    this.weatherService.getWeatherByCityName('Dhaka').subscribe(
      (data) => {
        console.log('res: ', data);
        this.weatherData = data;
        console.log('city name: ', this.weatherData.name);
      }
    );
  }

}
