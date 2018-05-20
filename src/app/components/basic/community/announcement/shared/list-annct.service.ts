import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Announcement } from "./announcement";
// import { User } from "../../../../../model/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";

@Injectable()
export class ListAnnctService {

  // private listOfAnnctDb: FirebaseListObservable<Announcement[]>;
  //private listOfAnnct: Announcement[] = [];

  constructor(private http: HttpClient) { }

  fetchAnnct(scope: string, callback: (anncts: Announcement[]) => void) {
  	this.http.get<Announcement[]>("/api/announcement/" + scope)
  		.subscribe(anncts => {
  			callback(anncts);
  		});
  }


  //Subscribe to data at announcement component.
  // fetchAnnct (user: User, scope: string, exportData: (listOfAnnct: Announcement[]) => void) {

  // 	if(scope === "property"){
	 //  	this.listOfAnnctDb = this.db.list(`announcements/${user.address.estate}/broadcast/`)
	 //  	//this.listOfAnnctDb = this.db.list(`${userId}/`)
	 //  	this.listOfAnnctDb.subscribe(
	 //  		annctDbList => {
	 //  			annctDbList.forEach(
	 //  			annct => {
	 //  				//Prevent announcement duplication in the list that will display the anouncements.
	 //  				var index = annctDbList.indexOf(annct,0)
	 //  				if(annct.approved === false){
	 //  					annctDbList.splice(index, 1);
	 //  				}
	 //  			})
	 //  			exportData(annctDbList)
	 //  		},
	 //  		err => console.log(err)
		// )
  // 	} else if(scope === "block"){
  // 		this.listOfAnnctDb = this.db.list(`announcements/${user.address.estate}/${user.address.block}/broadcast/`)
	 //  	//this.listOfAnnctDb = this.db.list(`${userId}/`)
	 //  	this.listOfAnnctDb.subscribe(
	 //  		annctDbList => {
	 //  			annctDbList.forEach(
	 //  			annct => {
	 //  				//Prevent announcement duplication in the list that will display the anouncements
	 //  				var index = annctDbList.indexOf(annct,0)
	 //  				if(annct.approved === false){
	 //  					annctDbList.splice(index, 1);
	 //  				}
	 //  			})
	 //  			exportData(annctDbList)
	 //  		},
	 //  		err => console.log(err)
		// )
  // 	} else if(scope === "unit"){
  // 		this.listOfAnnctDb = this.db.list(`announcements/${user.address.estate}/${user.address.block}/${user.address.unit}/broadcast/`)
	 //  	//this.listOfAnnctDb = this.db.list(`${userId}/`)
	 //  	this.listOfAnnctDb.subscribe(
	 //  		annctDbList => {
	 //  			annctDbList.forEach(
	 //  			annct => {
	 //  				var index = annctDbList.indexOf(annct,0)
	 //  				if(annct.approved === false){
	 //  					annctDbList.splice(index, 1);
	 //  				}
	 //  			})
	 //  			exportData(annctDbList)
	 //  		},
	 //  		err => console.log(err)
		// )
  // 	} else if(scope === "personal"){
  // 		this.listOfAnnctDb = this.db.list(`announcements/${user.address.estate}/${user.address.block}/${user.address.unit}/personal/${user.$key}/`)
	 //  	//this.listOfAnnctDb = this.db.list(`${userId}/`)
	 //  	this.listOfAnnctDb.subscribe(
	 //  		annctDbList => {
	 //  			annctDbList.forEach(
	 //  			annct => {
	 //  				var index = annctDbList.indexOf(annct,0)
	 //  				if(annct.approved === false){
	 //  					annctDbList.splice(index, 1);
	 //  				}
	 //  			})
	 //  			exportData(annctDbList)
	 //  		},
	 //  		err => console.log(err)
		// )
  // 	} else if(scope === "my"){
  // 		var filterListOfAnnct: Announcement[];
  // 		this.listOfAnnctDb = this.db.list(`announcements/${user.address.estate}/userAnnct/`)
	 //  	//this.listOfAnnctDb = this.db.list(`${userId}/`)
	 //  	this.listOfAnnctDb.subscribe(
	 //  		annctDbList => {
	 //  			filterListOfAnnct = annctDbList
	 //  			annctDbList.forEach(
	 //  				annct => {
	 //  					var index = filterListOfAnnct.indexOf(annct, 0)
	 //  					if(annct.approved !== false && index === -1 && annct.userId === user.$key){
	 //  						filterListOfAnnct.push(annct)
	 //  					}
	 //  				})
	 //  			exportData(filterListOfAnnct)
	 //  		},
	 //  		err => console.log(err)
		// )
  // 	} else if(scope === "unapproved" && user.propertyManager === true){
  // 		var listOfUnapproved: Announcement[];
  // 		var secListOfAnnctDb
  // 		this.listOfAnnctDb = this.db.list(`announcements/${user.address.estate}/userAnnct/`)
  // 		this.listOfAnnctDb.subscribe(
  // 			annctDbList => {
  // 				annctDbList.forEach(
  // 					annct => {
  // 						var index = listOfUnapproved.indexOf(annct, 0)
  // 						if(annct.approved === false && index === -1){
  // 							listOfUnapproved.push(annct)
  // 						}
  // 					})
  // 			},
  // 			err => console.log(err)
  // 		)
  // 	}

  // }

  //Using announcement key as argument, find the selected announcement
  //NOT IN USE
  // getAnnct(key: string,user: User): Promise<Announcement> {
  // 	var found: Announcement;
  // 	return this.db.list("announcements/userAnnct/${user.$key}/")
  // 			.map( fetched =>
  // 				found = this.getSelectedAnnct(key, fetched)
  // 			)
  // 			.first()
  // 			.toPromise();
  // }

  // private getSelectedAnnct(key: string, fetched : Announcement[] ): Announcement{
  // 	fetched.forEach( annct => {
  // 			var index = fetched.indexOf(annct,0)
  // 			if(annct.approved === false){
  // 				fetched.splice(index, 1)
  // 		}
  // 	})
  // 	var foundAnnct: Announcement
  // 	fetched.find(annct => foundAnnct.$key === key )
  // 	return foundAnnct;
  // }
}