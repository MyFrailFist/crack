import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { FileUploadComponent } from './file-upload.component';
import { ListFileComponent } from './list-file/list-file.component';
//import {UploadFormComponent} from './upload-form/upload-form.component';

import {FileUploadRoutes} from "./file-upload.routing";
import {SharedModule} from "../../shared/shared.module";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FileUploadRoutes),
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase')
  ],
  declarations: [
  	FileUploadComponent,
  	ListFileComponent
    //UploadFormComponent
  	],
  providers: [AngularFireDatabase]
})
export class FileUploadModule { }
