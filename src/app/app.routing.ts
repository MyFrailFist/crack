import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

//test modules/packages
import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { FitbitComponent } from './iot/fitbit/fitbit.component';

import {TestPage1Component} from './test-page1/test-page1.component';

import { MerchanXComponent } from './merchan-x/merchan-x.component';
import { NeaComponent } from './nea/nea.component';
// import { UserSignUpComponent} from './users/user-signup/user-signup.component';


export const AppRoutes: Routes = [
{      
  path: '',
  redirectTo: "dashboard",
  pathMatch: 'full'
},{
  path: 'login',
  component: UserLoginComponent
},{
   path: 'onboarding',
   component: OnboardingComponent,
   canActivate: [AuthGuard]
},{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [AuthGuard],
  children: [{
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
      path: 'merchanX',
      component: MerchanXComponent
    },{
      path: 'widget',
      loadChildren: './widget/widget.module#WidgetModule'
    },{
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    },{
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    },{
      path: 'animations',
      loadChildren: './animations/animations.module#AnimationsModule'
    },{
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    },{
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    },{
      path: 'data-table',
      loadChildren: './components/tables/data-table/data-table.module#DataTableModule',
    },{
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    },{
      path: 'charts',
      loadChildren: './charts/charts.module#ChartsModule',
    },{
      path:'fitbit',
      component: FitbitComponent
    },{
      path:'testPage1',
      component: TestPage1Component
    }
    // ,{
    //   path: 'user',
    //   loadChildren: './user/user.module#UserModule'
    // }
    ,{
      path: 'crm-contact',
      loadChildren: './components/crm-contact/crm-contact.module#CrmContactModule'
    },{
      path: 'task',
      loadChildren: './components/task/task.module#TaskModule'
    },{
      path: 'editor',
      loadChildren: './components/editor/editor.module#EditorModule'
    },{
      path: 'invoice',
      loadChildren: './components/invoice/invoice.module#InvoiceModule'
    },{
      path: 'file-upload',
      loadChildren: './components/file-upload/file-upload.module#FileUploadModule'
    },{
      path: 'change-log',
      loadChildren: './change-log/change-log.module#ChangeLogModule'
    },{
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    },{
      path: 'appliance',
      loadChildren: './components/basic/basic.module#BasicModule'
    },{
      path: 'estate-maintenance',
      loadChildren: './components/basic/basic.module#BasicModule'
    },{
      path: 'weather',
      component:NeaComponent
    }
  ]
},
{
  path: '**',
  redirectTo: 'error/404'
}
];