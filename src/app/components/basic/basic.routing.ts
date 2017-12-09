import { Routes } from '@angular/router';
import {AlertComponent} from "./alert/alert.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {ButtonComponent} from "./button/button.component";
import {AccordionComponent} from "./accordion/accordion.component";
import {GenericClassComponent} from "./generic-class/generic-class.component";
import {TabsComponent} from "./tabs/tabs.component";
import {TypographyComponent} from "./typography/typography.component";
import {OtherComponent} from "./other/other.component";
import {LabelBadgeComponent} from "./label-badge/label-badge.component";

import {ApplianceComponent} from "./appliance/appliance.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";

import {EstateMaintenanceComponent} from "./estate-maintenance/estate-maintenance.component";
import { AnnouncementComponent } from "./community/announcement/announcement.component";
import {PropertyAnnctComponent} from "./community/announcement/annctPage/property-annct.component";
import {BlockAnnctComponent} from "./community/announcement/annctPage/block-annct.component";
import {UnitAnnctComponent} from "./community/announcement/annctPage/unit-annct.component";
import {PersonalAnnctComponent} from "./community/announcement/annctPage/personal-annct.component";
import {MyAnnctComponent} from "./community/announcement/annctPage/my-annct.component";
import {CreateAnnctComponent} from "./community/announcement/annctPage/create-annct.component";
import {EditAnnctComponent} from "./community/announcement/annctPage/edit-annct.component";
import {ApproveAnnctComponent} from "./community/announcement/annctPage/approve-annct.component"
import { EventCalendarComponent } from "./event-calendar/event-calendar.component";

export const BasicRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'estate-maintenance',
                component: EstateMaintenanceComponent,
                data: {
                    breadcrumb: 'Estate Maintenance',
                    statur: true
                }

            },
            {   path: 'maintenance',
                component: EstateMaintenanceComponent,
                data: {
                    breadcrumb: 'Maintenance',
                    status: true
                }

            },
            {   path: 'appliance',
                component: ApplianceComponent,
                data: {
                    breadcrumb: 'Appliance',
                    status: true
                }

            },
            {
                path: 'announcement',
                component: AnnouncementComponent,
                data: {
                    breadcrumb: "Announcement",
                    status: true
                },
                children: [
                    {//Showproeprty page first.
                        path: "",
                        redirectTo: "property",
                        pathMatch: "prefix"
                    },
                    {
                        path: 'property',
                        component: PropertyAnnctComponent

                    },
                    {
                        path: 'block',
                        component: BlockAnnctComponent

                    },
                    {
                        path: 'unit',
                        component: UnitAnnctComponent

                    },
                    {
                        path: 'personal',
                        component: PersonalAnnctComponent

                    },
                    {
                        path: 'my',
                        component: MyAnnctComponent
                    },
                    {
                        path: 'create',
                        component: CreateAnnctComponent

                    },
                    {
                        path: 'edit',
                        component: EditAnnctComponent
                    },
                    {
                        path: 'approve',
                        component: ApproveAnnctComponent
                    }
                ]
            },
            {
                path: "event-calendar",
                component: EventCalendarComponent,
                data: {
                    breadcrumb: "Event Calendar",
                    status: true
                }
            },
            {
                path: 'alert',
                component: AlertComponent,
                data: {
                    breadcrumb: 'Alert',
                    status: true
                }
            }, {
                path: 'breadcrumb',
                component: BreadcrumbComponent,
                data: {
                    breadcrumb: 'Breadcrumb Style',
                    status: true
                }
            }, {
                path: 'button',
                component: ButtonComponent,
                data: {
                    breadcrumb: 'Button',
                    status: true
                }
            }, {
                path: 'accordion',
                component: AccordionComponent,
                data: {
                    breadcrumb: 'Accordion',
                    status: true
                }
            }, {
                path: 'generic-class',
                component: GenericClassComponent,
                data: {
                    breadcrumb: 'Generic Class',
                    status: true
                }
            }, {
                path: 'tabs',
                component: TabsComponent,
                data: {
                    breadcrumb: 'Tabs',
                    status: true
                }
            }, {
                path: 'label-badge',
                component: LabelBadgeComponent,
                data: {
                    breadcrumb: 'Label Badge',
                    status: true
                }
            }, {
                path: 'typography',
                component: TypographyComponent,
                data: {
                    breadcrumb: 'Typography',
                    status: true
                }
            }, {
                path: 'other',
                component: OtherComponent,
                data: {
                    breadcrumb: 'Other',
                    status: true
                }
            }
        ]
    }
];
