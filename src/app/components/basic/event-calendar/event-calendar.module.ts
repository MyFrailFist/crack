import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../shared/shared.module";
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './calendarStuff//module';

import{ EventCalendarComponent } from "./event-calendar.component";

import { ListEventService } from "./shared/list-event.service";
import { AddEventService } from "./shared/add-event.service";
// import { ConvertEventService } from "./shared/convert-event.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    DemoUtilsModule,
  ],
  declarations: [EventCalendarComponent],
  providers: [
  	ListEventService,
  	AddEventService
  	],
  exports: [EventCalendarComponent]
})
export class EventCalendarModule { 

}
