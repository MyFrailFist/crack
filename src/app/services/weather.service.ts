import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class WeatherService {

  public ROOT_URL = 'https://api.darksky.net/forecast/3e9c68fe96dbf319f25714c3ce304dd5/';
  public secondUrl = 'http://api.nea.gov.sg/api/WebAPI/?dataset=2hr_nowcast&keyref=781CF461BB6606ADEA01E0CAF8B35274FF91C003867CEC19';
  // public ourServerRoute = 

  constructor(private http: HttpClient) { }

  currentForecast(lat: number, lng: number): Observable<any> {
  	
    let params = new HttpParams()
    params = params.set('lat', lat.toString() )
    params = params.set('lng', lng.toString() )
    //return this.http.get(this.ROOT_URL + lat +','+lng)
    return this.http.get("/api/weather")
  }


  // getCurrentF(fitbitUrl: string){
  // 	return this._http.get("/api/getFitbitAccessToken/{$fitbitUrl}")
  // 		.map(result => this.result = result);
  // }
}