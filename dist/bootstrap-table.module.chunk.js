webpackJsonp(["bootstrap-table.module"],{

/***/ "../../../../../src/app/components/tables/bootstrap-table/basic/basic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Basic table card start -->\r\n    <app-card [title]=\"'Basic table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n        <span class=\"code-header\">use class <code>table</code> inside table element</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Basic table card end -->\r\n    <!-- Inverse table card start -->\r\n      <app-card [title]=\"'Inverse table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n        <span class=\"code-header\">use class <code>table-inverse</code> inside table element</span>\r\n      <div class=\"table-responsive\">\r\n          <table class=\"table table-inverse\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Inverse table card end -->\r\n    <!-- Hover table card start -->\r\n    <app-card [title]=\"'Hover table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table-hover</code> inside table element</span>\r\n      <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Hover table card end -->\r\n    <!-- Contextual classes table starts -->\r\n    <app-card [title]=\"'Contextual classes'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">For Make row Contextual add Contextual class like <code>.table-success</code> in <code> tr tag</code> and For cell add Contextual class in <code> td or th tag</code> . </span>\r\n      <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr class=\"table-active\">\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr class=\"table-success\">\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">4</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr class=\"table-warning\">\r\n              <th scope=\"row\">5</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">6</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr class=\"table-danger\">\r\n              <th scope=\"row\">7</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">8</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr class=\"table-info\">\r\n              <th scope=\"row\">9</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Contextual classes table ends -->\r\n    <!-- Background Utilities table start -->\r\n    <app-card [title]=\"'Background Utilities'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Regular table background variants are not available with the inverse table, however, you may use <code>text or background utilities</code> to achieve similar styles.</span>\r\n      <div class=\"table-responsive\">\r\n          <table class=\"table table-inverse\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr class=\"bg-primary\">\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr class=\"bg-success\">\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">4</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr class=\"bg-warning\">\r\n              <th scope=\"row\">5</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">6</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr class=\"bg-danger\">\r\n              <th scope=\"row\">7</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">8</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr class=\"bg-info\">\r\n              <th scope=\"row\">9</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Background Utilities table end -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
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

var BasicComponent = (function () {
    function BasicComponent() {
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    return BasicComponent;
}());
BasicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/basic/basic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/bootstrap-table/basic/basic.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet><spinner></spinner></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapTableComponent; });
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

var BootstrapTableComponent = (function () {
    function BootstrapTableComponent() {
    }
    BootstrapTableComponent.prototype.ngOnInit = function () {
    };
    return BootstrapTableComponent;
}());
BootstrapTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bootstrap-table',
        template: __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BootstrapTableComponent);

//# sourceMappingURL=bootstrap-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTableModule", function() { return BootstrapTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrap_table_routing__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap_table_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_basic_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sizing_sizing_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/sizing/sizing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__border_border_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/border/border.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styling_styling_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/styling/styling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BootstrapTableModule = (function () {
    function BootstrapTableModule() {
    }
    return BootstrapTableModule;
}());
BootstrapTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__bootstrap_table_routing__["a" /* BootstrapTableRoutes */]),
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__bootstrap_table_component__["a" /* BootstrapTableComponent */], __WEBPACK_IMPORTED_MODULE_5__basic_basic_component__["a" /* BasicComponent */], __WEBPACK_IMPORTED_MODULE_6__sizing_sizing_component__["a" /* SizingComponent */], __WEBPACK_IMPORTED_MODULE_7__border_border_component__["a" /* BorderComponent */], __WEBPACK_IMPORTED_MODULE_8__styling_styling_component__["a" /* StylingComponent */]]
    })
], BootstrapTableModule);

//# sourceMappingURL=bootstrap-table.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/bootstrap-table.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapTableRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_basic_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sizing_sizing_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/sizing/sizing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__border_border_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/border/border.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__ = __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/styling/styling.component.ts");




var BootstrapTableRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Tables',
            status: false
        },
        children: [
            {
                path: 'basic',
                component: __WEBPACK_IMPORTED_MODULE_0__basic_basic_component__["a" /* BasicComponent */],
                data: {
                    breadcrumb: 'Basic Table',
                    status: true
                }
            }, {
                path: 'sizing',
                component: __WEBPACK_IMPORTED_MODULE_1__sizing_sizing_component__["a" /* SizingComponent */],
                data: {
                    breadcrumb: 'Sizing Table',
                    status: true
                }
            }, {
                path: 'border',
                component: __WEBPACK_IMPORTED_MODULE_2__border_border_component__["a" /* BorderComponent */],
                data: {
                    breadcrumb: 'Border Table',
                    status: true
                }
            }, {
                path: 'styling',
                component: __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__["a" /* StylingComponent */],
                data: {
                    breadcrumb: 'Styling Table',
                    status: true
                }
            }
        ]
    }
];
//# sourceMappingURL=bootstrap-table.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/border/border.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/border/border.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Horizontal-border table start -->\r\n    <app-card [title]=\"'Horizontal borders'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of <code>horizontal</code> table borders. This is a default table border style attached to <code>.table</code> class. All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code>.table-framed</code> class added to the table with <code>.table</code> class.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-framed\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Horizontal-border table end -->\r\n    <!-- Vertical borders table start -->\r\n    <app-card [title]=\"'Vertical borders'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of <code>vertical</code> table borders. This is a default table border style attached to <code>.table</code> class. All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code>.table-framed</code> class added to the table with <code>.table</code> class.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-columned\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Vertical borders table start -->\r\n    <!-- Both borders table start -->\r\n    <app-card [title]=\"'Both borders'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of <code>table-bordered</code> table borders. This is a default table border style attached to <code>.table</code> class. All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code>.table-framed</code> class added to the table with <code>.table</code> class.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Both borders table end -->\r\n    <!-- Borderless table start -->\r\n    <app-card [title]=\"'Border less table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of <code>table-borderless</code> table borders. This is a default table border style attached to <code>.table</code> class. All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code>.table-framed</code> class added to the table with <code>.table</code> class.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Borderless table start -->\r\n    <!-- Default table border table start-->\r\n    <app-card [title]=\"'Default table border'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of a default <code>thead</code> border. This border has 1px width and slightly darker color than other borders for better visual separation of table <code>head</code> and table <code>body</code>. Vertical cell borders in the table head always have the same color as borders in table body.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Default table border table end-->\r\n    <!-- Solid border table start-->\r\n    <app-card [title]=\"'Solid border'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of a <code>solid</code>border inside table head. This border inherits all styling options from the default border style, the only difference is it has <code>2px</code> width. Sometimes it could be useful for visual separation and addition highlight. To use this border add <code>.border-solid</code> to the table head row.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr class=\"border-solid\">\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Solid border table end-->\r\n    <!-- Double border table start -->\r\n    <app-card [title]=\"'Double border'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of a <code>double</code> border inside table head. This border has <code>3px</code> width, <code>double</code> style and inherits all styling options from the default border style. Visually it displays table <code>head</code> and <code>body</code> as 2 separated table areas. To use this border add <code>.border-double</code> to the table head row.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr class=\"border-double\">\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Border-bottom color table start-->\r\n    <app-card [title]=\"'Border bottom color'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of a table head border with <code>custom</code> color. According to the custom color system options, you can set any of predefined colors by adding <code>.border-bottom-*</code> class to the table head row. This technique works with all border styles demonstrated above.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr class=\"border-bottom-danger\">\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr class=\"border-bottom-primary\">\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr class=\"border-bottom-warning\">\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/border/border.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorderComponent; });
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

var BorderComponent = (function () {
    function BorderComponent() {
    }
    BorderComponent.prototype.ngOnInit = function () {
    };
    return BorderComponent;
}());
BorderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-border',
        template: __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/border/border.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/bootstrap-table/border/border.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BorderComponent);

//# sourceMappingURL=border.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/sizing/sizing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/sizing/sizing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Extra Large table start -->\r\n    <app-card [title]=\"'Extra Large table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of Extra large table, Add <code>.table-xl</code> class to the <code>.table</code> to create a table with extra large spacing. Extra larger table all rows have <code>1.25rem</code> height.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-xl\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Extra Large table end -->\r\n    <!-- Large table start -->\r\n    <app-card [title]=\"'Large table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of large table, Add <code>.table-lg</code> class to the <code>.table</code> to create a table with  large spacing. larger table all rows have <code>0.9rem</code> height.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-lg\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Large table end -->\r\n    <!-- Default table start-->\r\n    <app-card [title]=\"'Default table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of default table, Add <code>.table-de</code> class to the <code>.table</code> to create a table with default spacing. Default table all rows have <code>0.75rem</code> height.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-de\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Default table end-->\r\n    <!-- Small table start-->\r\n    <app-card [title]=\"'small table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of small table, Add <code>.table-sm</code> class to the <code>.table</code> to create a table with small spacing. Small table all rows have <code>0.6rem</code> height.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-sm\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Small table start-->\r\n    <!-- Extra small table start-->\r\n    <app-card [title]=\"'Extra small table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Example of extra small table, Add <code>.table-xs</code> class to the <code>.table</code> to create a table with extra small spacing. Extra small table all rows have <code>0.4rem</code> height.</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-xs\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Extra small table start-->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/sizing/sizing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizingComponent; });
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

var SizingComponent = (function () {
    function SizingComponent() {
    }
    SizingComponent.prototype.ngOnInit = function () {
    };
    return SizingComponent;
}());
SizingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sizing',
        template: __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/sizing/sizing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/bootstrap-table/sizing/sizing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SizingComponent);

//# sourceMappingURL=sizing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/styling/styling.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/styling/styling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Default Styling table start -->\r\n    <app-card [title]=\"'Default Styling'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table table-styling</code> inside table element</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Default Styling table start -->\r\n    <!-- Table header styling table start -->\r\n    <app-card [title]=\"'Table Header styling'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table-primary, table-*</code> inside thead tr element</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-styling\">\r\n            <thead>\r\n            <tr class=\"table-primary\">\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Table header styling table end -->\r\n    <!-- Table footer Styling table start -->\r\n    <app-card [title]=\"'Table footer Styling'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table-info</code> inside tfoot element</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-styling\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot class=\"table-info\">\r\n            <tr>\r\n              <th scope=\"row\">#</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Table footer Styling table end -->\r\n    <!-- Custom table color table start -->\r\n    <app-card [title]=\"'Custom table color'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table-*</code> inside table element</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-styling table-info\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Custom table color table end -->\r\n    <!-- Custom Table color with hover and stripped table start -->\r\n    <app-card [title]=\"'Custom Table color with hover and stripped'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table-hover, table-striped table-*</code> inside table element</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-styling table-hover table-striped table-primary\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Custom Table color with hover and stripped table end -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/bootstrap-table/styling/styling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingComponent; });
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

var StylingComponent = (function () {
    function StylingComponent() {
    }
    StylingComponent.prototype.ngOnInit = function () {
    };
    return StylingComponent;
}());
StylingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-styling',
        template: __webpack_require__("../../../../../src/app/components/tables/bootstrap-table/styling/styling.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/bootstrap-table/styling/styling.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StylingComponent);

//# sourceMappingURL=styling.component.js.map

/***/ })

});
//# sourceMappingURL=bootstrap-table.module.chunk.js.map