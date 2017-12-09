import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { DataService } from "./services/data.service";

@Component({
	moduleId: module.id,
  selector: 'app-root',
  template: '<router-outlet><spinner></spinner></router-outlet>'
})
export class AppComponent {

	users:any;

  constructor(public router: Router, private _dataService: DataService) {

  	 this._dataService.getUsers()
        .subscribe(res => {this.users = res; console.log(res);});

  	router.navigate(['dashboard']);
 }

 ngOnInit(){
 	this.router.navigate(['dashboard'])
 }
}