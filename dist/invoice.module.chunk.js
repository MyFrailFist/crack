webpackJsonp(["invoice.module"],{

/***/ "../../../../../src/app/components/invoice/basic/basic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/invoice/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Main content starts -->\n  <div>\n    <!-- Invoice card start -->\n    <div class=\"card\">\n      <div class=\"row invoice-contact\">\n        <div class=\"col-md-8\">\n          <div class=\"invoice-box row\">\n            <div class=\"col-sm-12\">\n              <table class=\"table table-responsive invoice-table table-borderless m-l-20\">\n                <tbody>\n                <tr>\n                  <td><img src=\"assets/images/logo-blue.png\" class=\"m-b-10\" alt=\"\"></td>\n                </tr>\n                <tr>\n                  <td>Codedthemes</td>\n                </tr>\n                <tr>\n                  <td>208, Paris Point, Varachha Road, Surat. (1234) - 567891</td>\n                </tr>\n                <tr>\n                  <td><a href=\"mailto:demo@gmail.com\" target=\"_top\">demo@gmail.com</a>\n                  </td>\n                </tr>\n                <tr>\n                  <td>+91 919-91-91-919</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"row text-center\">\n            <div class=\"col-sm-12 invoice-btn-group\">\n              <button type=\"button\" class=\"btn btn-primary btn-print-invoice waves-effect waves-light m-b-10 btn-sm m-r-20\">Print Invoice\n              </button>\n              <button type=\"button\" class=\"btn btn-danger waves-effect waves-light m-b-10 btn-sm\">Cancel Invoice\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row invoive-info\">\n          <div class=\"col-md-4 col-xs-12 invoice-client-info\">\n            <h6>Client Information :</h6>\n            <h6 class=\"m-0\">Josephin Villa</h6>\n            <p class=\"m-0 m-t-10\">208, Peris Point, Varachha Road, Surat.</p>\n            <p class=\"m-0\">(1234) - 567891</p>\n            <p>demo@codedthemes.com</p>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <h6>Order Information :</h6>\n            <table class=\"table table-responsive invoice-table invoice-order table-borderless\">\n              <tbody>\n              <tr>\n                <th>Date :</th>\n                <td>November 14</td>\n              </tr>\n              <tr>\n                <th>Status :</th>\n                <td>\n                  <span class=\"label label-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <th>Id :</th>\n                <td>\n                  #145698\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <h6 class=\"m-b-20\">Invoice Number   <span>#12398521473</span></h6>\n            <h6 class=\"text-uppercase text-primary\">Total Due :\n              <span>$900.00</span>\n            </h6>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"table-responsive\">\n              <table class=\"table  invoice-detail-table\">\n                <thead>\n                <tr class=\"thead-default\">\n                  <th>Description</th>\n                  <th>Quantity</th>\n                  <th>Amount</th>\n                  <th>Total</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>\n                    <h6>Logo Design</h6>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                  </td>\n                  <td>6</td>\n                  <td>$200.00</td>\n                  <td>$1200.00</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h6>Logo Design</h6>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                  </td>\n                  <td>7</td>\n                  <td>$100.00</td>\n                  <td>$700.00</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h6>Logo Design</h6>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                  </td>\n                  <td>5</td>\n                  <td>$150.00</td>\n                  <td>$750.00</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <table class=\"table table-responsive invoice-table invoice-total\">\n              <tbody>\n              <tr>\n                <th>Sub Total :</th>\n                <td>$4725.00</td>\n              </tr>\n              <tr>\n                <th>Taxes (10%) :</th>\n                <td>$57.00</td>\n              </tr>\n              <tr>\n                <th>Discount (5%) :</th>\n                <td>$45.00</td>\n              </tr>\n              <tr class=\"text-info\">\n                <td>\n                  <hr/>\n                  <h5 class=\"text-primary\">Total  :</h5>\n                </td>\n                <td>\n                  <hr/>\n                  <h5 class=\"text-primary\">$4827.00</h5>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h6>Terms And Condition :</h6>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Invoice card end -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/invoice/basic/basic.component.ts":
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
        template: __webpack_require__("../../../../../src/app/components/invoice/basic/basic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/invoice/basic/basic.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  invoice works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
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

var InvoiceComponent = (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-invoice',
        template: __webpack_require__("../../../../../src/app/components/invoice/invoice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/invoice/invoice.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InvoiceComponent);

//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_component__ = __webpack_require__("../../../../../src/app/components/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__ = __webpack_require__("../../../../../src/app/components/invoice/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__summary_summary_component__ = __webpack_require__("../../../../../src/app/components/invoice/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list_component__ = __webpack_require__("../../../../../src/app/components/invoice/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoice_routing__ = __webpack_require__("../../../../../src/app/components/invoice/invoice.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__invoice_routing__["a" /* InvoiceRoutes */]),
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__invoice_component__["a" /* InvoiceComponent */], __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__["a" /* BasicComponent */], __WEBPACK_IMPORTED_MODULE_5__summary_summary_component__["a" /* SummaryComponent */], __WEBPACK_IMPORTED_MODULE_6__list_list_component__["a" /* ListComponent */]]
    })
], InvoiceModule);

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/invoice/invoice.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_basic_component__ = __webpack_require__("../../../../../src/app/components/invoice/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__summary_summary_component__ = __webpack_require__("../../../../../src/app/components/invoice/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list_component__ = __webpack_require__("../../../../../src/app/components/invoice/list/list.component.ts");



var InvoiceRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Invoice',
            status: false
        },
        children: [
            {
                path: 'basic',
                component: __WEBPACK_IMPORTED_MODULE_0__basic_basic_component__["a" /* BasicComponent */],
                data: {
                    breadcrumb: 'Invoice',
                    status: true
                }
            }, {
                path: 'summary',
                component: __WEBPACK_IMPORTED_MODULE_1__summary_summary_component__["a" /* SummaryComponent */],
                data: {
                    breadcrumb: 'Invoice Summary',
                    status: true
                }
            }, {
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_2__list_list_component__["a" /* ListComponent */],
                data: {
                    breadcrumb: 'Invoice List',
                    status: true
                }
            }
        ]
    }
];
//# sourceMappingURL=invoice.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/invoice/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".squeezebox .sb-item {\r\n    overflow: hidden;\r\n}\r\n\r\n.squeezebox .sb-item .sb-item-body {\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: 0.5s height;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/invoice/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Right column start -->\n  <div class=\"col-xl-3 col-lg-12 push-xl-9\">\n    <!-- Search box card start -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-header-text\">Search Box</h5></div>\n      <div class=\"card-body p-t-10\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search here...\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"icofont icofont-search\"></i></span>\n        </div>\n        <div class=\"task-right\">\n          <div class=\"accordion-block scale-accordion\">\n            <squeezebox [multiple]=\"true\">\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\n                <sb-item-head class=\"accordion-heading\">\n                  <div class=\"task-right-header-status\">\n                    <span data-toggle=\"collapse\">Completed Stats</span>\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\n                  </div>\n                </sb-item-head>\n                <sb-item-body class=\"accordion-content\">\n                  <div class=\"taskboard-right-progress\">\n                    <h6>Highest Priority</h6>\n                    <div class=\"faq-progress\">\n                      <div class=\"progress\">\n                        <!-- <span class=\"faq-text3\"></span> -->\n                        <div class=\"faq-bar3\" style=\"width: 80%;\"></div>\n                      </div>\n                    </div>\n                    <h6>High priority</h6>\n                    <div class=\"faq-progress\">\n                      <div class=\"progress\">\n                        <!-- <span class=\"faq-text1\"></span> -->\n                        <div class=\"faq-bar1\" style=\"width: 70%;\"></div>\n                      </div>\n                    </div>\n                    <h6>Normal priority</h6>\n                    <div class=\"faq-progress\">\n                      <div class=\"progress\">\n                        <!-- <span class=\"faq-text2\"></span> -->\n                        <div class=\"faq-bar2\" style=\"width: 50%;\"></div>\n                      </div>\n                    </div>\n                    <h6>Low priority</h6>\n                    <div class=\"faq-progress\">\n                      <div class=\"progress\">\n                        <!-- <span class=\"faq-text4\"></span> -->\n                        <div class=\"faq-bar4\" style=\"width: 60%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </sb-item-body>\n              </sb-item>\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\n                <sb-item-head class=\"accordion-heading\">\n                  <div class=\"task-right-header-users\">\n                    <span data-toggle=\"collapse\">Assign Users</span>\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\n                  </div>\n                </sb-item-head>\n                <sb-item-body class=\"accordion-content\">\n                  <div class=\"user-box assign-user taskboard-right-users\">\n                    <div class=\"media\">\n                      <div class=\"media-left media-middle photo-table\">\n                        <a href=\"javascript:;\">\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\n                          <div class=\"live-status bg-danger\"></div>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <h6>Josephin Doe</h6>\n                        <p>Santa Ana,CA</p>\n                      </div>\n                    </div>\n                    <div class=\"media\">\n                      <div class=\"media-left media-middle photo-table\">\n                        <a href=\"javascript:;\">\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\n                          <div class=\"live-status bg-success\"></div>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <h6>Josephin Doe</h6>\n                        <p>Huntingston, NJ</p>\n                      </div>\n                    </div>\n                    <div class=\"media\">\n                      <div class=\"media-left media-middle photo-table\">\n                        <a href=\"javascript:;\">\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-3.png\" alt=\"Generic placeholder image\">\n                          <div class=\"live-status bg-danger\"></div>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <h6>Josephin Doe</h6>\n                        <p>Willingstion, WA</p>\n                      </div>\n                    </div>\n                    <div class=\"media\">\n                      <div class=\"media-left media-middle photo-table\">\n                        <a href=\"javascript:;\">\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\n                          <div class=\"live-status bg-success\"></div>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <h6>Josephin Doe</h6>\n                        <p>Illions, IL</p>\n                      </div>\n                    </div>\n                  </div>\n                </sb-item-body>\n              </sb-item>\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\n                <sb-item-head class=\"accordion-heading\">\n                  <div class=\"task-right-header-revision\">\n                    <span data-toggle=\"collapse\">Revision</span>\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\n                  </div>\n                </sb-item-head>\n                <sb-item-body class=\"accordion-content\">\n                  <div class=\"taskboard-right-revision user-box\">\n                    <div class=\"media\">\n                      <div class=\"media-left\">\n                        <a class=\"btn btn-outline-primary btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-gears\"></i>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <div class=\"chat-header\">Drop the IE specific hacks for temporal inputs</div>\n                        <p class=\"chat-header  text-muted\">4 minutes ago</p>\n                      </div>\n                      <!-- end of media body -->\n                    </div>\n                    <!-- end of media -->\n                    <div class=\"media\">\n                      <div class=\"media-left\">\n                        <a class=\"btn btn-outline-danger btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-share\"></i>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <div class=\"chat-header\">Have Carousel ignore keyboard events</div>\n                        <p class=\"chat-header  text-muted\">12 Dec,2015</p>\n                      </div>\n                      <!-- end of media body -->\n                    </div>\n                    <!-- end of media -->\n                    <div class=\"media\">\n                      <div class=\"media-left\">\n                        <a class=\"btn btn-outline-warning btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-font\"></i>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <div class=\"chat-header\">Add full font overrides for popovers and tooltips</div>\n                        <p class=\"chat-header text-muted\">2 month ago</p>\n                      </div>\n                      <!-- end of media body -->\n                    </div>\n                    <!-- end of media -->\n                    <div class=\"media\">\n                      <div class=\"media-left\">\n                        <a class=\"btn btn-outline-success btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-responsive\"></i>\n                        </a>\n                      </div>\n                      <div class=\"media-body\">\n                        <div class=\"chat-header\">Responsive Asssignment</div>\n                        <p class=\"chat-header  text-muted\">6 month ago</p>\n                      </div>\n                      <!-- end of media body -->\n                    </div>\n                    <!-- end of media -->\n                  </div>\n                </sb-item-body>\n              </sb-item>\n            </squeezebox>\n          </div>\n          <!-- end of task-right-revision -->\n        </div>\n        <!-- end of sidebar-right -->\n      </div>\n      <!-- end of card-body -->\n    </div>\n    <!-- Search box card end -->\n  </div>\n  <!-- Right column end -->\n  <!-- Left column start -->\n  <div class=\"col-xl-9 col-lg-12 pull-xl-3 filter-bar\">\n    <!-- Nav Filter tab start -->\n    <nav class=\"navbar navbar-light bg-faded m-b-30 p-10\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"javascript:;\">Filter: <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li ngbDropdown=\"\" class=\"nav-item dropdown\">\n          <a ngbDropdownToggle=\"\" class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bydate\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-clock-time\"></i> By Date</a>\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bydate\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Today</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Yesterday</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">This week</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">This month</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">This year</a>\n          </div>\n        </li>\n        <!-- end of by date dropdown -->\n        <li ngbDropdown class=\"nav-item dropdown\">\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bystatus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-chart-histogram-alt\"></i> By Status</a>\n          <div  ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bystatus\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Open</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">On hold</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Resolved</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Closed</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Dublicate</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Wontfix</a>\n          </div>\n        </li>\n        <!-- end of by status dropdown -->\n        <li ngbDropdown class=\"nav-item dropdown\">\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bypriority\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-sub-listing\"></i> By Priority</a>\n          <div  ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bypriority\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Highest</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">High</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Normal</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Low</a>\n          </div>\n        </li>\n      </ul>\n        <div class=\"nav-item nav-grid\">\n          <span class=\"m-r-15\">View Mode: </span>\n          <button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"list view\">\n            <i class=\"icofont icofont-listine-dots\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"grid view\">\n            <i class=\"icofont icofont-table\"></i>\n          </button>\n        </div>\n        <!-- end of by priority dropdown -->\n    </nav>\n    <!-- Nav Filter tab end -->\n    <!-- Task board design block start-->\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-primary\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-warning\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-warning\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-info\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-success\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-danger\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-warning\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- Invoice list card start -->\n        <div class=\"card card-border-primary\">\n          <div class=\"card-header\">\n            <h5>John Doe </h5>\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\n              </div>\n              <!-- end of dropdown menu -->\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled\">\n                  <li>Invoice #: &nbsp;0028</li>\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list list-unstyled text-right\">\n                  <li>$8,750</li>\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"task-list-table\">\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-primary\">23 hours</strong></p>\n            </div>\n            <div class=\"task-board m-0\">\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\n              <!-- end of dropdown-secondary -->\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\n                </div>\n                <!-- end of dropdown menu -->\n              </div>\n              <!-- end of seconadary -->\n            </div>\n            <!-- end of pull-right class -->\n          </div>\n          <!-- end of card-footer -->\n        </div>\n        <!-- Invoice list card end -->\n      </div>\n    </div>\n    <!-- Task board design block end -->\n  </div>\n  <!-- Left column end -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/invoice/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
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

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/invoice/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/invoice/list/list.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/invoice/summary/summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/invoice/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <!-- Sales and expense card start -->\n    <app-card [title]=\"'Sales and Expenses'\">\n      <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"height:290px;width:100%\"></chart>\n    </app-card>\n    <!-- Sales and expense card end -->\n  </div>\n  <div class=\"col-lg-6\">\n    <!-- Summary card start -->\n    <app-card [title]=\"'Summary'\">\n        <div id=\"chart2\"></div>\n    </app-card>\n    <!-- Summary card end -->\n  </div>\n  <div class=\"col-lg-6\">\n    <!-- Top Expense card start -->\n    <app-card [title]=\"'Top Expense'\">\n        <div id=\"chart3\"></div>\n    </app-card>\n    <!-- Top Expense card end -->\n  </div>\n  <div class=\"col-lg-6\">\n    <!-- Sales, Receipt and Dues card start -->\n    <app-card [title]=\"'Sales, Receipt and Dues'\" [blockClass]=\"'table-border-style'\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-lg table-hover\">\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>Sales</th>\n              <th>Receipt</th>\n              <th>Dues</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th scope=\"row\">Today</th>\n              <td>$250.00</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">This Week</th>\n              <td>$380.00</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">This Month</th>\n              <td>$450.00</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">This Year</th>\n              <td>$600.00</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Total</th>\n              <td>$600.00</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n    </app-card>\n    <!-- Sales, Receipt and Dues card end -->\n  </div>\n  <div class=\"col-lg-12\">\n    <!-- Recent Orders card start -->\n    <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'table-border-style'\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-lg table-styling\">\n            <thead>\n            <tr class=\"table-primary\">\n              <th>#</th>\n              <th>Order No.</th>\n              <th>Product Name</th>\n              <th>Quantity</th>\n              <th>Price</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>54822</td>\n              <td>Product 1</td>\n              <td>2</td>\n              <td>\n                <label class=\"label label-md label-danger\">$99.00</label>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>54823</td>\n              <td>Product 2</td>\n              <td>1</td>\n              <td>\n                <label class=\"label label-md label-success\">$29.00</label>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td>54824</td>\n              <td>Product 3</td>\n              <td>3</td>\n              <td>\n                <label class=\"label label-md label-warning\">$109.00</label>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n    </app-card>\n    <!-- Recent Orders card end -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/invoice/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__("../../../../c3/c3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryComponent = (function () {
    function SummaryComponent() {
        this.type1 = 'bar';
        this.data1 = {
            labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'Sales',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50, 45],
                }, {
                    label: 'Expense',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            barValueSpacing: 20
        };
    }
    SummaryComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var chart2 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart2',
                data: {
                    columns: [
                        ['Current', 100],
                        ['Overdue by 15 days', 120],
                        ['Overdue by 30 days', 30],
                    ],
                    type: 'donut',
                    onclick: function (d, i) { console.log('onclick', d, i); },
                    onmouseover: function (d, i) { console.log('onmouseover', d, i); },
                    onmouseout: function (d, i) { console.log('onmouseout', d, i); }
                },
                color: {
                    pattern: ['#4CAF50', '#2196F3', '#e74c3c']
                },
                donut: {
                    title: 'Invoice Summary'
                }
            });
            var chart3 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart3',
                data: {
                    // iris data from R
                    columns: [
                        ['Electricity', 40],
                        ['Internet', 20],
                        ['Assets', 120],
                        ['Party', 10],
                        ['Infrastructure', 90],
                    ],
                    type: 'pie',
                    onclick: function (d, i) { console.log('onclick', d, i); },
                    onmouseover: function (d, i) { console.log('onmouseover', d, i); },
                    onmouseout: function (d, i) { console.log('onmouseout', d, i); }
                },
                color: {
                    pattern: ['#2196F3', '#4CAF50', '#ff5252', '#f57c00', '#ccc']
                },
            });
        }, 1);
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__("../../../../../src/app/components/invoice/summary/summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/invoice/summary/summary.component.css"), __webpack_require__("../../../../c3/c3.min.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], SummaryComponent);

//# sourceMappingURL=summary.component.js.map

/***/ })

});
//# sourceMappingURL=invoice.module.chunk.js.map