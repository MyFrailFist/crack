import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../../services/data.service';
import { OAuthService } from '../../services/oauth.service';
import { UserService } from '../../services/user.service';
import { AuthService } from'../../core/auth.service'

import { fitbitConfig } from '../../../environments/environment';

@Component({
  selector: 'app-fitbit',
  templateUrl: './fitbit.component.html'
})
export class FitbitComponent {

  public fitbitAccessToken = null;
  public userUid;
  public currentUser;
  public fitbitUserData;
  public fitbitUserHearData;
  public fitbitUserActivityData;
  public fitbitUserAcitivtyData;
  public fitbitUserSleepData;

  constructor(private oAuth: OAuthService, private _dataservice:DataService, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.userUid = this.authService.authState.uid;

    this.fitbitAccessToken = this.userService.getUser(this.userUid).subscribe(snapshot=>{
      this.currentUser = snapshot;
      var tokenString;
      if(snapshot.fitbitToken){
        //run the chain functions here to start the fitbit api services

        this.runFitbitApiServices(snapshot.fitbitToken);

        return snapshot.fitbitToken;

      }
      else{return null;}
    })
  }


  public integrateFitbit(){
    var fitbitUrl = fitbitConfig.tempUrl;

    this.oAuth.doLogin();
  }

  public addFitbitAccessToken(fitbitTokenString):any{
    console.log("iuwfbwbfewbf");
    var fitbitToken = fitbitTokenString;
    if(fitbitToken&&fitbitToken!=""&&!this.currentUser.fitbitToken){
      console.log("saving the token to the user");
      this.currentUser.fitbitToken = fitbitToken;
      this.userService.updateUser(this.currentUser); //save the user to the db with the fitbit token
      //auto init all the fitbit services
       this.runFitbitApiServices(fitbitToken);
    }
    else{
      console.log("entered here????", fitbitTokenString)
      this.runFitbitApiServices(fitbitTokenString);
    }
  }  



  public runFitbitApiServices(fitbitToken: string):any{

    var clientId = fitbitConfig.clientId;
    var clientSecret = fitbitConfig.clientSecret;

    console.log("first api test cwall");

    this._dataservice.getFitbitUserId(fitbitToken).subscribe(snapshot=>{
      console.log("observe what is the snapshot");
      console.log(snapshot);

    })

    //first api service



  }  
}

