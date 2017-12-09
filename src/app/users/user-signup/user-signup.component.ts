import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";
import { Router } from "@angular/router";

import { UserService} from "../../services/user.service";

@Component({
	moduleId: module.id,
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html'
  // ,
  // styleUrls: ['./user-signup.component.css']
})
export class UserSignUpComponent implements OnInit {

 //  	model: any = {};
 //    loading = false;

 //   	constructor(public auth: AuthService,
 //              private router: Router,
 //              private userService: UserService) { }

	// register() {
	// 	this.loading = true;
	// 	this.userService.create(this.model)
	// 		.subscribe(
	// 			data => {
	// 				//set sucess message and pass true parameter to persist the message after redirectin to the login page
	// 				this.alertService.success('Registration Successful', true);
	// 				this.router.navigate(['/login']);
	// 			},
	// 			error => {
	// 				this.alertService.error(error);
	// 				this.loading=false;
	// 			});
	// }

	ngOnInit(){}

}