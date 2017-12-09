import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { AlertComponent } from './alert/alert.component';
import {RouterModule} from "@angular/router";
import {BasicRoutes} from "./basic.routing";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import { ButtonComponent } from './button/button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { GenericClassComponent } from './generic-class/generic-class.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypographyComponent } from './typography/typography.component';
import { OtherComponent } from './other/other.component';
import { LabelBadgeComponent } from './label-badge/label-badge.component';
import {SharedModule} from "../../shared/shared.module";

import {MaintenanceComponent} from './maintenance/maintenance.component';
import {ApplianceComponent} from './appliance/appliance.component';
import {EstateMaintenanceComponent} from './estate-maintenance/estate-maintenance.component';

import { AnnouncementModule } from './community/announcement/announcement.module';
import { EventCalendarModule} from "./event-calendar/event-calendar.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule,
    AnnouncementModule,
    EventCalendarModule
  ],
  declarations: [
    BasicComponent,
    AlertComponent,
    BreadcrumbComponent,
    ButtonComponent,
    AccordionComponent,
    GenericClassComponent,
    TabsComponent,
    TypographyComponent,
    OtherComponent,
    LabelBadgeComponent,
    MaintenanceComponent,
    ApplianceComponent,
    EstateMaintenanceComponent,

  ]
})
export class BasicModule { }
