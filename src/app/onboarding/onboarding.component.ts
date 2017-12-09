import { Component, OnInit } from '@angular/core';
import { User} from '../model/user';

import {UserService} from '../services/user.service';
import {AuthService} from '../core/auth.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

	public userObject;
	
	model;
	

  constructor(public userService: UserService, public auth: AuthService) { }

  ngOnInit() {
  	console.log("this is the load");
  	var userkey = this.auth.authState.uid;
  	this.userService.getUser(userkey).subscribe(snap=>{
  		this.userObject = snap;
  		this.model = snap;
  		// console.log(this.model.name);
  	})
  	// this.model=this.userObject;
  }




 
 completeForm(formData:any){
 	console.log(formData);
 	formData.onBoard = true;
 	var userkey = this.auth.authState.uid;
 	this.userService.updateUser(formData);

 }

 submitForm(formData: FormData){
 	console.log('Submitted');
 }
  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

}
