import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
// import { userEvent } from "./event";
// import { User } from "../../../../model/user";
import { CalendarEvent } from "angular-calendar";
// import { ConvertEventService } from "./convert-event.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import "rxjs/add/operator/map";

@Injectable()
export class ListEventService {

  // private fetchedEventList : FirebaseListObservable<Event[]>

  constructor(
    private http: HttpClient
  	) { }

    fetchEvent(callback: (calendarEventList: CalendarEvent[]) => void) {
      this.http.get<CalendarEvent[]>("/api/event-calendar")
        .subscribe( events => callback(events));
    }
  // fetchEvent(user: User, exportData : (listOfEvents :userEvent[], calendarEvents: CalendarEvent[]) => void){
  // 	var calendarEventList: CalendarEvent[] = [];
  // 	var dbRef = this.db.list(`eventCalendar/${user.address.estate}/${user.$key}/`)
  // 	dbRef.subscribe(
  // 		eventDbList => {
  //       calendarEventList = []
  // 			eventDbList.forEach(
  // 				event => {
  // 					// var lengthDiff = eventDbList.length - calendarEventList.length
  // 					// if(lengthDiff >= 1){
  // 					// 	let convertedEvent = this.convertSvc.convertToCalendarEvent(eventDbList[eventDbList.length-lengthDiff])
  // 					// 	calendarEventList.push(convertedEvent)
  // 					// } else if(lengthDiff <= 0){
  //      //        calendarEventList = []
  //      //        let convertedEvent = this.convertSvc.convertToCalendarEvent(event)
  //      //        calendarEventList.push(convertedEvent)
  //      //      }
  //             let convertedEvent = this.convertSvc.convertToCalendarEvent(event)
  //             calendarEventList.push(convertedEvent)            
  // 				}
  // 				)
  // 			exportData(eventDbList, calendarEventList)
  // 		}
  // 		)
  // }

}
