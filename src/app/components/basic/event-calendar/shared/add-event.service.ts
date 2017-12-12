import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
// import { userEvent } from "./event";
// import { User } from "../../../../model/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CalendarEvent } from "angular-calendar";

import "rxjs/add/operator/map";

import * as firebase from "firebase";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddEventService {
 

  constructor(
    private http: HttpClient
  	) { }

  addEvent(event: CalendarEvent){
  	// event.date.dateCreated = firebase.database.ServerValue.TIMESTAMP
  	// let eventDbRef = this.db.list(`eventCalendar/${user.address.estate}/${user.$key}/`)
  	// let eventKey = eventDbRef.push(event).key

  	// eventDbRef.update(eventKey, { id : eventKey })
    var jsonNewEvent = JSON.stringify(event);
    this.http.post("/api/event-calendar", jsonNewEvent, httpOptions)
      .subscribe();


  }

  deleteEvent(event: CalendarEvent){
  	// let eventDbRef = this.db.object(`eventCalendar/${user.address.estate}/${user.$key}/${event.id}`)
  	// eventDbRef.remove()
    var jsonEvent = JSON.stringify(event);
    this.http.post("/api/event-calendar/delete", jsonEvent, httpOptions)
      .subscribe();
      //Subscribe neded to make actual request as HttpClient post is just a blueprint for the request.

  }

  editEvent(event: CalendarEvent){
    // let eventDbRef = this.db.object(`eventCalendar/${user.address.estate}/${user.$key}/${event.id}`)
    // eventDbRef.update(event)
    var jsonEvent = JSON.stringify(event);
    this.http.post("/api/event-calendar/update", jsonEvent, httpOptions)
      .subscribe();
  }


}
