webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./animations/animations.module": [
		"../../../../../src/app/animations/animations.module.ts",
		"animations.module"
	],
	"./change-log/change-log.module": [
		"../../../../../src/app/change-log/change-log.module.ts",
		"change-log.module"
	],
	"./charts/charts.module": [
		"../../../../../src/app/charts/charts.module.ts",
		"charts.module",
		"common"
	],
	"./components/advance/advance.module": [
		"../../../../../src/app/components/advance/advance.module.ts",
		"advance.module",
		"common"
	],
	"./components/basic/basic.module": [
		"../../../../../src/app/components/basic/basic.module.ts",
		"basic.module",
		"common"
	],
	"./components/crm-contact/crm-contact.module": [
		"../../../../../src/app/components/crm-contact/crm-contact.module.ts",
		"crm-contact.module"
	],
	"./components/editor/editor.module": [
		"../../../../../src/app/components/editor/editor.module.ts",
		"editor.module"
	],
	"./components/file-upload/file-upload.module": [
		"../../../../../src/app/components/file-upload/file-upload.module.ts",
		"file-upload.module"
	],
	"./components/forms/forms.module": [
		"../../../../../src/app/components/forms/forms.module.ts",
		"forms.module"
	],
	"./components/invoice/invoice.module": [
		"../../../../../src/app/components/invoice/invoice.module.ts",
		"invoice.module",
		"common"
	],
	"./components/tables/bootstrap-table/bootstrap-table.module": [
		"../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.module.ts",
		"bootstrap-table.module"
	],
	"./components/tables/data-table/data-table.module": [
		"../../../../../src/app/components/tables/data-table/data-table.module.ts",
		"data-table.module"
	],
	"./components/task/task.module": [
		"../../../../../src/app/components/task/task.module.ts",
		"task.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./map/map.module": [
		"../../../../../src/app/map/map.module.ts",
		"map.module"
	],
	"./simple-page/simple-page.module": [
		"../../../../../src/app/simple-page/simple-page.module.ts",
		"simple-page.module"
	],
	"./widget/widget.module": [
		"../../../../../src/app/widget/widget.module.ts",
		"widget.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, _dataService) {
        var _this = this;
        this.router = router;
        this._dataService = _dataService;
        this._dataService.getUsers()
            .subscribe(function (res) { _this.users = res; console.log(res); });
        router.navigate(['dashboard']);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['dashboard']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_admin_breadcrumbs_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/layouts/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layouts_admin_title_title_component__ = __webpack_require__("../../../../../src/app/layouts/admin/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scroll_scroll_module__ = __webpack_require__("../../../../../src/app/scroll/scroll.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_oauth_service__ = __webpack_require__("../../../../../src/app/services/oauth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_weather_service__ = __webpack_require__("../../../../../src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__onboarding_onboarding_component__ = __webpack_require__("../../../../../src/app/onboarding/onboarding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__datasync_datasync_component__ = __webpack_require__("../../../../../src/app/datasync/datasync.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__merchan_x_merchan_x_component__ = __webpack_require__("../../../../../src/app/merchan-x/merchan-x.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__iot_fitbit_fitbit_component__ = __webpack_require__("../../../../../src/app/iot/fitbit/fitbit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__nea_nea_component__ = __webpack_require__("../../../../../src/app/nea/nea.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//finding out the right modules, modules from here are going to be deprecated


//import {UserLoginComponent} from './users/user-login/user-login.component';
// import { UserSignUpComponent} from './users/user-signup/user-signup.component';
// import { AlertComponent } from './-directive/alert/alert.component';











// import { AlertService } from './services/alert.service';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__layouts_admin_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__layouts_admin_title_title_component__["a" /* TitleComponent */],
            //UsersComponent,
            //UserLoginComponent,
            //UserProfileComponent,
            __WEBPACK_IMPORTED_MODULE_30__onboarding_onboarding_component__["a" /* OnboardingComponent */],
            __WEBPACK_IMPORTED_MODULE_31__datasync_datasync_component__["a" /* DatasyncComponent */],
            __WEBPACK_IMPORTED_MODULE_32__merchan_x_merchan_x_component__["a" /* MerchanXComponent */],
            __WEBPACK_IMPORTED_MODULE_33__iot_fitbit_fitbit_component__["a" /* FitbitComponent */],
            __WEBPACK_IMPORTED_MODULE_34__nea_nea_component__["a" /* NeaComponent */]
            // UserSignUpComponent,
            // AlertComponent,
            // ServicesComponent,
            // UserService
            // AlertService
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__scroll_scroll_module__["a" /* ScrollModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].firebase, 'angular-auth-firebase'),
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7__users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_15__scroll_scroll_module__["a" /* ScrollModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_21__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__core_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_25__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_26__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_27__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_28__services_oauth_service__["a" /* OAuthService */], __WEBPACK_IMPORTED_MODULE_29__services_weather_service__["a" /* WeatherService */],
            { provide: __WEBPACK_IMPORTED_MODULE_16__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_16__angular_common__["PathLocationStrategy"] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/users/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__onboarding_onboarding_component__ = __webpack_require__("../../../../../src/app/onboarding/onboarding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iot_fitbit_fitbit_component__ = __webpack_require__("../../../../../src/app/iot/fitbit/fitbit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__merchan_x_merchan_x_component__ = __webpack_require__("../../../../../src/app/merchan-x/merchan-x.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nea_nea_component__ = __webpack_require__("../../../../../src/app/nea/nea.component.ts");

//test modules/packages






// import { UserSignUpComponent} from './users/user-signup/user-signup.component';
var AppRoutes = [
    {
        path: '',
        redirectTo: "dashboard",
        pathMatch: 'full'
    }, {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__users_user_login_user_login_component__["a" /* UserLoginComponent */]
    }, {
        path: 'onboarding',
        component: __WEBPACK_IMPORTED_MODULE_3__onboarding_onboarding_component__["a" /* OnboardingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__core_auth_guard__["a" /* AuthGuard */]]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__core_auth_guard__["a" /* AuthGuard */]],
        children: [{
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'merchanX',
                component: __WEBPACK_IMPORTED_MODULE_5__merchan_x_merchan_x_component__["a" /* MerchanXComponent */]
            }, {
                path: 'widget',
                loadChildren: './widget/widget.module#WidgetModule'
            }, {
                path: 'basic',
                loadChildren: './components/basic/basic.module#BasicModule'
            }, {
                path: 'advance',
                loadChildren: './components/advance/advance.module#AdvanceModule'
            }, {
                path: 'animations',
                loadChildren: './animations/animations.module#AnimationsModule'
            }, {
                path: 'forms',
                loadChildren: './components/forms/forms.module#FormsModule'
            }, {
                path: 'bootstrap-table',
                loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
            }, {
                path: 'data-table',
                loadChildren: './components/tables/data-table/data-table.module#DataTableModule',
            }, {
                path: 'map',
                loadChildren: './map/map.module#MapModule',
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule',
            }, {
                path: 'fitbit',
                component: __WEBPACK_IMPORTED_MODULE_4__iot_fitbit_fitbit_component__["a" /* FitbitComponent */]
            }
            // ,{
            //   path: 'user',
            //   loadChildren: './user/user.module#UserModule'
            // }
            ,
            {
                path: 'crm-contact',
                loadChildren: './components/crm-contact/crm-contact.module#CrmContactModule'
            }, {
                path: 'task',
                loadChildren: './components/task/task.module#TaskModule'
            }, {
                path: 'editor',
                loadChildren: './components/editor/editor.module#EditorModule'
            }, {
                path: 'invoice',
                loadChildren: './components/invoice/invoice.module#InvoiceModule'
            }, {
                path: 'file-upload',
                loadChildren: './components/file-upload/file-upload.module#FileUploadModule'
            }, {
                path: 'change-log',
                loadChildren: './change-log/change-log.module#ChangeLogModule'
            }, {
                path: 'simple-page',
                loadChildren: './simple-page/simple-page.module#SimplePageModule'
            }, {
                path: 'appliance',
                loadChildren: './components/basic/basic.module#BasicModule'
            }, {
                path: 'estate-maintenance',
                loadChildren: './components/basic/basic.module#BasicModule'
            }, {
                path: 'weather',
                component: __WEBPACK_IMPORTED_MODULE_6__nea_nea_component__["a" /* NeaComponent */]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(this.auth.authenticated);
        if (this.auth.authenticated) {
            return true;
        }
        else {
            // return this.auth.currentUserObservable
            //      .take(1)
            //      .map(user => !user)
            //      .do(loggedIn => {
            //        if (!loggedIn) {
            //          console.log("access denied")
            this.router.navigate(['login']);
            //     }
            // })
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(afAuth, db, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        // Returns
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Social Auth ////
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    //// Helpers ////
    AuthService.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "users/" + this.currentUserId; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName,
            address: {
                estate: "LALALALALALAnd",
                country: "WOnderland",
                unit: "unitOfOpera",
                block: "1231^323"
            }
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/datasync/datasync.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datasync/datasync.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  datasync works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/datasync/datasync.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasyncComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatasyncComponent = (function () {
    function DatasyncComponent() {
    }
    DatasyncComponent.prototype.ngOnInit = function () {
    };
    return DatasyncComponent;
}());
DatasyncComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datasync',
        template: __webpack_require__("../../../../../src/app/datasync/datasync.component.html"),
        styles: [__webpack_require__("../../../../../src/app/datasync/datasync.component.css")]
    })
    // @Injectable()
    // export class DataService {
    //   private messageSource = new BehaviorSubject<string>("default message");
    //   currentMessage = this.messageSource.asObservable();
    //   constructor() { }
    //   changeMessage(message: string) {
    //     this.messageSource.next(message)
    //   }
    // }
    ,
    __metadata("design:paramtypes", [])
], DatasyncComponent);

//# sourceMappingURL=datasync.component.js.map

/***/ }),

/***/ "../../../../../src/app/iot/fitbit/fitbit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-12\">\n\t<div class=\"card\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<button (click)=integrateFitbit()> Integrate Fitbit </button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n<div class=\"col-sm-12\">\n\t<div class=\"card\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<input type=\"text\" #fitbitToken placeholder=\"Paste your fitbit access token here\">\n\t\t\t\t<button (click)=addFitbitAccessToken(fitbitToken.value)> Activate Access Token </button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n<div class=\"col-sm-6\">\n\t<div class=\"card\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<!-- start putting fitbit stuff here -->\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<!-- start putting fitbit stuff here -->\n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n<div class=\"col-sm-6\">\n\t<div class=\"card\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<!-- start putting fitbit stuff here -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/iot/fitbit/fitbit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitbitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_oauth_service__ = __webpack_require__("../../../../../src/app/services/oauth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FitbitComponent = (function () {
    function FitbitComponent(oAuth, _dataservice, userService, authService) {
        this.oAuth = oAuth;
        this._dataservice = _dataservice;
        this.userService = userService;
        this.authService = authService;
        this.fitbitAccessToken = null;
    }
    FitbitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userUid = this.authService.authState.uid;
        this.fitbitAccessToken = this.userService.getUser(this.userUid).subscribe(function (snapshot) {
            _this.currentUser = snapshot;
            var tokenString;
            if (snapshot.fitbitToken) {
                //run the chain functions here to start the fitbit api services
                _this.runFitbitApiServices(snapshot.fitbitToken);
                return snapshot.fitbitToken;
            }
            else {
                return null;
            }
        });
    };
    FitbitComponent.prototype.integrateFitbit = function () {
        var fitbitUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* fitbitConfig */].tempUrl;
        this.oAuth.doLogin();
    };
    FitbitComponent.prototype.addFitbitAccessToken = function (fitbitTokenString) {
        console.log("iuwfbwbfewbf");
        var fitbitToken = fitbitTokenString;
        if (fitbitToken && fitbitToken != "" && !this.currentUser.fitbitToken) {
            console.log("saving the token to the user");
            this.currentUser.fitbitToken = fitbitToken;
            this.userService.updateUser(this.currentUser); //save the user to the db with the fitbit token
            //auto init all the fitbit services
            this.runFitbitApiServices(fitbitToken);
        }
        else {
            console.log("entered here????", fitbitTokenString);
            this.runFitbitApiServices(fitbitTokenString);
        }
    };
    FitbitComponent.prototype.runFitbitApiServices = function (fitbitToken) {
        var clientId = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* fitbitConfig */].clientId;
        var clientSecret = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* fitbitConfig */].clientSecret;
        console.log("first api test cwall");
        this._dataservice.getFitbitUserId(fitbitToken).subscribe(function (snapshot) {
            console.log("observe what is the snapshot");
            console.log(snapshot);
        });
        //first api service
    };
    return FitbitComponent;
}());
FitbitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fitbit',
        template: __webpack_require__("../../../../../src/app/iot/fitbit/fitbit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_oauth_service__["a" /* OAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_oauth_service__["a" /* OAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], FitbitComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=fitbit.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\naside.pcoded-slider.ng-sidebar {\r\n    top: 56px;\r\n}\r\n\r\n.slimscroll-wrapper, .scroll-window {\r\n    width: 100% !important;\r\n}\r\n\r\n.userlist-box.show {\r\n    display: -webkit-box;\r\n}\r\n\r\n.userlist-box.hide {\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"pcoded\" (window:resize)=\"onResize($event)\" class=\"pcoded iscollapsed\" theme-layout=\"vertical\" vertical-placement=\"left\" vertical-layout=\"wide\" [attr.pcoded-device-type]=\"deviceType\" [attr.vertical-nav-type]=\"verticalNavType\" [attr.vertical-effect]=\"verticalEffect\" vnavigation-view=\"view1\">\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <nav class=\"navbar header-navbar pcoded-header\" header-theme=\"theme4\">\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-logo\" navbar-theme=\"theme4\">\n          <a class=\"mobile-menu\" id=\"mobile-collapse\" href=\"javascript:;\" (click)=\"toggleOpened()\" [exclude]=\"'#main_navbar'\" (clickOutside)=\"onClickedOutside($event)\">\n            <i class=\"ti-menu\"></i>\n          </a>\n\n\n          <!-- edit here to adopt different user position -->\n          <!-- <a [routerLink]=\"['/']\">\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\n          </a> -->\n\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"userStatus\"  name=\"userStatus\"></ng-select>\n\n\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\n            <i class=\"ti-more\"></i>\n          </a>\n        </div>\n\n        <div class=\"navbar-container\">\n          <div>\n            <ul class=\"nav-left\">\n              <li>\n                <div class=\"sidebar_toggle\"><a href=\"javascript:;\" (click)=\"toggleOpened()\"><i class=\"ti-menu f-18\"></i></a></div>\n              </li>\n              <li>\n                <a href=\"javascript:;\" appToggleFullscreen>\n                  <i class=\"ti-fullscreen\"></i>\n                </a>\n              </li>\n              <li class=\"mega-menu-top\">\n                <a href=\"javascript:;\">\n                  Mega\n                  <i class=\"ti-angle-down\"></i>\n                </a>\n                <ul class=\"show-notification row\">\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Popular Links</h6>\n                    <ul class=\"mega-menu-links\">\n                      <li><a [routerLink]=\"['/forms/advance-elements']\">Form Elements</a></li>\n                      <li><a [routerLink]=\"['/basic/button']\">Buttons</a></li>\n                      <li><a [routerLink]=\"['/map/google']\">Maps</a></li>\n                      <li><a [routerLink]=\"['/user/card']\">Contact Cards</a></li>\n                      <li><a [routerLink]=\"['/user/profile']\">User Information</a></li>\n                      <li><a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">Lock Screen</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Mailbox</h6>\n                    <ul class=\"mega-mailbox\">\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-folder\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Data Backup</h5>\n                            <small class=\"text-muted\">Store your data</small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-headphone-alt\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Support</h5>\n                            <small class=\"text-muted\">24-hour support</small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-dropbox\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Drop-box</h5>\n                            <small class=\"text-muted\">Store large amount of data in one-box only\n                            </small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-location-pin\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Location</h5>\n                            <small class=\"text-muted\">Find Your Location with ease of use</small>\n                          </div>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Gallery</h6>\n                    <div class=\"row m-b-20\">\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/03.jpg\" alt=\"Gallery-3\">\n                      </div>\n                    </div>\n                    <div class=\"row m-b-20\">\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/04.jpg\" alt=\"Gallery-4\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/05.jpg\" alt=\"Gallery-5\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/06.jpg\" alt=\"Gallery-6\">\n                      </div>\n                    </div>\n                    <button class=\"btn btn-primary btn-sm btn-block\">Browse Gallery</button>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Contact Us</h6>\n                    <div class=\"mega-menu-contact\">\n                      <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Artisanal kale\" id=\"example-text-input\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"example-search-input-email\" class=\"col-3 col-form-label\">Email</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"email\" placeholder=\"Enter your E-mail Id\" id=\"example-search-input-email\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"example-search-input-content\" class=\"col-3 col-form-label\">Contact</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"+91-9898989898\" id=\"example-search-input-content\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"exampleTextarea\" class=\"col-3 col-form-label\">Message</label>\n                        <div class=\"col-9\">\n                          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\n              <li class=\"header-notification lng-dropdown\">\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\n                  <i class=\"flag-icon flag-icon-gb m-r-5\"></i> English\n                </a>\n                <ul class=\"show-notification\">\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"en\">\n                      <i class=\"flag-icon flag-icon-gb m-r-5\"></i> English\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"es\">\n                      <i class=\"flag-icon flag-icon-es m-r-5\"></i> Spanish\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"pt\">\n                      <i class=\"flag-icon flag-icon-pt m-r-5\"></i> Portuguese\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"fr\">\n                      <i class=\"flag-icon flag-icon-fr m-r-5\"></i> French\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"header-notification\">\n                <a href=\"javascript:;\">\n                  <i class=\"ti-bell\"></i>\n                  <span class=\"badge\">5</span>\n                </a>\n                <ul class=\"show-notification\">\n                  <li>\n                    <h6>Notifications</h6>\n                    <label class=\"label label-danger\">New</label>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center\" src=\"assets/images/user.png\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">John Doe</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center\" src=\"assets/images/user.png\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Joseph William</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center\" src=\"assets/images/user.png\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Sara Soudein</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"header-notification\">\n                <a href=\"javascript:;\" (click)=\"toggleChat()\" class=\"displayChatbox\">\n                  <i class=\"ti-comments\"></i>\n                  <span class=\"badge\">9</span>\n                </a>\n              </li>\n              <li class=\"user-profile header-notification\">\n                <a [routerLink]=\"['/']\">\n                  <img src=\"assets/images/user.png\" alt=\"User-Profile-Image\">\n                  <span>John Doe</span>\n                  <i class=\"ti-angle-down\"></i>\n                </a>\n                <ul class=\"show-notification profile-notification\">\n                  <li>\n                    <a [routerLink]=\"['/crm-contact']\">\n                      <i class=\"ti-settings\"></i> Settings\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/user/profile']\">\n                      <i class=\"ti-user\"></i> Profile\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/advance/notifications']\">\n                      <i class=\"ti-email\"></i> My Messages\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">\n                      <i class=\"ti-lock\"></i> Lock Screen\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/']\">\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\n                    </a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <!-- rightbar chat start -->\n    <div [@slideInOut]=\"chatToggle\" id=\"sidebar\" class=\"users p-chat-user\">\n        <div class=\"had-container\">\n          <div class=\"card card_main p-fixed users-main\">\n            <div class=\"user-box\">\n              <div class=\"card-body\">\n                <div class=\"right-icon-control\">\n                  <input type=\"text\" class=\"form-control search-text\" placeholder=\"Search Friend\" id=\"search-friends\" #searchFriends (keyup)=\"searchFriendList($event)\">\n                  <div class=\"form-icon\">\n                    <i class=\"icofont icofont-search\"></i>\n                  </div>\n                </div>\n\n              </div>\n                <div slimScroll class=\"main-friend-list scroll-window\" width=\"100%\" height=\"100%\" size=\"7px\" color=\"rgb(27, 139, 249)\" opacity=\"0.4\">\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"1\" data-status=\"online\" data-username=\"Josephin Doe\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Josephin Doe\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Josephin Doe</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"2\" data-status=\"online\" data-username=\"Lary Doe\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Lary Doe\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u1.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Lary Doe</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"3\" data-status=\"online\" data-username=\"Alice\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Alice\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Alice</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"4\" data-status=\"online\" data-username=\"Alia\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Alia\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u2.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Alia</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"5\" data-status=\"online\" data-username=\"Suzen\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Suzen\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Suzen</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"6\" data-status=\"offline\" data-username=\"Michael Scofield\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Michael Scofield\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-3.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Michael Scofield</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"7\" data-status=\"online\" data-username=\"Irina Shayk\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Irina Shayk\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-4.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Irina Shayk</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"8\" data-status=\"offline\" data-username=\"Sara Tancredi\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Sara Tancredi\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-5.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Sara Tancredi</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"9\" data-status=\"online\" data-username=\"Samon\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Samon\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Samon</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"10\" data-status=\"online\" data-username=\"Daizy Mendize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Daizy Mendize\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Daizy Mendize</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"11\" data-status=\"offline\" data-username=\"Loren Scofield\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Loren Scofield\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-3.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Loren Scofield</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"12\" data-status=\"online\" data-username=\"Shayk\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Shayk\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-4.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Shayk</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"13\" data-status=\"offline\" data-username=\"Sara\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Sara\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Sara</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"14\" data-status=\"online\" data-username=\"Doe\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Doe\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Doe</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"15\" data-status=\"online\" data-username=\"Lary\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Lary\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u1.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Lary</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"16\" data-status=\"online\" data-username=\"Josephin Doe\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Josephin Doe\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Roni Sommerfield</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"17\" data-status=\"online\" data-username=\"Lary Doe\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Lary Doe\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u1.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Mickey Amavisca</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"18\" data-status=\"online\" data-username=\"Alice\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Alice\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Dorethea Hennigan</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"19\" data-status=\"online\" data-username=\"Alia\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Alia\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u2.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Marisha Haughey</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"20\" data-status=\"online\" data-username=\"Suzen\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Suzen\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Justin Czajkowski</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"21\" data-status=\"offline\" data-username=\"Michael Scofield\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Michael Scofield\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-3.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Reyes Hodges</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"22\" data-status=\"online\" data-username=\"Irina Shayk\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Irina Shayk\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-4.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Vicky Hadley</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"23\" data-status=\"offline\" data-username=\"Sara Tancredi\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Sara Tancredi\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-5.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Lezlie Baumert</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"24\" data-status=\"online\" data-username=\"Samon\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Samon\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Otha Vanorden</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"25\" data-status=\"online\" data-username=\"Daizy Mendize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Daizy Mendize\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Glayds Inabinet</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"26\" data-status=\"offline\" data-username=\"Loren Scofield\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Loren Scofield\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-3.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Hang Owsley</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"27\" data-status=\"online\" data-username=\"Shayk\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Shayk\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-4.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Carlotta Buttner</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"28\" data-status=\"offline\" data-username=\"Sara\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Sara\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-danger\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Randa Vanloan</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"29\" data-status=\"online\" data-username=\"Doe\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Doe\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Elana Fulk</div>\n                    </div>\n                  </div>\n                  <div (click)=\"toggleChatInner()\" class=\"media userlist-box\" data-id=\"30\" data-status=\"online\" data-username=\"Lary\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Lary\">\n                    <a class=\"media-left\" href=\"javascript:;\">\n                      <img class=\"media-object img-circle\" src=\"assets/images/task/task-u1.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"live-status bg-success\"></div>\n                    </a>\n                    <div class=\"media-body\">\n                      <div class=\"f-13 chat-header\">Amos Spearman</div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- rightbar inner chat start-->\n    <div [@slideOnOff]=\"chatInnerToggle\" class=\"card card_main showChat_inner\">\n      <div class=\"media chat-inner-header\">\n        <a class=\"back_chatBox\" (click)=\"toggleChatInner()\">\n          <i class=\"icofont icofont-rounded-left\"></i> Josephin Doe\n        </a>\n      </div>\n      <div class=\"media chat-messages\">\n        <a class=\"media-left photo-table\" href=\"javascript:;\">\n          <img class=\"media-object img-circle m-t-5\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n        </a>\n        <div class=\"media-body chat-menu-content\">\n          <div class=\"\">\n            <p class=\"chat-cont\">I'm just looking around. Will you tell me something about yourself?</p>\n            <p class=\"chat-time\">8:20 a.m.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"media chat-messages\">\n        <div class=\"media-body chat-menu-reply\">\n          <div class=\"\">\n            <p class=\"chat-cont\">I'm just looking around. Will you tell me something about yourself?</p>\n            <p class=\"chat-time\">8:20 a.m.</p>\n          </div>\n        </div>\n        <div class=\"media-right photo-table\">\n          <a href=\"javascript:;\">\n            <img class=\"media-object img-circle m-t-5\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\n          </a>\n        </div>\n      </div>\n      <div class=\"chat-reply-box p-b-20\">\n        <div class=\"right-icon-control\">\n          <input type=\"text\" class=\"form-control search-text\" placeholder=\"Share Your Thoughts\">\n          <div class=\"form-icon\">\n            <i class=\"icofont icofont-paper-plane\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- rightbar inner chat end-->\n    <!-- rightbar chat end-->\n    <div class=\"pcoded-main-container\">\n      <div class=\"pcoded-wrapper\">\n        <nav id=\"main_navbar\" class=\" pcoded-navbar\" (clickOutside)=\"onClickedOutside($event)\" [exclude]=\"'#mobile-collapse'\" navbar-theme=\"theme4\" active-item-theme=\"theme4\" sub-item-theme=\"theme2\" active-item-style=\"style0\" pcoded-navbar-position=\"absolute\">\n          <div class=\"sidebar_toggle\"><a href=\"javascript:;\"><i class=\"icon-close icons\"></i></a></div>\n          <div class=\"pcoded-inner-navbar main-menu\" appAccordion slimScroll width=\"100%\" height=\"100%\" size=\"4px\" color=\"#fff\" opacity=\"0.3\" allowPageScroll=\"false\">\n            <div>\n            <div *ngFor=\"let asideItems of menuItems.getAll()\">\n              <div class=\"pcoded-navigatio-lavel\" menu-title-theme=\"theme5\" >{{asideItems.label}}</div>\n              <ul class=\"pcoded-item pcoded-left-item\" item-border=\"none\" item-border-style=\"solid\" subitem-border=\"solid\" *ngFor=\"let asideItem of asideItems.main\" appAccordionLink group=\"{{asideItem.state}}\">\n                <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'external'\" appAccordionLink group=\"{{asideItem.state}}\">\n                  <a href=\"{{asideItem.external}}\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\n                    <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\n                    <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                    <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                    <span class=\"pcoded-mcaret\"></span>\n                  </a>\n                </li>\n\n                <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\" appAccordionLink group=\"{{asideItem.state}}\">\n                  <a [routerLink]=\"['/', asideItem.main_state, asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle *ngIf=\"asideItem.main_state; else: mainContent\">\n                    <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\n                    <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                    <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                    <span class=\"pcoded-mcaret\"></span>\n                  </a>\n                  <ng-template #mainContent>\n                    <a [routerLink]=\"['/', asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                      <span class=\"pcoded-mcaret\"></span>\n                    </a>\n                  </ng-template>\n                </li>\n                <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'sub'\" class=\"pcoded-hasmenu\" dropdown-icon=\"style1\" subitem-icon=\"style6\" appAccordionLink group=\"{{asideItem.state}}\">\n                  <a [routerLinkActive]=\"['active']\" href=\"javascript:;\" appAccordionToggle>\n                    <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\n                    <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                    <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                    <span class=\"pcoded-mcaret\"></span>\n                  </a>\n                  <ul class=\"pcoded-submenu\">\n                    <ng-template ngFor let-asideChildren [ngForOf]=\"asideItem.children\">\n                    <li [routerLinkActive]=\"['active']\" *ngIf=\"asideChildren.type !== 'sub'\">\n                      <a [routerLink]=\"['/', asideItem.state, asideChildren.state]\" target=\"{{asideChildren.target ? '_blank' : '_self'}}\">\n                        <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                        <span class=\"pcoded-mtext\">{{ asideChildren.name }} </span>\n                        <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\n                        <span class=\"pcoded-mcaret\"></span>\n                      </a>\n                    </li>\n\n                    <li [routerLinkActive]=\"['active']\" class=\"pcoded-hasmenu\" dropdown-icon=\"style1\" subitem-icon=\"style6\" *ngIf=\"asideChildren.type === 'sub'\" appAccordionLink group=\"sub-toggled\">\n                      <a href=\"javascript:;\" appAccordionToggle>\n                        <span class=\"pcoded-micon\"><i class=\"ti-direction-alt\"></i></span>\n                        <span class=\"pcoded-mtext\">{{ asideChildren.name }}</span>\n                        <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\n                        <span class=\"pcoded-mcaret\"></span>\n                      </a>\n                      <ul class=\"pcoded-submenu\">\n                        <ng-template ngFor let-asideChildrenSub [ngForOf]=\"asideChildren.children\">\n                          <li [routerLinkActive]=\"['active']\" >\n                            <a [routerLink]=\"['/', asideItem.state, asideChildren.state, asideChildrenSub.state]\" target=\"{{asideChildrenSub.target ? '_blank' : '_self'}}\">\n                              <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\n                              <span class=\"pcoded-mtext\">{{ asideChildrenSub.name }}</span>\n                              <span *ngFor=\"let asideChildrenSubBadge of asideChildrenSub.badge\" class=\"pcoded-badge label label-{{ asideChildrenSubBadge.type }}\">{{asideChildrenSubBadge.value}}</span>\n                              <span class=\"pcoded-mcaret\"></span>\n                            </a>\n                          </li>\n                        </ng-template>\n                      </ul>\n                    </li>\n                    </ng-template>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n            </div>\n          </div>\n        </nav>\n        <div class=\"pcoded-content\">\n          <div class=\"pcoded-inner-content\">\n            <div class=\"main-body\">\n              <div class=\"page-wrapper\">\n                <app-title></app-title>\n                <app-breadcrumbs></app-breadcrumbs>\n                <div class=\"page-body\">\n                  <router-outlet><spinner></spinner></router-outlet>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_menu_items_menu_items__ = __webpack_require__("../../../../../src/app/shared/menu-items/menu-items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(menuItems) {
        this.menuItems = menuItems;
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.chatToggle = 'out';
        this.chatInnerToggle = 'off';
        this.isScrolled = false;
        this.isCollapsedMobile = 'no-block';
        this.toggleOn = true;
        this.userStatus = [{ value: 'Resident', label: "resident" }, { value: 'Property\ Owner', label: "propertyOwner" }];
        var scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributs(this.windowWidth);
    }
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    AdminLayoutComponent.prototype.onClickedOutside = function (e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    };
    AdminLayoutComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        this.setMenuAttributs(this.windowWidth);
    };
    AdminLayoutComponent.prototype.setMenuAttributs = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'collapsed';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    AdminLayoutComponent.prototype.searchFriendList = function (event) {
        var search = (this.search_friends.nativeElement.value).toLowerCase();
        var search_input;
        var search_parent;
        var friendList = document.querySelectorAll('.userlist-box .media-body .chat-header');
        Array.prototype.forEach.call(friendList, function (elements, index) {
            search_input = (elements.innerHTML).toLowerCase();
            search_parent = (elements.parentNode).parentNode;
            if (search_input.indexOf(search) !== -1) {
                search_parent.classList.add('show');
                search_parent.classList.remove('hide');
            }
            else {
                search_parent.classList.add('hide');
                search_parent.classList.remove('show');
            }
        });
    };
    AdminLayoutComponent.prototype.toggleChat = function () {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
    };
    AdminLayoutComponent.prototype.toggleChatInner = function () {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
    };
    AdminLayoutComponent.prototype.toggleOpened = function () {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
        else {
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
        }
    };
    AdminLayoutComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    AdminLayoutComponent.prototype.onScroll = function (event) {
        this.isScrolled = false;
    };
    return AdminLayoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchFriends'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AdminLayoutComponent.prototype, "search_friends", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toggleButton'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], AdminLayoutComponent.prototype, "toggle_button", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sideMenu'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], AdminLayoutComponent.prototype, "side_menu", void 0);
AdminLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout-admin',
        template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('slideInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    transform: 'translate3d(100%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('in => out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('out => in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('400ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('slideOnOff', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('on', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('off', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    transform: 'translate3d(100%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('on => off', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('off => on', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('400ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('mobileMenuTop', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('no-block, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('yes-block', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    height: __WEBPACK_IMPORTED_MODULE_2__angular_animations__["AUTO_STYLE"],
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('no-block <=> yes-block', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('400ms ease-in-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_menu_items_menu_items__["a" /* MenuItems */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_menu_items_menu_items__["a" /* MenuItems */]) === "function" && _d || Object])
], AdminLayoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/breadcrumbs/breadcrumbs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-active {\r\n    pointer-events: none;\r\n    cursor: default;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/admin/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"page-header-title\">\n    <span *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"><h4 *ngIf=\"last\">{{ breadcrumb.label }}</h4></span>\n  </div>\n  <div class=\"page-header-breadcrumb\">\n    <ul class=\"breadcrumb-title\">\n      <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"'/'\">\n          <i class=\"icofont icofont-home\"></i>\n        </a>\n      </li>\n      <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs\">\n        <a [ngClass]=\"breadcrumb.status === false ? 'not-active': ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        if (route.snapshot.data.breadcrumb != undefined) {
                            var status = true;
                            if (route.snapshot.data.status != undefined) {
                                status = route.snapshot.data.status;
                            }
                            _this.breadcrumbs.push({
                                label: route.snapshot.data.breadcrumb,
                                status: status,
                                url: url
                            });
                            //this.titleService.setTitle( 'Mash Able | ' + route.snapshot.data.breadcrumb );
                        }
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-breadcrumbs',
        template: __webpack_require__("../../../../../src/app/layouts/admin/breadcrumbs/breadcrumbs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/admin/breadcrumbs/breadcrumbs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _c || Object])
], BreadcrumbsComponent);

var _a, _b, _c;
//# sourceMappingURL=breadcrumbs.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleComponent = (function () {
    function TitleComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            var title = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        title = route.snapshot.data.breadcrumb;
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            _this.titleService.setTitle('Variantz | ' + title);
        });
    }
    return TitleComponent;
}());
TitleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-title',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _c || Object])
], TitleComponent);

var _a, _b, _c;
//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    return AuthLayoutComponent;
}());
AuthLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout-auth',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    })
], AuthLayoutComponent);

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchan-x/merchan-x.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/merchan-x/merchan-x.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"col-xs-12\">\n          <div class=\"card card-border-default\">\n            <div class=\"card-header\">\n              <h1 class=\"sub-title\">Marketplace</h1>\n            </div>\n          </div>\n        </div>\n<!-- here will be the marketplace displayed -->\n\n\t\t\t  <div class=\"row card-group\">\n\t\t      <div class=\"col-sm-3\" *ngFor=\"let product of productsList\">\n\t\t        <div class=\"card col-sm-12\">\n\t\t          <div class=\"card card-border-default\">\n\t\t            <div class=\"card-header\">\n\t\t              <div class=\"col-sm-12\">\n\t\t                <h4 class=\"sub-title\">{{product.name}}</h4>\n\t\t              </div>  \n\t\t            </div>\n                <div class=\"card-body\">\n                  <div class=\"col-sm-12\">\n                    <img class=\"card-img-top\" src=\"{{product.imageUrl}}\" alt=\"Card image cap\">\n                  </div> \n                </div>\n\t\t            <div class=\"card-body\">\n\t\t              <div class=\"col-sm-12\">\n\t\t                <a class=\"text\">{{product.description}}</a>\n\t\t              </div> \n\t\t            </div>\n\t\t            <div class=\"card-body\">\n\t\t              <div class=\"col-sm-12\">\n\t\t                <a class=\"text\">{{product.price}}</a>\n\t\t              </div> \n\t\t            </div>\n                <input type=\"text\" placeholder=\"Offer\" name=\"offer\">\n                <button class=\"btn\" (click)=\"buyProduct(product, offer)\">Buy\n                </button>\n\t\t          </div>  \n\t\t        </div>\n\t\t      </div>    \n\t\t    </div>\n\n<!-- here will be the marketplace displayed END-->\n\n        <div class=\"col-xs-12\">\n          <div class=\"card card-border-default\">\n            <div class=\"card-header\">\n              <h1 class=\"sub-title\">Your Items</h1>\n            </div>\n          </div>\n        </div>\n\n<!-- here will be the merchant's own marketplace displayed -->\n\t\t\t  <div class=\"row card-group\">\n\t\t      <div class=\"col-sm-3\" *ngFor=\"let myproduct of allProductsList\">\n\t\t        <div class=\"card col-sm-12\">\n\t\t          <div class=\"card card-border-default\">\n\t\t            <div class=\"card-header\">\n\t\t              <div class=\"col-sm-12\">\n\t\t                <h4 class=\"sub-title\">{{myproduct.name}}</h4>\n\t\t              </div>  \n\t\t            </div>\n                <div class=\"card-body\">\n                  <div class=\"col-sm-12\">\n                    <img class=\"card-img-top\" src=\"{{myproduct.imageUrl}}\" alt=\"Card image cap\">\n                  </div> \n                </div>\n\t\t            <div class=\"card-body\">\n\t\t              <div class=\"col-sm-12\">\n\t\t                <a class=\"text\">{{myproduct.description}}</a>\n\t\t              </div> \n\t\t            </div>\n\t\t            <div class=\"card-body\">\n\t\t              <div class=\"col-sm-12\">\n\t\t                <a class=\"text\">{{myproduct.price}}</a>\n\t\t              </div> \n\t\t            </div>\n\t\t          </div>  \n\t\t        </div>\n\t\t      </div>    \n\t\t    </div>\n<!-- here will be the merchant's own marketplace displayed END-->\n\n<!-- here will be the upload of products -->\n\n\t\t\t      <div class=\"col-xs-12\">\n              <div class=\"card card-border-default\">\n                <div class=\"card-header\">\n                  <h5 class=\"ng-tns-c5-64\">Upload new product</h5>\n                </div>\n                  <form #productObjectForm=\"ngForm\" (ngSubmit)=\"submitProduct(productObjectForm)\">\n                    <div class=\"card-body\">\n                      <div class=\"col-xs-12\">\n                        <h4 class=\"sub-title\">Name</h4>\n                        <input [(ngModel)]=\"productObject.name\" type=\"text\" placeholder=\"Name\" name=\"name\">\n                      </div>\n                    </div>\n                    <div class=\"card-body\">\n                      <div *ngIf=\"productObject\" class=\"progress\" style=\"width:400px\">\n                        <div class=\"progress-bar progress-bar-info progress-bar-striped\"\n                          role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n                          aria-valuemin=\"0\" aria-valuemax=\"100\"\n                          [ngStyle]=\"{width:progress.percentage+'%'}\">\n                          {{progress.percentage}}%\n                        </div>\n                      </div>\n                      <label class=\"btn btn-default\"> \n                        <input type=\"file\"\n                        (change)=\"selectFile($event)\">\n                      </label>\n                      <button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\n                        (click)=\"upload()\">Upload\n                      </button>\n                    </div>   \n                    <div class=\"card-body\">\n                      <div class=\"col-xs-12\">\n                        <h4 class=\"sub-title\">Description</h4>\n                        <textarea [(ngModel)]=\"productObject.description\" rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Details of fault\" name=\"details\"></textarea>\n                      </div>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"col-xs-12\">\n                        <h4 class=\"sub-title\">Price</h4>\n                        <textarea [(ngModel)]=\"productObject.price\" rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Details of fault\" name=\"details\"></textarea>\n                      </div>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"col-xs-12\">\n                        <h4 class=\"sub-title\">Quantity</h4>\n                        <textarea [(ngModel)]=\"productObject.quantity\" rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Details of fault\" name=\"details\"></textarea>\n                      </div>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"col-xs-12\">\n                        <h4 class=\"sub-title\">Contact Number</h4>\n                        <input [(ngModel)]=\"productObject.phoneNumber\" type=\"text\" placeholder=\"87654321\" name=\"phoneNumber\">\n                      </div>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"col-xs-12\">\n                        <h4 class=\"sub-title\">Time</h4>\n                            <div class=\"input-group\">\n                              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"date\" [(ngModel)]=\"productObject.date\" ngbDatepicker #d=\"ngbDatepicker\">\n                              <div class=\"input-group-addon bg-default\" (click)=\"d.toggle()\" >\n                                <span class=\"icofont icofont-ui-calendar\"></span>\n                              </div>\n                          </div>\n                      </div>  \n                    </div> \n                  </form>\n                <div class=\"card-footer\">\n                  <button (click)=submitProduct(productObject)>Submit</button>\n                </div>   \n              </div>\n            </div>\n<!-- here will be the upload of products END-->\n\n"

/***/ }),

/***/ "../../../../../src/app/merchan-x/merchan-x.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchanXComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_quote__ = __webpack_require__("../../../../../src/app/model/quote.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MerchanXComponent = (function () {
    function MerchanXComponent(db, userService, auth) {
        this.db = db;
        this.userService = userService;
        this.auth = auth;
        this.progress = { percentage: 0 };
    }
    MerchanXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userKey = this.auth.authState.uid;
        //just to initialise the reportForm for dual binding 
        this.productObject = {
            "merchantId": this.userKey,
            "description": null,
            "name": null,
            "price": null,
            "quantity": null,
            "phoneNumber": null,
            "date": null
        };
        // get all products 
        this.db.retrieveAllProductsList().subscribe(function (snapshot) {
            console.log("getting all the products");
            _this.allProductsList = snapshot;
        });
        // get only my products
        this.db.retrieveProductsList("merchantId", this.userKey).subscribe(function (snapshot) {
            console.log('let this wrok' + snapshot);
            _this.productsList = snapshot;
        });
    };
    MerchanXComponent.prototype.selectFile = function (event) {
        //check the format of the image, make sure it is the right format
        var imgFile = event.target.files.item(0);
        if (imgFile.type.match('image.*')) {
            this.productObject.image = imgFile;
        }
        else {
            alert('invalid format!');
        }
    };
    MerchanXComponent.prototype.submitProduct = function (formData) {
        console.log(formData);
        //formData.uid = this.auth.authState.uid;
        //this.db.addProduct(formData);
        //const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        //this.productObject = formData;
        this.db.saveImgFileToStorage(this.productObject, this.progress);
        //this.ngOnInit();
    };
    MerchanXComponent.prototype.buyProduct = function (product, price, quantity) {
        console.log(product);
        var quote = new __WEBPACK_IMPORTED_MODULE_1__model_quote__["a" /* Quote */]();
        quote.quote = price;
        quote.merchantKey = product.merchantId;
        quote.customerKey = this.userKey;
        quote.quantity = quantity;
        quote.description = product.description;
        quote.productKey = product.uid;
        this.db.submitQuote(quote);
    };
    MerchanXComponent.prototype.upload = function () {
        console.log("test only");
    };
    return MerchanXComponent;
}());
MerchanXComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-merchan-x',
        template: __webpack_require__("../../../../../src/app/merchan-x/merchan-x.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merchan-x/merchan-x.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], MerchanXComponent);

var _a, _b, _c;
//# sourceMappingURL=merchan-x.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/quote.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quote; });
var Quote = (function () {
    function Quote() {
    }
    return Quote;
}());

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ "../../../../../src/app/nea/nea.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <i class=\"wi wi-barometer\"></i> Your Local Weather Forecast\n</h1>\n<p>Current Position: {{ lat }} / {{ lng }} </p>\n<button (click)=\"getForecast()\">Get Forecast</button>\n<h1>Seven Day Forecast</h1>\n<div *ngIf=\"forecast | async as f\" class=\"columns\">\n    <div *ngFor=\"let day of f.daily.data\" class=\"column\">\n        <i [class]=\"weatherIcon(day.icon)\"></i>\n        <h3>{{ day.time * 1000 | date: 'MMM d'  }}</h3>\n        <p>{{ day.summary }}</p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nea/nea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_weather_service__ = __webpack_require__("../../../../../src/app/services/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NeaComponent = (function () {
    function NeaComponent(weatherService, _dataservice, userService, authService) {
        this.weatherService = weatherService;
        this._dataservice = _dataservice;
        this.userService = userService;
        this.authService = authService;
        this.neaKey = '781CF461BB6606ADEA01E0CAF8B35274FF91C003867CEC19';
    }
    NeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.authService.authState.uid;
        //gets the user id first for future usage
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
        else {
            //default location
            this.lat = 11.40;
            this.lng = 28.19;
        }
    };
    NeaComponent.prototype.getForecast = function () {
        var _this = this;
        this.weatherService.currentForecast(this.lat, this.lng).subscribe(function (snapshot) {
            console.log(snapshot);
            _this.forecast = snapshot;
        });
    };
    /// Helper to make weather icons work
    /// better solution is to map icons to an object 
    NeaComponent.prototype.weatherIcon = function (icon) {
        switch (icon) {
            case 'partly-cloudy-day':
                return 'wi wi-day-cloudy';
            case 'clear-day':
                return 'wi wi-day-sunny';
            case 'partly-cloudy-night':
                return 'wi wi-night-partly-cloudy';
            default:
                return "wi wi-day-sunny";
        }
    };
    return NeaComponent;
}());
NeaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nea',
        template: __webpack_require__("../../../../../src/app/nea/nea.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_weather_service__["a" /* WeatherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], NeaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nea.component.js.map

/***/ }),

/***/ "../../../../../src/app/onboarding/onboarding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.form-control{\nfloat: none;\nwidth: 80%;\nheight: 100%;\npadding: 6px 12px;\nfont-size: 14px;\nline-height: 1.42857143;\ncolor: #555;\nbackground-color: #fff;\nbackground-image: none;\nborder: 1px solid #ccc;\nborder-radius: 4px;\ntransition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;}\n\n.onboard-wrap .registration{\ntext-align: center;}\n\na, a:hover, a:focus{\ntext-decoration: none;\noutline: none;}\n\na:focus, a:hover{\ncolor: #23527c;\ntext-decoration: underline}\n\n*\n{box-sizing: border-box}\n\n:after, :before\n{box-sizing: border-box}\n\n::-moz-selection\n{background: #68dff0;\ncolor: #fff;}\n\n::selection\n{background: #68dff0;\ncolor: #fff;}\n\ndiv{\n  display:block;\n}\n\nmd-4\n{\n  float:left;\n}\n\n\n.col-md-offset-4\n{margin-left: 20%;}\n\n.form-group \n{width: 100%;\nmargin: 10px auto 0;\nbackground: #fff;\nborder-radius: 5px;\n-webkit-border-radius: 5px;}\n\nh2.form-onboard-heading{\nmargin: 0;\npadding: 25px 20px;\ntext-align: center;\nbackground: #48bcb4;\nborder-radius: 5px 5px 0 0;\n-webkit-border-radius: 5px 5px 0 0;\ncolor: #fff;\nfont-size: 20px;\ntext-transform: uppercase;\nfont-weight: 300;}\n\n.login-wrap{\npadding: 0px;}\n\n\n\n.btn-theme\n{\ncolor: #fff;\nbackground-color: #48bcb4;\nborder-color: #48bcb4;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/onboarding/onboarding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-4 col-md-offset-4\">\n    <div class=\"form-group\"> \n    <h2 class=\"form-onboard-heading\">Onboarding</h2>\n    <form #userObjectForm=\"ngForm\" (ngSubmit)=\"submitForm(userObject)\">\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"userObject.name\" [ngModelOptions]=\"{standalone:true}\" type=\"name\" class=\"form-control col-md-6 col-md-offset-4\" id=\"name\"  placeholder=\"Name\">\n        <br>\n        <input [(ngModel)]=\"userObject.email\" [ngModelOptions]=\"{standalone:true}\" type=\"email\" class=\"form-control col-md-6 col-md-offset-4\" id=\"email\"  placeholder=\"Email\">\n        <br>\n       \t<input [(ngModel)]=\"userObject.country\" [ngModelOptions]=\"{standalone:true}\" type=\"country\" class=\"form-control col-md-6 col-md-offset-4\" id=\"country\" placeholder=\"Country\">\n       \t<br>\n       \t<input [(ngModel)]=\"userObject.address\" [ngModelOptions]=\"{standalone:true}\" type=\"address\" class=\"form-control col-md-6 col-md-offset-4\" id=\"address\" placeholder=\"Address\">\n       \t<br>\n       \t<input [(ngModel)]=\"userObject.unit\" [ngModelOptions]=\"{standalone:true}\" type=\"unit\" class=\"form-control col-md-6 col-md-offset-4\" id=\"unit\" placeholder=\"Unit\">\n       \t<br>\n       \t<input [(ngModel)]=\"userObject.phoneNumber\" [ngModelOptions]=\"{standalone:true}\" type=\"phoneNumber\" class=\"form-control col-md-6 col-md-offset-4\" id=\"phoneNumber\" placeholder=\"Phone Number\">\n       \t<br>\n       \t<input [(ngModel)]=\"userObject.resident\" [ngModelOptions]=\"{standalone:true}\" type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"resident\" name=\"resident\"> Resident\n       \t<br>\n       \t<input [(ngModel)]=\"userObject.propertyManager\" [ngModelOptions]=\"{standalone:true}\" type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"propertyManagement\" name=\"propertyManagement\"> Property Manager\n       \t<br>\n        <button class=\"btn btn-theme btn-block\" [disabled]=\"!userObjectForm.form.valid\" (click)=\"completeForm(userObject)\"><i class=\"fa fa-user-circle\"></i> COMPLETE</button>\n      </div>\n  \t</form>\n      <hr>\n      <hr>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/onboarding/onboarding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnboardingComponent = (function () {
    function OnboardingComponent(userService, auth) {
        this.userService = userService;
        this.auth = auth;
    }
    OnboardingComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("this is the load");
        var userkey = this.auth.authState.uid;
        this.userService.getUser(userkey).subscribe(function (snap) {
            _this.userObject = snap;
            _this.model = snap;
            // console.log(this.model.name);
        });
        // this.model=this.userObject;
    };
    OnboardingComponent.prototype.completeForm = function (formData) {
        console.log(formData);
        formData.onBoard = true;
        var userkey = this.auth.authState.uid;
        this.userService.updateUser(formData);
    };
    OnboardingComponent.prototype.submitForm = function (formData) {
        console.log('Submitted');
    };
    return OnboardingComponent;
}());
OnboardingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-onboarding',
        template: __webpack_require__("../../../../../src/app/onboarding/onboarding.component.html"),
        styles: [__webpack_require__("../../../../../src/app/onboarding/onboarding.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], OnboardingComponent);

var _a, _b;
//# sourceMappingURL=onboarding.component.js.map

/***/ }),

/***/ "../../../../../src/app/scroll/scroll.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_io_slimscroll__ = __webpack_require__("../../../../angular-io-slimscroll/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_io_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_io_slimscroll__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScrollModule = (function () {
    function ScrollModule() {
    }
    return ScrollModule;
}());
ScrollModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2_angular_io_slimscroll__["SlimScroll"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2_angular_io_slimscroll__["SlimScroll"]]
    })
], ScrollModule);

//# sourceMappingURL=scroll.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get("/api/variantz")
            .map(function (result) { return _this.result = "boom"; });
    };
    DataService.prototype.getFitbitAccessToken = function (fitbitUrl) {
        var _this = this;
        return this._http.get("/api/getFitbitAccessToken/{$fitbitUrl}")
            .map(function (result) { return _this.result = result; });
    };
    //temp api services
    // exchangeFitbitTokens(fitbitToken: string, clientId: string, clientSecret:string){
    //   const headers = new Headers();
    //   var encodedAuth = btoa(clientId+":"+clientSecret);
    //   headers.append('Content-Type', 'x-www-form-urlencoded');
    //   headers.append('Authorization', `Basic `+ encodedAuth );
    //   var body = "client_id="+clientId+"&grant_type=authorization_code&redirect_uri=http://localhost:4200/api/fitbit/callback&code="+fitbitToken;
    //   console.log(encodedAuth);
    //   console.log(body)
    //   return this._http.post("https://api.fitbit.com/oauth2/token", body).map((response: Response)=>response.json()).catch(this.handleError);
    // }
    DataService.prototype.getFitbitUserId = function (fitbitToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log("getting there", fitbitToken);
        headers.append('Authorization', "Bearer " + fitbitToken);
        this._http.get("https://api.fitbit.com/1/user/-/profile.json").subscribe(function (data) {
            // Read the result field from the JSON response.
            console.log(data);
            return data;
        });
    };
    DataService.prototype.handleError = function () {
        console.log("errororororo");
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/oauth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OAuthService = (function () {
    function OAuthService(windows, http) {
        this.windows = windows;
        this.http = http;
        this.windowHandle = null;
    }
    OAuthService.prototype.doLogin = function () {
        this.windowHandle = this.windows.createWindow('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CKGJ&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fapi%2Ffitbit%2Fcallback&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800', 'OAuth2 Login');
    };
    return OAuthService;
}());
OAuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__window_service__["a" /* WindowService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], OAuthService);

var _a, _b;
//# sourceMappingURL=oauth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase);
var ProductService = (function () {
    function ProductService(db) {
        this.db = db;
        this.basePath = '/products';
        //buy/iffer price to the product to the seller
        //from here on, it is for internal circulation of user data
        this.productObject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](this.product);
        this.currentUser = this.productObject.asObservable();
    }
    ProductService.prototype.getProducts = function () {
        var itemPath = '${this.basePath}';
        this.products = this.db.list(itemPath);
        this.products.subscribe(function (snapshot) {
            console.log('Snapshot type result: ' + snapshot);
        });
        return this.products;
    };
    ProductService.prototype.getProduct = function (uid) {
        var itemPath = this.basePath + "/" + uid;
        this.product = this.db.object(itemPath);
        this.product.subscribe(function (snapshot) {
            console.log('Snapshot type result: ' + snapshot);
        });
        return this.product;
    };
    ProductService.prototype.retrieveAllProductsList = function () {
        this.products = this.db.list(this.basePath);
        this.products.subscribe(function (snapshot) {
            console.log("snap");
        });
        return this.products;
    };
    ProductService.prototype.retrieveProductsList = function (propertyValue, userUid) {
        this.products = this.db.list(this.basePath, {
            query: {
                orderByChild: propertyValue,
                equalTo: userUid
            }
        });
        this.products.subscribe(function (snapshot) {
            console.log("snapshot type result:" + snapshot);
        });
        return this.products;
    };
    ProductService.prototype.updateProduct = function (productObject) {
        var _this = this;
        var itemPath = '${this.basePath}/${uid}';
        this.product.update(productObject).catch(function (error) { return _this.handleError(error); });
        return true;
    };
    ProductService.prototype.addProduct = function (productObject) {
        var items = this.db.list("" + this.basePath);
        items.push(productObject);
    };
    //handle images upload to firebase
    ProductService.prototype.saveImgFileToStorage = function (productObject, progress) {
        var _this = this;
        console.log(productObject);
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child("assets/images/products/" + productObject.name).put(productObject.image);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            //track percentage uploaded
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            console.log(error);
        }, function () {
            //attached the url of image to the object
            productObject.imageUrl = uploadTask.snapshot.downloadURL;
            //save the product object
            _this.addProduct(productObject);
        });
    };
    //handle images upload to firebase END
    //buy/offer price of the product to the seller
    ProductService.prototype.submitQuote = function (quote) {
        var quotes = this.db.list('/quotes');
        quotes.push(quote);
    };
    ProductService.prototype.retrieveQuote = function (productUid) {
        var quote = this.db.list('/quotes', {
            query: {
                orderByChild: 'productKey',
                equalTo: productUid,
                limitToFirst: 1
            }
        }).first();
        return quote;
    };
    // public getCurrentUserObject(){
    //   const itemPath =  `${this.basePath}/${uid}`;
    //   var userObject;
    //   this.user = this.db.object(itemPath);
    //   this.user.subscribe(snap =>{
    //     userObject = snap;
    //   })
    //   return userObject;
    // }
    ProductService.prototype.handleError = function (error) {
        if (error) {
            console.log("there is an error! ", error);
        }
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportService = (function () {
    function ReportService(db) {
        this.db = db;
        this.basePath = '/reports';
        //from here on, it is for internal circulation of user data
        this.reportObject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](this.report);
        this.currentUser = this.reportObject.asObservable();
    }
    ReportService.prototype.getReports = function () {
        var itemPath = "" + this.basePath;
        this.reports = this.db.list(itemPath);
        this.reports.subscribe(function (snapshot) {
            console.log('Snapshot type result: ' + snapshot);
        });
        return this.reports;
    };
    ReportService.prototype.getReport = function (uid) {
        var itemPath = this.basePath + "/" + uid;
        this.report = this.db.object(itemPath);
        this.report.subscribe(function (snapshot) {
            console.log('Snapshot type result: ' + snapshot);
        });
        return this.report;
    };
    ReportService.prototype.retrieveReportsList = function (propertyValue, userUid) {
        this.reports = this.db.list(this.basePath, {
            query: {
                orderByChild: propertyValue,
                equalTo: userUid
            }
        });
        this.reports.subscribe(function (snapshot) {
            console.log("snapshot type result:" + snapshot);
        });
        return this.reports;
    };
    ReportService.prototype.updateReport = function (reportObject) {
        var _this = this;
        var itemPath = '${this.basePath}/${uid}';
        this.report.update(reportObject).catch(function (error) { return _this.handleError(error); });
        return true;
    };
    ReportService.prototype.addReport = function (reportObject) {
        var items = this.db.list("" + this.basePath);
        items.push(reportObject);
    };
    ReportService.prototype.deleteReport = function (uid) {
        var report = this.db.object(this.basePath + "/" + uid);
        report.remove();
    };
    // public getCurrentUserObject(){
    //   const itemPath =  `${this.basePath}/${uid}`;
    //   var userObject;
    //   this.user = this.db.object(itemPath);
    //   this.user.subscribe(snap =>{
    //     userObject = snap;
    //   })
    //   return userObject;
    // }
    ReportService.prototype.handleError = function (error) {
        if (error) {
            console.log("there is an error! ", error);
        }
    };
    return ReportService;
}());
ReportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ReportService);

var _a;
//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(db) {
        this.db = db;
        this.basePath = '/users';
        //from here on, it is for internal circulation of user data
        this.userObject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](this.user);
        this.currentUser = this.userObject.asObservable();
    }
    UserService.prototype.getUser = function (uid) {
        var itemPath = this.basePath + "/" + uid;
        this.user = this.db.object(itemPath);
        this.user.subscribe(function (snapshot) {
            console.log('Snapshot type result: ' + snapshot);
        });
        return this.user;
    };
    UserService.prototype.updateUser = function (userObject) {
        var _this = this;
        var itemPath = '${this.basePath}/${uid}';
        this.user.update(userObject).catch(function (error) { return _this.handleError(error); });
    };
    // public getCurrentUserObject(){
    //   const itemPath =  `${this.basePath}/${uid}`;
    //   var userObject;
    //   this.user = this.db.object(itemPath);
    //   this.user.subscribe(snap =>{
    //     userObject = snap;
    //   })
    //   return userObject;
    // }
    UserService.prototype.handleError = function (error) {
        if (error) {
            console.log("there is an error! ", error);
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = (function () {
    // public ourServerRoute = 
    function WeatherService(http) {
        this.http = http;
        this.ROOT_URL = 'https://api.darksky.net/forecast/3e9c68fe96dbf319f25714c3ce304dd5/';
        this.secondUrl = 'http://api.nea.gov.sg/api/WebAPI/?dataset=2hr_nowcast&keyref=781CF461BB6606ADEA01E0CAF8B35274FF91C003867CEC19';
    }
    WeatherService.prototype.currentForecast = function (lat, lng) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.set('lat', lat.toString());
        params = params.set('lng', lng.toString());
        //return this.http.get(this.ROOT_URL + lat +','+lng)
        return this.http.get("/api/weather");
    };
    return WeatherService;
}());
WeatherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowService = (function () {
    function WindowService() {
    }
    WindowService.prototype.createWindow = function (url, name, width, height, left, top) {
        if (name === void 0) { name = 'Window'; }
        if (width === void 0) { width = 500; }
        if (height === void 0) { height = 600; }
        if (left === void 0) { left = 0; }
        if (top === void 0) { top = 0; }
        if (url == null) {
            return null;
        }
        var options = "width=" + width + ",height=" + height + ",position:center";
        return window.open(url, name, options);
        //check redirect then close window here
    };
    return WindowService;
}());
WindowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WindowService);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 0;
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768) {
                document.querySelector('#pcoded').setAttribute('vertical-nav-type', 'offcanvas');
                var toggled_element = document.querySelector('#mobile-collapse');
                toggled_element.click();
            }
            else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                document.querySelector('#pcoded').setAttribute('vertical-nav-type', 'collapsed');
                /*const toggled_element = <HTMLElement>document.querySelector('#mobile-collapse');
                toggled_element.click();*/
            }
        }
        this.navlinks.forEach(function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.countState = 0;
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    return AccordionDirective;
}());
AccordionDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordion]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object])
], AccordionDirective);

var _a;
//# sourceMappingURL=accordion.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionlink.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    return AccordionAnchorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionToggle]'
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]) === "function" && _a || Object])
], AccordionAnchorDirective);

var _a;
//# sourceMappingURL=accordionanchor.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordion.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            /*for slimscroll on and off*/
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    return AccordionLinkDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.pcoded-trigger'),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "open", null);
AccordionLinkDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionLink]'
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]) === "function" && _a || Object])
], AccordionLinkDirective);

var _a;
//# sourceMappingURL=accordionlink.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionlink.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordion.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/card-animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cardClose; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var cardToggle = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('cardToggle', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('collapsed, void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        height: __WEBPACK_IMPORTED_MODULE_0__angular_animations__["AUTO_STYLE"],
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])('collapsed <=> expanded', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('400ms ease-in-out')
    ])
]);
var cardClose = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])("cardClose", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])("open", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])("closed", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])("open <=> closed", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])("400ms")),
]);
//# sourceMappingURL=card-animation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/card-refresh.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardRefreshDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardRefreshDirective = (function () {
    function CardRefreshDirective(el) {
        this.el = el;
    }
    CardRefreshDirective.prototype.open = function () {
        this.el.nativeElement.classList.add('rotate-refresh');
    };
    CardRefreshDirective.prototype.close = function () {
        this.el.nativeElement.classList.remove('rotate-refresh');
    };
    return CardRefreshDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardRefreshDirective.prototype, "open", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardRefreshDirective.prototype, "close", null);
CardRefreshDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cardRefresh]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], CardRefreshDirective);

var _a;
//# sourceMappingURL=card-refresh.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/card-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardToggleDirective = (function () {
    function CardToggleDirective(el) {
        this.el = el;
    }
    CardToggleDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.el.nativeElement.classList.toggle('icon-up');
    };
    return CardToggleDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CardToggleDirective.prototype, "onToggle", null);
CardToggleDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cardToggleEvent]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], CardToggleDirective);

var _a;
//# sourceMappingURL=card-toggle.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-header-right {\r\n    z-index: 999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\n  <div class=\"card-header\" *ngIf=\"title\">\n    <h5>{{ title }}</h5>\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\n    <span *ngIf=\"classHeader\">\n      <ng-content select=\".code-header\"></ng-content>\n    </span>\n    <div class=\"card-header-right\">\n      <i class=\"icofont icofont-rounded-down\" cardToggleEvent (click)=\"toggleCard($event)\"></i> <!--(click)=\"toggleCard($event)-->\n      <i class=\"icofont icofont-refresh\" cardRefresh></i>\n      <i class=\"icofont icofont-close-circled\" (click)=\"closeCard($event)\"></i>\n    </div>\n  </div>\n\n  <div [@cardToggle]=\"cardToggle\">\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_animation__ = __webpack_require__("../../../../../src/app/shared/card/card-animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent() {
        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.toggleCard = function () {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    };
    CardComponent.prototype.closeCard = function () {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    };
    return CardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardComponent.prototype, "headerContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardComponent.prototype, "blockClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardComponent.prototype, "cardClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CardComponent.prototype, "classHeader", void 0);
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/shared/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/card/card.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__card_animation__["b" /* cardToggle */], __WEBPACK_IMPORTED_MODULE_1__card_animation__["a" /* cardClose */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/elements/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/elements/parent-remove.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentRemoveDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentRemoveDirective = (function () {
    function ParentRemoveDirective(elements) {
        this.elements = elements;
    }
    ParentRemoveDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.alert_parent = (this.elements).nativeElement.parentElement;
        this.alert_parent.remove();
    };
    return ParentRemoveDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParentRemoveDirective.prototype, "onToggle", null);
ParentRemoveDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[parentRemove]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ParentRemoveDirective);

var _a;
//# sourceMappingURL=parent-remove.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/elements/select-option.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectOptionService = SelectOptionService_1 = (function () {
    function SelectOptionService() {
    }
    SelectOptionService.prototype.getCharacters = function () {
        return this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.loadCharacters = function () {
        return this.loadOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.getCharactersWithDisabled = function () {
        var characters = this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    };
    SelectOptionService.prototype.getCountries = function () {
        return this.cloneOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadCountries = function () {
        return this.loadOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadOptions = function (options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (obs) {
            setTimeout(function () {
                obs.next(_this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    };
    SelectOptionService.prototype.cloneOptions = function (options) {
        return options.map(function (option) { return ({ value: option.value, label: option.label }); });
    };
    return SelectOptionService;
}());
SelectOptionService.PLAYER_ONE = [
    { value: '0', label: 'Alabama' },
    { value: '1', label: 'Wyoming' },
    { value: '2', label: 'Coming' },
    { value: '3', label: 'Henry Die' },
    { value: '4', label: 'John Doe' }
];
SelectOptionService.COUNTRIES = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AX', label: 'Åland Islands' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AD', label: 'Andorra' },
    { value: 'AO', label: 'Angola' },
    { value: 'AI', label: 'Anguilla' },
    { value: 'AQ', label: 'Antarctica' },
    { value: 'AG', label: 'Antigua and Barbuda' },
    { value: 'AR', label: 'Argentina' },
    { value: 'AM', label: 'Armenia' },
    { value: 'AW', label: 'Aruba' },
    { value: 'AU', label: 'Australia' },
    { value: 'AT', label: 'Austria' },
    { value: 'AZ', label: 'Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'BB', label: 'Barbados' },
    { value: 'BY', label: 'Belarus' },
    { value: 'BE', label: 'Belgium' },
    { value: 'BZ', label: 'Belize' },
    { value: 'BJ', label: 'Benin' },
    { value: 'BM', label: 'Bermuda' },
    { value: 'BT', label: 'Bhutan' },
    { value: 'BO', label: 'Bolivia, Plurinational State of' },
    { value: 'BA', label: 'Bosnia and Herzegovina' },
    { value: 'BW', label: 'Botswana' },
    { value: 'BV', label: 'Bouvet Island' },
    { value: 'BR', label: 'Brazil' },
    { value: 'IO', label: 'British Indian Ocean Territory' },
    { value: 'BN', label: 'Brunei Darussalam' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'BF', label: 'Burkina Faso' },
    { value: 'BI', label: 'Burundi' },
    { value: 'KH', label: 'Cambodia' },
    { value: 'CM', label: 'Cameroon' },
    { value: 'CA', label: 'Canada' },
    { value: 'CV', label: 'Cape Verde' },
    { value: 'KY', label: 'Cayman Islands' },
    { value: 'CF', label: 'Central African Republic' },
    { value: 'TD', label: 'Chad' },
    { value: 'CL', label: 'Chile' },
    { value: 'CN', label: 'China' },
    { value: 'CX', label: 'Christmas Island' },
    { value: 'CC', label: 'Cocos (Keeling) Islands' },
    { value: 'CO', label: 'Colombia' },
    { value: 'KM', label: 'Comoros' },
    { value: 'CG', label: 'Congo' },
    { value: 'CD', label: 'Congo, the Democratic Republic of the' },
    { value: 'CK', label: 'Cook Islands' },
    { value: 'CR', label: 'Costa Rica' },
    { value: 'CI', label: 'Côte d\'Ivoire' },
    { value: 'HR', label: 'Croatia' },
    { value: 'CU', label: 'Cuba' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'DM', label: 'Dominica' },
    { value: 'DO', label: 'Dominican Republic' },
    { value: 'EC', label: 'Ecuador' },
    { value: 'EG', label: 'Egypt' },
    { value: 'SV', label: 'El Salvador' },
    { value: 'GQ', label: 'Equatorial Guinea' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'FK', label: 'Falkland Islands (Malvinas)' },
    { value: 'FO', label: 'Faroe Islands' },
    { value: 'FJ', label: 'Fiji' },
    { value: 'FI', label: 'Finland' },
    { value: 'FR', label: 'France' },
    { value: 'GF', label: 'French Guiana' },
    { value: 'PF', label: 'French Polynesia' },
    { value: 'TF', label: 'French Southern Territories' },
    { value: 'GA', label: 'Gabon' },
    { value: 'GM', label: 'Gambia' },
    { value: 'GE', label: 'Georgia' },
    { value: 'DE', label: 'Germany' },
    { value: 'GH', label: 'Ghana' },
    { value: 'GI', label: 'Gibraltar' },
    { value: 'GR', label: 'Greece' },
    { value: 'GL', label: 'Greenland' },
    { value: 'GD', label: 'Grenada' },
    { value: 'GP', label: 'Guadeloupe' },
    { value: 'GU', label: 'Guam' },
    { value: 'GT', label: 'Guatemala' },
    { value: 'GG', label: 'Guernsey' },
    { value: 'GN', label: 'Guinea' },
    { value: 'GW', label: 'Guinea-Bissau' },
    { value: 'GY', label: 'Guyana' },
    { value: 'HT', label: 'Haiti' },
    { value: 'HM', label: 'Heard Island and McDonald Islands' },
    { value: 'VA', label: 'Holy See (Vatican City State)' },
    { value: 'HN', label: 'Honduras' },
    { value: 'HK', label: 'Hong Kong' },
    { value: 'HU', label: 'Hungary' },
    { value: 'IS', label: 'Iceland' },
    { value: 'IN', label: 'India' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'IR', label: 'Iran, Islamic Republic of' },
    { value: 'IQ', label: 'Iraq' },
    { value: 'IE', label: 'Ireland' },
    { value: 'IM', label: 'Isle of Man' },
    { value: 'IL', label: 'Israel' },
    { value: 'IT', label: 'Italy' },
    { value: 'JM', label: 'Jamaica' },
    { value: 'JP', label: 'Japan' },
    { value: 'JE', label: 'Jersey' },
    { value: 'JO', label: 'Jordan' },
    { value: 'KZ', label: 'Kazakhstan' },
    { value: 'KE', label: 'Kenya' },
    { value: 'KI', label: 'Kiribati' },
    { value: 'KP', label: 'Korea, Democratic People\'s Republic of' },
    { value: 'KR', label: 'Korea, Republic of' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'KG', label: 'Kyrgyzstan' },
    { value: 'LA', label: 'Lao People\'s Democratic Republic' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LB', label: 'Lebanon' },
    { value: 'LS', label: 'Lesotho' },
    { value: 'LR', label: 'Liberia' },
    { value: 'LY', label: 'Libyan Arab Jamahiriya' },
    { value: 'LI', label: 'Liechtenstein' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'MO', label: 'Macao' },
    { value: 'MK', label: 'Macedonia, the former Yugoslav Republic of' },
    { value: 'MG', label: 'Madagascar' },
    { value: 'MW', label: 'Malawi' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'MV', label: 'Maldives' },
    { value: 'ML', label: 'Mali' },
    { value: 'MT', label: 'Malta' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MQ', label: 'Martinique' },
    { value: 'MR', label: 'Mauritania' },
    { value: 'MU', label: 'Mauritius' },
    { value: 'YT', label: 'Mayotte' },
    { value: 'MX', label: 'Mexico' },
    { value: 'FM', label: 'Micronesia, Federated States of' },
    { value: 'MD', label: 'Moldova, Republic of' },
    { value: 'MC', label: 'Monaco' },
    { value: 'MN', label: 'Mongolia' },
    { value: 'ME', label: 'Montenegro' },
    { value: 'MS', label: 'Montserrat' },
    { value: 'MA', label: 'Morocco' },
    { value: 'MZ', label: 'Mozambique' },
    { value: 'MM', label: 'Myanmar' },
    { value: 'NA', label: 'Namibia' },
    { value: 'NR', label: 'Nauru' },
    { value: 'NP', label: 'Nepal' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'AN', label: 'Netherlands Antilles' },
    { value: 'NC', label: 'New Caledonia' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'NI', label: 'Nicaragua' },
    { value: 'NE', label: 'Niger' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'NU', label: 'Niue' },
    { value: 'NF', label: 'Norfolk Island' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'NO', label: 'Norway' },
    { value: 'OM', label: 'Oman' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'PW', label: 'Palau' },
    { value: 'PS', label: 'Palestinian Territory, Occupied' },
    { value: 'PA', label: 'Panama' },
    { value: 'PG', label: 'Papua New Guinea' },
    { value: 'PY', label: 'Paraguay' },
    { value: 'PE', label: 'Peru' },
    { value: 'PH', label: 'Philippines' },
    { value: 'PN', label: 'Pitcairn' },
    { value: 'PL', label: 'Poland' },
    { value: 'PT', label: 'Portugal' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'QA', label: 'Qatar' },
    { value: 'RE', label: 'R&eacute;union' },
    { value: 'RO', label: 'Romania' },
    { value: 'RU', label: 'Russian Federation' },
    { value: 'RW', label: 'Rwanda' },
    { value: 'BL', label: 'Saint Barth&eacute;lemy' },
    { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
    { value: 'KN', label: 'Saint Kitts and Nevis' },
    { value: 'LC', label: 'Saint Lucia' },
    { value: 'MF', label: 'Saint Martin (French part)' },
    { value: 'PM', label: 'Saint Pierre and Miquelon' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines' },
    { value: 'WS', label: 'Samoa' },
    { value: 'SM', label: 'San Marino' },
    { value: 'ST', label: 'Sao Tome and Principe' },
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'SN', label: 'Senegal' },
    { value: 'RS', label: 'Serbia' },
    { value: 'SC', label: 'Seychelles' },
    { value: 'SL', label: 'Sierra Leone' },
    { value: 'SG', label: 'Singapore' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'SB', label: 'Solomon Islands' },
    { value: 'SO', label: 'Somalia' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
    { value: 'ES', label: 'Spain' },
    { value: 'LK', label: 'Sri Lanka' },
    { value: 'SD', label: 'Sudan' },
    { value: 'SR', label: 'Suriname' },
    { value: 'SJ', label: 'Svalbard and Jan Mayen' },
    { value: 'SZ', label: 'Swaziland' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'SY', label: 'Syrian Arab Republic' },
    { value: 'TW', label: 'Taiwan, Province of China' },
    { value: 'TJ', label: 'Tajikistan' },
    { value: 'TZ', label: 'Tanzania, United Republic of' },
    { value: 'TH', label: 'Thailand' },
    { value: 'TL', label: 'Timor-Leste' },
    { value: 'TG', label: 'Togo' },
    { value: 'TK', label: 'Tokelau' },
    { value: 'TO', label: 'Tonga' },
    { value: 'TT', label: 'Trinidad and Tobago' },
    { value: 'TN', label: 'Tunisia' },
    { value: 'TR', label: 'Turkey' },
    { value: 'TM', label: 'Turkmenistan' },
    { value: 'TC', label: 'Turks and Caicos Islands' },
    { value: 'TV', label: 'Tuvalu' },
    { value: 'UG', label: 'Uganda' },
    { value: 'UA', label: 'Ukraine' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'US', label: 'United States' },
    { value: 'UM', label: 'United States Minor Outlying Islands' },
    { value: 'UY', label: 'Uruguay' },
    { value: 'UZ', label: 'Uzbekistan' },
    { value: 'VU', label: 'Vanuatu' },
    { value: 'VE', label: 'Venezuela, Bolivarian Republic of' },
    { value: 'VN', label: 'Viet Nam' },
    { value: 'VG', label: 'Virgin Islands, British' },
    { value: 'VI', label: 'Virgin Islands, U.S.' },
    { value: 'WF', label: 'Wallis and Futuna' },
    { value: 'EH', label: 'Western Sahara' },
    { value: 'YE', label: 'Yemen' },
    { value: 'ZM', label: 'Zambia' },
    { value: 'ZW', label: 'Zimbabwe' }
];
SelectOptionService = SelectOptionService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SelectOptionService);

var SelectOptionService_1;
//# sourceMappingURL=select-option.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("../../../../screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    return ToggleFullscreenDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToggleFullscreenDirective.prototype, "onClick", null);
ToggleFullscreenDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appToggleFullscreen]'
    })
], ToggleFullscreenDirective);

//# sourceMappingURL=toggle-fullscreen.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/menu-items/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        label: 'Navigation',
        main: [
            {
                state: 'dashboard',
                name: 'Dashboard',
                type: 'link',
                icon: 'ti-home'
            },
            {
                state: 'widget',
                name: 'Widget',
                type: 'link',
                icon: 'ti-view-grid',
                badge: [
                    {
                        type: 'danger',
                        value: '100+'
                    }
                ]
            }
        ],
    },
    {
        label: 'Main Menu',
        main: [
            {
                state: 'basic',
                name: 'Estate Services',
                type: 'sub',
                icon: 'ti-crown',
                children: [
                    {
                        state: 'maintenance',
                        name: 'Maintenance'
                    },
                    {
                        state: 'appliance',
                        name: 'Appliance'
                    },
                    {
                        state: 'moving',
                        name: 'Moving'
                    }
                ]
            },
            {
                state: 'estate-facilities',
                name: 'Estate Facilities',
                type: 'link',
                icon: 'ti-crown'
            },
            {
                state: 'merchanX',
                name: 'MerchanX',
                type: 'link',
                icon: 'ti-crown'
            },
            {
                state: 'fitbit',
                name: 'Fitbit',
                type: 'link',
                icon: 'ti-crown'
            },
            {
                state: "basic",
                name: "Community",
                type: "sub",
                icon: "ti-announcement",
                children: [
                    {
                        state: "announcement",
                        name: "Announcement",
                        type: "link"
                    }
                ]
            },
            {
                state: "basic",
                name: "Ultilities",
                type: "sub",
                icon: "ti-calendar",
                children: [
                    {
                        state: "event-calendar",
                        name: "Event calendar"
                    }
                ]
            },
            {
                state: 'file-upload',
                name: 'File Upload',
                type: 'link',
                icon: 'ti-cloud-up'
            },
            {
                state: 'weather',
                name: 'Weather',
                type: 'link',
                icon: 'ti-sun'
            }
        ]
    }
    // {
    //     state: 'basic',
    //     name: 'Basic Components',
    //     type: 'sub',
    //     icon: 'ti-layout-grid2-alt',
    //     children: [
    //         {
    //             state: 'alert',
    //             name: 'Alert'
    //         },
    //         {
    //             state: 'breadcrumb',
    //             name: 'Breadcrumbs'
    //         },
    //         {
    //             state: 'button',
    //             name: 'Button'
    //         },
    //         {
    //             state: 'accordion',
    //             name: 'Accordion'
    //         },
    //         {
    //             state: 'generic-class',
    //             name: 'Generic Class'
    //         },
    //         {
    //             state: 'tabs',
    //             name: 'Tabs'
    //         },
    //         {
    //             state: 'label-badge',
    //             name: 'Label Badge'
    //         },
    //         {
    //             state: 'typography',
    //             name: 'Typography'
    //         },
    //         {
    //             state: 'other',
    //             name: 'Other'
    //         },
    //     ]
    // },
    // {
    //     state: 'advance',
    //     name: 'Advance Components',
    //     type: 'sub',
    //     icon: 'ti-crown',
    //     children: [
    //         {
    //             state: 'modal',
    //             name: 'Modal'
    //         },
    //         {
    //             state: 'notifications',
    //             name: 'Notifications'
    //         },
    //         {
    //             state: 'notify',
    //             name: 'PNOTIFY',
    //             badge: [
    //                 {
    //                     type: 'info',
    //                     value: 'New'
    //                 }
    //             ]
    //         },
    //     ]
    // },
    //         {
    //             state: 'animations',
    //             name: 'Animations',
    //             type: 'link',
    //             icon: 'ti-reload rotate-refresh'
    //         }
    //     ]
    // },
    // {
    //     label: 'Forms',
    //     main: [
    //         {
    //             state: 'forms',
    //             name: 'Form Components',
    //             type: 'sub',
    //             icon: 'ti-layers',
    //             children: [
    //                 {
    //                     state: 'basic-elements',
    //                     name: 'Form Components'
    //                 }, {
    //                     state: 'add-on',
    //                     name: 'Form-Elements-Add-On'
    //                 }, {
    //                     state: 'advance-elements',
    //                     name: 'Form-Elements-Advance'
    //                 }, {
    //                     state: 'form-validation',
    //                     name: 'Form Validation'
    //                 }
    //             ]
    //         }, {
    //             state: 'picker',
    //             main_state: 'forms',
    //             name: 'Form Picker',
    //             type: 'link',
    //             icon: 'ti-pencil-alt',
    //             badge: [
    //                 {
    //                     type: 'warning',
    //                     value: 'New'
    //                 }
    //             ]
    //         }, {
    //             state: 'select',
    //             main_state: 'forms',
    //             name: 'Form Select',
    //             type: 'link',
    //             icon: 'ti-shortcode'
    //         }, {
    //             state: 'masking',
    //             main_state: 'forms',
    //             name: 'Form Masking',
    //             type: 'link',
    //             icon: 'ti-write'
    //         }
    //     ]
    // },
    // {
    //     label: 'Tables',
    //     main: [
    //         {
    //             state: 'bootstrap-table',
    //             name: 'Bootstrap Table',
    //             type: 'sub',
    //             icon: 'ti-receipt',
    //             children: [
    //                 {
    //                     state: 'basic',
    //                     name: 'Basic Table'
    //                 }, {
    //                     state: 'sizing',
    //                     name: 'Sizing Table'
    //                 }, {
    //                     state: 'border',
    //                     name: 'Border Table'
    //                 }, {
    //                     state: 'styling',
    //                     name: 'Styling Table'
    //                 }
    //             ]
    //         },
    //         {
    //             state: 'data-table',
    //             name: 'Data Table',
    //             type: 'sub',
    //             icon: 'ti-widgetized',
    //             children: [
    //                 {
    //                     state: 'basic',
    //                     name: 'Basic Table'
    //                 }, {
    //                     state: 'editable',
    //                     name: 'Editable'
    //                 }, {
    //                     state: 'row-details',
    //                     name: 'Row Details Table'
    //                 }, {
    //                     state: 'paging',
    //                     name: 'Paging Table'
    //                 }, {
    //                     state: 'selection',
    //                     name: 'Selection Table'
    //                 }, {
    //                     state: 'other',
    //                     name: 'Other Table'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Chart And Map',
    //     main: [
    //         {
    //             state: 'charts',
    //             name: 'Charts',
    //             type: 'sub',
    //             icon: 'ti-bar-chart-alt',
    //             children: [
    //                 {
    //                     state: 'google',
    //                     name: 'Google'
    //                 }, {
    //                     state: 'echart',
    //                     name: 'E-Chart'
    //                 }, {
    //                     state: 'chart-js',
    //                     name: 'ChartJS'
    //                 }, {
    //                     state: 'list-chart',
    //                     name: 'Chartist'
    //                 }, {
    //                     state: 'knob',
    //                     name: 'Knob'
    //                 }, {
    //                     state: 'morris-js',
    //                     name: 'MorrisJS'
    //                 }, {
    //                     state: 'nvd3',
    //                     name: 'NVD3'
    //                 }, {
    //                     state: 'peity',
    //                     name: 'Peity'
    //                 }, {
    //                     state: 'radial',
    //                     name: 'Radial'
    //                 }, {
    //                     state: 'sparklines',
    //                     name: 'Sparklines'
    //                 }, {
    //                     state: 'c3-js',
    //                     name: 'C3 JS'
    //                 }
    //             ]
    //         },
    //         {
    //             state: 'map',
    //             name: 'Maps',
    //             type: 'sub',
    //             icon: 'ti-map-alt',
    //             children: [
    //                 {
    //                     state: 'google',
    //                     name: 'Google'
    //                 }, {
    //                     state: 'vector',
    //                     name: 'Vector'
    //                 }
    //             ]
    //         },
    //         {
    //             state: 'landing',
    //             external: 'http://html.codedthemes.com/mash-able/dark/landingpage/index.html',
    //             name: 'Landing Page',
    //             type: 'external',
    //             icon: 'ti-mobile',
    //             target: true
    //         }
    //     ]
    // },
    // {
    //     label: 'Pages',
    //     main: [
    //         {
    //             state: 'authentication',
    //             name: 'Authentication',
    //             type: 'sub',
    //             icon: 'ti-id-badge',
    //             children: [
    //                 {
    //                     state: 'login',
    //                     type: 'sub',
    //                     name: 'Login Pages',
    //                     children: [
    //                         {
    //                             state: 'with-bg-image',
    //                             name: 'With BG Image',
    //                             target: true
    //                         }, {
    //                             state: 'with-header-footer',
    //                             name: 'With Header Footer',
    //                             target: true
    //                         }, {
    //                             state: 'with-social',
    //                             name: 'With Social Icon',
    //                             target: true
    //                         }, {
    //                             state: 'with-social-header-footer',
    //                             name: 'Social With Header Footer',
    //                             target: true
    //                         }
    //                     ]
    //                 }, {
    //                     state: 'registration',
    //                     type: 'sub',
    //                     name: 'Registration Pages',
    //                     children: [
    //                         {
    //                             state: 'with-bg-image',
    //                             name: 'With BG Image',
    //                             target: true
    //                         }, {
    //                             state: 'with-header-footer',
    //                             name: 'With Header Footer',
    //                             target: true
    //                         }, {
    //                             state: 'with-social',
    //                             name: 'With Social Icon',
    //                             target: true
    //                         }, {
    //                             state: 'with-social-header-footer',
    //                             name: 'Social With Header Footer',
    //                             target: true
    //                         }, {
    //                             state: 'multi-step',
    //                             name: 'Multi Step',
    //                             target: true
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     state: 'forgot',
    //                     name: 'Forgot Password',
    //                     target: true
    //                 },
    //                 {
    //                     state: 'lock-screen',
    //                     name: 'Lock Screen',
    //                     target: true
    //                 },
    //             ]
    //         }, {
    //             state: 'maintenance',
    //             name: 'Maintenance',
    //             type: 'sub',
    //             icon: 'ti-settings',
    //             children: [
    //                 {
    //                     state: 'error',
    //                     name: 'Error'
    //                 },
    //                 {
    //                     state: 'coming-soon',
    //                     name: 'Coming Soon'
    //                 },
    //                 {
    //                     state: 'offline-ui',
    //                     name: 'Offline UI',
    //                     target: true
    //                 }
    //             ]
    //         }, {
    //             state: 'user',
    //             name: 'User Profile',
    //             type: 'sub',
    //             icon: 'ti-user',
    //             children: [
    //                 {
    //                     state: 'profile',
    //                     name: 'User Profile'
    //                 }, {
    //                     state: 'card',
    //                     name: 'User Card'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'App',
    //     main: [
    //         {
    //             state: 'crm-contact',
    //             name: 'CRM Contact',
    //             type: 'link',
    //             icon: 'ti-layout-list-thumb'
    //         }, {
    //             state: 'task',
    //             name: 'Task',
    //             type: 'sub',
    //             icon: 'ti-check-box',
    //             children: [
    //                 {
    //                     state: 'list',
    //                     name: 'Task List'
    //                 }, {
    //                     state: 'board',
    //                     name: 'Task Board'
    //                 }, {
    //                     state: 'details',
    //                     name: 'Task Details'
    //                 }, {
    //                     state: 'issue',
    //                     name: 'Issue List'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Extension',
    //     main: [
    //         {
    //             state: 'editor',
    //             name: 'Editor',
    //             type: 'sub',
    //             icon: 'ti-pencil-alt',
    //             children: [
    //                 {
    //                     state: 'froala-edit',
    //                     name: 'Froala WYSIWYG'
    //                 }, {
    //                     state: 'quill-edit',
    //                     name: 'Quill'
    //                 }
    //             ]
    //         }, {
    //             state: 'invoice',
    //             name: 'Invoice',
    //             type: 'sub',
    //             icon: 'ti-layout-media-right',
    //             children: [
    //                 {
    //                     state: 'basic',
    //                     name: 'Invoice'
    //                 }, {
    //                     state: 'summary',
    //                     name: 'Invoice Summary'
    //                 }, {
    //                     state: 'list',
    //                     name: 'Invoice List'
    //                 }
    //             ]
    //         }, {
    //             state: 'file-upload',
    //             name: 'File Upload',
    //             type: 'link',
    //             icon: 'ti-cloud-up'
    //         }, {
    //             state: 'change-log',
    //             name: 'Change Log',
    //             type: 'link',
    //             icon: 'ti-list',
    //             badge: [
    //                 {
    //                     type: 'warning',
    //                     value: '1.0'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Other',
    //     main: [
    //         {
    //             state: '',
    //             name: 'Menu Levels',
    //             type: 'sub',
    //             icon: 'ti-direction-alt',
    //             children: [
    //                 {
    //                     state: '',
    //                     name: 'Menu Level 2.1',
    //                     target: true
    //                 }, {
    //                     state: '',
    //                     name: 'Menu Level 2.2',
    //                     type: 'sub',
    //                     children: [
    //                         {
    //                             state: '',
    //                             name: 'Menu Level 2.2.1',
    //                             target: true
    //                         },
    //                         {
    //                             state: '',
    //                             name: 'Menu Level 2.2.2',
    //                             target: true
    //                         }
    //                     ]
    //                 }, {
    //                     state: '',
    //                     name: 'Menu Level 2.3',
    //                     target: true
    //                 }, {
    //                     state: '',
    //                     name: 'Menu Level 2.4',
    //                     type: 'sub',
    //                     children: [
    //                         {
    //                             state: '',
    //                             name: 'Menu Level 2.4.1',
    //                             target: true
    //                         },
    //                         {
    //                             state: '',
    //                             name: 'Menu Level 2.4.2',
    //                             target: true
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }, {
    //             state: 'simple-page',
    //             name: 'Simple Page',
    //             type: 'link',
    //             icon: 'ti-layout-sidebar-left'
    //         }
    //     ]
    // }, {
    //     label: 'Support',
    //     main: [
    //         {
    //             state: 'documentation',
    //             name: 'Documentation',
    //             external: 'http://html.codedthemes.com/mash-able/doc/',
    //             type: 'external',
    //             icon: 'ti-file',
    //             target: true
    //         }, {
    //             state: 'submit-issue',
    //             external: 'https://codedthemes.com/submit-ticket/',
    //             name: 'Submit Issue',
    //             type: 'external',
    //             icon: 'ti-layout-list-post',
    //             target: true
    //         }
    //     ]
    // }
];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    return MenuItems;
}());
MenuItems = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuItems);

//# sourceMappingURL=menu-items.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal-animation/modal-animation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    top: 21px;\r\n    right: 16px;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n}\r\n\r\n/* General styles for the modal */\r\n\r\n/*\r\nStyles for the html/body for special modal where we want 3d effects\r\nNote that we need a container wrapping all content on the page for the\r\nperspective effects (not including the modals and the overlay).\r\n*/\r\n.md-perspective,\r\n.md-perspective body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-perspective body  {\r\n    background: #222;\r\n    -webkit-perspective: 600px;\r\n    perspective: 600px;\r\n}\r\n\r\n.container {\r\n    min-height: 100%;\r\n}\r\n\r\n.md-modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 50%;\r\n    max-width: 630px;\r\n    min-width: 320px;\r\n    height: auto;\r\n    z-index: 2000;\r\n    visibility: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.md-show {\r\n    visibility: visible;\r\n}\r\n\r\n.md-overlay {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1100;\r\n    opacity: 0;\r\n    background: rgba(55, 58, 60, 0.65);\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show ~ .md-overlay {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n/* Content styles */\r\n.md-content {\r\n    color: #666666;\r\n    background: #fff;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.md-content h3 {\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 0.4em;\r\n    text-align: center;\r\n    font-size: 2.4em;\r\n    font-weight: 300;\r\n    opacity: 0.8;\r\n    background: rgba(0, 115, 170, 0.93);\r\n    border-radius: 3px 3px 0 0;\r\n}\r\n\r\n.md-content > div {\r\n    padding: 15px 40px 30px;\r\n    margin: 0;\r\n    font-weight: 300;\r\n    font-size: 1.15em;\r\n}\r\n\r\n.md-content > div p {\r\n    margin: 0;\r\n    padding: 10px 0;\r\n}\r\n\r\n.md-content > div ul {\r\n    margin: 0;\r\n    padding: 0 0 30px 20px;\r\n}\r\n\r\n.md-content > div ul li {\r\n    padding: 5px 0;\r\n}\r\n\r\n.md-content button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-size: 0.8em;\r\n}\r\n\r\n/* Individual modal styles with animations/transitions */\r\n\r\n/* Effect 1: Fade in and scale up */\r\n.md-effect-1 .md-content {\r\n    -webkit-transform: scale(0.7);\r\n    transform: scale(0.7);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-1 .md-content {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 2: Slide from the right */\r\n.md-effect-2 .md-content {\r\n    -webkit-transform: translateX(20%);\r\n    transform: translateX(20%);\r\n    opacity: 0;\r\n    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\r\n}\r\n\r\n.md-show.md-effect-2 .md-content {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 3: Slide from the bottom */\r\n.md-effect-3 .md-content {\r\n    -webkit-transform: translateY(20%);\r\n    transform: translateY(20%);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-3 .md-content {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 4: Newspaper */\r\n.md-effect-4 .md-content {\r\n    -webkit-transform: scale(0) rotate(720deg);\r\n    transform: scale(0) rotate(720deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-4 ~ .md-overlay,\r\n.md-effect-4 .md-content {\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-4 .md-content {\r\n    -webkit-transform: scale(1) rotate(0deg);\r\n    transform: scale(1) rotate(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 5: fall */\r\n.md-effect-5.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-5 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: translateZ(600px) rotateX(20deg);\r\n    transform: translateZ(600px) rotateX(20deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-5 .md-content {\r\n    transition: all 0.3s ease-in;\r\n    -webkit-transform: translateZ(0px) rotateX(0deg);\r\n    transform: translateZ(0px) rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 6: side fall */\r\n.md-effect-6.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-6 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: translate(30%) translateZ(600px) rotate(10deg);\r\n    transform: translate(30%) translateZ(600px) rotate(10deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-6 .md-content {\r\n    transition: all 0.3s ease-in;\r\n    -webkit-transform: translate(0%) translateZ(0) rotate(0deg);\r\n    transform: translate(0%) translateZ(0) rotate(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 7:  slide and stick to top */\r\n.md-effect-7{\r\n    top: 0;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.md-effect-7 .md-content {\r\n    -webkit-transform: translateY(-200%);\r\n    transform: translateY(-200%);\r\n    transition: all .3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-7 .md-content {\r\n    -webkit-transform: translateY(0%);\r\n    transform: translateY(0%);\r\n    border-radius: 0 0 3px 3px;\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 8: 3D flip horizontal */\r\n.md-effect-8.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-8 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: rotateY(-70deg);\r\n    transform: rotateY(-70deg);\r\n    transition: all 0.3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-8 .md-content {\r\n    -webkit-transform: rotateY(0deg);\r\n    transform: rotateY(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 9: 3D flip vertical */\r\n.md-effect-9.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-9 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: rotateX(-70deg);\r\n    transform: rotateX(-70deg);\r\n    transition: all 0.3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-9 .md-content {\r\n    -webkit-transform: rotateX(0deg);\r\n    transform: rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 10: 3D sign */\r\n.md-effect-10.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-10 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: rotateX(-60deg);\r\n    transform: rotateX(-60deg);\r\n    -webkit-transform-origin: 50% 0;\r\n    transform-origin: 50% 0;\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-10 .md-content {\r\n    -webkit-transform: rotateX(0deg);\r\n    transform: rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 11: Super scaled */\r\n.md-effect-11 .md-content {\r\n    -webkit-transform: scale(2);\r\n    transform: scale(2);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-11 .md-content {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 12:  Just me */\r\n.md-effect-12 .md-content {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-12 ~ .md-overlay {\r\n    background: #0073aa;\r\n}\r\n\r\n.md-effect-12 .md-content h3,\r\n.md-effect-12 .md-content {\r\n    color: #fff;\r\n    background: transparent;\r\n}\r\n\r\n.md-show.md-effect-12 .md-content {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: 1;\r\n    border: 1px solid #fff;\r\n}\r\n\r\n/* Effect 13: 3D slit */\r\n.md-effect-13.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-13 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: translateZ(-3000px) rotateY(90deg);\r\n    transform: translateZ(-3000px) rotateY(90deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-13 .md-content {\r\n    -webkit-animation: slit .7s forwards ease-out;\r\n    animation: slit .7s forwards ease-out;\r\n}\r\n\r\n@-webkit-keyframes slit {\r\n    50% { -webkit-transform: translateZ(-250px) rotateY(89deg); opacity: .5; -webkit-animation-timing-function: ease-out;}\r\n    100% { -webkit-transform: translateZ(0) rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n@keyframes slit {\r\n    50% { -webkit-transform: translateZ(-250px) rotateY(89deg); transform: translateZ(-250px) rotateY(89deg); opacity: 1; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in;}\r\n    100% { -webkit-transform: translateZ(0) rotateY(0deg); transform: translateZ(0) rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n/* Effect 14:  3D Rotate from bottom */\r\n.md-effect-14.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-14 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: translateY(100%) rotateX(90deg);\r\n    transform: translateY(100%) rotateX(90deg);\r\n    -webkit-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n    opacity: 0;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n.md-show.md-effect-14 .md-content {\r\n    -webkit-transform: translateY(0%) rotateX(0deg);\r\n    transform: translateY(0%) rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 15:  3D Rotate in from left */\r\n.md-effect-15.md-modal {\r\n    -webkit-perspective: 1300px;\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-15 .md-content {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform: translateZ(100px) translateX(-30%) rotateY(90deg);\r\n    transform: translateZ(100px) translateX(-30%) rotateY(90deg);\r\n    -webkit-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-15 .md-content {\r\n    -webkit-transform: translateZ(0px) translateX(0%) rotateY(0deg);\r\n    transform: translateZ(0px) translateX(0%) rotateY(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 16:  Blur */\r\n.md-show.md-effect-16 ~ .md-overlay {\r\n    background: rgba(180,46,32,0.5);\r\n}\r\n\r\n.md-show.md-effect-16 ~ .container {\r\n    -webkit-filter: blur(3px);\r\n    -moz-filter: blur(3px);\r\n    filter: blur(3px);\r\n}\r\n\r\n.md-effect-16 .md-content {\r\n    -webkit-transform: translateY(-5%);\r\n    transform: translateY(-5%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-16 ~ .container,\r\n.md-effect-16 .md-content {\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-16 .md-content {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 17:  Slide in from bottom with perspective on container */\r\n.md-show.md-effect-17 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n    transition: -webkit-transform 0.3s;\r\n    transition: transform 0.3s;\r\n    transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.md-show.md-effect-17 ~ .container,\r\n.md-show.md-effect-17 ~ .md-overlay  {\r\n    -webkit-transform: rotateX(-2deg);\r\n    transform: rotateX(-2deg);\r\n    -webkit-transform-origin: 50% 0%;\r\n    transform-origin: 50% 0%;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.md-effect-17 .md-content {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(200%);\r\n    transform: translateY(200%);\r\n}\r\n\r\n.md-show.md-effect-17 .md-content {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n    transition: all 0.3s 0.2s;\r\n}\r\n\r\n/* Effect 18:  Slide from right with perspective on container */\r\n.md-show.md-effect-18 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-show.md-effect-18 ~ .md-overlay {\r\n    background: rgba(143,27,15,0.8);\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-18 ~ .container,\r\n.md-show.md-effect-18 ~ .md-overlay {\r\n    -webkit-transform-style: preserve-3d;\r\n    -webkit-transform-origin: 0% 50%;\r\n    -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n    -moz-transform-style: preserve-3d;\r\n    -moz-transform-origin: 0% 50%;\r\n    -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n    transform-style: preserve-3d;\r\n    transform-origin: 0% 50%;\r\n    animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n}\r\n\r\n@-webkit-keyframes rotateRightSideFirst {\r\n    50% { -webkit-transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; }\r\n    100% { -webkit-transform: translateZ(-200px); }\r\n}\r\n\r\n@keyframes rotateRightSideFirst {\r\n    50% { -webkit-transform: translateZ(-50px) rotateY(5deg); transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n    100% { -webkit-transform: translateZ(-200px); transform: translateZ(-200px); }\r\n}\r\n\r\n.md-effect-18 .md-content {\r\n    -webkit-transform: translateX(200%);\r\n    transform: translateX(200%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-18 .md-content {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n    transition: all 0.5s 0.1s;\r\n}\r\n\r\n/* Effect 19:  Slip in from the top with perspective on container */\r\n.md-show.md-effect-19 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-show.md-effect-19 ~ .md-overlay {\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-19 ~ .container,\r\n.md-show.md-effect-19 ~ .md-overlay {\r\n    -webkit-transform-style: preserve-3d;\r\n    -webkit-transform-origin: 50% 100%;\r\n    -webkit-animation: OpenTop 0.5s forwards ease-in;\r\n    -moz-transform-style: preserve-3d;\r\n    -moz-transform-origin: 50% 100%;\r\n    -moz-animation: OpenTop 0.5s forwards ease-in;\r\n    transform-style: preserve-3d;\r\n    transform-origin: 50% 100%;\r\n    animation: OpenTop 0.5s forwards ease-in;\r\n}\r\n\r\n@-webkit-keyframes OpenTop {\r\n    50% {\r\n        -webkit-transform: rotateX(10deg);\r\n        -webkit-animation-timing-function: ease-out;\r\n    }\r\n}\r\n\r\n@keyframes OpenTop {\r\n    50% {\r\n        -webkit-transform: rotateX(10deg);\r\n                transform: rotateX(10deg);\r\n        -webkit-animation-timing-function: ease-out;\r\n                animation-timing-function: ease-out;\r\n    }\r\n}\r\n\r\n.md-effect-19 .md-content {\r\n    -webkit-transform: translateY(-200%);\r\n    transform: translateY(-200%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-19 .md-content {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n    transition: all 0.5s 0.1s;\r\n}\r\n\r\n@media screen and (max-width: 32em) {\r\n    body { font-size: 75%; }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal-animation/modal-animation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div *ngIf=\"(backDrop); else: backDropOver\" class=\"md-overlay\"></div>\n<ng-template #backDropOver>\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/shared/modal-animation/modal-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalAnimationComponent = (function () {
    function ModalAnimationComponent() {
        this.backDrop = false;
    }
    ModalAnimationComponent.prototype.ngOnInit = function () {
    };
    ModalAnimationComponent.prototype.close = function (event) {
        document.querySelector("#" + event).classList.remove('md-show');
    };
    return ModalAnimationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalAnimationComponent.prototype, "modalClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalAnimationComponent.prototype, "contentClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalAnimationComponent.prototype, "modalID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModalAnimationComponent.prototype, "backDrop", void 0);
ModalAnimationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-animation',
        template: __webpack_require__("../../../../../src/app/shared/modal-animation/modal-animation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/modal-animation/modal-animation.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], ModalAnimationComponent);

//# sourceMappingURL=modal-animation.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal-basic/modal-basic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".basic.modal {\r\n    background: rgba(0,0,0,0.6);\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    overflow: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    outline: 0;\r\n}\r\n\r\n.basic.fade {\r\n    opacity: 0;\r\n    transition: opacity .15s linear;\r\n}\r\n\r\n.basic.fade.in {\r\n    opacity: 1;\r\n}\r\n\r\n.basic.modal.fade.in .modal-dialog {\r\n    -webkit-transform: translate(0,0);\r\n    transform: translate(0,0);\r\n}\r\n\r\n.basic.modal.fade .modal-dialog {\r\n    transition: all .3s ease-out;\r\n    -webkit-transform: translate(0,-25%);\r\n    transform: translate(0,-25%);\r\n}\r\n\r\n.basic .basic-close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    font-size: 16px;\r\n    color: #292b2c;\r\n}\r\n\r\n.basic .basic-close-light-box {\r\n    position: absolute;\r\n    top: -31px;\r\n    right: -20px;\r\n    font-size: 30px;\r\n    color: rgb(255, 255, 255);\r\n    text-shadow: none;\r\n}\r\n\r\n\r\n\r\n.basic h5 {\r\n    margin-bottom: 0;\r\n    color: #757575;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal-basic/modal-basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\" [ngClass]=\"dialogClass\">\n    <div class=\"modal-content\">\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/modal-basic/modal-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalBasicComponent = (function () {
    function ModalBasicComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalBasicComponent.prototype.ngOnInit = function () {
    };
    ModalBasicComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalBasicComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalBasicComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    return ModalBasicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalBasicComponent.prototype, "dialogClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModalBasicComponent.prototype, "hideHeader", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModalBasicComponent.prototype, "hideFooter", void 0);
ModalBasicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-basic',
        template: __webpack_require__("../../../../../src/app/shared/modal-basic/modal-basic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/modal-basic/modal-basic.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], ModalBasicComponent);

//# sourceMappingURL=modal-basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_items_menu_items__ = __webpack_require__("../../../../../src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion__ = __webpack_require__("../../../../../src/app/shared/accordion/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fullscreen_toggle_fullscreen_directive__ = __webpack_require__("../../../../../src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_card_refresh_directive__ = __webpack_require__("../../../../../src/app/shared/card/card-refresh.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_card_toggle_directive__ = __webpack_require__("../../../../../src/app/shared/card/card-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_card_component__ = __webpack_require__("../../../../../src/app/shared/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__elements_parent_remove_directive__ = __webpack_require__("../../../../../src/app/shared/elements/parent-remove.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_squeezebox__ = __webpack_require__("../../../../squeezebox/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spinner_spinner_component__ = __webpack_require__("../../../../../src/app/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_animation_modal_animation_component__ = __webpack_require__("../../../../../src/app/shared/modal-animation/modal-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_basic_modal_basic_component__ = __webpack_require__("../../../../../src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__scroll_scroll_module__ = __webpack_require__("../../../../../src/app/scroll/scroll.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_css_animator__ = __webpack_require__("../../../../css-animator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_material_datepicker__ = __webpack_require__("../../../../angular2-material-datepicker/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_mask__ = __webpack_require__("../../../../ng2-mask/build/ng2-mask.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_select__ = __webpack_require__("../../../../ng-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__elements_select_option_service__ = __webpack_require__("../../../../../src/app/shared/elements/select-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular2_wizard__ = __webpack_require__("../../../../angular2-wizard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular2_wizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angular2_wizard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__elements_data_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/elements/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_google_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_ui_switch_dist__ = __webpack_require__("../../../../ng2-ui-switch/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_knob__ = __webpack_require__("../../../../ng2-knob/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_knob___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_ng2_knob__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng_chartist__ = __webpack_require__("../../../../ng-chartist/dist/ng-chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_ng_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__todo_todo_service__ = __webpack_require__("../../../../../src/app/shared/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ng_click_outside__ = __webpack_require__("../../../../ng-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ng_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_ng_click_outside__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_squeezebox__["a" /* SqueezeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_18__scroll_scroll_module__["a" /* ScrollModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_toasty__["a" /* ToastyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_40_ng2_ui_switch_dist__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_22_css_animator__["AnimatorModule"],
            __WEBPACK_IMPORTED_MODULE_23_angular2_material_datepicker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_27_ng_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_26_ng2_mask__["a" /* Ng2MaskModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng2_currency_mask__["CurrencyMaskModule"],
            __WEBPACK_IMPORTED_MODULE_29_angular2_wizard__["FormWizardModule"],
            __WEBPACK_IMPORTED_MODULE_30__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_33_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_31_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_34_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_34_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_35_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_36__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_37__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' }),
            __WEBPACK_IMPORTED_MODULE_38_ng2_google_charts__["Ng2GoogleChartsModule"],
            __WEBPACK_IMPORTED_MODULE_39_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_41_angular2_chartjs__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_42_ng2_knob__["KnobModule"],
            __WEBPACK_IMPORTED_MODULE_43_ng_chartist__["ChartistModule"],
            __WEBPACK_IMPORTED_MODULE_44_ng2_nvd3__["NvD3Module"],
            __WEBPACK_IMPORTED_MODULE_46_ng_click_outside__["ClickOutsideModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_5__accordion__["c" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_5__accordion__["b" /* AccordionDirective */],
            __WEBPACK_IMPORTED_MODULE_6__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */],
            __WEBPACK_IMPORTED_MODULE_7__card_card_refresh_directive__["a" /* CardRefreshDirective */],
            __WEBPACK_IMPORTED_MODULE_8__card_card_toggle_directive__["a" /* CardToggleDirective */],
            __WEBPACK_IMPORTED_MODULE_11__elements_parent_remove_directive__["a" /* ParentRemoveDirective */],
            __WEBPACK_IMPORTED_MODULE_9__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__modal_animation_modal_animation_component__["a" /* ModalAnimationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__modal_basic_modal_basic_component__["a" /* ModalBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_32__elements_data_filter_pipe__["a" /* DataFilterPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_5__accordion__["c" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_5__accordion__["b" /* AccordionDirective */],
            __WEBPACK_IMPORTED_MODULE_6__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */],
            __WEBPACK_IMPORTED_MODULE_7__card_card_refresh_directive__["a" /* CardRefreshDirective */],
            __WEBPACK_IMPORTED_MODULE_8__card_card_toggle_directive__["a" /* CardToggleDirective */],
            __WEBPACK_IMPORTED_MODULE_11__elements_parent_remove_directive__["a" /* ParentRemoveDirective */],
            __WEBPACK_IMPORTED_MODULE_9__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_12_squeezebox__["a" /* SqueezeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["a" /* PaginationModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_17__modal_basic_modal_basic_component__["a" /* ModalBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_16__modal_animation_modal_animation_component__["a" /* ModalAnimationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__scroll_scroll_module__["a" /* ScrollModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_toasty__["a" /* ToastyModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular2_notifications__["b" /* SimpleNotificationsModule */],
            __WEBPACK_IMPORTED_MODULE_21_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_40_ng2_ui_switch_dist__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_22_css_animator__["AnimatorModule"],
            __WEBPACK_IMPORTED_MODULE_23_angular2_material_datepicker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_27_ng_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_26_ng2_mask__["a" /* Ng2MaskModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng2_currency_mask__["CurrencyMaskModule"],
            __WEBPACK_IMPORTED_MODULE_29_angular2_wizard__["FormWizardModule"],
            __WEBPACK_IMPORTED_MODULE_30__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_33_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_32__elements_data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_31_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_34_angular_froala_wysiwyg__["a" /* FroalaEditorModule */],
            __WEBPACK_IMPORTED_MODULE_34_angular_froala_wysiwyg__["b" /* FroalaViewModule */],
            __WEBPACK_IMPORTED_MODULE_35_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_36__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */],
            __WEBPACK_IMPORTED_MODULE_37__agm_core__["a" /* AgmCoreModule */],
            __WEBPACK_IMPORTED_MODULE_38_ng2_google_charts__["Ng2GoogleChartsModule"],
            __WEBPACK_IMPORTED_MODULE_39_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_41_angular2_chartjs__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_42_ng2_knob__["KnobModule"],
            __WEBPACK_IMPORTED_MODULE_43_ng_chartist__["ChartistModule"],
            __WEBPACK_IMPORTED_MODULE_44_ng2_nvd3__["NvD3Module"],
            __WEBPACK_IMPORTED_MODULE_46_ng_click_outside__["ClickOutsideModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__menu_items_menu_items__["a" /* MenuItems */],
            __WEBPACK_IMPORTED_MODULE_45__todo_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_28__elements_select_option_service__["a" /* SelectOptionService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/todo/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(text, type, isChecked) {
        this.text = text;
        this.type = type;
        this.isChecked = isChecked;
    }
    return Todo;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/shared/todo/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = (function () {
    function TodoService() {
        this.items = [
            new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Todo */]('Hey.. Attach your new file', 'Java', false),
            new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Todo */]('Navigation working', 'Angular 2', true),
            new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Todo */]('Files submited successfully', 'Codeigniter', false)
        ];
    }
    TodoService.prototype.getTodoList = function () {
        return this.items;
    };
    TodoService.prototype.deleteItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    TodoService.prototype.additem = function (item) {
        this.items.push(item);
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TodoService);

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-chasing-dots.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-chasing-dots {\n    top: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    text-align: center;\n    -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n    animation: sk-chasingDotsRotate 2s infinite linear;\n}\n\n.sk-chasing-dots .sk-child {\n    width: 60%;\n    height: 60%;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    border-radius: 100%;\n    -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n    animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n\n.sk-chasing-dots .sk-dot2 {\n    top: auto;\n    bottom: 0;\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-chasingDotsRotate {\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes sk-chasingDotsRotate {\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes sk-chasingDotsBounce {\n    0%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n@keyframes sk-chasingDotsBounce {\n    0%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-cube-grid.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-cube-grid {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n}\n\n.sk-cube-grid .sk-cube {\n    width: 33%;\n    height: 33%;\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n\n.sk-cube-grid .sk-cube1 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube2 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube3 {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.sk-cube-grid .sk-cube4 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube5 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube6 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube7 {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n\n.sk-cube-grid .sk-cube8 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube9 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1);\n    }\n}\n\n@keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-double-bounce.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-double-bounce {\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    margin: auto;\n}\n\n.double-bounce1, .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n    0%, 100% {\n        -webkit-transform: scale(0.0)\n    }\n    50% {\n        -webkit-transform: scale(1.0)\n    }\n}\n\n@keyframes sk-bounce {\n    0%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n    }\n    50% {\n        transform: scale(1.0);\n        -webkit-transform: scale(1.0);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-line-material.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-line-material {\r\n    top: 0  ;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 100%;\r\n}\r\n\r\n.sk-line-material .sk-child {\r\n    width: 100%;\r\n    height: 4px;\r\n    position: absolute;\r\n    top:0;\r\n    display: inline-block;\r\n    -webkit-transform-origin: 0% 0%;\r\n            transform-origin: 0% 0%;\r\n    -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n    animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n}\r\n\r\n@-webkit-keyframes sk-line-material {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scaleX(0);\r\n        transform: scaleX(0);\r\n    }\r\n    40% {\r\n        -webkit-transform: scaleX(1);\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-line-material {\r\n    0% {\r\n        -webkit-transform: scaleX(0);\r\n        transform: scaleX(0);\r\n    }\r\n    100% {\r\n        -webkit-transform: scaleX(1);\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n#http-loader {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}\r\n\r\n.loader-bg {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    filter: alpha(opacity=70);\r\n    opacity: 1;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.colored-parent, .colored > div {\r\n    background-color: rgba(26, 188, 156, 0.80);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-rotating-plane.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-rotating-plane {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n    0% {\n        -webkit-transform: perspective(120px)\n    }\n    50% {\n        -webkit-transform: perspective(120px) rotateY(180deg)\n    }\n    100% {\n        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)\n    }\n}\n\n@keyframes sk-rotateplane {\n    0% {\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n    }\n    50% {\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n    }\n    100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-spinner-pulse.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-spinner-pulse {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n    border-radius: 100%;\n    -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n    animation: sk-pulseScaleOut 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-pulseScaleOut {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n\n@keyframes sk-pulseScaleOut {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-three-bounce.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-three-bounce {\n    top: 50%;\n    position: relative;\n    margin: auto;\n    width: 80px;\n    text-align: center;\n}\n\n.sk-three-bounce .sk-child {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n    animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n}\n\n.sk-three-bounce .sk-bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n.sk-three-bounce .sk-bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-three-bounce {\n    0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n@keyframes sk-three-bounce {\n    0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-wandering-cubes.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-wandering-cubes {\n    top: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n}\n\n.sk-wandering-cubes .sk-cube {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n    animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n}\n\n.sk-wandering-cubes .sk-cube2 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-wanderingCube {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    25% {\n        -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\n    }\n    50.1% {\n        -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\n    }\n    75% {\n        -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        -webkit-transform: rotate(-360deg);\n        transform: rotate(-360deg);\n    }\n}\n\n@keyframes sk-wanderingCube {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    25% {\n        -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\n    }\n    50.1% {\n        -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\n    }\n    75% {\n        -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        -webkit-transform: rotate(-360deg);\n        transform: rotate(-360deg);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkit-css/sk-wave.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-wave {\n    position: relative;\n    top: 50%;\n    margin: auto;\n    width: 50px;\n    height: 40px;\n    text-align: center;\n    font-size: 10px;\n}\n\n.sk-wave .sk-rect {\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n    animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n\n.sk-wave .sk-rect1 {\n    -webkit-animation-delay: -1.2s;\n    animation-delay: -1.2s;\n}\n\n.sk-wave .sk-rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n\n.sk-wave .sk-rect3 {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n\n.sk-wave .sk-rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n\n.sk-wave .sk-rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-waveStretchDelay {\n    0%, 40%, 100% {\n        -webkit-transform: scaleY(0.4);\n        transform: scaleY(0.4);\n    }\n    20% {\n        -webkit-transform: scaleY(1);\n        transform: scaleY(1);\n    }\n}\n\n@keyframes sk-waveStretchDelay {\n    0%, 40%, 100% {\n        -webkit-transform: scaleY(0.4);\n        transform: scaleY(0.4);\n    }\n    20% {\n        -webkit-transform: scaleY(1);\n        transform: scaleY(1);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinkits.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinkit; });
var Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};
//# sourceMappingURL=spinkits.js.map

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#http-loader {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    z-index: 9999;\n}\n\n.loader-bg {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    filter: alpha(opacity=70);\n    opacity: .7;\n    background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n    background-color: #333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!--sk-cube-grid-->\n        <div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skCubeGrid\">\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-rotating-plane-->\n        <div class=\"sk-rotating-plane colored-parent\" *ngIf=\"spinner === Spinkit.skRotatingPlane\" [style.background-color]='backgroundColor'></div>\n        <!--sk-double-bounce-->\n        <div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skDoubleBounce\">\n            <div class=\"double-bounce1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"double-bounce2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-wave-->\n        <div class=\"sk-wave\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWave\">\n            <div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-wandering-cubes-->\n        <div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWanderingCubes\">\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-spinner-pulse-->\n        <div class=\"sk-spinner sk-spinner-pulse colored-parent\" *ngIf=\"spinner === Spinkit.skSpinnerPulse\" [style.background-color]='backgroundColor'></div>\n        <!--sk-chasing-dots-->\n        <div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skChasingDots\">\n            <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!--sk-three-bounce-->\n        <div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skThreeBounce\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n            <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n        </div>\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinkits__ = __webpack_require__("../../../../../src/app/spinner/spinkits.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SpinnerComponent = (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = __WEBPACK_IMPORTED_MODULE_1__spinkits__["a" /* Spinkit */];
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.spinner = __WEBPACK_IMPORTED_MODULE_1__spinkits__["a" /* Spinkit */].skLine;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */] || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */] || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationError */]) {
                _this.isSpinnerVisible = false;
            }
        }, function (error) {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    return SpinnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "backgroundColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "spinner", void 0);
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'spinner',
        template: __webpack_require__("../../../../../src/app/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/spinner/spinner.component.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-double-bounce.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-chasing-dots.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-cube-grid.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-rotating-plane.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-spinner-pulse.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-three-bounce.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-wandering-cubes.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-wave.css"), __webpack_require__("../../../../../src/app/spinner/spinkit-css/sk-line-material.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_common__["DOCUMENT"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _a || Object, Object])
], SpinnerComponent);

var _a;
//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.btn-google{\n    border-color: #E24825;\n    margin-bottom: 5px;\n}\n\n.btn-github {\n    border-color: black;\n    background: black;\n    margin-bottom: 5px;\n}\n\n\n.btn-facebook {\n    background: #4f6aa3;\n    margin-bottom: 5px;\n}\n\n.btn-twitter{\n    background: #cadde9;\n    margin-bottom: 5px;\n}\n\n.form-control{\ndisplay: block;\nwidth: 100%;\nheight: 34px;\npadding: 6px 12px;\nfont-size: 14px;\nline-height: 1.42857143;\ncolor: #555;\nbackground-color: #fff;\nbackground-image: none;\nborder: 1px solid #ccc;\nborder-radius: 4px;\ntransition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;}\n\n.login-wrap .registration{\ntext-align: center;}\n\na, a:hover, a:focus{\ntext-decoration: none;\noutline: none;}\n\na:focus, a:hover{\ncolor: #23527c;\ntext-decoration: underline}\n\n*\n{box-sizing: border-box}\n\n:after, :before\n{box-sizing: border-box}\n\n::-moz-selection\n{background: #68dff0;\ncolor: #fff;}\n\n::selection\n{background: #68dff0;\ncolor: #fff;}\n\ndiv{\n  display:block;\n}\n\nmd-4\n{\n  float:left;\n}\n\n\n.col-md-offset-4\n{margin-left: 33.33333333%;}\n\n.form-login \n{max-width: 330px;\nmargin: 100px auto 0;\nbackground: #fff;\nborder-radius: 5px;\n-webkit-border-radius: 5px;}\n\nh2.form-login-heading{\nmargin: 0;\npadding: 25px 20px;\ntext-align: center;\nbackground: #48bcb4;\nborder-radius: 5px 5px 0 0;\n-webkit-border-radius: 5px 5px 0 0;\ncolor: #fff;\nfont-size: 20px;\ntext-transform: uppercase;\nfont-weight: 300;}\n\n.login-wrap{\npadding: 20px;}\n\n\n\n.btn-theme\n{\ncolor: #fff;\nbackground-color: #48bcb4;\nborder-color: #48bcb4;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div> -->\n\n\n<div class=\"col-md-12\">\n  <div class=\"col-md-4 col-md-offset-4\">\n    <div class=\"form-login\"> \n    <h2 class=\"form-login-heading\">Welcome</h2>\n      <div class=\"login-wrap\">\n        <input #emailAdd (keyup)=\"0\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" autofocus=\"\">\n        <br>\n        <input #password (keyup)=\"0\" type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Password\" value =\"\">\n        <label class=\"checkbox\">\n            <span class=\"pull-right\">\n                <a data-toggle=\"modal\" href=\"\"> Forgot Password?</a>\n            </span>\n        </label>\n        <button class=\"btn btn-theme btn-block\" (click)=\"signInWithCustom(emailAdd.value, password.value)\"><i class=\"fa fa-lock\"></i> SIGN IN</button>\n        <div class=\"login-social-link centered\" style=\"text-align: center\">\n          <p>or you can sign in via your social network</p>\n\n\n\n            <div>\n              <button (click)=\"signInWithGoogle()\" class=\"btn-google\" style=\"color:white;width:100% ;background-color:#E24825\">\n                <i class=\"fa fa-google-plus fa-lg\" style=\"color:white\"></i> Google\n              </button>\n\n              <button (click)=\"signInWithGithub()\" class=\"btn-github\" style=\"color:white;width:100% ;background-color:black\">\n                <i class=\"fa fa-github fa-lg\" style=\"color:white;\"></i> GitHub\n              </button>\n            </div>\n            <div>\n              <button (click)=\"signInWithFacebook()\" class=\"btn-facebook\" style='width:100%; background-color:#4f6aa3; color:white '>\n                <i class=\"fa fa-facebook fa-lg\" style=\"color:white;\"></i> Facebook\n              </button>\n\n              <button (click)=\"signInWithTwitter()\" class=\"btn-twitter\" style='width:100%; background-color:#55acee;color:white'>\n                <i class=\"fa fa-twitter fa-lg\" style=\"color:white\"></i> Twitter\n              </button>\n            </div>\n        </div>\n        <div class=\"registration\">\n            Don't have an account yet?<br>\n            <a class=\"\" href=\"register\" [routerLink]=\"['../sign-up']\">\n                Create an account\n            </a>\n        </div>\n      </div>\n      <hr>\n      <hr>\n    </div>\n  </div>\n</div>\n\n<!-- <script type=\"text/javascript\" src=\"https://backup.reziden.com/assets/js/backstretch/jquery.backstretch.min.js\"></script>\n<script>\n        $.backstretch(\"/assets/css/images/login-bg.jpg\", {speed: 500});\n\n        $(\".alert\").fadeTo(5000, 500).slideUp(500, function(){\n        $(\".alert\").alert('close');\n    });\n    </script>\n<div class=\"backstretch\" style=\"left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; min-height: 100%; width: 100%; z-index: -999999; position: fixed;\"><img src=\"/assets/css/images/login-bg.jpg\" style=\"position: absolute; margin: 0px; padding: 0px; border: none; width:relative; min-height: 100%; max-width: none; z-index: -999999; left: 0px; top: -122.78571428571428px;\"></div>\n\n \n -->"

/***/ }),

/***/ "../../../../../src/app/users/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = (function () {
    function UserLoginComponent(auth, userService, router) {
        this.auth = auth;
        this.userService = userService;
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        var _this = this;
        // query the db here to check if the user information is filled
        var queryId = this.auth.authState.uid;
        var userObject;
        this.userService.getUser(queryId).subscribe(function (snap) {
            userObject = snap;
            console.log(userObject);
            if (!userObject.onBoard) {
                console.log("new user !");
                _this.router.navigate(['/onboarding']);
            }
            else {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    UserLoginComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.githubLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithCustom = function (email, password) {
        var _this = this;
        this.auth.emailLogin(email, password)
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        console.log("hello, facebook sign in not available yet");
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        console.log("hello, twitter sign in not available yet");
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../src/app/users/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-login/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _c || Object])
], UserLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- User logged in -->\n<div *ngIf=\"auth.currentUser\">\n  <h3>Howdy, {{ auth.currentUser.auth.displayName }}</h3>\n  <img [src]=\"auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50px>\n  <button (click)=\"logout()\">Logout</button>\n</div>\n<!-- User NOT logged in -->\n<div *ngIf=\"!auth.currentUser\">\n  <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n  <p>Login to get started...</p>\n  <button routerLink=\"/login\">Login</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/users/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-signup/user-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page\">\n\n\t\t\n\t\n\n<!-- Top content -->\n        <div class=\"top-content\">\n        \t\n            <div class=\"inner-bg\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 col-sm-offset-2 text\">\n                            <h1>Registration Form</h1>\n                            <div class=\"description\">\n                            \t<!--\n                            \t<p>\n\t                            \tThis is a free responsive multi-step registration form made with Bootstrap. \n\t                            \tDownload it on <a href=\"http://azmind.com\"><strong>AZMIND</strong></a>, customize and use it as you like!\n                            \t</p>-->\n                            </div>\n                        </div>\n                    </div>\n                    \n\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 col-sm-offset-2 form-box\">\n                        \t\n                        \t<!--<form role=\"form\" action=\"\" method=\"post\" class=\"registration-form\" id=\"signup_form\">-->\n                    \t\t<form action=\"https://backup.reziden.com/resident_portal/login/signup\" method=\"post\" accept-charset=\"utf-8\" class=\"registration-form\" id=\"signup_form\">                        \t\t\n                        \t\t<fieldset style=\"display: block;\">\n\t\t                        \t<div class=\"form-top\">\n\t\t                        \t\t<div class=\"form-top-left\">\n\t\t                        \t\t\t<h3 class=\"signup_step\" style=\"color: rgb(136, 136, 136);\">Step 1 / 3</h3>\n\t\t                            \t\t<p>Tell us who you are:</p>\n\t\t                        \t\t</div>\n\t\t                        \t\t<div class=\"form-top-right\">\n\t\t                        \t\t\t<i class=\"fa fa-user\"></i>\n\t\t                        \t\t</div>\n\t\t                            </div>\n\t\t                            <div class=\"form-bottom\">\n\t\t                            \t<div class=\"form-group col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-salutation\">Title</label>\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control form-select\" name=\"salutation\" id=\"salutation\">\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"\">Title</option>\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"Dr\">Dr</option>\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"Mr\">Mr</option>\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"Ms\">Ms</option>\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"Mrs\">Mrs</option>\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"Mdm\">Mdm</option>\n\t\t\t\t\t\t\t\t      \t\t</select>\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t                    \t<div class=\"form-group col-sm-5\">\n\t\t\t\t                    \t\t<label class=\"sr-only\" for=\"firstname\">First name</label>\n\t\t\t\t                        \t<input type=\"text\" name=\"firstname\" placeholder=\"First name...\" class=\"form-first-name form-control\" id=\"firstname\">\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class=\"form-group col-sm-5\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"lastname\">Last name</label>\n\t\t\t\t                        \t<input type=\"text\" name=\"lastname\" placeholder=\"Last name...\" class=\"form-last-name form-control\" id=\"lastname\">\n\t\t\t\t                        </div>\n\t\t\t\t                        \n\t\t\t\t                        <div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"form-last-name\">Gender</label>\n\t\t\t\t                        \t<input type=\"radio\" name=\"gender\" id=\"radio1\" class=\"css-checkbox\" value=\"Male\"> \n\t\t\t\t\t                        <label for=\"radio1\" class=\"css-label radGroup1\">Male</label>\n\n\t\t\t\t\t                        <input type=\"radio\" name=\"gender\" id=\"radio2\" class=\"css-checkbox\" value=\"Female\"> \n\t\t\t\t\t                        <label for=\"radio2\" class=\"css-label radGroup1\">Female</label>\n\n\t\t\t\t                    \t</div>\n\n\t\t\t\t                        <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-citizenship\">Citizenship</label>\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control form-select\" name=\"citizenship\" id=\"citizenship\">\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"\">Select Country</option>\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AF\">Afghanistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AL\">Albania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DZ\">Algeria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AS\">American Samoa</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AD\">Andorra</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AO\">Angola</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AI\">Anguilla</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AQ\">Antarctica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AG\">Antigua and Barbuda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AR\">Argentina</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AM\">Armenia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AW\">Aruba</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AU\">Australia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AT\">Austria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AZ\">Azerbaijan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BS\">Bahamas</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BH\">Bahrain</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BD\">Bangladesh</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BB\">Barbados</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BY\">Belarus</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BE\">Belgium</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BZ\">Belize</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BJ\">Benin</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BM\">Bermuda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BT\">Bhutan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BO\">Bolivia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BA\">Bosnia and Herzegovina</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BW\">Botswana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BV\">Bouvet Island</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BR\">Brazil</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IO\">British Indian Ocean Territory</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BN\">Brunei Darussalam</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BG\">Bulgaria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BF\">Burkina Faso</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BI\">Burundi</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KH\">Cambodia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CM\">Cameroon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CA\">Canada</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CV\">Cape Verde</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KY\">Cayman Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CF\">Central African Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TD\">Chad</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CL\">Chile</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CN\">China</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CX\">Christmas Island</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CC\">Cocos (Keeling) Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CO\">Colombia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KM\">Comoros</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CG\">Congo</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CD\">Congo, the Democratic Republic of the</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CK\">Cook Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CR\">Costa Rica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CI\">Cote D'Ivoire</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HR\">Croatia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CU\">Cuba</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CY\">Cyprus</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CZ\">Czech Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DK\">Denmark</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DJ\">Djibouti</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DM\">Dominica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DO\">Dominican Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EC\">Ecuador</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EG\">Egypt</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SV\">El Salvador</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GQ\">Equatorial Guinea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ER\">Eritrea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EE\">Estonia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ET\">Ethiopia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FK\">Falkland Islands (Malvinas)</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FO\">Faroe Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FJ\">Fiji</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FI\">Finland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FR\">France</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GF\">French Guiana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PF\">French Polynesia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TF\">French Southern Territories</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GA\">Gabon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GM\">Gambia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GE\">Georgia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DE\">Germany</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GH\">Ghana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GI\">Gibraltar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GR\">Greece</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GL\">Greenland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GD\">Grenada</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GP\">Guadeloupe</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GU\">Guam</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GT\">Guatemala</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GN\">Guinea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GW\">Guinea-Bissau</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GY\">Guyana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HT\">Haiti</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HM\">Heard Island and Mcdonald Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VA\">Holy See (Vatican City State)</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HN\">Honduras</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HK\">Hong Kong</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HU\">Hungary</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IS\">Iceland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IN\">India</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ID\">Indonesia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IR\">Iran, Islamic Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IQ\">Iraq</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IE\">Ireland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IL\">Israel</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IT\">Italy</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"JM\">Jamaica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"JP\">Japan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"JO\">Jordan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KZ\">Kazakhstan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KE\">Kenya</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KI\">Kiribati</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KP\">Korea, Democratic People's Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KR\">Korea, Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KW\">Kuwait</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KG\">Kyrgyzstan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LA\">Lao People's Democratic Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LV\">Latvia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LB\">Lebanon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LS\">Lesotho</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LR\">Liberia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LY\">Libyan Arab Jamahiriya</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LI\">Liechtenstein</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LT\">Lithuania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LU\">Luxembourg</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MO\">Macao</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MK\">Macedonia, the Former Yugoslav Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MG\">Madagascar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MW\">Malawi</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MY\">Malaysia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MV\">Maldives</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ML\">Mali</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MT\">Malta</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MH\">Marshall Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MQ\">Martinique</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MR\">Mauritania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MU\">Mauritius</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"YT\">Mayotte</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MX\">Mexico</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FM\">Micronesia, Federated States of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MD\">Moldova, Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MC\">Monaco</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MN\">Mongolia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MS\">Montserrat</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MA\">Morocco</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MZ\">Mozambique</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MM\">Myanmar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NA\">Namibia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NR\">Nauru</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NP\">Nepal</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NL\">Netherlands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AN\">Netherlands Antilles</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NC\">New Caledonia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NZ\">New Zealand</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NI\">Nicaragua</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NE\">Niger</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NG\">Nigeria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NU\">Niue</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NF\">Norfolk Island</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MP\">Northern Mariana Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NO\">Norway</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"OM\">Oman</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PK\">Pakistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PW\">Palau</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PS\">Palestinian Territory, Occupied</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PA\">Panama</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PG\">Papua New Guinea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PY\">Paraguay</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PE\">Peru</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PH\">Philippines</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PN\">Pitcairn</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PL\">Poland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PT\">Portugal</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PR\">Puerto Rico</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"QA\">Qatar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RE\">Reunion</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RO\">Romania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RU\">Russian Federation</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RW\">Rwanda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SH\">Saint Helena</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KN\">Saint Kitts and Nevis</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LC\">Saint Lucia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PM\">Saint Pierre and Miquelon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VC\">Saint Vincent and the Grenadines</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"WS\">Samoa</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SM\">San Marino</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ST\">Sao Tome and Principe</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SA\">Saudi Arabia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SN\">Senegal</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CS\">Serbia and Montenegro</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SC\">Seychelles</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SL\">Sierra Leone</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SG\">Singapore</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SK\">Slovakia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SI\">Slovenia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SB\">Solomon Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SO\">Somalia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ZA\">South Africa</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GS\">South Georgia and the South Sandwich Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ES\">Spain</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LK\">Sri Lanka</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SD\">Sudan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SR\">Suriname</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SJ\">Svalbard and Jan Mayen</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SZ\">Swaziland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SE\">Sweden</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CH\">Switzerland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SY\">Syrian Arab Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TW\">Taiwan, Province of China</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TJ\">Tajikistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TZ\">Tanzania, United Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TH\">Thailand</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TL\">Timor-Leste</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TG\">Togo</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TK\">Tokelau</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TO\">Tonga</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TT\">Trinidad and Tobago</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TN\">Tunisia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TR\">Turkey</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TM\">Turkmenistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TC\">Turks and Caicos Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TV\">Tuvalu</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UG\">Uganda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UA\">Ukraine</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AE\">United Arab Emirates</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GB\">United Kingdom</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"US\">United States</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UM\">United States Minor Outlying Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UY\">Uruguay</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UZ\">Uzbekistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VU\">Vanuatu</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VE\">Venezuela</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VN\">Viet Nam</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VG\">Virgin Islands, British</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VI\">Virgin Islands, U.s.</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"WF\">Wallis and Futuna</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EH\">Western Sahara</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"YE\">Yemen</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ZM\">Zambia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ZW\">Zimbabwe</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\n\t\t\t\t\t\t\t\t      \t\t</select>\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"national_identity\">National Identity</label>\n\t\t\t\t                        \t<input type=\"text\" name=\"national_identity\" placeholder=\"National identity no.\" class=\"form-last-name form-control\" id=\"national_identity\">\n\t\t\t\t                        \t\t\t\t\t                        </div>\n\n\t\t\t\t                        <div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"form-language\">Preferred Language</label>\n\t\t\t\t                        \t<select class=\"form-control form-select\" name=\"language\" id=\"language\">\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"\">Select Language</option>\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"English\">English</option>\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"Chinese\">Chinese</option>\n\t\t\t\t\t\t\t\t      \t\t</select>\n\t\t\t\t\t\t\t\t    \t\t\t\t\t                        \t</div>\n\n\t\t\t                        \t<!--\n\t\t\t\t                        <div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"form-about-yourself\">About yourself</label>\n\t\t\t\t                        \t<textarea name=\"form-about-yourself\" placeholder=\"About yourself...\" \n\t\t\t\t                        \t\t\t\tclass=\"form-about-yourself form-control\" id=\"form-about-yourself\"></textarea>\n\t\t\t\t                        </div>-->\n\t\t\t\t                        <button type=\"button\" class=\"btn btn-next\">Next</button>\n\t\t\t\t                    </div>\n\t\t\t                    </fieldset>\n\t\t\t                    \n\t\t\t                    <fieldset>\n\t\t                        \t<div class=\"form-top\">\n\t\t                        \t\t<div class=\"form-top-left\">\n\t\t                        \t\t\t<h3 style=\"color: rgb(136, 136, 136);\">Step 2 / 3</h3>\n\t\t                            \t\t<p>Set up your account:</p>\n\t\t                        \t\t</div>\n\t\t                        \t\t<div class=\"form-top-right\">\n\t\t                        \t\t\t<i class=\"fa fa-home\"></i>\n\t\t                        \t\t</div>\n\t\t                            </div>\n\t\t                            <div class=\"form-bottom\">\n\n\t\t                            \t<div class=\"form-group\">\n\t\t                            \t\t<label class=\"sr-only\" for=\"\">Building Name</label>\n\t\t                            \t\t<input type=\"text\" name=\"building_name\" value=\"\" class=\"form-control\" id=\"building_name\" placeholder=\"Building Name\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group col-sm-4\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"block_no\">Block No.</label>\n\t                            \t\t\t<input type=\"text\" name=\"block_no\" value=\"\" class=\"form-control\" id=\"block_no\" placeholder=\"Block No./House No.\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group col-sm-4\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"level\">Level</label>\n                            \t\t\t\t<input type=\"text\" name=\"level\" value=\"\" class=\"form-control\" id=\"level\" placeholder=\"Level\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group col-sm-4\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"unit_no\">Unit No.</label>\n\t                            \t\t\t<input type=\"text\" name=\"unit_no\" value=\"\" class=\"form-control\" id=\"unit_no\" placeholder=\"Unit No.\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"add_line_1\">Address Line 1</label>\n\t                            \t\t\t<input type=\"text\" name=\"add_line_1\" value=\"\" class=\"form-control\" id=\"add_line_1\" placeholder=\"Address Line 1\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"add_line_2\">Address Line 2</label>\n\t                            \t\t\t<input type=\"text\" name=\"add_line_2\" value=\"\" class=\"form-control\" id=\"add_line_2\" placeholder=\"Address Line 2\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"country\">Country</label>\n\t                            \t\t\t<select class=\"form-control form-select\" name=\"country\" id=\"country\">\n\t\t\t\t\t\t\t\t      \t\t\t<option value=\"\">Select Country</option>\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AF\">Afghanistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AL\">Albania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DZ\">Algeria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AS\">American Samoa</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AD\">Andorra</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AO\">Angola</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AI\">Anguilla</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AQ\">Antarctica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AG\">Antigua and Barbuda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AR\">Argentina</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AM\">Armenia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AW\">Aruba</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AU\">Australia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AT\">Austria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AZ\">Azerbaijan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BS\">Bahamas</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BH\">Bahrain</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BD\">Bangladesh</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BB\">Barbados</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BY\">Belarus</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BE\">Belgium</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BZ\">Belize</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BJ\">Benin</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BM\">Bermuda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BT\">Bhutan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BO\">Bolivia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BA\">Bosnia and Herzegovina</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BW\">Botswana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BV\">Bouvet Island</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BR\">Brazil</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IO\">British Indian Ocean Territory</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BN\">Brunei Darussalam</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BG\">Bulgaria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BF\">Burkina Faso</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"BI\">Burundi</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KH\">Cambodia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CM\">Cameroon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CA\">Canada</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CV\">Cape Verde</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KY\">Cayman Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CF\">Central African Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TD\">Chad</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CL\">Chile</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CN\">China</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CX\">Christmas Island</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CC\">Cocos (Keeling) Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CO\">Colombia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KM\">Comoros</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CG\">Congo</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CD\">Congo, the Democratic Republic of the</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CK\">Cook Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CR\">Costa Rica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CI\">Cote D'Ivoire</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HR\">Croatia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CU\">Cuba</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CY\">Cyprus</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CZ\">Czech Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DK\">Denmark</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DJ\">Djibouti</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DM\">Dominica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DO\">Dominican Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EC\">Ecuador</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EG\">Egypt</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SV\">El Salvador</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GQ\">Equatorial Guinea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ER\">Eritrea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EE\">Estonia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ET\">Ethiopia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FK\">Falkland Islands (Malvinas)</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FO\">Faroe Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FJ\">Fiji</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FI\">Finland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FR\">France</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GF\">French Guiana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PF\">French Polynesia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TF\">French Southern Territories</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GA\">Gabon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GM\">Gambia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GE\">Georgia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"DE\">Germany</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GH\">Ghana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GI\">Gibraltar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GR\">Greece</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GL\">Greenland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GD\">Grenada</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GP\">Guadeloupe</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GU\">Guam</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GT\">Guatemala</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GN\">Guinea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GW\">Guinea-Bissau</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GY\">Guyana</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HT\">Haiti</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HM\">Heard Island and Mcdonald Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VA\">Holy See (Vatican City State)</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HN\">Honduras</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HK\">Hong Kong</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"HU\">Hungary</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IS\">Iceland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IN\">India</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ID\">Indonesia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IR\">Iran, Islamic Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IQ\">Iraq</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IE\">Ireland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IL\">Israel</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"IT\">Italy</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"JM\">Jamaica</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"JP\">Japan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"JO\">Jordan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KZ\">Kazakhstan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KE\">Kenya</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KI\">Kiribati</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KP\">Korea, Democratic People's Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KR\">Korea, Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KW\">Kuwait</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KG\">Kyrgyzstan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LA\">Lao People's Democratic Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LV\">Latvia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LB\">Lebanon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LS\">Lesotho</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LR\">Liberia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LY\">Libyan Arab Jamahiriya</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LI\">Liechtenstein</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LT\">Lithuania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LU\">Luxembourg</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MO\">Macao</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MK\">Macedonia, the Former Yugoslav Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MG\">Madagascar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MW\">Malawi</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MY\">Malaysia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MV\">Maldives</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ML\">Mali</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MT\">Malta</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MH\">Marshall Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MQ\">Martinique</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MR\">Mauritania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MU\">Mauritius</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"YT\">Mayotte</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MX\">Mexico</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"FM\">Micronesia, Federated States of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MD\">Moldova, Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MC\">Monaco</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MN\">Mongolia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MS\">Montserrat</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MA\">Morocco</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MZ\">Mozambique</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MM\">Myanmar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NA\">Namibia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NR\">Nauru</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NP\">Nepal</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NL\">Netherlands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AN\">Netherlands Antilles</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NC\">New Caledonia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NZ\">New Zealand</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NI\">Nicaragua</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NE\">Niger</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NG\">Nigeria</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NU\">Niue</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NF\">Norfolk Island</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"MP\">Northern Mariana Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"NO\">Norway</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"OM\">Oman</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PK\">Pakistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PW\">Palau</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PS\">Palestinian Territory, Occupied</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PA\">Panama</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PG\">Papua New Guinea</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PY\">Paraguay</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PE\">Peru</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PH\">Philippines</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PN\">Pitcairn</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PL\">Poland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PT\">Portugal</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PR\">Puerto Rico</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"QA\">Qatar</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RE\">Reunion</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RO\">Romania</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RU\">Russian Federation</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"RW\">Rwanda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SH\">Saint Helena</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"KN\">Saint Kitts and Nevis</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LC\">Saint Lucia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"PM\">Saint Pierre and Miquelon</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VC\">Saint Vincent and the Grenadines</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"WS\">Samoa</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SM\">San Marino</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ST\">Sao Tome and Principe</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SA\">Saudi Arabia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SN\">Senegal</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CS\">Serbia and Montenegro</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SC\">Seychelles</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SL\">Sierra Leone</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SG\">Singapore</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SK\">Slovakia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SI\">Slovenia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SB\">Solomon Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SO\">Somalia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ZA\">South Africa</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GS\">South Georgia and the South Sandwich Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ES\">Spain</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"LK\">Sri Lanka</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SD\">Sudan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SR\">Suriname</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SJ\">Svalbard and Jan Mayen</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SZ\">Swaziland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SE\">Sweden</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"CH\">Switzerland</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"SY\">Syrian Arab Republic</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TW\">Taiwan, Province of China</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TJ\">Tajikistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TZ\">Tanzania, United Republic of</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TH\">Thailand</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TL\">Timor-Leste</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TG\">Togo</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TK\">Tokelau</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TO\">Tonga</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TT\">Trinidad and Tobago</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TN\">Tunisia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TR\">Turkey</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TM\">Turkmenistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TC\">Turks and Caicos Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"TV\">Tuvalu</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UG\">Uganda</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UA\">Ukraine</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"AE\">United Arab Emirates</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"GB\">United Kingdom</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"US\">United States</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UM\">United States Minor Outlying Islands</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UY\">Uruguay</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"UZ\">Uzbekistan</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VU\">Vanuatu</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VE\">Venezuela</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VN\">Viet Nam</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VG\">Virgin Islands, British</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"VI\">Virgin Islands, U.s.</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"WF\">Wallis and Futuna</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"EH\">Western Sahara</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"YE\">Yemen</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ZM\">Zambia</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t\t\t      \t\t\t<option value=\"ZW\">Zimbabwe</option>\t\n\t\t\t\t\t\t\t\t      \t\t\t\t\n\t\t\t\t\t\t\t\t      \t\t</select>\n\t\t\t\t\t\t\t\t      \t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group col-sm-4\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"state\">State</label>\n\t                            \t\t\t<input type=\"text\" name=\"state\" value=\"\" class=\"form-control\" id=\"state\" placeholder=\"State/Province\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group col-sm-4\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"city\">City</label>\n\t                            \t\t\t<input type=\"text\" name=\"city\" value=\"\" class=\"form-control\" id=\"city\" placeholder=\"City\">\n\t      \t\t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group col-sm-4\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"postal\">Postal</label>\n\t                            \t\t\t<input type=\"text\" name=\"postal\" value=\"\" class=\"form-control\" id=\"postal\" placeholder=\"Postal Code\">\n\t\t      \t\t\t\t\t\t\t\t\t\t                            \t</div>\n\n\t\t                            \t<div class=\"form-group\">\n\t                            \t\t\t<label class=\"sr-only\" for=\"\"></label>\n\n\t\t                            \t</div>\n\t\t\t\t                        <button type=\"button\" class=\"btn btn-previous\">Previous</button>\n\t\t\t\t                        <button type=\"button\" class=\"btn btn-next\">Next</button>\n\t\t\t\t                    </div>\n\t\t\t                    </fieldset>\n\t\t\t                    \n\t\t\t                    <fieldset>\n\t\t                        \t<div class=\"form-top\">\n\t\t                        \t\t<div class=\"form-top-left\">\n\t\t                        \t\t\t<h3 style=\"color: rgb(136, 136, 136);\">Step 3 / 3</h3>\n\t\t                            \t\t<p>Contact Information:</p>\n\t\t                        \t\t</div>\n\t\t                        \t\t<div class=\"form-top-right\">\n\t\t                        \t\t\t<i class=\"fa fa-fax\"></i>\n\t\t                        \t\t</div>\n\t\t                            </div>\n\t\t                            <div class=\"form-bottom\">\n\t\t                            \t<div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"email\">Email</label>\n\t\t\t\t                        \t<input type=\"email\" name=\"email\" value=\"\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t                        </div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                    \t\t<label class=\"sr-only\" for=\"home\">Home Phone</label>\n\t\t\t\t                        \t<input type=\"text\" name=\"home\" value=\"\" class=\"form-control\" id=\"home\" placeholder=\"Home\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t                        </div>\n\t\t\t\t                        <div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"mobile\">Mobile</label>\n\t\t\t\t                        \t<input type=\"text\" name=\"mobile\" value=\"\" class=\"form-control\" id=\"mobile\" placeholder=\"Mobile\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t                        </div>\n\t\t\t\t                        <div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"work\">Work Phone</label>\n\t\t\t\t                        \t<input type=\"text\" name=\"work\" value=\"\" class=\"form-control\" id=\"work\" placeholder=\"Work\">\n\t\t      \t\t\t\t\t\t\t\t\t\t\t\t                        </div>\n\t\t\t\t                        \n\t\t\t\t                        <button type=\"button\" class=\"btn btn-previous\">Previous</button>\n\t\t\t\t                        <button type=\"submit\" class=\"btn\">Sign me up!</button>\n\t\t\t\t                    </div>\n\t\t\t                    </fieldset>\n\t\t                    \n\t\t                    </form>\n\t\t                    \n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n\n\t\n\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-signup/user-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSignUpComponent = (function () {
    function UserSignUpComponent() {
    }
    //  	model: any = {};
    //    loading = false;
    //   	constructor(public auth: AuthService,
    //              private router: Router,
    //              private userService: UserService) { }
    // register() {
    // 	this.loading = true;
    // 	this.userService.create(this.model)
    // 		.subscribe(
    // 			data => {
    // 				//set sucess message and pass true parameter to persist the message after redirectin to the login page
    // 				this.alertService.success('Registration Successful', true);
    // 				this.router.navigate(['/login']);
    // 			},
    // 			error => {
    // 				this.alertService.error(error);
    // 				this.loading=false;
    // 			});
    // }
    UserSignUpComponent.prototype.ngOnInit = function () { };
    return UserSignUpComponent;
}());
UserSignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-signup',
        template: __webpack_require__("../../../../../src/app/users/user-signup/user-signup.component.html")
        // ,
        // styleUrls: ['./user-signup.component.css']
    })
], UserSignUpComponent);

//# sourceMappingURL=user-signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/users/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/users/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_signup_user_signup_component__ = __webpack_require__("../../../../../src/app/users/user-signup/user-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_routing__ = __webpack_require__("../../../../../src/app/users/users.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__users_routing__["a" /* UsersRoutes */]),
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_4__user_login_user_login_component__["a" /* UserLoginComponent */], __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */], __WEBPACK_IMPORTED_MODULE_6__user_signup_user_signup_component__["a" /* UserSignUpComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__user_login_user_login_component__["a" /* UserLoginComponent */]
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/users/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/users/user-profile/user-profile.component.ts");

// import {SignUpComponent} from "./sign-up/sign-up.component";

var UsersRoutes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_0__user_login_user_login_component__["a" /* UserLoginComponent */]
            }
            // , {
            //     path: 'sign-up',
            //     component: SignUpComponent
            // }
            ,
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_component__["a" /* UserProfileComponent */]
            }
        ]
    }
];
//# sourceMappingURL=users.routing.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fitbitConfig; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDD1lnWD5j8KqwJxkEVU2U1S8sWgoIg5TI",
        authDomain: "v1-server-3648e.firebaseapp.com",
        databaseURL: "https://v1-server-3648e.firebaseio.com",
        projectId: "v1-server-3648e",
        storageBucket: "v1-server-3648e.appspot.com",
        messagingSenderId: "686599404842"
    }
};
var fitbitConfig = {
    clientId: "22CKGJ",
    clientSecret: "8786fc39bae197c08ca96acbab4ed7cf",
    authorisationUri: 'https://www.fitbit.com/oauth2/authorize',
    //access refresh token
    tokenRequestUri: "https://api.fitbit.com/oauth2/token",
    fitbitCallbackUrl: "https://localhost:4200" + "/fitbit",
    tempUrl: 'https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22CKGJ&redirect_uri=https%3A%2F%2Flocalhost%3A4200%2Ffitbit&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800',
    apiToken: 'e0893d63d1ec0f8ac6c7b3899096dbf4cb23a84d'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map