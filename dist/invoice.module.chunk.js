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

module.exports = "<div class=\"container\">\r\n  <!-- Main content starts -->\r\n  <div>\r\n    <!-- Invoice card start -->\r\n    <div class=\"card\">\r\n      <div class=\"row invoice-contact\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"invoice-box row\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-responsive invoice-table table-borderless m-l-20\">\r\n                <tbody>\r\n                <tr>\r\n                  <td><img src=\"assets/images/logo-blue.png\" class=\"m-b-10\" alt=\"\"></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Codedthemes</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>208, Paris Point, Varachha Road, Surat. (1234) - 567891</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><a href=\"mailto:demo@gmail.com\" target=\"_top\">demo@gmail.com</a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>+91 919-91-91-919</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-sm-12 invoice-btn-group\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-print-invoice waves-effect waves-light m-b-10 btn-sm m-r-20\">Print Invoice\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger waves-effect waves-light m-b-10 btn-sm\">Cancel Invoice\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row invoive-info\">\r\n          <div class=\"col-md-4 col-xs-12 invoice-client-info\">\r\n            <h6>Client Information :</h6>\r\n            <h6 class=\"m-0\">Josephin Villa</h6>\r\n            <p class=\"m-0 m-t-10\">208, Peris Point, Varachha Road, Surat.</p>\r\n            <p class=\"m-0\">(1234) - 567891</p>\r\n            <p>demo@codedthemes.com</p>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-6\">\r\n            <h6>Order Information :</h6>\r\n            <table class=\"table table-responsive invoice-table invoice-order table-borderless\">\r\n              <tbody>\r\n              <tr>\r\n                <th>Date :</th>\r\n                <td>November 14</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Status :</th>\r\n                <td>\r\n                  <span class=\"label label-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>Id :</th>\r\n                <td>\r\n                  #145698\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-6\">\r\n            <h6 class=\"m-b-20\">Invoice Number   <span>#12398521473</span></h6>\r\n            <h6 class=\"text-uppercase text-primary\">Total Due :\r\n              <span>$900.00</span>\r\n            </h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table  invoice-detail-table\">\r\n                <thead>\r\n                <tr class=\"thead-default\">\r\n                  <th>Description</th>\r\n                  <th>Quantity</th>\r\n                  <th>Amount</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <h6>Logo Design</h6>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\r\n                  </td>\r\n                  <td>6</td>\r\n                  <td>$200.00</td>\r\n                  <td>$1200.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <h6>Logo Design</h6>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\r\n                  </td>\r\n                  <td>7</td>\r\n                  <td>$100.00</td>\r\n                  <td>$700.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <h6>Logo Design</h6>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\r\n                  </td>\r\n                  <td>5</td>\r\n                  <td>$150.00</td>\r\n                  <td>$750.00</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table table-responsive invoice-table invoice-total\">\r\n              <tbody>\r\n              <tr>\r\n                <th>Sub Total :</th>\r\n                <td>$4725.00</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Taxes (10%) :</th>\r\n                <td>$57.00</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Discount (5%) :</th>\r\n                <td>$45.00</td>\r\n              </tr>\r\n              <tr class=\"text-info\">\r\n                <td>\r\n                  <hr/>\r\n                  <h5 class=\"text-primary\">Total  :</h5>\r\n                </td>\r\n                <td>\r\n                  <hr/>\r\n                  <h5 class=\"text-primary\">$4827.00</h5>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <h6>Terms And Condition :</h6>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Invoice card end -->\r\n  </div>\r\n</div>"

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

module.exports = "<p>\r\n  invoice works!\r\n</p>\r\n"

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

module.exports = "<div class=\"row\">\r\n  <!-- Right column start -->\r\n  <div class=\"col-xl-3 col-lg-12 push-xl-9\">\r\n    <!-- Search box card start -->\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5 class=\"card-header-text\">Search Box</h5></div>\r\n      <div class=\"card-body p-t-10\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search here...\">\r\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"icofont icofont-search\"></i></span>\r\n        </div>\r\n        <div class=\"task-right\">\r\n          <div class=\"accordion-block scale-accordion\">\r\n            <squeezebox [multiple]=\"true\">\r\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n                <sb-item-head class=\"accordion-heading\">\r\n                  <div class=\"task-right-header-status\">\r\n                    <span data-toggle=\"collapse\">Completed Stats</span>\r\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\r\n                  </div>\r\n                </sb-item-head>\r\n                <sb-item-body class=\"accordion-content\">\r\n                  <div class=\"taskboard-right-progress\">\r\n                    <h6>Highest Priority</h6>\r\n                    <div class=\"faq-progress\">\r\n                      <div class=\"progress\">\r\n                        <!-- <span class=\"faq-text3\"></span> -->\r\n                        <div class=\"faq-bar3\" style=\"width: 80%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                    <h6>High priority</h6>\r\n                    <div class=\"faq-progress\">\r\n                      <div class=\"progress\">\r\n                        <!-- <span class=\"faq-text1\"></span> -->\r\n                        <div class=\"faq-bar1\" style=\"width: 70%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                    <h6>Normal priority</h6>\r\n                    <div class=\"faq-progress\">\r\n                      <div class=\"progress\">\r\n                        <!-- <span class=\"faq-text2\"></span> -->\r\n                        <div class=\"faq-bar2\" style=\"width: 50%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                    <h6>Low priority</h6>\r\n                    <div class=\"faq-progress\">\r\n                      <div class=\"progress\">\r\n                        <!-- <span class=\"faq-text4\"></span> -->\r\n                        <div class=\"faq-bar4\" style=\"width: 60%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </sb-item-body>\r\n              </sb-item>\r\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n                <sb-item-head class=\"accordion-heading\">\r\n                  <div class=\"task-right-header-users\">\r\n                    <span data-toggle=\"collapse\">Assign Users</span>\r\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\r\n                  </div>\r\n                </sb-item-head>\r\n                <sb-item-body class=\"accordion-content\">\r\n                  <div class=\"user-box assign-user taskboard-right-users\">\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left media-middle photo-table\">\r\n                        <a href=\"javascript:;\">\r\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\r\n                          <div class=\"live-status bg-danger\"></div>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <h6>Josephin Doe</h6>\r\n                        <p>Santa Ana,CA</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left media-middle photo-table\">\r\n                        <a href=\"javascript:;\">\r\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\r\n                          <div class=\"live-status bg-success\"></div>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <h6>Josephin Doe</h6>\r\n                        <p>Huntingston, NJ</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left media-middle photo-table\">\r\n                        <a href=\"javascript:;\">\r\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-3.png\" alt=\"Generic placeholder image\">\r\n                          <div class=\"live-status bg-danger\"></div>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <h6>Josephin Doe</h6>\r\n                        <p>Willingstion, WA</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left media-middle photo-table\">\r\n                        <a href=\"javascript:;\">\r\n                          <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\r\n                          <div class=\"live-status bg-success\"></div>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <h6>Josephin Doe</h6>\r\n                        <p>Illions, IL</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </sb-item-body>\r\n              </sb-item>\r\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n                <sb-item-head class=\"accordion-heading\">\r\n                  <div class=\"task-right-header-revision\">\r\n                    <span data-toggle=\"collapse\">Revision</span>\r\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\r\n                  </div>\r\n                </sb-item-head>\r\n                <sb-item-body class=\"accordion-content\">\r\n                  <div class=\"taskboard-right-revision user-box\">\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-primary btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-gears\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Drop the IE specific hacks for temporal inputs</div>\r\n                        <p class=\"chat-header  text-muted\">4 minutes ago</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-danger btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-share\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Have Carousel ignore keyboard events</div>\r\n                        <p class=\"chat-header  text-muted\">12 Dec,2015</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-warning btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-font\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Add full font overrides for popovers and tooltips</div>\r\n                        <p class=\"chat-header text-muted\">2 month ago</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-success btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-responsive\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Responsive Asssignment</div>\r\n                        <p class=\"chat-header  text-muted\">6 month ago</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                  </div>\r\n                </sb-item-body>\r\n              </sb-item>\r\n            </squeezebox>\r\n          </div>\r\n          <!-- end of task-right-revision -->\r\n        </div>\r\n        <!-- end of sidebar-right -->\r\n      </div>\r\n      <!-- end of card-body -->\r\n    </div>\r\n    <!-- Search box card end -->\r\n  </div>\r\n  <!-- Right column end -->\r\n  <!-- Left column start -->\r\n  <div class=\"col-xl-9 col-lg-12 pull-xl-3 filter-bar\">\r\n    <!-- Nav Filter tab start -->\r\n    <nav class=\"navbar navbar-light bg-faded m-b-30 p-10\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"javascript:;\">Filter: <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li ngbDropdown=\"\" class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle=\"\" class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bydate\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-clock-time\"></i> By Date</a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bydate\">\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Today</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Yesterday</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">This week</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">This month</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">This year</a>\r\n          </div>\r\n        </li>\r\n        <!-- end of by date dropdown -->\r\n        <li ngbDropdown class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bystatus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-chart-histogram-alt\"></i> By Status</a>\r\n          <div  ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bystatus\">\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Open</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">On hold</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Resolved</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Closed</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Dublicate</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Wontfix</a>\r\n          </div>\r\n        </li>\r\n        <!-- end of by status dropdown -->\r\n        <li ngbDropdown class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bypriority\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-sub-listing\"></i> By Priority</a>\r\n          <div  ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bypriority\">\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Highest</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">High</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Normal</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Low</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n        <div class=\"nav-item nav-grid\">\r\n          <span class=\"m-r-15\">View Mode: </span>\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"list view\">\r\n            <i class=\"icofont icofont-listine-dots\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"grid view\">\r\n            <i class=\"icofont icofont-table\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- end of by priority dropdown -->\r\n    </nav>\r\n    <!-- Nav Filter tab end -->\r\n    <!-- Task board design block start-->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-primary\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-warning\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-warning\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-info\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-success\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-danger\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-warning\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <!-- Invoice list card start -->\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown13\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown13\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">SWIFT</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-primary\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javasript:;\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown10\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n        <!-- Invoice list card end -->\r\n      </div>\r\n    </div>\r\n    <!-- Task board design block end -->\r\n  </div>\r\n  <!-- Left column end -->\r\n</div>"

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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <!-- Sales and expense card start -->\r\n    <app-card [title]=\"'Sales and Expenses'\">\r\n      <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"height:290px;width:100%\"></chart>\r\n    </app-card>\r\n    <!-- Sales and expense card end -->\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <!-- Summary card start -->\r\n    <app-card [title]=\"'Summary'\">\r\n        <div id=\"chart2\"></div>\r\n    </app-card>\r\n    <!-- Summary card end -->\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <!-- Top Expense card start -->\r\n    <app-card [title]=\"'Top Expense'\">\r\n        <div id=\"chart3\"></div>\r\n    </app-card>\r\n    <!-- Top Expense card end -->\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <!-- Sales, Receipt and Dues card start -->\r\n    <app-card [title]=\"'Sales, Receipt and Dues'\" [blockClass]=\"'table-border-style'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-lg table-hover\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Sales</th>\r\n              <th>Receipt</th>\r\n              <th>Dues</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">Today</th>\r\n              <td>$250.00</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">This Week</th>\r\n              <td>$380.00</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">This Month</th>\r\n              <td>$450.00</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">This Year</th>\r\n              <td>$600.00</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">Total</th>\r\n              <td>$600.00</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Sales, Receipt and Dues card end -->\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <!-- Recent Orders card start -->\r\n    <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'table-border-style'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-lg table-styling\">\r\n            <thead>\r\n            <tr class=\"table-primary\">\r\n              <th>#</th>\r\n              <th>Order No.</th>\r\n              <th>Product Name</th>\r\n              <th>Quantity</th>\r\n              <th>Price</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>54822</td>\r\n              <td>Product 1</td>\r\n              <td>2</td>\r\n              <td>\r\n                <label class=\"label label-md label-danger\">$99.00</label>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>54823</td>\r\n              <td>Product 2</td>\r\n              <td>1</td>\r\n              <td>\r\n                <label class=\"label label-md label-success\">$29.00</label>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td>54824</td>\r\n              <td>Product 3</td>\r\n              <td>3</td>\r\n              <td>\r\n                <label class=\"label label-md label-warning\">$109.00</label>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </app-card>\r\n    <!-- Recent Orders card end -->\r\n  </div>\r\n</div>"

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