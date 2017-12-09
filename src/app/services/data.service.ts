import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/variantz")
      .map(result => this.result = "boom");
  }

  getFitbitAccessToken(fitbitUrl: string){
  	return this._http.get("/api/getFitbitAccessToken/{$fitbitUrl}")
  		.map(result => this.result = result);
  }


  //temp api services

  // exchangeFitbitTokens(fitbitToken: string, clientId: string, clientSecret:string){
  //   const headers = new Headers();
  //   var encodedAuth = btoa(clientId+":"+clientSecret);

  //   headers.append('Content-Type', 'x-www-form-urlencoded');
  //   headers.append('Authorization', `Basic `+ encodedAuth );

  //   var body = "client_id="+clientId+"&grant_type=authorization_code&redirect_uri=http://localhost:4200/api/fitbit/callback&code="+fitbitToken;

  //   console.log(encodedAuth);
  //   console.log(body)

  //   return this._http.post("https://api.fitbit.com/oauth2/token", body).map((response: Response)=>response.json()).catch(this.handleError);
  // }

  getFitbitUserId(fitbitToken: string):any{
    const headers = new Headers();
    console.log("getting there", fitbitToken)
    headers.append('Authorization', `Bearer `+ fitbitToken );

    this._http.get("https://api.fitbit.com/1/user/-/profile.json").subscribe(data => {
      // Read the result field from the JSON response.
       console.log(data);
      return data});
  }


  public handleError():any{
    console.log("errororororo");
  }
}


