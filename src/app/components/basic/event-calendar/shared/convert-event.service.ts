import { Injectable } from '@angular/core';
import { userEvent } from "./event"
import { CalendarEvent } from "angular-calendar";

@Injectable()
export class ConvertEventService {

  constructor() { }

  convertToCalendarEvent(event: userEvent): CalendarEvent {
  	return {
  		title: event.title,
      description: event.description,
  		start: new Date(event.date.startDate),
  		end: new Date(event.date.endDate),
  		color: event.color,
  		draggable: event.draggable,
  		resizable: event.resizable
  	}
  }

}
