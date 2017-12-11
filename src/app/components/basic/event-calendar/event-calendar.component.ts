import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent, // I modified the interface in node_modules/calendar-utils
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { ListEventService } from "./shared/list-event.service";
import { AddEventService } from "./shared/add-event.service";
import { UserService } from "../../../services/user.service";
import { AuthService } from "../../../core/auth.service";

import { User } from "../../../model/user";
import { userEvent } from "./shared/event";
import { NgForm } from "@angular/forms";
import { DatePipe } from "@angular/common";

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-event-calendar',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './event-calendar.component.html',
  styleUrls : [
  "./calendarStuff/angular-calendar.css",
   "./event-calendar.component.css"
   ],
  encapsulation : ViewEncapsulation.None
})

export class EventCalendarComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('newEventModal') newEventModal: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    event: CalendarEvent
    title: string
    description: string;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  private user: User;
  private eventList: userEvent[];
  private eventsCopy: CalendarEvent[]; 

  // dummyEvent = {
  //   $key: null,
  //   id: null,
  //   title: null,
  //   description: null,
  //   color: null,
  //   draggable:null;
  //   resizable: {
  //     beforeStart: null,
  //     afterEnd:null
  // },
  //   date: {
  //     dateCreated: null,
  //     startDate: startOfDay(new Date()),
  //     endDate: endOfDay(new Date())
  //   },
  //   reminder: null,
  //   timeBeforeReminder: null,
  //   reminderDuration: null
  // }
  // private newEvent: userEvent;
  private eventColor = colors.red.primary;
  private eventStart: Date = startOfDay(new Date());
  private eventEnd: Date = endOfDay(new Date());

  constructor(
    private modal: NgbModal,
    private listEventSvc: ListEventService,
    private addEventSvc: AddEventService,
    private userSvc: UserService,
    private authSvc: AuthService,
    ) { } 

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent( "blablabla", event)
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {

    this.modalData = { event: event, title: event.title, description: event.description };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(eventForm: NgForm): void {
    // this.newEvent = new userEvent(eventForm.value.title, eventForm.value.description)
    // this.newEvent.color = { primary: this.eventColor, secondary: this.eventColor }
    // this.newEvent.date.startDate = this.eventStart.getTime()
    // this.newEvent.date.endDate = this.eventEnd.getTime()
    var newEvent: CalendarEvent = {
      title: eventForm.value.title,
      description: eventForm.value.description,
      start: this.eventStart,
      end: this.eventEnd,
      color: this.eventColor,
      draggable: true,
      resizable: {
          beforeStart: true,
          afterEnd: true
      }
    }

    this.addEventSvc.addEvent(newEvent)
    this.refresh.next();

  }

  removeEvent(index: number){
    //this.events.splice(index, 1) // If observable dun work
    this.addEventSvc.deleteEvent(this.events[index])
  }

  editEvent(index: number){
    // let changedEvent = this.eventList[index]
    var changedCalendarEvent = this.events[index];
    // changedEvent.title = changedCalendarEvent.title
    // changedEvent.date.startDate = changedCalendarEvent.start.getTime()
    // changedEvent.date.endDate = changedCalendarEvent.end.getTime()
    // changedEvent.color = changedCalendarEvent.color

    this.addEventSvc.editEvent(changedCalendarEvent);
  }

  openEventModal(){
    // document.getElementById("submitEventModal").click()
    this.modal.open(this.newEventModal, { size : "lg"})
  }

  submitEvent(){
    document.getElementById("submitEventButton").click()
    // document.getElementById("closeEventModal").click()
  }

  ngOnInit() {
    // var userId = this.authSvc.authState.uid
    // this.userSvc.getUser(userId).subscribe( userInfo => this.user = userInfo )
    // this.listEventSvc.fetchEvent(
    //   this.user,
    //   (fetchEvent, calendarEvents) => {
    //     this.events = calendarEvents
    //     this.eventList = fetchEvent
    //     this.eventsCopy = this.events
    //   }
    this.listEventSvc.fetchEvent( (calendarEventList) => {
      this.events = calendarEventList;
    })
  }


}
