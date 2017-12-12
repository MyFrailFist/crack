import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { UsersModule } from './users/users.module'

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { ScrollModule} from './scroll/scroll.module';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy} from '@angular/common';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//finding out the right modules, modules from here are going to be deprecated


import { AuthService } from './core/auth.service';
import { AuthGuard} from './core/auth.guard';

import { UsersComponent } from './users/users.component';
//import {UserLoginComponent} from './users/user-login/user-login.component';
// import { UserSignUpComponent} from './users/user-signup/user-signup.component';
// import { AlertComponent } from './-directive/alert/alert.component';


import { UserService } from './services/user.service';
import { ReportService } from './services/report.service';
import { ProductService } from './services/product.service';
import { DataService } from './services/data.service';
import { WindowService } from './services/window.service';
import { OAuthService} from './services/oauth.service';
import { WeatherService } from './services/weather.service';


import { OnboardingComponent } from './onboarding/onboarding.component';
import { DatasyncComponent } from './datasync/datasync.component';
import { MerchanXComponent } from './merchan-x/merchan-x.component';

import { FitbitComponent } from './iot/fitbit/fitbit.component'; 
// import { AlertService } from './services/alert.service';

import { NeaComponent } from './nea/nea.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
    //UsersComponent,
    //UserLoginComponent,
    //UserProfileComponent,
    OnboardingComponent,
    DatasyncComponent,
    MerchanXComponent,
    FitbitComponent,
    NeaComponent
    // UserSignUpComponent,
    // AlertComponent,
    // ServicesComponent,
    // UserService
    // AlertService
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    ScrollModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    UsersModule,
    HttpClientModule
  ],
  exports: [ScrollModule],
  providers: [AuthService , AuthGuard, UserService, ReportService, ProductService, DataService,WindowService,OAuthService,WeatherService,
      { provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
