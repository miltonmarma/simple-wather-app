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
  cityName: string = '';
  constructor(
    private weatherService: WeatherService,
  ) {}

  getWeatherByCityName(cityName: string) {
    this.weatherService.getWeatherByCityName(cityName).subscribe(
      (data) => {
        this.weatherData = data;
      }
    );
  }

  onSearch() {
    this.getWeatherByCityName(this.cityName);
    this.cityName = '';
  }

}
