import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {BasicRoutes} from "../../basic.routing";
import {SharedModule} from "../../../../shared/shared.module";
import { AnnouncementComponent } from "./announcement.component";
import {PropertyAnnctComponent} from "./annctPage/property-annct.component";
import {BlockAnnctComponent} from "./annctPage/block-annct.component";
import {UnitAnnctComponent} from "./annctPage/unit-annct.component";
import {PersonalAnnctComponent} from "./annctPage/personal-annct.component";
import {MyAnnctComponent} from "./annctPage/my-annct.component";
import {CreateAnnctComponent} from "./annctPage/create-annct.component";
import {EditAnnctComponent} from "./annctPage/edit-annct.component";
import {ApproveAnnctComponent} from "./annctPage/approve-annct.component";

//import {AnnctModalComponent} from "./annctPage/annct-modal.component";

import { ShareSelectedAnnctService } from "./shared/share-selected-annct.service";
import { ListAnnctService } from "./shared/list-annct.service";
import { EditAnnctService } from "./shared/edit-annct.service";
import { PostAnnctService } from "./shared/post-annct.service";




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule
  ],
  exports: [
    AnnouncementComponent,
    PropertyAnnctComponent,
    BlockAnnctComponent,
    UnitAnnctComponent,
    PersonalAnnctComponent,
    CreateAnnctComponent,
    MyAnnctComponent,
    EditAnnctComponent,
    //AnnctModalComponent,
    ApproveAnnctComponent
  ],
  declarations: [
    AnnouncementComponent,
    PropertyAnnctComponent,
    BlockAnnctComponent,
    UnitAnnctComponent,
    PersonalAnnctComponent,
    //AnnctModalComponent,
    CreateAnnctComponent,
    MyAnnctComponent,
    EditAnnctComponent,
    ApproveAnnctComponent
    ],
   providers: [
   	ShareSelectedAnnctService,
   	ListAnnctService,
   	EditAnnctService,
   	PostAnnctService
   ]

})
export class AnnouncementModule { }
