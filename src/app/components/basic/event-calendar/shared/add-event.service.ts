import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { userEvent } from "./event";
import { User } from "../../../../model/user";

import * as firebase from "firebase"

@Injectable()
export class AddEventService {
 

  constructor(
  	private db: AngularFireDatabase
  	) { }

  addEvent(event: userEvent, user: User){
  	event.date.dateCreated = firebase.database.ServerValue.TIMESTAMP
  	let eventDbRef = this.db.list(`eventCalendar/${user.address.estate}/${user.$key}/`)
  	let eventKey = eventDbRef.push(event).key

  	eventDbRef.update(eventKey, { id : eventKey })

  }

  deleteEvent(event: userEvent, user: User){
  	let eventDbRef = this.db.object(`eventCalendar/${user.address.estate}/${user.$key}/${event.id}`)
  	eventDbRef.remove()
  }

  editEvent(event: userEvent, user: User){
    let eventDbRef = this.db.object(`eventCalendar/${user.address.estate}/${user.$key}/${event.id}`)
    eventDbRef.update(event)
  }


}
