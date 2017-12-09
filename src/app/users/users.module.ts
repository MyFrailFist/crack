import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";

import { UsersComponent } from './users.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSignUpComponent } from './user-signup/user-signup.component';

import {RouterModule} from "@angular/router";
import {UsersRoutes} from "./users.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    SharedModule
  ],
  declarations: [UsersComponent, UserLoginComponent, UserProfileComponent, UserSignUpComponent],
  exports:[
  UserLoginComponent]
})
export class UsersModule { }
