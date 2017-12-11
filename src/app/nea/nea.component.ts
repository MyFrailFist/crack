import { Component, OnInit } from '@angular/core';
// <<<<<<< HEAD
import { Observable } from 'rxjs/Observable';

import { DataService } from '../services/data.service';
import { OAuthService } from '../services/oauth.service';
import { AuthService } from '../core/auth.service';
import { UserService } from '../services/user.service';

import { WeatherService } from '../services/weather.service';

@Component({
	selector:'app-nea',
	templateUrl:'./nea.component.html'
})

export class NeaComponent {

	public neaKey = '781CF461BB6606ADEA01E0CAF8B35274FF91C003867CEC19';
	public userId;
	public currentUser;
	lat: number;
	lng: number;
	forecast: Observable<any>;	

	constructor(private weatherService: WeatherService, private _dataservice: DataService, private userService: UserService, private authService: AuthService){ }

	ngOnInit() {
		this.userId = this.authService.authState.uid;
		//gets the user id first for future usage
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(position=>{
				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;
			});
		} else{
			//default location
			this.lat = 11.40;
			this.lng = 28.19;
		}	
	}

	getForecast(){
		this.weatherService.currentForecast(this.lat, this.lng).subscribe(snapshot => {
			console.log(snapshot)
			this.forecast = snapshot;
		})
	}

	/// Helper to make weather icons work
  	/// better solution is to map icons to an object 
  	weatherIcon(icon) {
	    switch (icon) {
	      case 'partly-cloudy-day':
	        return 'wi wi-day-cloudy'
	      case 'clear-day':
	        return 'wi wi-day-sunny'
	      case 'partly-cloudy-night':
	        return 'wi wi-night-partly-cloudy'
	      default:
	        return `wi wi-day-sunny`
	    }
	 }
}
// =======

@Component({
  selector: 'app-nea',
  templateUrl: './nea.component.html',
  styleUrls: ['./nea.component.css']
})
export class NEAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// >>>>>>> development
