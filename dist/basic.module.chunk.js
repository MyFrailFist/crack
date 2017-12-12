webpackJsonp(["basic.module"],{

/***/ "../../../../../src/app/components/basic/accordion/accordion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".squeezebox .sb-item {\r\n    overflow: hidden;\r\n}\r\n\r\n.squeezebox .sb-item .sb-item-body {\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: 0.5s height;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basic/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Row start -->\r\n<div class=\"row\">\r\n  <!-- Multiple Open Accordion start -->\r\n  <div class=\"col-lg-6\">\r\n    <app-card [title]=\"'MULTIPLE OPEN ACCORDION'\" [blockClass]=\"'accordion-block scale-accordion'\">\r\n      <squeezebox [multiple]=\"true\">\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </app-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <app-card [title]=\"'Single Open Accordion'\" [blockClass]=\"'accordion-block'\">\r\n      <squeezebox [multiple]=\"false\">\r\n        <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<!-- row end -->\r\n<!-- row start -->\r\n<div class=\"row\">\r\n  <!-- Multiple Open Accordion start -->\r\n  <div class=\"col-lg-6\">\r\n    <app-card [title]=\"'SCALE ACCORDION'\" [blockClass]=\"'accordion-block scale-accordion'\">\r\n      <squeezebox [multiple]=\"false\">\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </app-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <app-card [title]=\"'COLOR ACCORDION'\" [blockClass]=\"'accordion-block'\">\r\n      <squeezebox [multiple]=\"false\">\r\n        <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-heading bg-primary accordion-msg\">Lorem Message 1</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-heading bg-danger accordion-msg\">Lorem Message 2</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n        <sb-item class=\"accordion-panel\">\r\n          <sb-item-head class=\"accordion-heading bg-success accordion-msg\">Lorem Message 3</sb-item-head>\r\n          <sb-item-body class=\"accordion-content\">\r\n            <div class=\"accordion-desc\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n            </div>\r\n          </sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<!-- row end -->"

/***/ }),

/***/ "../../../../../src/app/components/basic/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
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

var AccordionComponent = (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    return AccordionComponent;
}());
AccordionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accordion',
        template: __webpack_require__("../../../../../src/app/components/basic/accordion/accordion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/basic/accordion/accordion.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], AccordionComponent);

//# sourceMappingURL=accordion.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Default alert'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"sub-title\">Default Alert</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <!-- Border Alert start -->\r\n          <div class=\"alert alert-default\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Default!</strong> add Class <code> alert-default</code>\r\n          </div>\r\n          <div class=\"alert alert-primary\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Primary!</strong> add Class <code> alert-primary</code>\r\n          </div>\r\n          <div class=\"alert alert-success\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Success!</strong> add Class <code> alert-success</code>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <div class=\"alert alert-info\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Info!</strong> add Class <code> alert-info</code>\r\n          </div>\r\n          <div class=\"alert alert-warning\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Warning!</strong> add Class <code> alert-warning</code>\r\n          </div>\r\n          <div class=\"alert alert-danger\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Danger!</strong> add Class <code> alert-danger</code>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Border Alert end -->\r\n      <!-- Left Border Alert start -->\r\n      <div class=\"sub-title\">Border Alert</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <div class=\"alert alert-default border-default\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Default!</strong> add Class <code> border-default</code>\r\n          </div>\r\n          <div class=\"alert alert-primary border-primary\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Primary!</strong> add Class <code> border-primary</code>\r\n          </div>\r\n          <div class=\"alert alert-success border-success\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Success!</strong> add Class <code> border-success</code>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <div class=\"alert alert-info border-info\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Info!</strong> add Class <code> border-info</code>\r\n          </div>\r\n          <div class=\"alert alert-warning border-warning\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Warning!</strong> add Class <code> border-warning</code>\r\n          </div>\r\n          <div class=\"alert alert-danger border-danger\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <strong>Danger!</strong> Add Class <code> border-danger</code>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Left Border Alert start -->\r\n      <!-- Solid Alert start -->\r\n      <div class=\"sub-title\">Solid Border Alert</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <div class=\"alert alert-default background-default\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled text-white\"></i>\r\n            </button>\r\n            <strong>Default!</strong> Add Class <code> background-default</code>\r\n          </div>\r\n          <div class=\"alert alert-primary background-primary\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled text-white\"></i>\r\n            </button>\r\n            <strong>Primary!</strong> Add Class <code> background-primary</code>\r\n          </div>\r\n          <div class=\"alert alert-success background-success\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled text-white\"></i>\r\n            </button>\r\n            <strong>Success!</strong> Add Class <code> background-success</code>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <div class=\"alert alert-info background-info\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled text-white\"></i>\r\n            </button>\r\n            <strong>Info!</strong> Add Class <code> background-info</code>\r\n          </div>\r\n          <div class=\"alert alert-warning background-warning\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled text-white\"></i>\r\n            </button>\r\n            <strong>Warning!</strong> Add Class <code> background-warning</code>\r\n          </div>\r\n          <div class=\"alert alert-danger background-danger\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled text-white\"></i>\r\n            </button>\r\n            <strong>Danger!</strong> Add Class <code> background-danger</code>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Solid Alert end -->\r\n      <!-- icon Alert start -->\r\n      <div class=\"sub-title\">Icon Alert</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <div class=\"alert alert-default icons-alert\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <p><strong>Default!</strong> Add Class <code>alert-default icons-alert</code></p>\r\n          </div>\r\n          <div class=\"alert alert-primary icons-alert\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <p><strong>Primary!</strong> Add Class <code>alert-primary icons-alert</code></p>\r\n          </div>\r\n          <div class=\"alert alert-success icons-alert\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <p><strong>Success!</strong> Add Class <code>alert-success icons-alert</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-12 col-xl-6\">\r\n          <div class=\"alert alert-info icons-alert\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <p><strong>Info!</strong> Add Class <code>alert-info icons-alert</code></p>\r\n          </div>\r\n          <div class=\"alert alert-warning icons-alert\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <p><strong>Warning!</strong> Add Class <code>alert-warning icons-alert</code></p>\r\n          </div>\r\n          <div class=\"alert alert-danger icons-alert\">\r\n            <button type=\"button\" class=\"close\" parentRemove>\r\n              <i class=\"icofont icofont-close-line-circled\"></i>\r\n            </button>\r\n            <p><strong>Danger!</strong> Add Class <code>alert-danger icons-alert</code></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
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

var AlertComponent = (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/components/basic/alert/alert.component.html")
    }),
    __metadata("design:paramtypes", [])
], AlertComponent);

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/appliance/appliance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  \r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-lg-12\">\r\n    <!-- Material tab card start -->\r\n    <app-card [title]=\"'Appliance'\" [headerContent]=\"'Manage your appliances'\">\r\n      <div class=\"row m-b-30\">\r\n        <div class=\"col-lg-12 col-xl-12\">\r\n          <div class=\"sub-title\">Residence 1</div>\r\n          <div class=\"md-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Living Room\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. Respective</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Kitchen\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Room 1\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Custom\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/appliance/appliance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplianceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplianceComponent = (function () {
    function ApplianceComponent() {
    }
    ApplianceComponent.prototype.ngOnInit = function () {
    };
    return ApplianceComponent;
}());
ApplianceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-appliance',
        template: __webpack_require__("../../../../../src/app/components/basic/appliance/appliance.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [])
], ApplianceComponent);

//# sourceMappingURL=appliance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/basic.component.ts":
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
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/basic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_component__ = __webpack_require__("../../../../../src/app/components/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert_component__ = __webpack_require__("../../../../../src/app/components/basic/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_routing__ = __webpack_require__("../../../../../src/app/components/basic/basic.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/components/basic/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button_button_component__ = __webpack_require__("../../../../../src/app/components/basic/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__accordion_accordion_component__ = __webpack_require__("../../../../../src/app/components/basic/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generic_class_generic_class_component__ = __webpack_require__("../../../../../src/app/components/basic/generic-class/generic-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/components/basic/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/basic/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__other_other_component__ = __webpack_require__("../../../../../src/app/components/basic/other/other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__label_badge_label_badge_component__ = __webpack_require__("../../../../../src/app/components/basic/label-badge/label-badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__maintenance_maintenance_component__ = __webpack_require__("../../../../../src/app/components/basic/maintenance/maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__appliance_appliance_component__ = __webpack_require__("../../../../../src/app/components/basic/appliance/appliance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__estate_maintenance_estate_maintenance_component__ = __webpack_require__("../../../../../src/app/components/basic/estate-maintenance/estate-maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__community_announcement_announcement_module__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/announcement.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__event_calendar_event_calendar_module__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/event-calendar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var BasicModule = (function () {
    function BasicModule() {
    }
    return BasicModule;
}());
BasicModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__basic_routing__["a" /* BasicRoutes */]),
            __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_18__community_announcement_announcement_module__["a" /* AnnouncementModule */],
            __WEBPACK_IMPORTED_MODULE_19__event_calendar_event_calendar_module__["a" /* EventCalendarModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__basic_component__["a" /* BasicComponent */],
            __WEBPACK_IMPORTED_MODULE_3__alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_6__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
            __WEBPACK_IMPORTED_MODULE_7__button_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_8__accordion_accordion_component__["a" /* AccordionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__generic_class_generic_class_component__["a" /* GenericClassComponent */],
            __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__other_other_component__["a" /* OtherComponent */],
            __WEBPACK_IMPORTED_MODULE_13__label_badge_label_badge_component__["a" /* LabelBadgeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__maintenance_maintenance_component__["a" /* MaintenanceComponent */],
            __WEBPACK_IMPORTED_MODULE_16__appliance_appliance_component__["a" /* ApplianceComponent */],
            __WEBPACK_IMPORTED_MODULE_17__estate_maintenance_estate_maintenance_component__["a" /* EstateMaintenanceComponent */],
        ]
    })
], BasicModule);

//# sourceMappingURL=basic.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/basic.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_alert_component__ = __webpack_require__("../../../../../src/app/components/basic/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/components/basic/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button_component__ = __webpack_require__("../../../../../src/app/components/basic/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_accordion_component__ = __webpack_require__("../../../../../src/app/components/basic/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_class_generic_class_component__ = __webpack_require__("../../../../../src/app/components/basic/generic-class/generic-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/components/basic/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/basic/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other_other_component__ = __webpack_require__("../../../../../src/app/components/basic/other/other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__label_badge_label_badge_component__ = __webpack_require__("../../../../../src/app/components/basic/label-badge/label-badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__appliance_appliance_component__ = __webpack_require__("../../../../../src/app/components/basic/appliance/appliance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__estate_maintenance_estate_maintenance_component__ = __webpack_require__("../../../../../src/app/components/basic/estate-maintenance/estate-maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__community_announcement_announcement_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/announcement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__community_announcement_annctPage_property_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/property-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__community_announcement_annctPage_block_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/block-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__community_announcement_annctPage_unit_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/unit-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__community_announcement_annctPage_personal_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/personal-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__community_announcement_annctPage_my_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/my-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__community_announcement_annctPage_create_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/create-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__community_announcement_annctPage_edit_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/edit-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__community_announcement_annctPage_approve_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/approve-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__event_calendar_event_calendar_component__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/event-calendar.component.ts");





















var BasicRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'estate-maintenance',
                component: __WEBPACK_IMPORTED_MODULE_10__estate_maintenance_estate_maintenance_component__["a" /* EstateMaintenanceComponent */],
                data: {
                    breadcrumb: 'Estate Maintenance',
                    statur: true
                }
            },
            { path: 'maintenance',
                component: __WEBPACK_IMPORTED_MODULE_10__estate_maintenance_estate_maintenance_component__["a" /* EstateMaintenanceComponent */],
                data: {
                    breadcrumb: 'Maintenance',
                    status: true
                }
            },
            { path: 'appliance',
                component: __WEBPACK_IMPORTED_MODULE_9__appliance_appliance_component__["a" /* ApplianceComponent */],
                data: {
                    breadcrumb: 'Appliance',
                    status: true
                }
            },
            {
                path: 'announcement',
                component: __WEBPACK_IMPORTED_MODULE_11__community_announcement_announcement_component__["a" /* AnnouncementComponent */],
                data: {
                    breadcrumb: "Announcement",
                    status: true
                },
                children: [
                    {
                        path: "",
                        redirectTo: "property",
                        pathMatch: "prefix"
                    },
                    {
                        path: 'property',
                        component: __WEBPACK_IMPORTED_MODULE_12__community_announcement_annctPage_property_annct_component__["a" /* PropertyAnnctComponent */]
                    },
                    {
                        path: 'block',
                        component: __WEBPACK_IMPORTED_MODULE_13__community_announcement_annctPage_block_annct_component__["a" /* BlockAnnctComponent */]
                    },
                    {
                        path: 'unit',
                        component: __WEBPACK_IMPORTED_MODULE_14__community_announcement_annctPage_unit_annct_component__["a" /* UnitAnnctComponent */]
                    },
                    {
                        path: 'personal',
                        component: __WEBPACK_IMPORTED_MODULE_15__community_announcement_annctPage_personal_annct_component__["a" /* PersonalAnnctComponent */]
                    },
                    {
                        path: 'my',
                        component: __WEBPACK_IMPORTED_MODULE_16__community_announcement_annctPage_my_annct_component__["a" /* MyAnnctComponent */]
                    },
                    {
                        path: 'create',
                        component: __WEBPACK_IMPORTED_MODULE_17__community_announcement_annctPage_create_annct_component__["a" /* CreateAnnctComponent */]
                    },
                    {
                        path: 'edit',
                        component: __WEBPACK_IMPORTED_MODULE_18__community_announcement_annctPage_edit_annct_component__["a" /* EditAnnctComponent */]
                    },
                    {
                        path: 'approve',
                        component: __WEBPACK_IMPORTED_MODULE_19__community_announcement_annctPage_approve_annct_component__["a" /* ApproveAnnctComponent */]
                    }
                ]
            },
            {
                path: "event-calendar",
                component: __WEBPACK_IMPORTED_MODULE_20__event_calendar_event_calendar_component__["a" /* EventCalendarComponent */],
                data: {
                    breadcrumb: "Event Calendar",
                    status: true
                }
            },
            {
                path: 'alert',
                component: __WEBPACK_IMPORTED_MODULE_0__alert_alert_component__["a" /* AlertComponent */],
                data: {
                    breadcrumb: 'Alert',
                    status: true
                }
            }, {
                path: 'breadcrumb',
                component: __WEBPACK_IMPORTED_MODULE_1__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                data: {
                    breadcrumb: 'Breadcrumb Style',
                    status: true
                }
            }, {
                path: 'button',
                component: __WEBPACK_IMPORTED_MODULE_2__button_button_component__["a" /* ButtonComponent */],
                data: {
                    breadcrumb: 'Button',
                    status: true
                }
            }, {
                path: 'accordion',
                component: __WEBPACK_IMPORTED_MODULE_3__accordion_accordion_component__["a" /* AccordionComponent */],
                data: {
                    breadcrumb: 'Accordion',
                    status: true
                }
            }, {
                path: 'generic-class',
                component: __WEBPACK_IMPORTED_MODULE_4__generic_class_generic_class_component__["a" /* GenericClassComponent */],
                data: {
                    breadcrumb: 'Generic Class',
                    status: true
                }
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_5__tabs_tabs_component__["a" /* TabsComponent */],
                data: {
                    breadcrumb: 'Tabs',
                    status: true
                }
            }, {
                path: 'label-badge',
                component: __WEBPACK_IMPORTED_MODULE_8__label_badge_label_badge_component__["a" /* LabelBadgeComponent */],
                data: {
                    breadcrumb: 'Label Badge',
                    status: true
                }
            }, {
                path: 'typography',
                component: __WEBPACK_IMPORTED_MODULE_6__typography_typography_component__["a" /* TypographyComponent */],
                data: {
                    breadcrumb: 'Typography',
                    status: true
                }
            }, {
                path: 'other',
                component: __WEBPACK_IMPORTED_MODULE_7__other_other_component__["a" /* OtherComponent */],
                data: {
                    breadcrumb: 'Other',
                    status: true
                }
            }
        ]
    }
];
//# sourceMappingURL=basic.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body breadcrumb-page\">\r\n    <!-- Simple Breadcrumb card start -->\r\n    <app-card>\r\n        <h5>Simple Breadcrumb</h5>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Simple Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Simple Breadcrumb card start -->\r\n    <!-- Caption Breadcrumb card start -->\r\n    <app-card [blockClass]=\"'caption-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Caption Breadcrumb</h5>\r\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Caption Breadcrumb card end -->\r\n    <!-- Bottom Breadcrumb card start -->\r\n    <app-card>\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Bottom Breadcrumb</h5>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n\r\n\r\n    <!-- Bottom Breadcrumb card end -->\r\n    <!-- Without-icon Breadcrumb card start -->\r\n    <app-card [blockClass]=\"'caption-breadcrumb'\">\r\n         <div class=\"breadcrumb-header\">\r\n             <h5>Without Icon Breadcrumb</h5>\r\n             <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n         </div>\r\n         <div class=\"page-header-breadcrumb\">\r\n             <ul class=\"breadcrumb-title\">\r\n                 <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a>\r\n                 </li>\r\n                 <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                 </li>\r\n                 <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                 </li>\r\n             </ul>\r\n         </div>\r\n    </app-card>\r\n    <!-- Without-icon Breadcrumb card start -->\r\n    <!-- Front-icon Breadcrumb card start -->\r\n    <app-card [blockClass]=\"'front-icon-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <div class=\"big-icon\">\r\n                <i class=\"icofont icofont-home\"></i>\r\n            </div>\r\n            <div class=\"d-inline-block\">\r\n                <h5>Front Icon Breadcrumb</h5>\r\n                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Front-icon Breadcrumb card end -->\r\n    <h4 class=\"m-b-30\">Color Varients</h4>\r\n    <!-- Primary-color Breadcrumb card start -->\r\n    <app-card [cardClass]=\"'borderless-card'\" [blockClass]=\"'primary-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Primary Color Breadcrumb</h5>\r\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Primary-color Breadcrumb card end -->\r\n    <!-- Inverse-color Breadcrumb card start -->\r\n    <app-card [cardClass]=\"'borderless-card'\" [blockClass]=\"'inverse-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Inverse Color Breadcrumb</h5>\r\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Inverse-color Breadcrumb card end -->\r\n    <!-- Danger-color Breadcrumb card start -->\r\n    <app-card [cardClass]=\"'borderless-card'\" [blockClass]=\"'danger-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Danger Color Breadcrumb</h5>\r\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Danger-color Breadcrumb card end -->\r\n    <!-- Info-color Breadcrumb card start -->\r\n    <app-card [cardClass]=\"'borderless-card'\" [blockClass]=\"'info-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Info Color Breadcrumb</h5>\r\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Info-color Breadcrumb card end -->\r\n    <!-- Warning-color Breadcrumb card start -->\r\n    <app-card [cardClass]=\"'borderless-card'\" [blockClass]=\"'warning-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Warning Color Breadcrumb</h5>\r\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Warning-color Breadcrumb card end -->\r\n    <!-- Success-color Breadcrumb card start -->\r\n    <app-card [cardClass]=\"'borderless-card'\" [blockClass]=\"'success-breadcrumb'\">\r\n        <div class=\"breadcrumb-header\">\r\n            <h5>Success Color Breadcrumb</h5>\r\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n        <div class=\"page-header-breadcrumb\">\r\n            <ul class=\"breadcrumb-title\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icofont icofont-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Breadcrumb</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Caption Breadcrumb</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </app-card>\r\n    <!-- Success-color Breadcrumb card end -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
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

var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-breadcrumb',
        template: __webpack_require__("../../../../../src/app/components/basic/breadcrumb/breadcrumb.component.html")
    }),
    __metadata("design:paramtypes", [])
], BreadcrumbComponent);

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <app-card [title]=\"'Color States'\">\r\n                <p>Checkout color states of all buttons on popover to buttons</p>\r\n                <ng-template #popContent>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Normal</span>\r\n                                <span class='block'>\r\n                          <small>#BDC3C7</small>\r\n                        </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#BDC3C7;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Hover</span>\r\n                                <span class='block'>\r\n                        <small>#D9DCDE</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#D9DCDE;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Active</span>\r\n                                <span class='block'>\r\n                        <small>#9CA5AB</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#9CA5AB;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Disabled</span>\r\n                                <span class='block'>\r\n                        <small>#DEE1E3</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#DEE1E3;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-default\" popoverTitle=\"Default color states\" placement=\"bottom\" [ngbPopover]=\"popContent\">Default button</button>\r\n                <ng-template #primaryContent>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Normal</span>\r\n                                <span class='block'>\r\n                          <small>#1ABC9C</small>\r\n                        </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#1ABC9C;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Hover</span>\r\n                                <span class='block'>\r\n                        <small>#28E1BD</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#28E1BD;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Active</span>\r\n                                <span class='block'>\r\n                        <small>#13866F</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#13866F;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Disabled</span>\r\n                                <span class='block'>\r\n                        <small>#8CDDCD</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#8CDDCD;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-primary\" popoverTitle=\"Primary color states\" placement=\"bottom\" [ngbPopover]=\"primaryContent\">Primary button</button>\r\n                <ng-template #successContent>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Normal</span>\r\n                                <span class='block'>\r\n                          <small>#2ECC71</small>\r\n                        </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#2ECC71;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Hover</span>\r\n                                <span class='block'>\r\n                        <small>#54D98C</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#54D98C;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Active</span>\r\n                                <span class='block'>\r\n                        <small>#239A55</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#239A55;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Disabled</span>\r\n                                <span class='block'>\r\n                        <small>#96E5B8</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#96E5B8;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-success\" popoverTitle=\"Success color states\" placement=\"bottom\" [ngbPopover]=\"successContent\">Success button</button>\r\n                <ng-template #infoContent>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Normal</span>\r\n                                <span class='block'>\r\n                          <small>#5DADE2</small>\r\n                        </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#5DADE2;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Hover</span>\r\n                                <span class='block'>\r\n                        <small>#88C3EA</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#88C3EA;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Active</span>\r\n                                <span class='block'>\r\n                        <small>#2993D9</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#2993D9;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Disabled</span>\r\n                                <span class='block'>\r\n                        <small>#AED6F0</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#AED6F0;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-info\" popoverTitle=\"Info color states\" placement=\"bottom\" [ngbPopover]=\"infoContent\">Info button</button>\r\n                <ng-template #warningContent>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Normal</span>\r\n                                <span class='block'>\r\n                          <small>#F1C40F</small>\r\n                        </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#F1C40F;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Hover</span>\r\n                                <span class='block'>\r\n                        <small>#F4D03F</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#F4D03F;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Active</span>\r\n                                <span class='block'>\r\n                        <small>#B8960B</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#B8960B;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Disabled</span>\r\n                                <span class='block'>\r\n                        <small>#F8E187</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#F8E187;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-warning\" popoverTitle=\"Warning color states\" placement=\"bottom\" [ngbPopover]=\"warningContent\">warning button</button>\r\n                <ng-template #dangerContent>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Normal</span>\r\n                                <span class='block'>\r\n                          <small>#E74C3C</small>\r\n                        </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#E74C3C;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Hover</span>\r\n                                <span class='block'>\r\n                        <small>#ED7669</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#ED7669;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Active</span>\r\n                                <span class='block'>\r\n                        <small>#CD2A19</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#CD2A19;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Disabled</span>\r\n                                <span class='block'>\r\n                        <small>#F3A59D</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#F3A59D;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-danger\" popoverTitle=\"Danger color states\" placement=\"bottom\" [ngbPopover]=\"dangerContent\">Danger button</button>\r\n                <ng-template #inverseContent>\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Normal</span>\r\n                                <span class='block'>\r\n                          <small>#34495E</small>\r\n                        </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#34495E;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Hover</span>\r\n                                <span class='block'>\r\n                        <small>#46627F</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#46627F;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Active</span>\r\n                                <span class='block'>\r\n                        <small>#1E2A37</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#1E2A37;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='color-code'>\r\n                        <div class='row'>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <span class='block'>Disabled</span>\r\n                                <span class='block'>\r\n                        <small>#99A4AE</small>\r\n                      </span>\r\n                            </div>\r\n                            <div class='col-sm-6 col-xs-12'>\r\n                                <div class='display-color' style='background-color:#99A4AE;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-inverse\" popoverTitle=\"Inverse color states\" placement=\"bottom\" [ngbPopover]=\"inverseContent\">Inverse button</button>\r\n                <button type=\"button\" class=\"btn btn-disabled disabled\" popoverTitle=\"Disabled color states\" placement=\"bottom\" [ngbPopover]=\"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'\">Disabled button</button>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <app-card [title]=\"'Basic Buttons'\">\r\n                <!-- button Default -->\r\n                <h4 class=\"sub-title\">Buttons</h4>\r\n                <p>Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code>element.</p>\r\n                <button class=\"btn btn-default\">Default Button</button>\r\n                <button class=\"btn btn-primary\">Primary Button</button>\r\n                <button class=\"btn btn-success\">Success Button</button>\r\n                <button class=\"btn btn-info\">Info Button</button>\r\n                <button class=\"btn btn-warning\">Warning Button</button>\r\n                <button class=\"btn btn-danger\">Danger Button</button>\r\n                <button class=\"btn btn-inverse\">Inverse Button</button>\r\n                <button class=\"btn btn-disabled disabled\">Disabled Button</button>\r\n                <!-- button Rounded -->\r\n                <h4 class=\"sub-title\">Rounded buttons</h4>\r\n                <p> Add <code>.btn-round</code> to default button to get rounded corners.</p>\r\n                <button class=\"btn btn-default btn-round\">Default Button</button>\r\n                <button class=\"btn btn-primary btn-round\">Primary Button</button>\r\n                <button class=\"btn btn-success btn-round\">Success Button</button>\r\n                <button class=\"btn btn-info btn-round\">Info Button</button>\r\n                <button class=\"btn btn-warning btn-round\">Warning Button</button>\r\n                <button class=\"btn btn-danger btn-round\">Danger Button</button>\r\n                <button class=\"btn btn-inverse btn-round\">Inverse Button</button>\r\n                <button class=\"btn btn-disabled btn-round disabled\">Disabled Button</button>\r\n                <!-- buttton square -->\r\n                <h4 class=\"sub-title\">Square Buttons</h4>\r\n                <p> Add <code>.btn-square</code> to default button to get square corners.</p>\r\n                <button class=\"btn btn-default btn-square\">Default Button</button>\r\n                <button class=\"btn btn-primary btn-square\">Primary Button</button>\r\n                <button class=\"btn btn-success btn-square\">Success Button</button>\r\n                <button class=\"btn btn-info btn-square\">Info Button</button>\r\n                <button class=\"btn btn-warning btn-square\">Warning Button</button>\r\n                <button class=\"btn btn-danger btn-square\">Danger Button</button>\r\n                <button class=\"btn btn-inverse btn-square\">Inverse Button</button>\r\n                <button class=\"btn btn-disabled btn-square disabled\">Disabled Button</button>\r\n                <!-- buttton skew -->\r\n                <h4 class=\"sub-title\">Skew Buttons</h4>\r\n                <p> Add <code>.btn-skew</code> to default button to get skew Buttons.</p>\r\n                <button class=\"btn btn-default btn-skew\">Default Button</button>\r\n                <button class=\"btn btn-primary btn-skew\">Primary Button</button>\r\n                <button class=\"btn btn-success btn-skew\">Success Button</button>\r\n                <button class=\"btn btn-info btn-skew\">Info Button</button>\r\n                <button class=\"btn btn-warning btn-skew\">Warning Button</button>\r\n                <button class=\"btn btn-danger btn-skew\">Danger Button</button>\r\n                <button class=\"btn btn-inverse btn-skew\">Inverse Button</button>\r\n                <button class=\"btn btn-disabled btn-skew disabled\">Disabled Button</button>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Buttons With Icon'\">\r\n                <!-- button Default -->\r\n                <p>Use <code>&lt;i class=\"icofont icofont-star\"&gt;</code> inside button to add icon.</p>\r\n                <button class=\"btn btn-default\"><i class=\"icofont icofont-star\"></i>Default Button</button>\r\n                <button class=\"btn btn-primary\"><i class=\"icofont icofont-user-alt-3\"></i>Primary Button</button>\r\n                <button class=\"btn btn-success\"><i class=\"icofont icofont-check-circled\"></i>Success Button</button>\r\n                <button class=\"btn btn-info\"><i class=\"icofont icofont-info-square\"></i>Info Button</button>\r\n                <button class=\"btn btn-warning\"><i class=\"icofont icofont-warning-alt\"></i>Warning Button</button>\r\n                <button class=\"btn btn-danger\"><i class=\"icofont icofont-eye-alt\"></i>Danger Button</button>\r\n                <button class=\"btn btn-inverse\"><i class=\"icofont icofont-exchange\"></i>Inverse Button</button>\r\n                <button class=\"btn btn-disabled disabled\"><i class=\"icofont icofont-not-allowed\"></i>Disabled Button</button>\r\n            </app-card>\r\n        </div>\r\n        <!-- Border button -->\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Border Buttons'\">\r\n                <!-- button Default -->\r\n                <p>Use Class <code>btn-outline-*</code> inside button to make Border Button.</p>\r\n                <button class=\"btn btn-default btn-outline-default\"><i class=\"icofont icofont-star\"></i>DefaultButton</button>\r\n                <button class=\"btn btn-primary btn-outline-primary\"><i class=\"icofont icofont-user-alt-3\"></i>PrimaryButton</button>\r\n                <button class=\"btn btn-success btn-outline-success\"><i class=\"icofont icofont-check-circled\"></i>SuccessButton</button>\r\n                <button class=\"btn btn-info btn-outline-info\"><i class=\"icofont icofont-info-square\"></i>Info Button</button>\r\n                <button class=\"btn btn-warning btn-outline-warning\"><i class=\"icofont icofont-warning-alt\"></i>WarningButton</button>\r\n                <button class=\"btn btn-danger btn-outline-danger\"><i class=\"icofont icofont-eye-alt\"></i>DangerButton</button>\r\n                <button class=\"btn btn-inverse btn-outline-inverse\"><i class=\"icofont icofont-exchange\"></i>InverseButton</button>\r\n                <button class=\"btn btn-disabled btn-outline-disabled disabled\"><i class=\"icofont icofont-not-allowed\"></i>Disabled Button</button>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Buttons Dropdown'\">\r\n                <!-- button Default -->\r\n                <div ngbDropdown class=\"dropdown-default dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-default dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">primary</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown1\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"dropdown-primary dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-primary dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown-2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Primary</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-2\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"dropdown-success dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-success dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown-3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Success</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"dropdown-info dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-info dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown-4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Info</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-4\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"dropdown-warning dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-warning dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown-5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Warning</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-5\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"dropdown-danger dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-danger dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown-6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Danger</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-6\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"dropdown-inverse dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-inverse dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown-7\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Inverse</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-7\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"dropdown-disabled dropdown open\">\r\n                    <button ngbDropdownToggle class=\"btn btn-disabled dropdown-toggle waves-effect waves-light disabled\" type=\"button\" id=\"dropdown-8\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Disabled</button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-8\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </div>\r\n        <!-- Border button -->\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Buttons with split dropdown with icon'\">\r\n                <!-- button Default -->\r\n                <div ngbDropdown class=\"btn-group dropdown-split-default\">\r\n                    <button type=\"button\" class=\"btn btn-default\"><i class=\"icofont icofont-star\"></i>Default</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-default dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"icofont icofont-user-alt-3\"></i>Primary</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"btn-group dropdown-split-success\">\r\n                    <button type=\"button\" class=\"btn btn-success\"><i class=\"icofont icofont-check-circled\"></i>Success</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-success dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"btn-group dropdown-split-info\">\r\n                    <button type=\"button\" class=\"btn btn-info\"><i class=\"icofont icofont-info-square\"></i>Info</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"btn-group dropdown-split-warning\">\r\n                    <button type=\"button\" class=\"btn btn-warning\"><i class=\"icofont icofont-warning-alt\"></i>Warning</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"btn-group dropdown-split-danger\">\r\n                    <button type=\"button\" class=\"btn btn-danger\"><i class=\"icofont icofont-eye-alt\"></i>Danger</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-danger dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"btn-group dropdown-split-inverse\">\r\n                    <button type=\"button\" class=\"btn btn-inverse\"><i class=\"icofont icofont-exchange\"></i>Inverse</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-inverse dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <div ngbDropdown class=\"btn-group dropdown-split-disabled\">\r\n                    <button type=\"button\" class=\"btn btn-disabled disabled\"><i class=\"icofont icofont-not-allowed\"></i>Disabled</button>\r\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-disabled disabled dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle primary</span>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Another action</a>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:;\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Icon Button'\" [blockClass]=\"'icon-btn'\">\r\n                <!-- button Default -->\r\n                <p>Use <code>&lt;i class=\"icofont icofont-star\"&gt;</code> inside button to add icon.</p>\r\n                <div>\r\n                    <button class=\"btn btn-default\"><i class=\"icofont icofont-star\"></i></button>\r\n                    <button class=\"btn btn-primary\"><i class=\"icofont icofont-user-alt-3\"></i></button>\r\n                    <button class=\"btn btn-success\"><i class=\"icofont icofont-check-circled\"></i></button>\r\n                    <button class=\"btn btn-info\"><i class=\"icofont icofont-info-square\"></i></button>\r\n                    <button class=\"btn btn-warning\"><i class=\"icofont icofont-warning-alt\"></i></button>\r\n                    <button class=\"btn btn-danger\"><i class=\"icofont icofont-eye-alt\"></i></button>\r\n                    <button class=\"btn btn-inverse\"><i class=\"icofont icofont-exchange\"></i></button>\r\n                    <button class=\"btn btn-disabled disabled\"><i class=\"icofont icofont-not-allowed\"></i></button>\r\n                </div>\r\n                <div>\r\n                    <button class=\"btn btn-default btn-icon\"><i class=\"icofont icofont-star\"></i></button>\r\n                    <button class=\"btn btn-primary btn-icon\"><i class=\"icofont icofont-user-alt-3\"></i></button>\r\n                    <button class=\"btn btn-success btn-icon\"><i class=\"icofont icofont-check-circled\"></i></button>\r\n                    <button class=\"btn btn-info btn-icon\"><i class=\"icofont icofont-info-square\"></i></button>\r\n                    <button class=\"btn btn-warning btn-icon\"><i class=\"icofont icofont-warning-alt\"></i></button>\r\n                    <button class=\"btn btn-danger btn-icon\"><i class=\"icofont icofont-eye-alt\"></i></button>\r\n                    <button class=\"btn btn-inverse btn-icon\"><i class=\"icofont icofont-exchange\"></i></button>\r\n                    <button class=\"btn btn-disabled btn-icon disabled\"><i class=\"icofont icofont-not-allowed\"></i>\r\n                    </button>\r\n                </div>\r\n            </app-card>\r\n        </div>\r\n        <!-- Border button -->\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Icon Border Buttons'\" [blockClass]=\"'icon-btn'\">\r\n                <!-- button Default -->\r\n                <p>Use Class <code>btn-outline-*</code> inside button to make Border Button.</p>\r\n                <div>\r\n                    <button class=\"btn btn-default btn-outline-default\"><i class=\"icofont icofont-star\"></i></button>\r\n                    <button class=\"btn btn-primary btn-outline-primary\"><i class=\"icofont icofont-user-alt-3\"></i></button>\r\n                    <button class=\"btn btn-success btn-outline-success\"><i class=\"icofont icofont-check-circled\"></i></button>\r\n                    <button class=\"btn btn-info btn-outline-info\"><i class=\"icofont icofont-info-square\"></i></button>\r\n                    <button class=\"btn btn-warning btn-outline-warning\"><i class=\"icofont icofont-warning-alt\"></i></button>\r\n                    <button class=\"btn btn-danger btn-outline-danger\"><i class=\"icofont icofont-eye-alt\"></i></button>\r\n                    <button class=\"btn btn-inverse btn-outline-inverse\"><i class=\"icofont icofont-exchange\"></i></button>\r\n                    <button class=\"btn btn-disabled btn-outline-disabled disabled\"><i class=\"icofont icofont-not-allowed\"></i></button>\r\n                </div>\r\n                <div>\r\n                    <button class=\"btn btn-default btn-outline-default btn-icon\"><i class=\"icofont icofont-star\"></i></button>\r\n                    <button class=\"btn btn-primary btn-outline-primary btn-icon\"><i class=\"icofont icofont-user-alt-3\"></i></button>\r\n                    <button class=\"btn btn-success btn-outline-success btn-icon\"><i class=\"icofont icofont-check-circled\"></i></button>\r\n                    <button class=\"btn btn-info btn-outline-info btn-icon\"><i class=\"icofont icofont-info-square\"></i></button>\r\n                    <button class=\"btn btn-warning btn-outline-warning btn-icon\"><i class=\"icofont icofont-warning-alt\"></i></button>\r\n                    <button class=\"btn btn-danger btn-outline-danger btn-icon\"><i class=\"icofont icofont-eye-alt\"></i></button>\r\n                    <button class=\"btn btn-inverse btn-outline-inverse btn-icon\"><i class=\"icofont icofont-exchange\"></i></button>\r\n                    <button class=\"btn btn-disabled btn-outline-disabled btn-icon disabled\"><i class=\"icofont icofont-not-allowed\"></i></button>\r\n                </div>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <app-card [title]=\"'Group Buttons'\">\r\n                <!-- button Default -->\r\n                <p>Use <code>btn-xlg, btn-lg, btn-md, btn-sm, btn-mini</code> inside class to use different size button.</p>\r\n                <div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-xlg waves-effect waves-light\">Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-xlg waves-effect waves-light\">Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-xlg waves-effect waves-light\">Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg waves-effect waves-light\">Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg waves-effect waves-light\">Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg waves-effect waves-light\">Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-md waves-effect waves-light\">Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-md waves-effect waves-light\">Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-md waves-effect waves-light\">Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\">Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\">Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\">Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-mini waves-effect waves-light\">Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-mini waves-effect waves-light\">Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-mini waves-effect waves-light\">Right</button>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-xlg waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-xlg waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-xlg waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-md waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-md waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-md waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Right</button>\r\n                    </div>\r\n                    <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\".btn-xlg\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-mini waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Left</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-mini waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Middle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-mini waves-effect waves-light\"><i class=\"icofont icofont-info-square\"></i>Right</button>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <app-card [title]=\"'Social Buttons'\">\r\n                <a href=\"javascript:;\" class=\"btn btn-facebook\"><i class=\"icofont icofont-social-facebook\"></i>Facebook</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-twitter\"><i class=\"icofont icofont-social-twitter\"></i>Twitter</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-linkedin\"><i class=\"icofont icofont-brand-linkedin\"></i>Linkedin</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-dribbble\"><i class=\"icofont icofont-social-dribble\"></i>Dribble</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-google-plus\"><i class=\"icofont icofont-social-google-plus\"></i>Google+</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-instagram\"><i class=\"icofont icofont-social-instagram\"></i>Instagram</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-pinterest\"><i class=\"icofont icofont-social-pinterest\"></i>Pinterest</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-dropbox\"><i class=\"icofont icofont-social-dropbox\"></i>Dropbox</a>\r\n                <a href=\"javascript:;\" class=\"btn btn-tumblr\"><i class=\"icofont icofont-social-tumblr\"></i>Tumbler</a>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Social Buttons without label'\" [blockClass]=\"'remove-label'\">\r\n                <a href=\"javascript:;\" class=\"btn btn-facebook\"><i class=\"icofont icofont-social-facebook\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-twitter\"><i class=\"icofont icofont-social-twitter\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-linkedin\"><i class=\"icofont icofont-brand-linkedin\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-dribbble\"><i class=\"icofont icofont-social-dribble\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-google-plus\"><i class=\"icofont icofont-social-google-plus\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-instagram\"><i class=\"icofont icofont-social-instagram\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-pinterest\"><i class=\"icofont icofont-social-pinterest\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-dropbox\"><i class=\"icofont icofont-social-dropbox\"></i></a>\r\n                <a href=\"javascript:;\" class=\"btn btn-tumblr\"><i class=\"icofont icofont-social-tumblr\"></i></a>\r\n            </app-card>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <app-card [title]=\"'Link Buttons'\" [blockClass]=\"'remove-label'\">\r\n                <a href=\"javascript:;\" class=\"btn btn-primary\">Link</a>\r\n                <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\">Button</button>\r\n                <input type=\"button\" class=\"btn btn-primary waves-effect waves-light\" value=\"Input\">\r\n                <input type=\"submit\" class=\"btn btn-primary waves-effect waves-light\" value=\"Submit\">\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <app-card [title]=\"'Block Buttons'\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <button class=\"btn btn-primary btn-block\">Default Button</button>\r\n                            <button class=\"btn btn-primary btn-outline-primary btn-block\"><i class=\"icofont icofont-user-alt-3\"></i>Border Button</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-12\">\r\n                        <!-- Block level buttons with icon -->\r\n                        <div class=\"form-group\">\r\n                            <button class=\"btn btn-success btn-square btn-block\">Square Button</button>\r\n                            <button class=\"btn btn-info btn-round btn-block\">Rounded Button</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
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

var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    return ButtonComponent;
}());
ButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-button',
        template: __webpack_require__("../../../../../src/app/components/basic/button/button.component.html")
    }),
    __metadata("design:paramtypes", [])
], ButtonComponent);

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/approve-annct.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-responsive\">\r\n  <thead>\r\n    <tr>\r\n      <th>Unapproved Announcements</th>\r\n      <th>Date</th>\r\n      <th>By</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n<!--     <span class=\"For pagination later\"> -->\r\n      <tr *ngFor=\"let annct of listOfAnnct\" (click)=\"viewAnnct(annct)\">\r\n        <td>{{annct.title}}</td>\r\n        <td>{{annct.date | date: \"short\"}}</td>\r\n        <td>{{annct.userName}}</td>\r\n      </tr>\r\n<!--     </span> -->\r\n  </tbody>\r\n</table>\r\n\r\n<button id=\"modalButton\" (click)=\"modalOverflow.show()\" style=\"display:none;\"></button>\r\n<!-- modal goes here.-->\r\n<app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n  <div class=\"app-modal-body\">\r\n      <button id=\"closeAnnctButton\" type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h5 class=\"font-header\">{{selectedAnnct?.title}}</h5>\r\n      <p>Type: {{selectedAnnct?.scope}}</p>\r\n      <p>Date posted: {{selectedAnnct?.date | date: \"short\"}}</p>\r\n      <h5>Content</h5>\r\n      <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"500px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\r\n        <!--Used innerHTML to insert content as content is html as well-->\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"deleteAnnct(selectedAnnct)\">Disapprove</button>\r\n          <button type=\"button\" class=\"btn btn-primary mobtn\" (click)=\"approveAnnct(selectedAnnct)\">Approve</button>\r\n      </div>\r\n  </div>\r\n</app-modal-basic>\r\n\r\n<!--Reason for disapproving modal form-->\r\n<button id=\"reasonModalButton\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display:none;\"></button>\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\">Reason for disapproving this announcement</h4>\r\n        <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div id=\"reasonModalBody\" class=\"app-modal-body\">\r\n      <p>Reason : </p>\r\n      <form #reasonForm=\"ngForm\" (ngSubmit)=\"deleteAnnct(selectedAnnct,reasonForm)\">\r\n        <textarea required minlength=\"20\" class=\"form-control\" placeholder=\"Please enter your reason for deleting this announcement\" name=\"reason\" ngModel></textarea>\r\n\r\n        <button id=\"submitReasonButton\" type=\"submit\" style=\"display:none;\"></button>\r\n      </form>\r\n    </div>\r\n    <div id=\"reasonModalFooter\" class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n        <button id=\"submitReasonButton\" type=\"button\" class=\"btn btn-primary waves-effect waves-light \" (click)=\"submitReason()\">Delete</button>\r\n    </div>\r\n</app-modal-basic>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/approve-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_post_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/post-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApproveAnnctComponent = (function () {
    function ApproveAnnctComponent(listAnnctSvc, postAnnctSvc, editAnnctSvc, firebaseAuth, router, route) {
        this.listAnnctSvc = listAnnctSvc;
        this.postAnnctSvc = postAnnctSvc;
        this.editAnnctSvc = editAnnctSvc;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.route = route;
        this.listOfAnnct = [];
    }
    ApproveAnnctComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var userId: string = this.firebaseAuth.authState.uid;
        // this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
        //Stop people from entering this page.
        if (this.user.propertyManager !== true) {
            alert("You cannot enter this page!");
            this.router.navigate(["../"], { relativeTo: this.route });
        }
        this.listAnnctSvc.fetchAnnct("unapproved", function (fetchedAnnct) { _this.listOfAnnct = fetchedAnnct; });
        //Once this.listOfAnnct is updated, ngFor should list out all the announcements through observable.
    };
    ApproveAnnctComponent.prototype.viewAnnct = function (annct) {
        this.selectedAnnct = annct;
        document.getElementsByClassName("overflow-container").item(0).innerHTML = this.selectedAnnct.content;
        document.getElementById("modalButton").click();
    };
    ApproveAnnctComponent.prototype.deleteAnnct = function (annct, reasonForm) {
        //When true is returned, annct is deleted, else, annct is not
        var result = this.editAnnctSvc.deleteAnnct(annct, reasonForm);
        if (result === true) {
            document.getElementById("closeAnnctButton").click();
            document.getElementById("reasonModalBody").innerHTML = "<h1>Announcement Deleted</h1>";
            document.getElementById("submitReasonButton").style.display = "none";
        }
        else if (result === false) {
            document.getElementById("reasonModalButton").click();
        }
    };
    ApproveAnnctComponent.prototype.submitReason = function () {
        document.getElementById("submitReason").click();
    };
    return ApproveAnnctComponent;
}());
ApproveAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-annct-approve',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/approve-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_post_annct_service__["a" /* PostAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_post_annct_service__["a" /* PostAnnctService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_edit_annct_service__["a" /* EditAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_edit_annct_service__["a" /* EditAnnctService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], ApproveAnnctComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=approve-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/block-annct.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-responsive\">\r\n  <thead>\r\n    <tr>\r\n      <th>Your Block Announcements</th>\r\n      <th>Date</th>\r\n      <th>By</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n<!--     <span class=\"For pagination later\"> -->\r\n      <tr *ngFor=\"let annct of listOfAnnct\" (click)=\"viewAnnct(annct)\">\r\n        <td>{{annct.title}}</td>\r\n        <td>{{annct.date | date: \"short\"}}</td>\r\n        <td>{{annct.userName}}</td>\r\n      </tr>\r\n<!--     </span> -->\r\n  </tbody>\r\n</table>\r\n\r\n<button id=\"modalButton\" (click)=\"modalOverflow.show()\" style=\"display:none;\"></button>\r\n<!-- modal goes here.-->\r\n<app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n  <div class=\"app-modal-body\">\r\n      <button id=\"closeAnnctButton\" type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h5 class=\"font-header\">{{selectedAnnct?.title}}</h5>\r\n      <p>Type: {{selectedAnnct?.scope}}</p>\r\n      <p>Date posted: {{selectedAnnct?.date | date: \"short\"}}</p>\r\n      <h5>Content</h5>\r\n      <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"500px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\r\n        <!--Used innerHTML to insert content as content is html as well-->\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n          <!-- <button *ngIf=\"user.uid === selectedAnnct.uid || user.propertyManager === true\" type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"deleteAnnct(selectedAnnct)\">Delete</button>\r\n          <button *ngIf=\"user.uid === selectedAnnct.uid\" type=\"button\" class=\"btn btn-primary mobtn\" (click)=\"editAnnct(selectedAnnct)\">Edit</button> -->\r\n      </div>\r\n  </div>\r\n</app-modal-basic>\r\n\r\n<!--Reason for deleting modal form-->\r\n<button id=\"reasonModalButton\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display:none;\"></button>\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\">Reason for deleting this announcement</h4>\r\n        <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div id=\"reasonModalBody\" class=\"app-modal-body\">\r\n      <p>Reason : </p>\r\n      <form #reasonForm=\"ngForm\" (ngSubmit)=\"deleteAnnct(selectedAnnct,reasonForm)\">\r\n        <textarea required minlength=\"20\" class=\"form-control\" placeholder=\"Please enter your reason for deleting this announcement\" name=\"reason\" ngModel></textarea>\r\n\r\n        <button id=\"submitReason\" type=\"submit\" style=\"display:none;\"></button>\r\n      </form>\r\n    </div>\r\n    <div id=\"reasonModalFooter\" class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n        <button id=\"submitReasonButton\" type=\"submit\" class=\"btn btn-primary waves-effect waves-light \" (click) = \"submitReason()\">Delete</button>\r\n    </div>\r\n</app-modal-basic>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/block-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BlockAnnctComponent = (function () {
    function BlockAnnctComponent(listAnnctSvc, editAnnctSvc, userSvc, firebaseAuth, shareSelectAnnct, router, route) {
        this.listAnnctSvc = listAnnctSvc;
        this.editAnnctSvc = editAnnctSvc;
        this.userSvc = userSvc;
        this.firebaseAuth = firebaseAuth;
        this.shareSelectAnnct = shareSelectAnnct;
        this.router = router;
        this.route = route;
        this.listOfAnnct = [];
        this.user = {
            uid: "abc"
        };
    }
    BlockAnnctComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var userId: string = this.firebaseAuth.authState.uid;
        // this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
        this.listAnnctSvc.fetchAnnct("block", function (fetchedAnnct) { _this.listOfAnnct = fetchedAnnct; });
        //Once this.listOfAnnct is updated, ngFor should list out all the announcements through observable.
    };
    BlockAnnctComponent.prototype.viewAnnct = function (annct) {
        this.selectedAnnct = annct;
        document.getElementsByClassName("overflow-container").item(0).innerHTML = this.selectedAnnct.content;
        document.getElementById("modalButton").click();
    };
    BlockAnnctComponent.prototype.deleteAnnct = function (annct, reasonForm) {
        //When true is returned, annct is deleted, else, annct is not
        var result = this.editAnnctSvc.deleteAnnct(annct, reasonForm);
        if (result === true) {
            document.getElementById("closeAnnctButton").click();
            document.getElementById("reasonModalBody").innerHTML = "<h1>Announcement Deleted</h1>";
            document.getElementById("submitReasonButton").style.display = "none";
        }
        else if (result === false) {
            document.getElementById("reasonModalButton").click();
        }
    };
    BlockAnnctComponent.prototype.submitReason = function () {
        document.getElementById("submitReason").click();
    };
    BlockAnnctComponent.prototype.editAnnct = function (annct) {
        this.shareSelectAnnct.storeAnnct(annct);
        document.getElementById("closeAnnctButton").click();
        this.router.navigate(["../edit"], { relativeTo: this.route });
    };
    return BlockAnnctComponent;
}());
BlockAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-annct-block',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/block-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], BlockAnnctComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=block-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/create-annct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Create announcment'\" [classHeader]=\"true\">\r\n      <form #annctForm=\"ngForm\" (ngSubmit)=\"onAnnctSubmit(annctForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-xl-6\">\r\n            <h4 class=\"sub-title\">Title:</h4> \r\n            <input class=\"form-control\" type=\"text\" name=\"title\" ngModel> \r\n            <hr>\r\n            <br>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-xl-6\">\r\n            <h4 class=\"sub-title\">Scope of Announcement</h4>\r\n              <select name=\"scope\" class=\"form-control form-control-default\" ngModel>\r\n                <option value=\"property\">Whole estate</option>\r\n                <option value=\"block\">Block</option>\r\n                <option value=\"unit\">Unit</option>\r\n                <option value=\"personal\">Personal</option>\r\n              </select>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-4\">\r\n              <h4 class=\"sub-title\">Estate:</h4>\r\n              <!--To be substituted with user's estate auomatically--> \r\n              <input class=\"form-control\" type=\"text\" name=\"estate\" ngModel> \r\n              <hr>\r\n              <br>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-lg-4\">\r\n              <h4 class=\"sub-title\">Block:</h4>\r\n              <!--To be substituted with user's block auomatically--> \r\n              <input class=\"form-control\" type=\"text\" name=\"block\" ngModel>\r\n              <hr>\r\n              <br>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-lg-4\">\r\n              <h4 class=\"sub-title\">Unit:</h4>\r\n              <!--To be substituted with user's unit auomatically--> \r\n              <input class=\"form-control\" type=\"text\" name=\"unit\" ngModel>\r\n              <hr>\r\n              <br>\r\n            </div>\r\n\r\n        </div>\r\n        \r\n        <hr>\r\n        <br>\r\n        <quill-editor\r\n          [(ngModel)]=\"editorContent\" [ngModelOptions]=\"{standalone: true}\"\r\n          [options]=\"editorConfig\"\r\n          (blur)=\"onEditorBlured($event)\"\r\n          (focus)=\"onEditorFocused($event)\"\r\n          (ready)=\"onEditorCreated($event)\"\r\n          (change)=\"onContentChanged($event)\">\r\n        </quill-editor>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit Announcement</button>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/create-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_post_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/post-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateAnnctComponent = (function () {
    function CreateAnnctComponent(postAnnctSvc, firebaseAuth, router, route) {
        this.postAnnctSvc = postAnnctSvc;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.route = route;
        this.listOfAnnct = [];
        this.editorConfig = {
            placeholder: "Content"
        };
    }
    // private userId: string = this.firebaseAuth.authState.uid;
    // private user;
    CreateAnnctComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.userSvc.getUser(this.userId).subscribe(userInfo => this.user = userInfo);
        setTimeout(function () {
            _this.editorContent = _this.editorContent;
            //console.log('you can use the quill instance object to do something', this.editor);
            // this.editor.disable();
        }, 2800);
        // this.user.address.estate = "wonderLand";
        // this.user.address.unit = "111-11";
        // this.user.address.block = "123";
        // console.log(this.user);
    };
    CreateAnnctComponent.prototype.onAnnctSubmit = function (annctForm) {
        this.title = annctForm.value.title;
        this.scope = annctForm.value.scope;
        this.annctAddress = {
            estate: annctForm.value.estate,
            block: annctForm.value.block,
            unit: annctForm.value.unit
        };
        this.postAnnctSvc.postAnnounce(this.title, this.htmlContent, this.scope, this.annctAddress);
        this.router.navigate(["../"], { relativeTo: this.route });
    };
    CreateAnnctComponent.prototype.onEditorBlured = function (quill) {
        //console.log('editor blur!', quill);
    };
    CreateAnnctComponent.prototype.onEditorFocused = function (quill) {
        //console.log('editor focus!', quill);
    };
    CreateAnnctComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        //console.log('quill is ready! this is current quill instance object', quill);
    };
    CreateAnnctComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        // console.log('quill content is changed!', quill, html, text);
        this.htmlContent = html;
    };
    return CreateAnnctComponent;
}());
CreateAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-annct',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/create-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_post_annct_service__["a" /* PostAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_post_annct_service__["a" /* PostAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CreateAnnctComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/edit-annct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Edit Your Announcement'\" [classHeader]=\"true\">\r\n      <form #annctForm=\"ngForm\" (ngSubmit)=\"onAnnctSubmit(annctForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-xl-6\">\r\n            <h4 class=\"sub-title\">Title:</h4> \r\n            <input class=\"form-control\" type=\"text\" value=\"{{selectedAnnct.title}}\" name=\"title\" ngModel> \r\n            <hr>\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <br>\r\n        <quill-editor\r\n          [(ngModel)]=\"editorContent\" [ngModelOptions]=\"{standalone: true}\"\r\n          [options]=\"editorConfig\"\r\n          (blur)=\"onEditorBlured($event)\"\r\n          (focus)=\"onEditorFocused($event)\"\r\n          (ready)=\"onEditorCreated($event)\"\r\n          (change)=\"onContentChanged($event)\">\r\n        </quill-editor>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit Announcement</button>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/edit-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditAnnctComponent = (function () {
    function EditAnnctComponent(editAnnctSvc, userSvc, firebaseAuth, router, route, shareSelectedAnnct) {
        this.editAnnctSvc = editAnnctSvc;
        this.userSvc = userSvc;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.route = route;
        this.shareSelectedAnnct = shareSelectedAnnct;
        this.listOfAnnct = [];
        this.editorConfig = {
            placeholder: "Content"
        };
        this.userId = this.firebaseAuth.authState.uid;
    }
    EditAnnctComponent.prototype.ngOnInit = function () {
        this.selectedAnnct = this.shareSelectedAnnct.getAnnct();
        // this.userSvc.getUser(this.userId).subscribe(userInfo => this.user = userInfo);
        this.editorContent = this.selectedAnnct.content;
        //console.log('you can use the quill instance object to do something', this.editor);
        // this.editor.disable();
        // this.user.address.estate = "wonderLand";
        // this.user.address.unit = "111-11";
        // this.user.address.block = "123";
        // console.log(this.user);
    };
    EditAnnctComponent.prototype.onAnnctSubmit = function (annctForm) {
        this.title = annctForm.value.title;
        this.editAnnctSvc.editAnnct(this.selectedAnnct, this.htmlContent, this.title);
        this.router.navigate(["../" + this.selectedAnnct.scope], { relativeTo: this.route });
    };
    EditAnnctComponent.prototype.onEditorBlured = function (quill) {
        //console.log('editor blur!', quill);
    };
    EditAnnctComponent.prototype.onEditorFocused = function (quill) {
        //console.log('editor focus!', quill);
    };
    EditAnnctComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        //console.log('quill is ready! this is current quill instance object', quill);
    };
    EditAnnctComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        // console.log('quill content is changed!', quill, html, text);
        this.htmlContent = html;
    };
    return EditAnnctComponent;
}());
EditAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-annct',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/edit-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_edit_annct_service__["a" /* EditAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_edit_annct_service__["a" /* EditAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */]) === "function" && _f || Object])
], EditAnnctComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/my-annct.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"table table-hover table-responsive\">\r\n  <thead>\r\n    <tr>\r\n      <th>Your Announcements</th>\r\n      <th>Date</th>\r\n      <th>Status</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let annct of listOfAnnct\" (click)=\"viewAnnct(annct)\">\r\n          <td>{{annct.title}}</td>\r\n          <td>{{annct.date | date: \"short\"}}</td>\r\n          <td>\r\n            <span *ngIf=\"annct.approved === false\">Pending</span>\r\n            <span *ngIf=\"annct.approved === true\">Approved</span>\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<button id=\"modalButton\" (click)=\"modalOverflow.show()\" style=\"display:none;\"></button>\r\n<!-- modal goes here.-->\r\n<app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n  <div class=\"app-modal-body\">\r\n      <button id=\"closeAnnctButton\" type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h5 class=\"font-header\">{{selectedAnnct?.title}}</h5>\r\n      <p>Type: {{selectedAnnct?.scope}}</p>\r\n      <p>Date posted: {{selectedAnnct?.date | date: \"short\"}}</p>\r\n      <h5>Content</h5>\r\n      <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"500px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\r\n        <!--Used innerHTML to insert content as content is html as well-->\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"deleteAnnct(selectedAnnct)\">Delete</button>\r\n          <button type=\"button\" class=\"btn btn-primary mobtn\" (click)=\"editAnnct(selectedAnnct)\">Edit</button>\r\n      </div>\r\n  </div>\r\n</app-modal-basic>\r\n\r\n<!--Reason for deleting modal form-->\r\n<button id=\"reasonModalButton\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display:none;\"></button>\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\">Reason for deleting this announcement</h4>\r\n        <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div id=\"reasonModalBody\" class=\"app-modal-body\">\r\n      <p>Reason : </p>\r\n      <form #reasonForm=\"ngForm\" (ngSubmit)=\"deleteAnnct(selectedAnnct,reasonForm)\">\r\n        <textarea required minlength=\"20\" class=\"form-control\" placeholder=\"Please enter your reason for deleting this announcement\" name=\"reason\" ngModel></textarea>\r\n\r\n        <button id=\"submitReason\" type=\"submit\" style=\"display:none;\"></button>\r\n      </form>\r\n    </div>\r\n    <div id=\"reasonModalFooter\" class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n        <button id=\"submitReasonButton\" type=\"submit\" class=\"btn btn-primary waves-effect waves-light \" (click) = \"submitReason()\">Delete</button>\r\n    </div>\r\n</app-modal-basic>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/my-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyAnnctComponent = (function () {
    function MyAnnctComponent(listAnnctSvc, editAnnctSvc, userSvc, firebaseAuth, shareSelectAnnct, router, route) {
        this.listAnnctSvc = listAnnctSvc;
        this.editAnnctSvc = editAnnctSvc;
        this.userSvc = userSvc;
        this.firebaseAuth = firebaseAuth;
        this.shareSelectAnnct = shareSelectAnnct;
        this.router = router;
        this.route = route;
        this.listOfAnnct = [];
        this.user = {
            uid: "abc"
        };
    }
    MyAnnctComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var userId: string = this.firebaseAuth.authState.uid;
        // this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
        this.listAnnctSvc.fetchAnnct("my", function (fetchedAnnct) { _this.listOfAnnct = fetchedAnnct; });
        //Once this.listOfAnnct is updated, ngFor should list out all the announcements through observable.
    };
    MyAnnctComponent.prototype.viewAnnct = function (annct) {
        this.selectedAnnct = annct;
        document.getElementsByClassName("overflow-container").item(0).innerHTML = this.selectedAnnct.content;
        document.getElementById("modalButton").click();
    };
    MyAnnctComponent.prototype.deleteAnnct = function (annct, reasonForm) {
        //When true is returned, annct is deleted, else, annct is not
        var result = this.editAnnctSvc.deleteAnnct(annct, reasonForm);
        if (result === true) {
            document.getElementById("closeAnnctButton").click();
            document.getElementById("reasonModalBody").innerHTML = "<h1>Announcement Deleted</h1>";
            document.getElementById("submitReasonButton").style.display = "none";
        }
        else if (result === false) {
            document.getElementById("reasonModalButton").click();
        }
    };
    MyAnnctComponent.prototype.submitReason = function () {
        document.getElementById("submitReason").click();
    };
    MyAnnctComponent.prototype.editAnnct = function (annct) {
        this.shareSelectAnnct.storeAnnct(annct);
        document.getElementById("closeAnnctButton").click();
        this.router.navigate(["../edit"], { relativeTo: this.route });
    };
    return MyAnnctComponent;
}());
MyAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-annct-my',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/my-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], MyAnnctComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=my-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/personal-annct.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-responsive\">\r\n  <thead>\r\n    <tr>\r\n      <th>Your Personal Announcements</th>\r\n      <th>Date</th>\r\n      <th>By</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n<!--     <span class=\"For pagination later\"> -->\r\n      <tr *ngFor=\"let annct of listOfAnnct\" (click)=\"viewAnnct(annct)\">\r\n        <td>{{annct.title}}</td>\r\n        <td>{{annct.date | date: \"short\"}}</td>\r\n        <td>{{annct.userName}}</td>\r\n      </tr>\r\n<!--     </span> -->\r\n  </tbody>\r\n</table>\r\n<button id=\"modalButton\" (click)=\"modalOverflow.show()\" style=\"display:none;\"></button>\r\n\r\n<button id=\"modalButton\" (click)=\"modalOverflow.show()\" style=\"display:none;\"></button>\r\n<!-- modal goes here.-->\r\n<app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n  <div class=\"app-modal-body\">\r\n      <button id=\"closeAnnctButton\" type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h5 class=\"font-header\">{{selectedAnnct?.title}}</h5>\r\n      <p>Type: {{selectedAnnct?.scope}}</p>\r\n      <p>Date posted: {{selectedAnnct?.date | date: \"short\"}}</p>\r\n      <h5>Content</h5>\r\n      <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"500px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\r\n        <!--Used innerHTML to insert content as content is html as well-->\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n          <!-- <button *ngIf=\"user.uid === selectedAnnct.uid || user.propertyManager === true\" type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"deleteAnnct(selectedAnnct)\">Delete</button>\r\n          <button *ngIf=\"user.uid === selectedAnnct.uid\" type=\"button\" class=\"btn btn-primary mobtn\" (click)=\"editAnnct(selectedAnnct)\">Edit</button> -->\r\n      </div>\r\n  </div>\r\n</app-modal-basic>\r\n\r\n<!--Reason for deleting modal form-->\r\n<button id=\"reasonModalButton\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display:none;\"></button>\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\">Reason for deleting this announcement</h4>\r\n        <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div id=\"reasonModalBody\" class=\"app-modal-body\">\r\n      <p>Reason : </p>\r\n      <form #reasonForm=\"ngForm\" (ngSubmit)=\"deleteAnnct(selectedAnnct,reasonForm)\">\r\n        <textarea required minlength=\"20\" class=\"form-control\" placeholder=\"Please enter your reason for deleting this announcement\" name=\"reason\" ngModel></textarea>\r\n\r\n        <button id=\"submitReason\" type=\"submit\" style=\"display:none;\"></button>\r\n      </form>\r\n    </div>\r\n    <div id=\"reasonModalFooter\" class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n        <button id=\"submitReasonButton\" type=\"submit\" class=\"btn btn-primary waves-effect waves-light \" (click) = \"submitReason()\">Delete</button>\r\n    </div>\r\n</app-modal-basic>"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/personal-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PersonalAnnctComponent = (function () {
    function PersonalAnnctComponent(listAnnctSvc, editAnnctSvc, userSvc, firebaseAuth, shareSelectAnnct, router, route) {
        this.listAnnctSvc = listAnnctSvc;
        this.editAnnctSvc = editAnnctSvc;
        this.userSvc = userSvc;
        this.firebaseAuth = firebaseAuth;
        this.shareSelectAnnct = shareSelectAnnct;
        this.router = router;
        this.route = route;
        this.listOfAnnct = [];
        this.user = {
            uid: "abc"
        };
    }
    PersonalAnnctComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var userId: string = this.firebaseAuth.authState.uid;
        // this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
        this.listAnnctSvc.fetchAnnct("personal", function (fetchedAnnct) { _this.listOfAnnct = fetchedAnnct; });
        //Once this.listOfAnnct is updated, ngFor should list out all the announcements through observable.
    };
    PersonalAnnctComponent.prototype.viewAnnct = function (annct) {
        this.selectedAnnct = annct;
        document.getElementsByClassName("overflow-container").item(0).innerHTML = this.selectedAnnct.content;
        document.getElementById("modalButton").click();
    };
    PersonalAnnctComponent.prototype.deleteAnnct = function (annct, reasonForm) {
        //When true is returned, annct is deleted, else, annct is not
        var result = this.editAnnctSvc.deleteAnnct(annct, reasonForm);
        if (result === true) {
            document.getElementById("closeAnnctButton").click();
            document.getElementById("reasonModalBody").innerHTML = "<h1>Announcement Deleted</h1>";
            document.getElementById("submitReasonButton").style.display = "none";
        }
        else if (result === false) {
            document.getElementById("reasonModalButton").click();
        }
    };
    PersonalAnnctComponent.prototype.submitReason = function () {
        document.getElementById("submitReason").click();
    };
    PersonalAnnctComponent.prototype.editAnnct = function (annct) {
        this.shareSelectAnnct.storeAnnct(annct);
        document.getElementById("closeAnnctButton").click();
        this.router.navigate(["../edit"], { relativeTo: this.route });
    };
    return PersonalAnnctComponent;
}());
PersonalAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-annct-personal',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/personal-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], PersonalAnnctComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=personal-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/property-annct.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-responsive\">\r\n  <thead>\r\n    <tr>\r\n      <th>Your Property Announcements</th>\r\n      <th>Date</th>\r\n      <th>By</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n<!--     <span class=\"For pagination later\"> -->\r\n      <tr *ngFor=\"let annct of listOfAnnct\" (click)=\"viewAnnct(annct)\">\r\n        <td>{{annct.title}}</td>\r\n        <td>{{annct.date | date: \"short\"}}</td>\r\n        <td>{{annct.userName}}</td>\r\n      </tr>\r\n<!--     </span> -->\r\n  </tbody>\r\n</table>\r\n<button id=\"modalButton\" (click)=\"modalOverflow.show()\" style=\"display:none;\"></button>\r\n<!-- modal goes here.-->\r\n<app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n  <div class=\"app-modal-body\">\r\n      <button id=\"closeAnnctButton\" type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h5 class=\"font-header\">{{selectedAnnct?.title}}</h5>\r\n      <p>Type: {{selectedAnnct?.scope}}</p>\r\n      <p>Date posted: {{selectedAnnct?.date | date: \"short\"}}</p>\r\n      <h5>Content</h5>\r\n      <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"500px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\r\n        <!--Used innerHTML to insert content as content is html as well-->\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n         <!--  <button *ngIf=\"user.uid === selectedAnnct.uid || user.propertyManager === true\" type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"deleteAnnct(selectedAnnct)\">Delete</button>\r\n          <button *ngIf=\"user.uid === selectedAnnct.uid\" type=\"button\" class=\"btn btn-primary mobtn\" (click)=\"editAnnct(selectedAnnct)\">Edit</button> -->\r\n      </div>\r\n  </div>\r\n</app-modal-basic>\r\n\r\n<!--Reason for deleting modal form-->\r\n<button id=\"reasonModalButton\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display:none;\"></button>\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\">Reason for deleting this announcement</h4>\r\n        <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div id=\"reasonModalBody\" class=\"app-modal-body\">\r\n      <p>Reason : </p>\r\n      <form #reasonForm=\"ngForm\" (ngSubmit)=\"deleteAnnct(selectedAnnct,reasonForm)\">\r\n        <textarea required minlength=\"20\" class=\"form-control\" placeholder=\"Please enter your reason for deleting this announcement\" name=\"reason\" ngModel></textarea>\r\n\r\n        <button id=\"submitReason\" type=\"submit\" style=\"display:none;\"></button>\r\n      </form>\r\n    </div>\r\n    <div id=\"reasonModalFooter\" class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n        <button id=\"submitReasonButton\" type=\"submit\" class=\"btn btn-primary waves-effect waves-light \" (click) = \"submitReason()\">Delete</button>\r\n    </div>\r\n</app-modal-basic>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/property-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PropertyAnnctComponent = (function () {
    function PropertyAnnctComponent(listAnnctSvc, editAnnctSvc, userSvc, firebaseAuth, shareSelectAnnct, router, route) {
        this.listAnnctSvc = listAnnctSvc;
        this.editAnnctSvc = editAnnctSvc;
        this.userSvc = userSvc;
        this.firebaseAuth = firebaseAuth;
        this.shareSelectAnnct = shareSelectAnnct;
        this.router = router;
        this.route = route;
        this.listOfAnnct = [];
        this.user = {
            uid: "abc"
        };
    }
    PropertyAnnctComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var userId: string = this.firebaseAuth.authState.uid;
        // this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
        this.listAnnctSvc.fetchAnnct("estate", function (fetchedAnnct) { _this.listOfAnnct = fetchedAnnct; });
        //Once this.listOfAnnct is updated, ngFor should list out all the announcements through observable.
    };
    PropertyAnnctComponent.prototype.viewAnnct = function (annct) {
        this.selectedAnnct = annct;
        document.getElementsByClassName("overflow-container").item(0).innerHTML = this.selectedAnnct.content;
        document.getElementById("modalButton").click();
    };
    PropertyAnnctComponent.prototype.deleteAnnct = function (annct, reasonForm) {
        //When true is returned, annct is deleted, else, annct is not
        var result = this.editAnnctSvc.deleteAnnct(annct, reasonForm);
        if (result === true) {
            document.getElementById("closeAnnctButton").click();
            document.getElementById("reasonModalBody").innerHTML = "<h1>Announcement Deleted</h1>";
            document.getElementById("submitReasonButton").style.display = "none";
        }
        else if (result === false) {
            document.getElementById("reasonModalButton").click();
        }
    };
    PropertyAnnctComponent.prototype.submitReason = function () {
        document.getElementById("submitReason").click();
    };
    PropertyAnnctComponent.prototype.editAnnct = function (annct) {
        this.shareSelectAnnct.storeAnnct(annct);
        document.getElementById("closeAnnctButton").click();
        this.router.navigate(["../edit"], { relativeTo: this.route });
    };
    return PropertyAnnctComponent;
}());
PropertyAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-annct-property',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/property-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], PropertyAnnctComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=property-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/unit-annct.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-responsive\">\r\n  <thead>\r\n    <tr>\r\n      <th>Your Unit Announcements</th>\r\n      <th>Date</th>\r\n      <th>By</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n<!--     <span class=\"For pagination later\"> -->\r\n      <tr *ngFor=\"let annct of listOfAnnct\" (click)=\"viewAnnct(annct)\">\r\n        <td>{{annct.title}}</td>\r\n        <td>{{annct.date | date: \"short\"}}</td>\r\n        <td>{{annct.userName}}</td>\r\n      </tr>\r\n<!--     </span> -->\r\n  </tbody>\r\n</table>\r\n<button id=\"modalButton\" (click)=\"modalOverflow.show()\" style=\"display:none;\"></button>\r\n<!-- modal goes here.-->\r\n<app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n  <div class=\"app-modal-body\">\r\n      <button id=\"closeAnnctButton\" type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h5 class=\"font-header\">{{selectedAnnct?.title}}</h5>\r\n      <p>Type: {{selectedAnnct?.scope}}</p>\r\n      <p>Date posted: {{selectedAnnct?.date | date: \"short\"}}</p>\r\n      <h5>Content</h5>\r\n      <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"500px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\r\n        <!--Used innerHTML to insert content as content is html as well-->\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n<!--           <button type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"deleteAnnct(selectedAnnct)\">Delete</button>\r\n          <button type=\"button\" class=\"btn btn-primary mobtn\" (click)=\"editAnnct(selectedAnnct)\">Edit</button> -->\r\n      </div>\r\n  </div>\r\n</app-modal-basic>\r\n\r\n<!--Reason for deleting modal form-->\r\n<button id=\"reasonModalButton\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display:none;\"></button>\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\">Reason for deleting this announcement</h4>\r\n        <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div id=\"reasonModalBody\" class=\"app-modal-body\">\r\n      <p>Reason : </p>\r\n      <form #reasonForm=\"ngForm\" (ngSubmit)=\"deleteAnnct(selectedAnnct,reasonForm)\">\r\n        <textarea required minlength=\"20\" class=\"form-control\" placeholder=\"Please enter your reason for deleting this announcement\" name=\"reason\" ngModel></textarea>\r\n\r\n        <button id=\"submitReason\" type=\"submit\" style=\"display:none;\"></button>\r\n      </form>\r\n    </div>\r\n    <div id=\"reasonModalFooter\" class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n        <button id=\"submitReasonButton\" type=\"submit\" class=\"btn btn-primary waves-effect waves-light \" (click) = \"submitReason()\">Delete</button>\r\n    </div>\r\n</app-modal-basic>"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/annctPage/unit-annct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitAnnctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UnitAnnctComponent = (function () {
    function UnitAnnctComponent(listAnnctSvc, editAnnctSvc, userSvc, firebaseAuth, shareSelectAnnct, router, route) {
        this.listAnnctSvc = listAnnctSvc;
        this.editAnnctSvc = editAnnctSvc;
        this.userSvc = userSvc;
        this.firebaseAuth = firebaseAuth;
        this.shareSelectAnnct = shareSelectAnnct;
        this.router = router;
        this.route = route;
        this.listOfAnnct = [];
        this.user = {
            uid: "abc"
        };
    }
    UnitAnnctComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var userId: string = this.firebaseAuth.authState.uid;
        // this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
        this.listAnnctSvc.fetchAnnct("unit", function (fetchedAnnct) { _this.listOfAnnct = fetchedAnnct; });
        //Once this.listOfAnnct is updated, ngFor should list out all the announcements through observable.
    };
    UnitAnnctComponent.prototype.viewAnnct = function (annct) {
        this.selectedAnnct = annct;
        document.getElementsByClassName("overflow-container").item(0).innerHTML = this.selectedAnnct.content;
        document.getElementById("modalButton").click();
    };
    UnitAnnctComponent.prototype.deleteAnnct = function (annct, reasonForm) {
        //When true is returned, annct is deleted, else, annct is not
        var result = this.editAnnctSvc.deleteAnnct(annct, reasonForm);
        if (result === true) {
            document.getElementById("closeAnnctButton").click();
            document.getElementById("reasonModalBody").innerHTML = "<h1>Announcement Deleted</h1>";
            document.getElementById("submitReasonButton").style.display = "none";
        }
        else if (result === false) {
            document.getElementById("reasonModalButton").click();
        }
    };
    UnitAnnctComponent.prototype.submitReason = function () {
        document.getElementById("submitReason").click();
    };
    UnitAnnctComponent.prototype.editAnnct = function (annct) {
        this.shareSelectAnnct.storeAnnct(annct);
        document.getElementById("closeAnnctButton").click();
        this.router.navigate(["../edit"], { relativeTo: this.route });
    };
    return UnitAnnctComponent;
}());
UnitAnnctComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-annct-unit',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/unit-annct.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_list_annct_service__["a" /* ListAnnctService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_edit_annct_service__["a" /* EditAnnctService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], UnitAnnctComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=unit-annct.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/announcement.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<div class=\"row\">\r\n  <a class = \"col-m-2 btn btn-primary\" routerLink=\"./property\" routerLinkActive=\"currentAnnctType\">Property</a>\r\n  <a class = \"col-m-2 btn btn-primary\" routerLink=\"./block\" routerLinkActive=\"currentAnnctType\">Block</a>\r\n  <a class = \"col-m-2 btn btn-primary\" routerLink=\"./unit\" routerLinkActive=\"currentAnnctType\">Unit</a>\r\n  <a class = \"col-m-2 btn btn-primary\" routerLink=\"./personal\" routerLinkActive=\"currentAnnctType\">Personal</a>\r\n  <a class = \"col-m-2 btn btn-primary\" routerLink=\"./my\" routerLinkActive=\"currentAnnuctType\">All my Announcements</a>\r\n  <a class = \"col-m-2 btn btn-primary\" routerLink=\"./create\">Post announcement</a>\r\n</div> -->\r\n<app-card [title]=\"Announcement\">\r\n\t<a class=\"btn btn-primary\" routerLink=\"./create\" (click)=\"setAnnctType('Property')\">Post announcement</a>\r\n\t<div ngbDropdown class=\"dropdown-primary dropdown open\">\r\n       <button ngbDropdownToggle class=\"btn btn-primary dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown-2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">{{annctTypeSelected}}</button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown-2\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n          <a class = \"dropdown-item waves-light waves-effect\" routerLink=\"./property\" (click)=\"setAnnctType('Property')\">Property</a>\r\n    \t\t  <a class = \"dropdown-item waves-light waves-effect\" routerLink=\"./block\" (click)=\"setAnnctType('Block')\">Block</a>\r\n    \t\t  <a class = \"dropdown-item waves-light waves-effect\" routerLink=\"./unit\" (click)=\"setAnnctType('Unit')\">Unit</a>\r\n    \t\t  <a class = \"dropdown-item waves-light waves-effect\" routerLink=\"./personal\" (click)=\"setAnnctType('Personal')\">Personal</a>\r\n    \t\t  <a class = \"dropdown-item waves-light waves-effect\" routerLink=\"./my\" (click)=\"setAnnctType('All my Announcements')\">All my Announcements</a>\r\n          <a *ngIf = \"user.propertyManager === true\" class = \"dropdown-item waves-light waves-effect\" routerLink=\"./approve\" (click)=\"setAnnctType('Unapproved')\">Unapproved</a>\r\n        </div>\r\n    </div>\r\n\t<router-outlet></router-outlet>\r\n</app-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/announcement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
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




var AnnouncementComponent = (function () {
    function AnnouncementComponent(userSvc, firebaseAuth) {
        this.userSvc = userSvc;
        this.firebaseAuth = firebaseAuth;
        this.annctTypeSelected = "Property";
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.firebaseAuth.authState.uid;
        this.userSvc.getUser(userId).subscribe(function (userInfo) { return _this.user = userInfo; });
    };
    AnnouncementComponent.prototype.setAnnctType = function (type) {
        this.annctTypeSelected = type;
    };
    return AnnouncementComponent;
}());
AnnouncementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-announcement',
        template: __webpack_require__("../../../../../src/app/components/basic/community/announcement/announcement.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AnnouncementComponent);

var _a, _b;
//# sourceMappingURL=announcement.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/announcement.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_routing__ = __webpack_require__("../../../../../src/app/components/basic/basic.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__announcement_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/announcement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__annctPage_property_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/property-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__annctPage_block_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/block-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__annctPage_unit_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/unit-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__annctPage_personal_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/personal-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__annctPage_my_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/my-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__annctPage_create_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/create-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__annctPage_edit_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/edit-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__annctPage_approve_annct_component__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/annctPage/approve-annct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_share_selected_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_list_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_edit_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_post_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/post-annct.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import {AnnctModalComponent} from "./annctPage/annct-modal.component";




var AnnouncementModule = (function () {
    function AnnouncementModule() {
    }
    return AnnouncementModule;
}());
AnnouncementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__basic_routing__["a" /* BasicRoutes */]),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__announcement_component__["a" /* AnnouncementComponent */],
            __WEBPACK_IMPORTED_MODULE_6__annctPage_property_annct_component__["a" /* PropertyAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_7__annctPage_block_annct_component__["a" /* BlockAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_8__annctPage_unit_annct_component__["a" /* UnitAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_9__annctPage_personal_annct_component__["a" /* PersonalAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_11__annctPage_create_annct_component__["a" /* CreateAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_10__annctPage_my_annct_component__["a" /* MyAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_12__annctPage_edit_annct_component__["a" /* EditAnnctComponent */],
            //AnnctModalComponent,
            __WEBPACK_IMPORTED_MODULE_13__annctPage_approve_annct_component__["a" /* ApproveAnnctComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__announcement_component__["a" /* AnnouncementComponent */],
            __WEBPACK_IMPORTED_MODULE_6__annctPage_property_annct_component__["a" /* PropertyAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_7__annctPage_block_annct_component__["a" /* BlockAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_8__annctPage_unit_annct_component__["a" /* UnitAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_9__annctPage_personal_annct_component__["a" /* PersonalAnnctComponent */],
            //AnnctModalComponent,
            __WEBPACK_IMPORTED_MODULE_11__annctPage_create_annct_component__["a" /* CreateAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_10__annctPage_my_annct_component__["a" /* MyAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_12__annctPage_edit_annct_component__["a" /* EditAnnctComponent */],
            __WEBPACK_IMPORTED_MODULE_13__annctPage_approve_annct_component__["a" /* ApproveAnnctComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__shared_share_selected_annct_service__["a" /* ShareSelectedAnnctService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_list_annct_service__["a" /* ListAnnctService */],
            __WEBPACK_IMPORTED_MODULE_16__shared_edit_annct_service__["a" /* EditAnnctService */],
            __WEBPACK_IMPORTED_MODULE_17__shared_post_annct_service__["a" /* PostAnnctService */]
        ]
    })
], AnnouncementModule);

//# sourceMappingURL=announcement.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/shared/announcement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Announcement; });
var Announcement = (function () {
    function Announcement(title, html, address, scope) {
        this.title = title;
        this.content = html;
        this.address = address;
        this.scope = scope;
    }
    return Announcement;
}());

//# sourceMappingURL=announcement.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/shared/edit-annct.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAnnctService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_annct_service__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/post-annct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";



// import * as firebase from "firebase";
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var EditAnnctService = (function () {
    function EditAnnctService(http, postAnnctSvc, userSvc) {
        this.http = http;
        this.postAnnctSvc = postAnnctSvc;
        this.userSvc = userSvc;
    }
    EditAnnctService.prototype.deleteFromDb = function (annct) {
        // 	if(annct.scope === "property"){
        //  	let propAnnctToDelete = this.db.object(`announcements/${annct.address.estate}/broadcast/${annct.refToOtherAnnct}`)
        //  	propAnnctToDelete.remove()
        //  } else if(annct.scope === "block"){
        //  	let blockAnnctToDelete = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/broadcast/${annct.refToOtherAnnct}`)
        //  	blockAnnctToDelete.remove()
        //  }
        //  let deleteFromUserAnnct = this.db.object(`announcements/${annct.address.estate}/userAnnct/${annct.refToUserAnnct}`)
        //  deleteFromUserAnnct.remove()
        var jsonAnnouncement = JSON.stringify(annct);
        this.http.post("/api/announcement/delete", jsonAnnouncement, httpOptions)
            .subscribe();
    };
    EditAnnctService.prototype.deleteAnnct = function (annct, reasonForm) {
        if (reasonForm == undefined) {
            //To trigger modal appearance
            return false;
        }
        else if (reasonForm != undefined) {
            this.deleteFromDb(annct);
            var reason = reasonForm.value.reason;
            var reasonTitle = "Your announcement \"" + annct.title + "\" has been deleted/disapproved.";
            //search for the user who posted the annct. And notfy him/her
            // this.userSvc.getUser(annct.userId).subscribe(userInfo => 
            //   this.postAnnctSvc.postAnnounce(userInfo, reasonTitle, reason, "personal", user)
            //   );
            // console.log("gfdgfd")
            return true;
        }
    };
    EditAnnctService.prototype.editAnnct = function (annct, html, title) {
        annct.content = html;
        annct.title = title.concat("(Edited)");
        annct.date = new Date();
        var jsonAnnouncement = JSON.stringify(annct);
        this.http.post("/api/announcement/update", jsonAnnouncement, httpOptions)
            .subscribe();
        // if(annct.scope === "property"){
        // 	let oldPropAnnct = this.db.object(`announcements/${annct.address.estate}/broadcast/${annct.refToOtherAnnct}`)
        // 	oldPropAnnct.update(annct)
        // } else if(annct.scope === "block"){
        //    let oldBlockAnnct = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/broadcast/${annct.refToOtherAnnct}`)
        //    oldBlockAnnct.update(annct)
        // } else if(annct.scope === "unit"){
        //    let oldUnitAnnct = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/${annct.address.unit}/broadcast/`)
        //    oldUnitAnnct.update(annct)
        //  } else if(annct.scope === "personal"){
        //    let oldPersonAnnct = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/${annct.address.unit}/personal/${annct.userId}`)
        //    oldPersonAnnct.update(annct)
        //  }
        //  let oldUserAnnct = this.db.list(`announcements/${annct.address.estate}/userAnnct/`)
        //  oldUserAnnct.update(annct.refToUserAnnct, annct)
    };
    return EditAnnctService;
}());
EditAnnctService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__post_annct_service__["a" /* PostAnnctService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post_annct_service__["a" /* PostAnnctService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], EditAnnctService);

var _a, _b, _c;
//# sourceMappingURL=edit-annct.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/shared/list-annct.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAnnctService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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

// import { User } from "../../../../../model/user";

// import "rxjs/add/operator/toPromise";

var ListAnnctService = (function () {
    // private listOfAnnctDb: FirebaseListObservable<Announcement[]>;
    //private listOfAnnct: Announcement[] = [];
    function ListAnnctService(http) {
        this.http = http;
    }
    ListAnnctService.prototype.fetchAnnct = function (scope, callback) {
        this.http.get("/api/announcement/" + scope)
            .subscribe(function (anncts) {
            callback(anncts);
        });
    };
    return ListAnnctService;
}());
ListAnnctService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ListAnnctService);

var _a;
//# sourceMappingURL=list-annct.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/shared/post-annct.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAnnctService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__announcement__ = __webpack_require__("../../../../../src/app/components/basic/community/announcement/shared/announcement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

// import { User } from "../../../../../model/user";

var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var PostAnnctService = (function () {
    function PostAnnctService(http) {
        this.http = http;
    }
    PostAnnctService.prototype.postAnnounce = function (title, html, scope, address) {
        this.announceToPost = new __WEBPACK_IMPORTED_MODULE_1__announcement__["a" /* Announcement */](title, html, address, scope);
        //set date of announcement 
        this.announceToPost.date = new Date();
        //Set block/property announcement to unapproved if user is not an property admin
        if (["property", "block"].indexOf(this.announceToPost.scope) > -1) {
            this.announceToPost.approved = false;
        }
        else {
            this.announceToPost.approved = true;
        }
        var jsonAnnouncement = JSON.stringify(this.announceToPost);
        this.http.post("/api/announcement/", jsonAnnouncement, httpOptions)
            .subscribe();
        // if(scope === "property"){
        //    let dbRef = this.db.list(`announcements/${user.address.estate}/broadcast/`);
        //    this.bindingAnnct(user, dbRef);
        // } else if(scope === "block"){
        //    let dbRef = this.db.list(`announcements/${user.address.estate}/${user.address.block}/broadcast/`);
        //    this.bindingAnnct(user, dbRef);
        // } else if(scope === "unit"){
        //    let dbRef = this.db.list(`announcements/${user.address.estate}/${user.address.block}/${user.address.unit}/broadcast/`);
        //    this.bindingAnnct(user, dbRef);
        // } else if(scope === "personal"){
        //    let dbRef = this.db.list(`announcements/${user.address.estate}/${user.address.block}/${user.address.unit}/personal/${user.$key}/`);
        //    this.bindingAnnct(user, dbRef);
        // }
    };
    return PostAnnctService;
}());
PostAnnctService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PostAnnctService);

var _a;
//# sourceMappingURL=post-annct.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/community/announcement/shared/share-selected-annct.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareSelectedAnnctService; });
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

var ShareSelectedAnnctService = (function () {
    function ShareSelectedAnnctService() {
    }
    ShareSelectedAnnctService.prototype.storeAnnct = function (annct) {
        this.selectedAnnct = annct;
    };
    ShareSelectedAnnctService.prototype.getAnnct = function () {
        return this.selectedAnnct;
    };
    return ShareSelectedAnnctService;
}());
ShareSelectedAnnctService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ShareSelectedAnnctService);

//# sourceMappingURL=share-selected-annct.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/estate-maintenance/estate-maintenance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".squeezebox .sb-item {\r\n    overflow: hidden;\r\n}\r\n\r\n.squeezebox .sb-item .sb-item-body {\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: 0.5s height;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basic/estate-maintenance/estate-maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Right column start -->\r\n  <div class=\"col-xl-3 col-lg-12 push-xl-9\">\r\n    <!-- Search box card start -->\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5 class=\"card-header-text\">Search Box</h5></div>\r\n      <div class=\"card-body p-t-10\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search here...\">\r\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"icofont icofont-search\"></i></span>\r\n        </div>\r\n        <div class=\"task-right\">\r\n          <div class=\"accordion-block scale-accordion\">\r\n            <squeezebox [multiple]=\"true\">\r\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n                <sb-item-head class=\"accordion-heading\">\r\n                  <div class=\"task-right-header-status\">\r\n                    <span data-toggle=\"collapse\">Completed Stats</span>\r\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\r\n                  </div>\r\n                </sb-item-head>\r\n                <sb-item-body class=\"accordion-content\">\r\n                  <div class=\"taskboard-right-progress\">\r\n                      <h6>Highest Priority</h6>\r\n                      <div class=\"faq-progress\">\r\n                        <div class=\"progress\">\r\n                          <!-- <span class=\"faq-text3\"></span> -->\r\n                          <div class=\"faq-bar3\" style=\"width: 80%;\"></div>\r\n                        </div>\r\n                      </div>\r\n                      <h6>High priority</h6>\r\n                      <div class=\"faq-progress\">\r\n                        <div class=\"progress\">\r\n                          <!-- <span class=\"faq-text1\"></span> -->\r\n                          <div class=\"faq-bar1\" style=\"width: 70%;\"></div>\r\n                        </div>\r\n                      </div>\r\n                      <h6>Normal priority</h6>\r\n                      <div class=\"faq-progress\">\r\n                        <div class=\"progress\">\r\n                          <!-- <span class=\"faq-text2\"></span> -->\r\n                          <div class=\"faq-bar2\" style=\"width: 50%;\"></div>\r\n                        </div>\r\n                      </div>\r\n                      <h6>Low priority</h6>\r\n                      <div class=\"faq-progress\">\r\n                        <div class=\"progress\">\r\n                          <!-- <span class=\"faq-text4\"></span> -->\r\n                          <div class=\"faq-bar4\" style=\"width: 60%;\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                </sb-item-body>\r\n              </sb-item>\r\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n                <sb-item-head class=\"accordion-heading\">\r\n                  <div class=\"task-right-header-users\">\r\n                    <span data-toggle=\"collapse\">Assign Users</span>\r\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\r\n                  </div>\r\n                </sb-item-head>\r\n                <sb-item-body class=\"accordion-content\">\r\n                  <div class=\"user-box assign-user taskboard-right-users\">\r\n                      <div class=\"media\">\r\n                        <div class=\"media-left media-middle photo-table\">\r\n                          <a href=\"javascript:;\">\r\n                            <img class=\"media-object img-circle\" src=\"assets/images/avatar-1.png\" alt=\"Generic placeholder image\">\r\n                            <div class=\"live-status bg-danger\"></div>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <h6>Josephin Doe</h6>\r\n                          <p>Santa Ana,CA</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"media\">\r\n                        <div class=\"media-left media-middle photo-table\">\r\n                          <a href=\"javascript:;\">\r\n                            <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\r\n                            <div class=\"live-status bg-success\"></div>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <h6>Josephin Doe</h6>\r\n                          <p>Huntingston, NJ</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"media\">\r\n                        <div class=\"media-left media-middle photo-table\">\r\n                          <a href=\"javascript:;\">\r\n                            <img class=\"media-object img-circle\" src=\"assets/images/avatar-3.png\" alt=\"Generic placeholder image\">\r\n                            <div class=\"live-status bg-danger\"></div>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <h6>Josephin Doe</h6>\r\n                          <p>Willingstion, WA</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"media\">\r\n                        <div class=\"media-left media-middle photo-table\">\r\n                          <a href=\"javascript:;\">\r\n                            <img class=\"media-object img-circle\" src=\"assets/images/avatar-2.png\" alt=\"Generic placeholder image\">\r\n                            <div class=\"live-status bg-success\"></div>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <h6>Josephin Doe</h6>\r\n                          <p>Illions, IL</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                </sb-item-body>\r\n              </sb-item>\r\n              <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n                <sb-item-head class=\"accordion-heading\">\r\n                  <div class=\"task-right-header-revision\">\r\n                    <span data-toggle=\"collapse\">Revision</span>\r\n                    <i class=\"icofont icofont-rounded-down f-right\"></i>\r\n                  </div>\r\n                </sb-item-head>\r\n                <sb-item-body class=\"accordion-content\">\r\n                  <div class=\"taskboard-right-revision user-box\">\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-primary btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-gears\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Drop the IE specific hacks for temporal inputs</div>\r\n                        <p class=\"chat-header  text-muted\">4 minutes ago</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-danger btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-share\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Have Carousel ignore keyboard events</div>\r\n                        <p class=\"chat-header  text-muted\">12 Dec,2015</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-warning btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-font\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Add full font overrides for popovers and tooltips</div>\r\n                        <p class=\"chat-header text-muted\">2 month ago</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                    <div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <a class=\"btn btn-outline-success btn-lg bg-white txt-muted btn-icon\" href=\"javascript:;\" role=\"button\"><i class=\"icofont icofont-responsive\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"chat-header\">Responsive Asssignment</div>\r\n                        <p class=\"chat-header  text-muted\">6 month ago</p>\r\n                      </div>\r\n                      <!-- end of media body -->\r\n                    </div>\r\n                    <!-- end of media -->\r\n                  </div>\r\n                </sb-item-body>\r\n              </sb-item>\r\n            </squeezebox>\r\n          </div>\r\n          <!-- end of task-right-revision -->\r\n        </div>\r\n        <!-- end of sidebar-right -->\r\n      </div>\r\n      <!-- end of card-body -->\r\n    </div>\r\n    <!-- Search box card end -->\r\n  </div>\r\n  <!-- Right column end -->\r\n  <!-- Left column start -->\r\n  <div class=\"col-xl-9 col-lg-12 pull-xl-3 filter-bar\">\r\n    <!-- Nav Filter tab start -->\r\n    <nav class=\"navbar navbar-light bg-faded m-b-30 p-10\">\r\n      <ul class=\"nav navbar-nav\">\r\n\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"javascript:;\">Filter: <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li ngbDropdown=\"\" class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle=\"\" class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bydate\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-clock-time\"></i> By Date</a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bydate\">\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Today</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Yesterday</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">This week</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">This month</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">This year</a>\r\n          </div>\r\n        </li>\r\n        <!-- end of by date dropdown -->\r\n        <li ngbDropdown class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bystatus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-chart-histogram-alt\"></i> By Status</a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bystatus\">\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Open</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">On hold</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Resolved</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Closed</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Dublicate</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Wontfix</a>\r\n          </div>\r\n        </li>\r\n        <!-- end of by status dropdown -->\r\n        <li ngbDropdown class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"bypriority\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-sub-listing\"></i> By Priority</a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"bypriority\">\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Show all</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Highest</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">High</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Normal</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">Low</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n        <div class=\"nav-item nav-grid\">\r\n          <span class=\"m-r-15\">View Mode: </span>\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light m-r-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"list view\">\r\n            <i class=\"icofont icofont-listine-dots\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"grid view\">\r\n            <i class=\"icofont icofont-table\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- end of by priority dropdown -->\r\n\r\n    </nav>\r\n    <!-- Nav Filter tab end -->\r\n\r\n\r\n    <!-- over here, there will be maintenance reports pulled from the database: -->\r\n\r\n\r\n      <div class=\"row card-group\">\r\n          <div class=\"col-sm-3\" *ngFor=\"let report of reportsList\">\r\n            <div class=\"card col-sm-12\">\r\n              <div class=\"card card-border-default\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"col-sm-12\">\r\n                    <h3 class=\"title\">{{report.faultType}}</h3>\r\n                  </div>  \r\n                </div>\r\n                <!-- <div class=\"card-body\">\r\n                  <div class=\"col-sm-12\">\r\n                    <img class=\"card-img-top\" src=\"{{product.imageUrl}}\" alt=\"Card image cap\">\r\n                  </div> \r\n                </div> -->\r\n                <div class=\"card-body\">\r\n                  <div class=\"col-sm-12\">\r\n                    <h4 class=\"sub-title\">{{report.details}}</h4>\r\n                  </div> \r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"col-sm-12\">\r\n                    <h4 class=\"sub-title\">{{report.date}}</h4>\r\n                  </div> \r\n                </div>\r\n                <button class=\"btn\">Edit\r\n                </button>\r\n              </div>  \r\n            </div>\r\n          </div>    \r\n        </div>\r\n\r\n\r\n    <!-- end reports pulled from the database -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- Task board design block start-->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"card card-border-default\">\r\n          <div class=\"card-header\">\r\n            <div class=\"col-sm-12\">\r\n              <div ngbDropdown class=\"d-inline-block\">\r\n                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Fault Type</button>\r\n               <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown1\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Lighting</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Leakage</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Waste</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Infrastructure</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close-line\"></i> Facilities</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close-line\"></i> Other</a>\r\n                </div>\r\n              </div>\r\n            </div>  \r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <p class=\"task-detail\">At level 10, lights outside apartment 322 flashes continuously</p>\r\n                <p class=\"task-due\"><strong> Posted : </strong><strong class=\"label label-danger\">20 October 2017</strong></p>\r\n              </div>\r\n              <!-- end of col-sm-8 -->\r\n            </div>\r\n            <!-- end of row -->\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <a href=\"javascript:;\"><img class=\"img-fluid img-circle\" src=\"assets/images/avatar-1.png\" alt=\"1\" /></a>\r\n              <a href=\"javascript:;\"><img class=\"img-fluid img-circle\" src=\"assets/images/avatar-2.png\" alt=\"1\" /></a>\r\n              <a href=\"javascript:;\"><i class=\"icofont icofont-plus\"></i></a>\r\n            </div>\r\n            <div class=\"task-board\">\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Normal</button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown1\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-danger\"></span>Highest priority</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-warning\"></span>High priority</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\"><span class=\"point-marker bg-success\"></span>Normal priority</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><span class=\"point-marker bg-info\"></span>Low priority</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Open</button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown2\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\">Open</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">On hold</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Resolved</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Closed</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Dublicate</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Invalid</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Wontfix</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm\"></i> Check in</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i> Attach screenshot</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5\"></i> Reassign</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i> Edit task</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close-line\"></i> Remove</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n      </div>  \r\n    </div>\r\n    <!-- Task board design block end -->\r\n\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let report of reportsList\">\r\n        <input hidden=\"true\" value=\"{{report.uid}}\"> \r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card card-border-default\">\r\n            <div class=\"card-header\">\r\n              <div class=\"col-sm-12\">\r\n                <h4 class=\"sub-title\">{{report.faultType}}</h4>\r\n                <span>  \r\n                  <button (click)=deleteReport(report)>Delete</button>\r\n                </span>\r\n              </div>  \r\n            </div>\r\n            <div class=\"card-header\">\r\n              <div class=\"col-sm-12\">\r\n                <a class=\"text\">{{report.details}}</a>\r\n              </div> \r\n            </div>\r\n            <div class=\"card-header\">\r\n              <div class=\"col-sm-12\">\r\n                <a class=\"text\">{{report.details}}</a>\r\n              </div> \r\n            </div>\r\n          </div>  \r\n        </div>\r\n      </div>    \r\n    </div>\r\n\r\n\r\n\r\n\r\n    <!--Place for new submission of reports-->\r\n            <div class=\"col-xs-12\">\r\n              <div class=\"card card-border-default\">\r\n                <div class=\"card-header\">\r\n                  <h5 class=\"ng-tns-c5-64\">Submit new report</h5>\r\n                </div>\r\n                  <form #reportObjectForm=\"ngForm\" (ngSubmit)=\"submitForm()\">\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-xs-12\">\r\n                        <h4 class=\"sub-title\">Fault Type</h4>\r\n                        <ng-select [ngClass]=\"'ng-select'\" [options]=\"faultOptions\" [(ngModel)]=\"reportForm.faultType\" name=\"faultType\"> </ng-select>\r\n                        <p class=\"m-t-10\"> Select the category of fault</p>\r\n                      </div>\r\n                    </div>  \r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-xs-12\">\r\n                        <h4 class=\"sub-title\">Priority Level</h4>\r\n                        <ng-select [ngClass]=\"'ng-select'\" [options]=\"priorityOptions\" [(ngModel)]=\"reportForm.priority\" name=\"priority\"> </ng-select>\r\n                        <p class=\"m-t-10\"> How urgent is it?</p>\r\n                      </div>  \r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-xs-12\">\r\n                        <h4 class=\"sub-title\">Details</h4>\r\n                        <textarea [(ngModel)]=\"reportForm.details\" rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Details of fault\" name=\"details\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-xs-12\">\r\n                        <h4 class=\"sub-title\">Name</h4>\r\n                        <input [(ngModel)]=\"reportForm.resident\" type=\"text\" placeholder=\"How do we address you\" name=\"resident\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-xs-12\">\r\n                        <h4 class=\"sub-title\">Contact Number</h4>\r\n                        <input [(ngModel)]=\"reportForm.phoneNumber\" type=\"text\" placeholder=\"87654321\" name=\"phoneNumber\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-xs-12\">\r\n                        <h4 class=\"sub-title\">Block Number</h4>\r\n                        <h5>88</h5>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-xs-12\">\r\n                        <h4 class=\"sub-title\">Simple Popup</h4>\r\n                            <div class=\"input-group\">\r\n                              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"date\" [(ngModel)]=\"reportForm.date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                              <div class=\"input-group-addon bg-default\" (click)=\"d.toggle()\" >\r\n                                <span class=\"icofont icofont-ui-calendar\"></span>\r\n                              </div>\r\n                          </div>\r\n                      </div>  \r\n                    </div> \r\n                  </form>\r\n                <div class=\"card-footer\">\r\n                  <button (click)=submitReport(reportForm)>Submit</button>\r\n                </div>   \r\n              </div>\r\n            </div>\r\n    <!--Place for new submission of reports-->\r\n  </div>\r\n  <!-- Left column end -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/estate-maintenance/estate-maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateMaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_select_option_service__ = __webpack_require__("../../../../../src/app/shared/elements/select-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
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





var EstateMaintenanceComponent = (function () {
    function EstateMaintenanceComponent(selectOptionService, db, userService, auth) {
        this.selectOptionService = selectOptionService;
        this.db = db;
        this.userService = userService;
        this.auth = auth;
        //model;
        this.faultOptions = [{ value: 'lighting', label: 'Lighting' },
            { value: 'leakage', label: 'Leakage' },
            { value: 'waste', label: 'Waste' },
            { value: 'infrastructure', label: 'Infrastructure' },
            { value: 'facilities', label: 'Facilities' },
            { value: 'others', label: 'Others' }];
        this.priorityOptions = [{ value: 'high', label: 'High' }, { value: 'medium', label: 'Medium' }, { value: 'low', label: 'Low' }];
        this.isDisabled = true;
    }
    EstateMaintenanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userKey = this.auth.authState.uid;
        //just to initialise the reportForm for dual binding 
        this.reportForm = {
            "useruid": this.userKey,
            "details": null,
            "faultType": null,
            "priority": null,
            "resident": null,
            "phoneNumber": null,
            "date": null
        };
        //finding the for reports 
        //  this.reportsList = [{"faultType":"leakage","details":"My carpet is wet because of the leakage","date":"12/12/12"},{"faultType":"leakage","details":"My carpet is wet because of the leakage","date":"12/12/12"},{"faultType":"leakage","details":"My carpet is wet because of the leakage","date":"12/12/12"}];
        this.db.retrieveReportsList("useruid", this.userKey).subscribe(function (snapshot) {
            console.log('let this wrok' + snapshot);
            _this.reportsList = snapshot;
        });
    };
    EstateMaintenanceComponent.prototype.submitReport = function (formData) {
        console.log(formData);
        //formData.uid = this.auth.authState.uid;
        this.db.addReport(formData);
        this.ngOnInit();
    };
    EstateMaintenanceComponent.prototype.deleteReport = function (uid) {
        console.log('deleting report of UID: ' + uid);
        this.db.deleteReport(uid);
        this.ngOnInit();
    };
    EstateMaintenanceComponent.prototype.submitForm = function () { console.log("hello"); };
    return EstateMaintenanceComponent;
}());
EstateMaintenanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maintenance',
        template: __webpack_require__("../../../../../src/app/components/basic/estate-maintenance/estate-maintenance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/basic/estate-maintenance/estate-maintenance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_elements_select_option_service__["a" /* SelectOptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_elements_select_option_service__["a" /* SelectOptionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_report_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_report_service__["a" /* ReportService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], EstateMaintenanceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=estate-maintenance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/calendarStuff/angular-calendar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * angular-calendar - A calendar component for angular 4.0+ that can display events on a month, week or day view\r\n * @version v0.21.3\r\n * @author Matt Lewis\r\n * @link https://github.com/mattlewis92/angular-calendar#readme\r\n * @license MIT\r\n */\r\n.cal-month-view .cal-header {\r\n  text-align: center;\r\n  font-weight: bolder; }\r\n\r\n.cal-month-view .cal-cell-row:hover {\r\n  background-color: #fafafa; }\r\n\r\n.cal-month-view .cal-header .cal-cell {\r\n  padding: 5px 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  white-space: nowrap; }\r\n\r\n.cal-month-view .cal-cell-row .cal-cell:hover,\r\n.cal-month-view .cal-cell.cal-has-events.cal-open {\r\n  background-color: #ededed; }\r\n\r\n.cal-month-view .cal-days {\r\n  border: 1px solid #e1e1e1;\r\n  border-bottom: 0; }\r\n\r\n.cal-month-view .cal-cell-top {\r\n  min-height: 78px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1; }\r\n\r\n.cal-month-view .cal-cell-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex; }\r\n\r\n.cal-month-view .cal-cell {\r\n  float: left;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch; }\r\n\r\n.cal-month-view .cal-day-cell {\r\n  min-height: 100px; }\r\n\r\n.cal-month-view .cal-day-cell:not(:last-child) {\r\n  border-right: 1px solid #e1e1e1; }\r\n\r\n.cal-month-view .cal-days .cal-cell-row {\r\n  border-bottom: 1px solid #e1e1e1; }\r\n\r\n.cal-month-view .cal-day-badge {\r\n  margin-top: 18px;\r\n  margin-left: 10px;\r\n  background-color: #b94a48;\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: white;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  border-radius: 10px; }\r\n\r\n.cal-month-view .cal-day-number {\r\n  font-size: 1.2em;\r\n  font-weight: 400;\r\n  opacity: 0.5;\r\n  margin-top: 15px;\r\n  margin-right: 15px;\r\n  float: right;\r\n  margin-bottom: 10px; }\r\n\r\n.cal-month-view .cal-events {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  margin: 3px;\r\n  line-height: 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap; }\r\n\r\n.cal-month-view .cal-event {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin: 2px; }\r\n\r\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\r\n  cursor: pointer; }\r\n\r\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\r\n  opacity: 0.1;\r\n  cursor: default; }\r\n\r\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\r\n  color: darkred; }\r\n\r\n.cal-month-view .cal-day-cell.cal-today {\r\n  background-color: #e8fde7; }\r\n\r\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\r\n  font-size: 1.9em; }\r\n\r\n.cal-month-view .cal-day-cell.cal-drag-over {\r\n  background-color: #e0e0e0 !important; }\r\n\r\n.cal-month-view .cal-open-day-events {\r\n  padding: 15px;\r\n  color: white;\r\n  background-color: #555;\r\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\r\n\r\n.cal-month-view .cal-open-day-events .cal-event {\r\n  position: relative;\r\n  top: 2px; }\r\n\r\n.cal-month-view .cal-event-title {\r\n  color: white; }\r\n\r\n.cal-month-view .cal-out-month .cal-day-badge,\r\n.cal-month-view .cal-out-month .cal-event {\r\n  opacity: 0.3; }\r\n\r\n.cal-week-view .cal-day-headers {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex;\r\n  margin-bottom: 3px;\r\n  border: 1px solid #e1e1e1;\r\n  margin-left: 2px;\r\n  margin-right: 2px; }\r\n\r\n.cal-week-view .cal-day-headers .cal-header {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  text-align: center;\r\n  padding: 5px; }\r\n\r\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\r\n  border-right: 1px solid #e1e1e1; }\r\n\r\n.cal-week-view .cal-day-headers .cal-header:hover,\r\n.cal-week-view .cal-day-headers .cal-drag-over {\r\n  background-color: #ededed; }\r\n\r\n.cal-week-view .cal-day-headers span {\r\n  font-weight: 400;\r\n  opacity: 0.5; }\r\n\r\n.cal-week-view .cal-events-row {\r\n  position: relative;\r\n  height: 33px; }\r\n\r\n.cal-week-view .cal-event-container {\r\n  display: inline-block;\r\n  position: absolute; }\r\n\r\n.cal-week-view .cal-event {\r\n  padding: 0 10px;\r\n  font-size: 12px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  height: 30px;\r\n  line-height: 30px; }\r\n\r\n.cal-week-view .cal-draggable {\r\n  cursor: move; }\r\n\r\n.cal-week-view .cal-starts-within-week .cal-event {\r\n  border-top-left-radius: 5px;\r\n  border-bottom-left-radius: 5px; }\r\n\r\n.cal-week-view .cal-ends-within-week .cal-event {\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px; }\r\n\r\n.cal-week-view .cal-header.cal-today {\r\n  background-color: #e8fde7; }\r\n\r\n.cal-week-view .cal-header.cal-weekend span {\r\n  color: #8b0000; }\r\n\r\n.cal-week-view .cal-event,\r\n.cal-week-view .cal-header {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap; }\r\n\r\n.cal-day-view {\r\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\r\n  .cal-day-view .cal-hour-rows {\r\n    width: 100%;\r\n    border: solid 1px #e1e1e1;\r\n    overflow-x: scroll;\r\n    position: relative; }\r\n  .cal-day-view .cal-hour:nth-child(odd) {\r\n    background-color: #fafafa; }\r\n  .cal-day-view mwl-calendar-day-view-hour-segment,\r\n  .cal-day-view .cal-hour-segment {\r\n    display: block;\r\n    height: 30px; }\r\n  .cal-day-view .cal-hour-segment::after {\r\n    content: '\\A0'; }\r\n  .cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\r\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\r\n    border-bottom: thin dashed #e1e1e1; }\r\n  .cal-day-view .cal-time {\r\n    font-weight: bold;\r\n    padding-top: 5px;\r\n    width: 70px;\r\n    text-align: center; }\r\n  .cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\r\n    display: none; }\r\n  .cal-day-view .cal-hour-segment:hover,\r\n  .cal-day-view .cal-drag-over .cal-hour-segment {\r\n    background-color: #ededed; }\r\n  .cal-day-view .cal-event-container {\r\n    position: absolute; }\r\n  .cal-day-view .cal-event {\r\n    border: solid 1px;\r\n    padding: 5px;\r\n    font-size: 12px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    height: 100%;\r\n    box-sizing: border-box; }\r\n  .cal-day-view .cal-draggable {\r\n    cursor: move; }\r\n  .cal-day-view .cal-starts-within-day .cal-event {\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px; }\r\n  .cal-day-view .cal-ends-within-day .cal-event {\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px; }\r\n  .cal-day-view .cal-all-day-event {\r\n    padding: 8px;\r\n    border: solid 1px; }\r\n\r\n.cal-tooltip {\r\n  position: absolute;\r\n  z-index: 1070;\r\n  display: block;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  letter-spacing: normal;\r\n  line-break: auto;\r\n  line-height: 1.5;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  white-space: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  font-size: 11px;\r\n  word-wrap: break-word;\r\n  opacity: 0.9; }\r\n\r\n.cal-tooltip.cal-tooltip-top {\r\n  padding: 5px 0;\r\n  margin-top: -3px; }\r\n\r\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000; }\r\n\r\n.cal-tooltip.cal-tooltip-right {\r\n  padding: 0 5px;\r\n  margin-left: 3px; }\r\n\r\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\r\n  top: 50%;\r\n  left: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 5px 5px 0;\r\n  border-right-color: #000; }\r\n\r\n.cal-tooltip.cal-tooltip-bottom {\r\n  padding: 5px 0;\r\n  margin-top: 3px; }\r\n\r\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\r\n  top: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000; }\r\n\r\n.cal-tooltip.cal-tooltip-left {\r\n  padding: 0 5px;\r\n  margin-left: -3px; }\r\n\r\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\r\n  top: 50%;\r\n  right: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #000; }\r\n\r\n.cal-tooltip-inner {\r\n  max-width: 200px;\r\n  padding: 3px 8px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #000;\r\n  border-radius: 0.25rem; }\r\n\r\n.cal-tooltip-arrow {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/calendarStuff/calendar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
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

var CalendarHeaderComponent = (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "view", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "viewDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "locale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CalendarHeaderComponent.prototype, "viewChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
CalendarHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mwl-demo-utils-calendar-header',
        template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  "
    })
], CalendarHeaderComponent);

var _a, _b;
//# sourceMappingURL=calendar-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/calendarStuff/date-time-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DateTimePickerComponent; }),
    multi: true
};
var DateTimePickerComponent = (function () {
    function DateTimePickerComponent(cdr) {
        this.cdr = cdr;
        this.onChangeCallback = function () { };
    }
    DateTimePickerComponent.prototype.writeValue = function (date) {
        this.date = date;
        this.dateStruct = {
            day: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(date),
            month: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMonth"])(date) + 1,
            year: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(date)
        };
        this.timeStruct = {
            second: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getSeconds"])(date),
            minute: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMinutes"])(date),
            hour: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getHours"])(date)
        };
        this.cdr.detectChanges();
    };
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) { };
    DateTimePickerComponent.prototype.updateDate = function () {
        var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setYear"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMonth"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setDate"])(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
        this.onChangeCallback(newDate);
    };
    DateTimePickerComponent.prototype.updateTime = function () {
        var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMinutes"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setSeconds"])(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
        this.onChangeCallback(newDate);
    };
    return DateTimePickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DateTimePickerComponent.prototype, "placeholder", void 0);
DateTimePickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mwl-demo-utils-date-time-picker',
        template: "\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            readonly\n            class=\"form-control\"\n            [placeholder]=\"placeholder\"\n            name=\"date\"\n            [(ngModel)]=\"dateStruct\"\n            (ngModelChange)=\"updateDate()\"\n            ngbDatepicker\n            #datePicker=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"datePicker.toggle()\" >\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n        </div>\n      </div>\n    </form>\n    <ngb-timepicker\n      [(ngModel)]=\"timeStruct\"\n      (ngModelChange)=\"updateTime()\"\n      [meridian]=\"true\">\n    </ngb-timepicker>\n  ",
        styles: [
            "\n    .form-group {\n      width: 100%;\n    }\n  "
        ],
        providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
], DateTimePickerComponent);

var _a;
//# sourceMappingURL=date-time-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/calendarStuff/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoUtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_header_component__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/calendarStuff/calendar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_time_picker_component__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/calendarStuff/date-time-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DemoUtilsModule = (function () {
    function DemoUtilsModule() {
    }
    return DemoUtilsModule;
}());
DemoUtilsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["g" /* NgbTimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__calendar_header_component__["a" /* CalendarHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__date_time_picker_component__["a" /* DateTimePickerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__calendar_header_component__["a" /* CalendarHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__date_time_picker_component__["a" /* DateTimePickerComponent */]]
    })
], DemoUtilsModule);

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/event-calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n h3 {\r\n  margin: 0 0 10px;\r\n}\r\n\r\npre {\r\n  background-color: #f5f5f5;\r\n  padding: 15px;\r\n}\r\n\r\n.table-bordered td{\r\n\tborder: 2px solid lightgray;\r\n}\r\n\r\n.table-bordered th{\r\n\tborder: 2px solid lightgray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/event-calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Event action occurred</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h4>Event title</h4>\r\n    <hr>\r\n      <pre>{{modalData?.title}} </pre>\r\n    <hr>\r\n    <h4>Details</h4>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">Start Date: <strong>{{modalData?.event.start | date : \"short\"}}</strong> </div>\r\n      <div class=\"col-sm-6\">End Date: <strong>{{modalData?.event.end | date : \"short\"}}</strong></div>\r\n    </div>\r\n    <hr>\r\n      <pre>{{modalData?.description}}</pre>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"activeDayIsOpen = false\">\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\">\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"activeDayIsOpen = false\">\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"view = 'month'\"\r\n        [class.active]=\"view === 'month'\">\r\n        Month\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"view = 'week'\"\r\n        [class.active]=\"view === 'week'\">\r\n        Week\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"view = 'day'\"\r\n        [class.active]=\"view === 'day'\">\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"'month'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"'week'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view\r\n    *ngSwitchCase=\"'day'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-day-view>\r\n</div>\r\n\r\n<br><br><br>\r\n\r\n<h3>\r\n  Edit events\r\n  <button\r\n    class=\"btn btn-primary pull-right\"\r\n    (click)=\"openEventModal()\">\r\n    Add new\r\n  </button>\r\n  <div class=\"clearfix\"></div>\r\n</h3>\r\n\r\n<table class=\"table table-bordered\">\r\n\r\n  <thead>\r\n    <tr>\r\n      <th>Event information</th>\r\n      <th>Color</th>\r\n      <th>Starts at</th>\r\n      <th>Ends at</th>\r\n      <th>Remove</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let event of events; let index = index\">\r\n      <td>\r\n        <div>\r\n          Title:\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            [(ngModel)]=\"event.title\"\r\n            (keyup)=\"refresh.next()\">\r\n        </div>\r\n        <div>\r\n          Description:\r\n          <textarea \r\n            class=\"form-control\" \r\n            [(ngModel)]=\"event.description\"\r\n            (keyup)=\"refresh.next()\">\r\n          </textarea>\r\n        </div>\r\n\r\n      </td>\r\n      <td>\r\n        <input\r\n          type=\"color\"\r\n            [(ngModel)]=\"event.color.primary\"\r\n            [ngModelOptions]=\"{standalone : true}\"\r\n            (change)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <mwl-demo-utils-date-time-picker\r\n            [(ngModel)]=\"event.start\"\r\n            [ngModelOptions]=\"{standalone : true}\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            placeholder=\"Not set\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td>\r\n        <mwl-demo-utils-date-time-picker\r\n            [(ngModel)]=\"event.end\"\r\n            [ngModelOptions]=\"{standalone : true}\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            placeholder=\"Not set\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          (click)=\"removeEvent(index); refresh.next()\">\r\n          Delete\r\n        </button>\r\n        <button\r\n          class=\"btn btn-primary\"\r\n          (click)=\"editEvent(index); refresh.next()\">\r\n          Save Changes\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n\r\n <!-- modal static-->\r\n<ng-template #newEventModal let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Specify Event Details</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <form #eventForm=\"ngForm\" (ngSubmit)=\"addEvent(eventForm)\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n           <div class=\"col-sm-6\">Title: <input name=\"title\" ngModel></div>\r\n           <div class=\"col-sm-6\">\r\n             Color:\r\n              <input\r\n              type=\"color\"\r\n                [(ngModel)]=\"eventColor\"\r\n                [ngModelOptions]=\"{standalone : true}\"\r\n                (change)=\"refresh.next()\">\r\n            </div>\r\n           </div>\r\n           <br>\r\n          <div class=\"row\">\r\n             Description: <textarea class=\"col-sm-12\" name=\"description\" ngModel placeholder=\"Enter event description\"></textarea>\r\n          </div>\r\n        </div>\r\n          <hr>\r\n          Start Date:\r\n          <mwl-demo-utils-date-time-picker\r\n            [(ngModel)]=\"eventStart\"\r\n            [ngModelOptions]=\"{standalone : true}\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            placeholder=\"Not set\">\r\n          </mwl-demo-utils-date-time-picker>\r\n          <hr>\r\n          End Date:\r\n          <mwl-demo-utils-date-time-picker\r\n            [(ngModel)]=\"eventEnd\"\r\n            [ngModelOptions]=\"{standalone : true}\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            placeholder=\"Not set\">\r\n          </mwl-demo-utils-date-time-picker>\r\n        <!--Date time picker goes here-->\r\n        <!--Form goes here-->\r\n        <button id=\"submitEventButton\" type=\"submit\" style=\"display: none;\"></button>\r\n      </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"close()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \" (click)=\"submitEvent(); close()\">Save event</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- <button id=\"submitEventModal\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display: none;\"></button>\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n        <h4 class=\"modal-title\">Specify Event Details</h4>\r\n        <button id=\"closeEventModal\" type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <form #eventForm=\"ngForm\" (ngSubmit)=\"addEvent(eventForm)\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n           <div class=\"col-sm-6\">Title: <input name=\"title\" ngModel></div>\r\n           <div class=\"col-sm-6\">\r\n             Color:\r\n              <input\r\n              type=\"color\"\r\n                [(ngModel)]=\"eventColor\"\r\n                [ngModelOptions]=\"{standalone : true}\"\r\n                (change)=\"refresh.next()\">\r\n            </div>\r\n         </div>\r\n         <br>\r\n          <div class=\"row\">\r\n             Description: <textarea class=\"col-sm-12\" name=\"description\" ngModel placeholder=\"Enter event description\"></textarea>\r\n          </div>\r\n        </div>\r\n          <hr>\r\n          Start Date:\r\n          <mwl-demo-utils-date-time-picker\r\n            [(ngModel)]=\"eventStart\"\r\n            [ngModelOptions]=\"{standalone : true}\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            placeholder=\"Not set\">\r\n          </mwl-demo-utils-date-time-picker>\r\n          <hr>\r\n          End Date:\r\n          <mwl-demo-utils-date-time-picker\r\n            [(ngModel)]=\"eventEnd\"\r\n            [ngModelOptions]=\"{standalone : true}\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            placeholder=\"Not set\">\r\n          </mwl-demo-utils-date-time-picker>\r\n        <!--Date time picker goes here-->\r\n        <!--Form goes here-->\r\n<!--         <button id=\"submitEventButton\" type=\"submit\" style=\"display: none;\"></button>\r\n      </form>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \" (click)=\"submitEvent()\">Save event</button>\r\n    </div>\r\n</app-modal-basic> -->"

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/event-calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_list_event_service__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/shared/list-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_add_event_service__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/shared/add-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var EventCalendarComponent = (function () {
    function EventCalendarComponent(modal, listEventSvc, addEventSvc, userSvc, authSvc) {
        var _this = this;
        this.modal = modal;
        this.listEventSvc = listEventSvc;
        this.addEventSvc = addEventSvc;
        this.userSvc = userSvc;
        this.authSvc = authSvc;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        // dummyEvent = {
        //   $key: null,
        //   id: null,
        //   title: null,
        //   description: null,
        //   color: null,
        //   draggable:null;
        //   resizable: {
        //     beforeStart: null,
        //     afterEnd:null
        // },
        //   date: {
        //     dateCreated: null,
        //     startDate: startOfDay(new Date()),
        //     endDate: endOfDay(new Date())
        //   },
        //   reminder: null,
        //   timeBeforeReminder: null,
        //   reminderDuration: null
        // }
        // private newEvent: userEvent;
        this.eventColor = colors.red.primary;
        this.eventStart = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date());
        this.eventEnd = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date());
    }
    EventCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    EventCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent("blablabla", event);
        this.refresh.next();
    };
    EventCalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, title: event.title, description: event.description };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    EventCalendarComponent.prototype.addEvent = function (eventForm) {
        // this.newEvent = new userEvent(eventForm.value.title, eventForm.value.description)
        // this.newEvent.color = { primary: this.eventColor, secondary: this.eventColor }
        // this.newEvent.date.startDate = this.eventStart.getTime()
        // this.newEvent.date.endDate = this.eventEnd.getTime()
        var newEvent = {
            title: eventForm.value.title,
            description: eventForm.value.description,
            start: this.eventStart,
            end: this.eventEnd,
            color: { primary: this.eventColor, secondary: this.eventColor },
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        };
        this.addEventSvc.addEvent(newEvent);
        this.refresh.next();
    };
    EventCalendarComponent.prototype.removeEvent = function (index) {
        //this.events.splice(index, 1) // If observable dun work
        this.addEventSvc.deleteEvent(this.events[index]);
    };
    EventCalendarComponent.prototype.editEvent = function (index) {
        // let changedEvent = this.eventList[index]
        var changedCalendarEvent = this.events[index];
        // changedEvent.title = changedCalendarEvent.title
        // changedEvent.date.startDate = changedCalendarEvent.start.getTime()
        // changedEvent.date.endDate = changedCalendarEvent.end.getTime()
        // changedEvent.color = changedCalendarEvent.color
        this.addEventSvc.editEvent(changedCalendarEvent);
    };
    EventCalendarComponent.prototype.openEventModal = function () {
        // document.getElementById("submitEventModal").click()
        this.modal.open(this.newEventModal, { size: "lg" });
    };
    EventCalendarComponent.prototype.submitEvent = function () {
        document.getElementById("submitEventButton").click();
        // document.getElementById("closeEventModal").click()
    };
    EventCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var userId = this.authSvc.authState.uid
        // this.userSvc.getUser(userId).subscribe( userInfo => this.user = userInfo )
        // this.listEventSvc.fetchEvent(
        //   this.user,
        //   (fetchEvent, calendarEvents) => {
        //     this.events = calendarEvents
        //     this.eventList = fetchEvent
        //     this.eventsCopy = this.events
        //   }
        this.listEventSvc.fetchEvent(function (calendarEventList) {
            _this.events = calendarEventList;
        });
    };
    return EventCalendarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], EventCalendarComponent.prototype, "modalContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newEventModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], EventCalendarComponent.prototype, "newEventModal", void 0);
EventCalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-event-calendar',
        // changeDetection: ChangeDetectionStrategy.OnPush,
        template: __webpack_require__("../../../../../src/app/components/basic/event-calendar/event-calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/basic/event-calendar/calendarStuff/angular-calendar.css"), __webpack_require__("../../../../../src/app/components/basic/event-calendar/event-calendar.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_list_event_service__["a" /* ListEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_list_event_service__["a" /* ListEventService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_add_event_service__["a" /* AddEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_add_event_service__["a" /* AddEventService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
], EventCalendarComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=event-calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/event-calendar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendarStuff_module__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/calendarStuff/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_calendar_component__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/event-calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_list_event_service__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/shared/list-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_add_event_service__ = __webpack_require__("../../../../../src/app/components/basic/event-calendar/shared/add-event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ConvertEventService } from "./shared/convert-event.service";
var EventCalendarModule = (function () {
    function EventCalendarModule() {
    }
    return EventCalendarModule;
}());
EventCalendarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__calendarStuff_module__["a" /* DemoUtilsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__event_calendar_component__["a" /* EventCalendarComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_list_event_service__["a" /* ListEventService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_add_event_service__["a" /* AddEventService */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__event_calendar_component__["a" /* EventCalendarComponent */]]
    })
], EventCalendarModule);

//# sourceMappingURL=event-calendar.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/shared/add-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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

// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
// import { userEvent } from "./event";
// import { User } from "../../../../model/user";


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AddEventService = (function () {
    function AddEventService(http) {
        this.http = http;
    }
    AddEventService.prototype.addEvent = function (event) {
        // event.date.dateCreated = firebase.database.ServerValue.TIMESTAMP
        // let eventDbRef = this.db.list(`eventCalendar/${user.address.estate}/${user.$key}/`)
        // let eventKey = eventDbRef.push(event).key
        // eventDbRef.update(eventKey, { id : eventKey })
        var jsonNewEvent = JSON.stringify(event);
        this.http.post("/api/event-calendar", jsonNewEvent, httpOptions)
            .subscribe();
    };
    AddEventService.prototype.deleteEvent = function (event) {
        // let eventDbRef = this.db.object(`eventCalendar/${user.address.estate}/${user.$key}/${event.id}`)
        // eventDbRef.remove()
        var jsonEvent = JSON.stringify(event);
        this.http.post("/api/event-calendar/delete", jsonEvent, httpOptions)
            .subscribe();
        //Subscribe neded to make actual request as HttpClient post is just a blueprint for the request.
    };
    AddEventService.prototype.editEvent = function (event) {
        // let eventDbRef = this.db.object(`eventCalendar/${user.address.estate}/${user.$key}/${event.id}`)
        // eventDbRef.update(event)
        var jsonEvent = JSON.stringify(event);
        this.http.post("/api/event-calendar/update", jsonEvent, httpOptions)
            .subscribe();
    };
    return AddEventService;
}());
AddEventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AddEventService);

var _a;
//# sourceMappingURL=add-event.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/event-calendar/shared/list-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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

// import { ConvertEventService } from "./convert-event.service";


var ListEventService = (function () {
    // private fetchedEventList : FirebaseListObservable<Event[]>
    function ListEventService(http) {
        this.http = http;
    }
    ListEventService.prototype.fetchEvent = function (callback) {
        this.http.get("/api/event-calendar")
            .subscribe(function (events) {
            events.forEach(function (eachEvent) {
                eachEvent["start"] = new Date(eachEvent.start);
                eachEvent["end"] = new Date(eachEvent.end);
            });
            callback(events);
        });
    };
    return ListEventService;
}());
ListEventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ListEventService);

var _a;
//# sourceMappingURL=list-event.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/generic-class/generic-class.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <!-- Margin card start -->\r\n    <app-card [title]=\"'&nbsp;'\" [cardClass]=\"'tab-card'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Margin\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Margin </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-0\" data-original-title=\"margin-0\">.m-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-5\">.m-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-10\">.m-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-15\">.m-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-20\">.m-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-25\">.m-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-30\">.m-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-40\">.m-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-50\">.m-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin Top </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-0\">.m-t-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-5\">.m-t-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-10\">.m-t-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-15\">.m-t-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-20\">.m-t-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-25\">.m-t-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-30\">.m-t-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-40\">.m-t-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-top-50\">.m-t-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin Bottom </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-0\">.m-b-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-5\">.m-b-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-10\">.m-b-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-15\">.m-b-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-20\">.m-b-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-25\">.m-b-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-30\">.m-b-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-40\">.m-b-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-bottom-50\">.m-b-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin Left </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-0\">.m-l-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-5\">.m-l-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-10\">.m-l-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-15\">.m-l-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-20\">.m-l-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-25\">.m-l-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-30\">.m-l-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-40\">.m-l-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-left-50\">.m-l-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin right </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-0\">.m-r-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-5\">.m-r-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-10\">.m-r-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-15\">.m-r-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-20\">.m-r-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-25\">.m-r-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-30\">.m-r-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-40\">.m-r-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"margin-right-50\">.m-r-50</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Padding\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Padding </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-0\">.p-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-5\">.p-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-10\">.p-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-15\">.p-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-20\">.p-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-25\">.p-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-30\">.p-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-40\">.p-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-50\">.p-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding Top </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-0\">.p-t-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-5\">.p-t-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-10\">.p-t-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-15\">.p-t-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-20\">.p-t-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-25\">.p-t-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-30\">.p-t-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-40\">.p-t-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-top-50\">.p-t-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding Bottom </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-0\">.p-b-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-5\">.p-b-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-10\">.p-b-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-15\">.p-b-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-20\">.p-b-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-25\">.p-b-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-30\">.p-b-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-40\">.p-b-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-bottom-50\">.p-b-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding Left </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-0\">.p-l-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-5\">.p-l-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-10\">.p-l-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-15\">.p-l-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-20\">.p-l-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-25\">.p-l-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-30\">.p-l-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-40\">.p-l-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-left-50\">.p-l-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding right </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-0\">.p-r-0</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-5\">.p-r-5</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-10\">.p-r-10</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-15\">.p-r-15</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-20\">.p-r-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-25\">.p-r-25</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-30\">.p-r-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-40\">.p-r-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"padding-right-50\">.p-r-50</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Margin card end -->\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <!-- font & aligment card start -->\r\n    <app-card [title]=\"'&nbsp;'\" [cardClass]=\"'tab-card'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Font\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Font-size </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-12\">.f-12</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-14\">.f-14</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-16\">.f-16</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-18\">.f-18</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-20\">.f-20</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-24\">.f-24</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-26\">.f-26</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-28\">.f-28</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-30\">.f-30</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-35\">.f-35</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-40\">.f-40</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-45\">.f-45</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-52\">.f-52</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-size-64\">.f-64</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Font-Weight </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-weight-100\">.f-w-100</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-weight-300\">.f-w-300</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-weight-400\">.f-w-400</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-weight-600\">.f-w-600</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-weight-700\">.f-w-700</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-weight-900\">.f-w-900</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Font-Style </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-normal\">.f-s-normal</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-italic\">.f-s-italic</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-oblique\">.f-s-oblique</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-intial\">.f-s-intial</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"font-inherit\">.f-s-inherit</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Alignment\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Text-align </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Center-Text\">.text-center</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Left-Text\">.text-left</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Right-Text\">.text-right</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Text-transform </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"All Capital Text\">.text-uppercase</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lower case Text\">.text-lowercase</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Capitalize Text\">.text-capitalize</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Text-decoration </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Overline\">.text-overline</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Line-Throught Text\">.text-through</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Underline\">.text-underline</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Vertical-align </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"All Capital Text\">.baseline</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lower case Text\">.sub</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"All Capital Text\">.super</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lower case Text\">.top</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Capitalize Text\">.text-top</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"All Capital Text\">.middle</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lower case Text\">.bottom</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Capitalize Text\">.text-bottom</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Capitalize Text\">.initial</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Capitalize Text\">.inherit</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Font & aligment card end -->\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <!-- Position, float and oveflow card start -->\r\n\r\n    <app-card [title]=\"'&nbsp;'\" [cardClass]=\"'tab-card'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Position\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Position </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.pos-static</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Absolute\">.pos-absolute</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Static\">.pos-relative</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Fixed\">.pos-fixed</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Fixed\">.pos-intial</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Fixed\">.pos-inherit</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Float\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Float </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"FLoat-left\">.f-left</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Float-right\">.f-right</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Float-none\">.f-none</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Overflow\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Overflow </h6>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Overflow Hidden\">.o-hidden</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Overflow Auto\">.o-auto</code>\r\n                <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Overflow Visible\">.o-visible</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Position, float and oveflow card end -->\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <!-- background color and color start -->\r\n\r\n    <app-card [title]=\"'&nbsp;'\" [cardClass]=\"'tab-card'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"BackGround-color\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Background color</h6>\r\n                <div class=\"bg-color-box color-default waves-effect waves-light\"><span>.color-default</span></div>\r\n                <div class=\"bg-color-box color-primary waves-effect waves-light\"><span>.color-primary</span></div>\r\n                <div class=\"bg-color-box color-success waves-effect waves-light\"><span>.color-success</span></div>\r\n                <div class=\"bg-color-box color-info waves-effect waves-light\"><span>.color-info</span></div>\r\n                <div class=\"bg-color-box color-warning waves-effect waves-light\"><span>.color-warning</span></div>\r\n                <div class=\"bg-color-box color-danger waves-effect waves-light\"><span>.color-danger</span></div>\r\n                <div class=\"bg-color-box color-inverse waves-effect waves-light\"><span>.color-inverse</span></div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Text-color\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Text color</h6>\r\n                <code class=\"text-default\">.text-default</code>\r\n                <code class=\"text-primary\">.text-primary</code>\r\n                <code class=\"text-muted\">.text-muted</code>\r\n                <code class=\"text-success\">.text-success</code>\r\n                <code class=\"text-info\">.text-info</code>\r\n                <code class=\"text-warning\">.text-warning</code>\r\n                <code class=\"text-danger\">.text-danger</code>\r\n                <code class=\"text-inverse\">.text-inverse</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- background color and color end -->\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <!-- Image size card start -->\r\n\r\n    <app-card [title]=\"'&nbsp;'\" [cardClass]=\"'tab-card'\" [blockClass]=\"'generic-image-body'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Image size\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Image Size </h6>\r\n                <ul>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-20</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-20\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-30</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-30\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-40</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-40\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-50</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-50\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-60</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-60\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-70</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-70\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-80</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-80\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-90</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-90\" alt=\"user.png\">\r\n                  </li>\r\n                  <li>\r\n                    <code data-toggle=\"tooltip\" data-placement=\"top\" title=\"Realtive\">.img-100</code>\r\n                    <img src=\"assets/images/user.png\" class=\"img-100\" alt=\"user.png\">\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Image size card start -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/generic-class/generic-class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenericClassComponent = (function () {
    function GenericClassComponent() {
    }
    GenericClassComponent.prototype.ngOnInit = function () {
    };
    return GenericClassComponent;
}());
GenericClassComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-generic-class',
        template: __webpack_require__("../../../../../src/app/components/basic/generic-class/generic-class.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [])
], GenericClassComponent);

//# sourceMappingURL=generic-class.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/label-badge/label-badge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Badges card start -->\r\n    <app-card [title]=\"'Badges'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-12\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Default badge\r\n\r\n            </div>\r\n\r\n            <p>Use class <code>badge-default</code></p>\r\n            <div>\r\n              <label class=\"badge badge-default\">5</label>\r\n              <label class=\"badge badge-default\">9</label>\r\n              <label class=\"badge badge-default\">15</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Primary badge\r\n\r\n            </div>\r\n\r\n            <p>Use class <code>badge-primary</code></p>\r\n            <label class=\"badge badge-primary\">5</label>\r\n            <label class=\"badge badge-primary\">9</label>\r\n            <label class=\"badge badge-primary\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Success badge\r\n\r\n            </div>\r\n\r\n            <p>Use class <code>badge-success</code></p>\r\n            <label class=\"badge badge-success\">5</label>\r\n            <label class=\"badge badge-success\">9</label>\r\n            <label class=\"badge badge-success\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Warning badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-warning</code>\r\n            </p>\r\n            <label class=\"badge badge-warning\">5</label>\r\n            <label class=\"badge badge-warning\">9</label>\r\n            <label class=\"badge badge-warning\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Danger badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>bg-danger</code>\r\n            </p>\r\n            <label class=\"badge badge-danger\">5</label>\r\n            <label class=\"badge badge-danger\">9</label>\r\n            <label class=\"badge badge-danger\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Info badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-info</code>\r\n            </p>\r\n            <label class=\"badge badge-info \">5</label>\r\n            <label class=\"badge badge-info\">9</label>\r\n            <label class=\"badge badge-info\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">inverse default badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-inverse-default</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-default\">5</label>\r\n            <label class=\"badge badge-inverse-default\">9</label>\r\n            <label class=\"badge badge-inverse-default\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse primary badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-inverse-primary</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-primary\">5</label>\r\n            <label class=\"badge badge-inverse-primary\">9</label>\r\n            <label class=\"badge badge-inverse-primary\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse success badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-inverse-success</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-success\">5</label>\r\n            <label class=\"badge badge-inverse-success\">9</label>\r\n            <label class=\"badge badge-inverse-success\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse warning badge\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-inverse-warning</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-warning\">5</label>\r\n            <label class=\"badge badge-inverse-warning\">9</label>\r\n            <label class=\"badge badge-inverse-warning\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse Danger badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-inverse-danger</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-danger\">5</label>\r\n            <label class=\"badge badge-inverse-danger\">9</label>\r\n            <label class=\"badge badge-inverse-danger\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse Info badge\r\n\r\n            </div>\r\n\r\n            <p>\r\n              Use class <code>badge-inverse-info</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-info\">5</label>\r\n            <label class=\"badge badge-inverse-info\">9</label>\r\n            <label class=\"badge badge-inverse-info\">15</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Badges card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Label card start -->\r\n    <app-card [title]=\"'Labels'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <!-- labels -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <p>Use the <code>.label</code> class,&nbsp; followed by one of the six contextual classes <code>.label-default</code>, <code>.bg-primary</code>, <code>.bg-success</code>,\r\n            <code>.bg-info</code>, <code>.bg-warning</code> or <code>.bg-danger</code>, within a <code>&lt;label&gt;</code> element to create a label:\r\n          </p>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-default\">Default Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-primary\">Primary Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-success\">Success Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-info\">Info Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-warning\">Warning Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-danger\">Danger Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse\">Inverse Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-default\">Border Default</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-primary\">Border Primary</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-success\">Border Success</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-info\">Border Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-warning\">Border Warning</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-danger\">Border Danger</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-info-border\">Border Inverse</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Label card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <!-- Label size card start -->\r\n    <app-card [title]=\"'Label Sizes'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <p>Use the <code>.label-lg</code> class along with <code>.label</code> for large label and Use the <code>.label-md</code> class along with <code>.label</code> for medium label.The<code>.label</code> class use form small label </p>\r\n      <div class=\"label-main\">\r\n        <label class=\"label label-lg label-primary\">Large Label</label>\r\n      </div>\r\n      <div class=\"label-main\">\r\n        <label class=\"label label-md label-primary\">Medium Label</label>\r\n      </div>\r\n      <div class=\"label-main\">\r\n        <label class=\"label label-primary\">Default Label</label>\r\n      </div>\r\n    </app-card>\r\n    <!-- Label size card end -->\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <!-- Badge size card start -->\r\n    <app-card [title]=\"'Badge Sizes'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <p>Use the <code>.badge-lg</code> class along with <code>.badge</code> for large badge and Use the <code>.badge-md</code> class along with <code>.badge</code> for medium badge.The<code>.badge</code> class use form small badge </p>\r\n      <div class=\"group-label d-inline-block\">\r\n        <label class=\"badge badge-lg bg-info\">5</label>\r\n        <label class=\"badge badge-lg bg-info\">5</label>\r\n        <label class=\"badge badge-lg bg-info m-r-20\">5</label>\r\n      </div>\r\n      <div class=\"group-label d-inline-block\">\r\n        <label class=\"badge badge-md bg-success\">5</label>\r\n        <label class=\"badge badge-md bg-success\">5</label>\r\n        <label class=\"badge badge-md bg-success m-r-20\">5</label>\r\n      </div>\r\n      <div class=\"group-label d-inline-block\">\r\n        <label class=\"badge bg-danger\">5</label>\r\n        <label class=\"badge bg-danger\">5</label>\r\n        <label class=\"badge bg-danger\">5</label>\r\n      </div>\r\n    </app-card>\r\n    <!-- Badge size card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <!-- Badges on button card start -->\r\n    <app-card [title]=\"'Badges On Button'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'button-list'\">\r\n      <!-- start flat Button -->\r\n      <button type=\"button\" class=\"btn btn-default waves-effect\" data-toggle=\"tooltip\" data-placement=\"top\" title=\".btn-default.badge\">General\r\n        <span class=\"badge\">70</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\".btn-primary.badge\">Primary\r\n        <span class=\"badge\">90</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-success waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\".btn-success.badge\">success\r\n        <span class=\"badge\">70</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-warning waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\".btn-warning.badge\">warning\r\n        <span class=\"badge\">170</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\".btn-danger.badge\">danger\r\n        <span class=\"badge\">07</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-info waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\".btn-info.badge\">info\r\n        <span class=\"badge\">80</span>\r\n      </button>\r\n      <!-- end of flat Button -->\r\n    </app-card>\r\n    <!-- Badges on button card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <!-- Badges with icon card start -->\r\n    <app-card [title]=\"'Badges With Icon'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Top Left badge\r\n              <a href=\"\" class=\"f-right\" data-toggle=\"modal\" data-target=\"#top-left-Modal\">\r\n              </a>\r\n            </div>\r\n\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-top-left</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-default badge-top-left\">5</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Top Right badge\r\n              <a href=\"\" class=\"f-right\" data-toggle=\"modal\" data-target=\"#top-right-Modal\">\r\n              </a>\r\n            </div>\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-top-right</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-primary badge-top-right\">9</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Bottom Left badge\r\n              <a href=\"\" class=\"f-right\" data-toggle=\"modal\" data-target=\"#bottom-left-Modal\">\r\n              </a>\r\n            </div>\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-bottom-left</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-success badge-bottom-left\">9</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Bottom Right badge\r\n              <a href=\"\" class=\"f-right\" data-toggle=\"modal\" data-target=\"#bottom-right-Modal\">\r\n              </a>\r\n            </div>\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-bottom-right</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-warning badge-bottom-right\">5</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Badges with icon card start -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/label-badge/label-badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelBadgeComponent; });
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

var LabelBadgeComponent = (function () {
    function LabelBadgeComponent() {
    }
    LabelBadgeComponent.prototype.ngOnInit = function () {
    };
    return LabelBadgeComponent;
}());
LabelBadgeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-label-badge',
        template: __webpack_require__("../../../../../src/app/components/basic/label-badge/label-badge.component.html")
    }),
    __metadata("design:paramtypes", [])
], LabelBadgeComponent);

//# sourceMappingURL=label-badge.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  \r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-lg-12\">\r\n    <!-- Material tab card start -->\r\n    <app-card [title]=\"'Appliance'\" [headerContent]=\"'Manage your appliances'\">\r\n      <div class=\"row m-b-30\">\r\n        <div class=\"col-lg-12 col-xl-12\">\r\n          <div class=\"sub-title\">Residence 1</div>\r\n          <div class=\"md-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Living Room\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. Respective</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Kitchen\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Room 1\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Custom\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaintenanceComponent = (function () {
    function MaintenanceComponent() {
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
    };
    return MaintenanceComponent;
}());
MaintenanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maintenance',
        template: __webpack_require__("../../../../../src/app/components/basic/maintenance/maintenance.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [])
], MaintenanceComponent);

//# sourceMappingURL=maintenance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/other/other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Panel card start -->\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Panel</h5>\r\n        <div class=\"card-header-right\">\r\n          <i class=\"icofont icofont-rounded-down\"></i>\r\n          <i class=\"icofont icofont-refresh\"></i>\r\n          <i class=\"icofont icofont-close-circled\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body panels-wells\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading bg-default txt-white\">\r\n                Default Panel\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n              </div>\r\n              <div class=\"panel-footer\">\r\n                Panel Footer\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"panel panel-success\">\r\n              <div class=\"panel-heading bg-success\">\r\n                Success Panel\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n              </div>\r\n              <div class=\"panel-footer text-success\">\r\n                Panel Footer\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"panel panel-primary\">\r\n              <div class=\"panel-heading bg-primary\">\r\n                Primary Panel\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n              </div>\r\n              <div class=\"panel-footer text-primary\">\r\n                Panel Footer\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"panel panel-danger\">\r\n              <div class=\"panel-heading bg-danger\">\r\n                Danger Panel\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n              </div>\r\n              <div class=\"panel-footer text-danger\">\r\n                Panel Footer\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"panel panel-warning\">\r\n              <div class=\"panel-heading bg-warning\">\r\n                Warning Panel\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n              </div>\r\n              <div class=\"panel-footer text-warning\">\r\n                Panel Footer\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"panel panel-info\">\r\n              <div class=\"panel-heading bg-info\">\r\n                Info Panel\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\r\n              </div>\r\n              <div class=\"panel-footer text-info\">\r\n                Panel Footer\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end of row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Panel card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Wells card start -->\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Wells</h5>\r\n        <div class=\"card-header-right\">\r\n          <i class=\"icofont icofont-rounded-down\"></i>\r\n          <i class=\"icofont icofont-refresh\"></i>\r\n          <i class=\"icofont icofont-close-circled\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body panels-wells\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-12 col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"well well-sm\">\r\n              Small Well\r\n            </div>\r\n            <div class=\"well\">\r\n              Normal Well\r\n            </div>\r\n            <div class=\"well well-lg\">\r\n              Large Well\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Wells card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Default'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"sub-title\">Basic</div>\r\n      <pagination [totalItems]=\"totalItems\" [boundaryLinks]=\"true\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n      <div class=\"sub-title m-t-15\">With Icon</div>\r\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'States & Limits'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"sub-title m-t-15\">Limit the maximum visible buttons</div>\r\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\r\n      <div class=\"sub-title m-t-15\"></div>\r\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-md\" [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Pager'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPager\" (numPages)=\"smallNumPages = $event\"></pagination>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <pager [totalItems]=\"totalItems\" [(ngModel)]=\"currentPager\" (pageChanged)=\"pageChanged($event)\" pageBtnClass=\"btn btn-primary\" itemsPerPage=\"10\"></pager>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Disabled'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <pagination [totalItems]=\"bigTotalItems\" [disabled]=\"true\" [maxSize]=\"maxSize\" class=\"pagination-md\" [boundaryLinks]=\"true\"></pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Pagination Size'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"sub-title m-t-15\">Large</div>\r\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-lg\" [boundaryLinks]=\"true\"></pagination>\r\n      <div class=\"sub-title m-t-15\">Medium</div>\r\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-md\" [boundaryLinks]=\"true\"></pagination>\r\n      <div class=\"sub-title m-t-15\">Small</div>\r\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Pagination Advance'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true, ellipses = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/other/other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherComponent; });
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

var OtherComponent = (function () {
    function OtherComponent() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.totalItems = 64;
        this.currentPage = 4;
        this.currentPager = 2;
        this.smallNumPages = 1;
        this.pageAdvance = 1;
    }
    OtherComponent.prototype.ngOnInit = function () {
    };
    OtherComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    OtherComponent.prototype.pageChanged = function (event) { };
    return OtherComponent;
}());
OtherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-other',
        template: __webpack_require__("../../../../../src/app/components/basic/other/other.component.html")
    }),
    __metadata("design:paramtypes", [])
], OtherComponent);

//# sourceMappingURL=other.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Bootstrap tab card start -->\r\n\r\n    <app-card [title]=\"'Bootstrap tab'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">Default</div>\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">Below Tabs</div>\r\n          <div class=\"below-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Bootstrap tab card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Material tab card start -->\r\n    <app-card [title]=\"'Material tab'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row m-b-30\">\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">Default</div>\r\n          <div class=\"md-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">BELOW TAB</div>\r\n          <div class=\"md-tabs md-below-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">LEFT TAB</div>\r\n          <div class=\"md-tabs md-left-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">Right TAB</div>\r\n          <div class=\"md-tabs md-right-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Profile\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Messages\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Settings\">\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Material tab card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Tab variant tab card start -->\r\n    <app-card [title]=\"'Tab variant'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'tab-icon'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">Tab With Icon</div>\r\n          <div class=\"md-tabs\">\r\n            <ngb-tabset>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-home\"></i>Home</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-user \"></i>Profile</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-message\"></i>Messages</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-settings\"></i>Settings</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <div class=\"sub-title\">Tab With Images</div>\r\n          <div class=\"md-tabs md-image-tab\">\r\n            <ngb-tabset>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-1.png\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-2.png\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-3.png\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <img src=\"assets/images/avatar-2.png\" class=\"img-fluid img-circle\" alt=\"\">\r\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Tab variant tab card start -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/basic/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__("../../../../../src/app/components/basic/tabs/tabs.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basic/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Typography card start -->\r\n    <app-card [title]=\"'Typography'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'typography'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">Headings</h4>\r\n          <p>Use tags <code>h1 to h6</code> for get desire heading.</p>\r\n          <h1>This is a Heading 1</h1>\r\n          <h2>This is a Heading 2</h2>\r\n          <h3>This is a Heading 3</h3>\r\n          <h4>This is a Heading 4</h4>\r\n          <h5>This is a Heading 5</h5>\r\n          <h6>This is a Heading 6</h6>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">HEADINGS WITH SUBHEADING</h4>\r\n          <p>Use tags <code>h1 to h6</code> for get desire heading.</p>\r\n          <h1>This is a Heading 1<small>Sub-heading</small></h1>\r\n          <h2>This is a Heading 2<small>Sub-heading</small></h2>\r\n          <h3>This is a Heading 3<small>Sub-heading</small></h3>\r\n          <h4>This is a Heading 4<small>Sub-heading</small></h4>\r\n          <h5>This is a Heading 5<small>Sub-heading</small></h5>\r\n          <h6>This is a Heading 6<small>Sub-heading</small></h6>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Typography card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Text elements start -->\r\n    <app-card [title]=\"'Text Elements'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">Inline text elements</h4>\r\n          <p class=\"lead m-t-0\">Your title goes here</p>\r\n          <p>You can use the mark tag to\r\n            <mark>highlight</mark> text.</p>\r\n          <p>\r\n            <del>This line of text is meant to be treated as deleted text.</del>\r\n          </p>\r\n          <p>\r\n            <ins>This line of text is meant to be treated as an addition to the document.</ins>\r\n          </p>\r\n          <p><strong>rendered as bold text</strong></p>\r\n          <p><em>rendered as italicized text</em></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">CONTEXTUAL TEXT COLORS</h4>\r\n          <p class=\"text-custom\">\r\n            Etiam porta sem malesuada magna mollis euismod.<code>text-custom</code>\r\n          </p>\r\n          <p class=\"text-pink\">\r\n            Donec ullamcorper nulla non metus auctor fringilla.<code>text-pink</code>\r\n          </p>\r\n          <p class=\"text-muted\">\r\n            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-muted</code>\r\n          </p>\r\n          <p class=\"text-primary\">\r\n            Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-primary</code>\r\n          </p>\r\n          <p class=\"text-success\">\r\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.<code>text-success</code>\r\n          </p>\r\n          <p class=\"text-info\">\r\n            Maecenas sed diam eget risus varius blandit sit amet non magna.<code>text-info</code>\r\n          </p>\r\n          <p class=\"text-warning\">\r\n            Etiam porta sem malesuada magna mollis euismod.<code>text-warning</code>\r\n          </p>\r\n          <p class=\"text-danger\">\r\n            Donec ullamcorper nulla non metus auctor fringilla.<code>text-danger</code>\r\n          </p>\r\n          <p class=\"text-dark\">\r\n            Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-dark</code>\r\n          </p>\r\n          <p class=\"text-purple m-b-0\">\r\n            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-purple</code>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Text elements end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- List Tag card start -->\r\n    <app-card [title]=\"'LIST TAG'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'list-tag'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">UNORDERED</h4>\r\n          <ul>\r\n            <li>Lorem ipsum dolor sit amet</li>\r\n            <li>Consectetur adipiscing elit</li>\r\n            <li>Integer molestie lorem at massa</li>\r\n            <li>Facilisis in pretium nisl aliquet</li>\r\n            <li>Nulla volutpat aliquam velit\r\n              <ul>\r\n                <li>Phasellus iaculis neque</li>\r\n                <li>Purus sodales ultricies</li>\r\n                <li>Vestibulum laoreet porttitor sem</li>\r\n                <li>Ac tristique libero volutpat at</li>\r\n              </ul>\r\n            </li>\r\n            <li>Faucibus porta lacus fringilla vel</li>\r\n            <li>Aenean sit amet erat nunc</li>\r\n            <li>Eget porttitor lorem</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">ORDERED</h4>\r\n          <ol>\r\n            <li> Lorem ipsum dolor sit amet</li>\r\n            <li>Consectetur adipiscing elit</li>\r\n            <li>Integer molestie lorem at massa</li>\r\n            <li>Facilisis in pretium nisl aliquet</li>\r\n            <li>Nulla volutpat aliquam velit\r\n              <ol>\r\n                <li>Phasellus iaculis neque</li>\r\n                <li>Purus sodales ultricies</li>\r\n                <li>Vestibulum laoreet porttitor sem</li>\r\n                <li>Ac tristique libero volutpat at</li>\r\n              </ol>\r\n            </li>\r\n            <li>Faucibus porta lacus fringilla vel</li>\r\n            <li>Aenean sit amet erat nunc</li>\r\n            <li>Eget porttitor lorem</li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">UNSTYLED</h4>\r\n          <div class=\"row col-sm-12\">\r\n            <ul class=\"list-unstyled\">\r\n              <li>Lorem ipsum dolor sit amet</li>\r\n              <li>Integer molestie lorem at massa</li>\r\n              <li>Phasellus iaculis neque</li>\r\n              <li>Faucibus porta lacus fringilla vel</li>\r\n              <li>Eget porttitor lorem</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"row col-sm-12\">\r\n            <div class=\"inline-order-list\">\r\n              <h4 class=\"sub-title\">Inline</h4>\r\n              <p class=\"text-muted\">\r\n                Place all list items on a single line with <code>\r\n                display: inline-block;</code>\r\n              </p>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <ul class=\"list-inline m-b-0\">\r\n                <li class=\"list-inline-item\">Lorem ipsum</li>\r\n                <li class=\"list-inline-item\">Phasellus iaculis</li>\r\n                <li class=\"list-inline-item\">Nulla volutpat</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- List Tag card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Other card start -->\r\n    <app-card [title]=\"'OTHER'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'list-tag'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 1</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Other card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'OTHER'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">BLOCKQUOTES</h4>\r\n          <p class=\"text-muted m-b-30\">\r\n            Your awesome text goes here.\r\n          </p>\r\n          <blockquote class=\"blockquote\">\r\n            <p class=\"m-b-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class=\"blockquote-footer\">Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n          <p class=\"text-muted m-b-15 m-t-20\">\r\n            Add <code>\r\n            .blockquote-reverse</code> for a blockquote with right-aligned content.\r\n          </p>\r\n          <blockquote class=\"blockquote blockquote-reverse\">\r\n            <p class=\"m-b-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class=\"blockquote-footer\">Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">HORIZONTAL DESCRIPTION</h4>\r\n          <dl class=\"dl-horizontal row\">\r\n            <dt class=\"col-sm-3\">Description lists</dt>\r\n            <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n            <dt class=\"col-sm-3\">Euismod</dt>\r\n            <dd class=\"col-sm-9\">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\r\n            <dd class=\"col-sm-12 col-sm-offset-3\">Donec id elit non mi porta gravida at eget metus.</dd>\r\n            <dt class=\"col-sm-3\">Malesuada porta</dt>\r\n            <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\r\n            <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\r\n            <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\r\n          </dl>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basic/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
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

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typography',
        template: __webpack_require__("../../../../../src/app/components/basic/typography/typography.component.html")
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/calendar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthViewHeader.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/common/calendarEventActions.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/common/calendarEventTitle.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthCell.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarOpenDayEvents.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewHeader.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarAllDayEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewHourSegment.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarTooltip.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarPreviousView.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarNextView.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarToday.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/click.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/pipes/calendarDate.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/pipes/calendarEventTitle.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");



























/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * &commat;NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__["b" /* DraggableHelper */],
                config.eventTitleFormatter || __WEBPACK_IMPORTED_MODULE_24__providers_calendarEventTitleFormatter_provider__["a" /* CalendarEventTitleFormatter */],
                config.dateFormatter || __WEBPACK_IMPORTED_MODULE_25__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */],
                config.utils || __WEBPACK_IMPORTED_MODULE_26__providers_calendarUtils_provider__["a" /* CalendarUtils */]
            ]
        };
    };
    CalendarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__["a" /* CalendarEventActionsComponent */],
                        __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__["a" /* CalendarEventTitleComponent */],
                        __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__["a" /* CalendarMonthCellComponent */],
                        __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__["a" /* CalendarOpenDayEventsComponent */],
                        __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__["a" /* CalendarWeekViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__["a" /* CalendarWeekViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__["a" /* CalendarAllDayEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__["a" /* CalendarDayViewHourSegmentComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipWindowComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["a" /* CalendarTooltipDirective */],
                        __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__["a" /* CalendarPreviousViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__["a" /* CalendarNextViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__["a" /* CalendarTodayDirective */],
                        __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__["a" /* CalendarDatePipe */],
                        __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__["a" /* CalendarEventTitlePipe */],
                        __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__["a" /* CalendarMonthViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__["a" /* CalendarDayViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__["a" /* ClickDirective */]
                    ],
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__["a" /* ResizableModule */], __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__["a" /* DragAndDropModule */]],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__["a" /* CalendarEventActionsComponent */],
                        __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__["a" /* CalendarEventTitleComponent */],
                        __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__["a" /* CalendarMonthCellComponent */],
                        __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__["a" /* CalendarOpenDayEventsComponent */],
                        __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__["a" /* CalendarWeekViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__["a" /* CalendarWeekViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__["a" /* CalendarAllDayEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__["a" /* CalendarDayViewHourSegmentComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipWindowComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["a" /* CalendarTooltipDirective */],
                        __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__["a" /* CalendarPreviousViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__["a" /* CalendarNextViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__["a" /* CalendarTodayDirective */],
                        __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__["a" /* CalendarDatePipe */],
                        __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__["a" /* CalendarEventTitlePipe */],
                        __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__["a" /* CalendarMonthViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__["a" /* CalendarDayViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__["a" /* ClickDirective */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipWindowComponent */]]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/common/calendarEventActions.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
    }
    CalendarEventActionsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-event-actions',
                    template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions\"\n        (mwlClick)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarEventActionsComponent.ctorParameters = function () { return []; };
    CalendarEventActionsComponent.propDecorators = {
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarEventActionsComponent;
}());

//# sourceMappingURL=calendarEventActions.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/common/calendarEventTitle.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    CalendarEventTitleComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-event-title',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <a\n        class=\"cal-event-title\"\n        href=\"javascript:;\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </a>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitleComponent.ctorParameters = function () { return []; };
    CalendarEventTitleComponent.propDecorators = {
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarEventTitleComponent;
}());

//# sourceMappingURL=calendarEventTitle.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarAllDayEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarAllDayEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarAllDayEventComponent = /** @class */ (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarAllDayEventComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-all-day-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color.secondary\"\n        [style.borderColor]=\"event.color.primary\">\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarAllDayEventComponent.ctorParameters = function () { return []; };
    CalendarAllDayEventComponent.propDecorators = {
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTitleTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarAllDayEventComponent;
}());

//# sourceMappingURL=calendarAllDayEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");





/**
 * @hidden
 */
var SEGMENT_HEIGHT = 30;
/**
 * @hidden
 */
var MINUTES_IN_HOUR = 60;
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = 30;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to a segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute) {
            this.refreshHourGrid();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, segment) {
        if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({
                event: dropEvent.dropData.event,
                newStart: segment.date
            });
        }
    };
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayViewContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var resizeHelper = new __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__["a" /* CalendarResizeHelper */](dayViewContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var currentResize = this.currentResizes.get(dayEvent);
        var pixelsMoved;
        if (currentResize.edge === 'top') {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = pixelsMoved * pixelAmountInMinutes;
        var newStart = dayEvent.event.start;
        var newEnd = dayEvent.event.end;
        if (currentResize.edge === 'top') {
            newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
        this.currentResizes.delete(dayEvent);
    };
    CalendarDayViewComponent.prototype.dragStart = function (event, dayViewContainer) {
        var _this = this;
        var dragHelper = new __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__["a" /* CalendarDragHelper */](dayViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.eventDragged = function (dayEvent, draggedInPixels) {
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = draggedInPixels * pixelAmountInMinutes;
        var newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(dayEvent.event.start, minutesMoved);
        var newEnd;
        if (dayEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(dayEvent.event.end, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.beforeViewRender.emit({
            body: this.hours
        });
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: SEGMENT_HEIGHT
        });
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    CalendarDayViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-day-view',
                    template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        [eventTitleTemplate]=\"eventTitleTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n            [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayViewContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            [dragAxis]=\"{x: false, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"{y: eventSnapSize}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStart(event, dayViewContainer)\"\n            (dragEnd)=\"eventDragged(dayEvent, $event.y)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [segment]=\"segment\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            [class.cal-drag-over]=\"segment.dragOver\"\n            mwlDroppable\n            (dragEnter)=\"segment.dragOver = true\"\n            (dragLeave)=\"segment.dragOver = false\"\n            (drop)=\"segment.dragOver = false; eventDropped($event, segment)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    CalendarDayViewComponent.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'hourSegments': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayStartHour': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayStartMinute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayEndHour': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayEndMinute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventSnapSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'hourSegmentTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'allDayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTitleTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'hourSegmentClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarDayViewComponent;
}());

//# sourceMappingURL=calendarDayView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarDayViewEventComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n        [style.borderColor]=\"dayEvent.event.color.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewEventComponent.ctorParameters = function () { return []; };
    CalendarDayViewEventComponent.propDecorators = {
        'dayEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTitleTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarDayViewEventComponent;
}());

//# sourceMappingURL=calendarDayViewEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewHourSegment.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    CalendarDayViewHourSegmentComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\">\n      <div\n        class=\"cal-hour-segment\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewHourSegmentComponent.ctorParameters = function () { return []; };
    CalendarDayViewHourSegmentComponent.propDecorators = {
        'segment': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarDayViewHourSegmentComponent;
}());

//# sourceMappingURL=calendarDayViewHourSegment.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthCell.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unhighlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarMonthCellComponent.prototype.onEventClick = function (mouseEvent, calendarEvent) {
        if (mouseEvent.stopPropagation) {
            mouseEvent.stopPropagation();
        }
        this.eventClicked.emit({ event: calendarEvent });
    };
    CalendarMonthCellComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-month-cell',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events\"\n          [style.backgroundColor]=\"event.color.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"onEventClick($event, event)\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
                    host: {
                        class: 'cal-cell cal-day-cell',
                        '[class.cal-past]': 'day.isPast',
                        '[class.cal-today]': 'day.isToday',
                        '[class.cal-future]': 'day.isFuture',
                        '[class.cal-weekend]': 'day.isWeekend',
                        '[class.cal-in-month]': 'day.inMonth',
                        '[class.cal-out-month]': '!day.inMonth',
                        '[class.cal-has-events]': 'day.events.length > 0',
                        '[class.cal-open]': 'day === openDay',
                        '[style.backgroundColor]': 'day.backgroundColor'
                    }
                },] },
    ];
    /** @nocollapse */
    CalendarMonthCellComponent.ctorParameters = function () { return []; };
    CalendarMonthCellComponent.propDecorators = {
        'day': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'openDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'highlightDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'unhighlightDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarMonthCellComponent;
}());

//# sourceMappingURL=calendarMonthCell.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date__ = __webpack_require__("../../../../date-fns/set_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_set_month__ = __webpack_require__("../../../../date-fns/set_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_set_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_set_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_set_year__ = __webpack_require__("../../../../date-fns/set_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_set_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_set_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date__ = __webpack_require__("../../../../date-fns/get_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month__ = __webpack_require__("../../../../date-fns/get_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_get_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year__ = __webpack_require__("../../../../date-fns/get_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_get_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");











/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color.secondary;
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var year = __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year___default()(day.date);
        var month = __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month___default()(day.date);
        var date = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date___default()(day.date);
        var newStart = __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_set_month___default()(__WEBPACK_IMPORTED_MODULE_4_date_fns_set_year___default()(event.start, year), month), date);
        var newEnd;
        if (event.end) {
            var secondsDiff = __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds___default()(newStart, event.start);
            newEnd = __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds___default()(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.handleDayClick = function (clickEvent, day) {
        // when using hammerjs, stopPropagation doesn't work. See https://github.com/mattlewis92/angular-calendar/issues/318
        if (!clickEvent.target.classList.contains('cal-event')) {
            this.dayClicked.emit({ day: day });
        }
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) {
                return __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(day.date, _this.viewDate);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days
            });
        }
    };
    CalendarMonthViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-month-view',
                    template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)\"\n              [class.cal-drag-over]=\"day.dragOver\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"handleDayClick($event, day)\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              (dragEnter)=\"day.dragOver = true\"\n              (dragLeave)=\"day.dragOver = false\"\n              (drop)=\"day.dragOver = false; eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_10__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    CalendarMonthViewComponent.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'excludeDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeDayIsOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekStartsOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'headerTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'cellTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'openDayEventsTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTitleTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekendDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dayClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarMonthViewComponent;
}());

//# sourceMappingURL=calendarMonthView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthViewHeader.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthViewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
    }
    CalendarMonthViewHeaderComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-month-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\">\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarMonthViewHeaderComponent.ctorParameters = function () { return []; };
    CalendarMonthViewHeaderComponent.propDecorators = {
        'days': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarMonthViewHeaderComponent;
}());

//# sourceMappingURL=calendarMonthViewHeader.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarOpenDayEvents.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarOpenDayEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");


var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-open-day-events',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\"\n        mwlDraggable\n        [dropData]=\"{event: event}\"\n        [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n        <span\n          class=\"cal-event\"\n          [style.backgroundColor]=\"event.color.primary\">\n        </span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"month\"\n          (mwlClick)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </ng-template>\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <ng-template\n        [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n        [ngTemplateOutletContext]=\"{\n          events: events,\n          eventClicked: eventClicked\n        }\">\n      </ng-template>\n    </div>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('collapse', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: 0, overflow: 'hidden' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('150ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: '*' }))
                            ]),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: '*', overflow: 'hidden' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('150ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: 0 }))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    CalendarOpenDayEventsComponent.ctorParameters = function () { return []; };
    CalendarOpenDayEventsComponent.propDecorators = {
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTitleTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarOpenDayEventsComponent;
}());

//# sourceMappingURL=calendarOpenDayEvents.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");





/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.eventRows = [];
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeStarted = function (weekViewContainer, weekEvent, resizeEvent) {
        this.currentResizes.set(weekEvent, {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var resizeHelper = new __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__["a" /* CalendarResizeHelper */](weekViewContainer, this.dayColumnWidth);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizing = function (weekEvent, resizeEvent, dayWidth) {
        var currentResize = this.currentResizes.get(weekEvent);
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = currentResize.originalOffset + diff;
            weekEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeEnded = function (weekEvent) {
        var currentResize = this.currentResizes.get(weekEvent);
        var daysDiff;
        if (currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - currentResize.originalSpan;
        }
        weekEvent.offset = currentResize.originalOffset;
        weekEvent.span = currentResize.originalSpan;
        var newStart = weekEvent.event.start;
        var newEnd = weekEvent.event.end;
        if (currentResize.edge === 'left') {
            newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
        this.currentResizes.delete(weekEvent);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.eventDragged = function (weekEvent, draggedByPx, dayWidth) {
        var daysDragged = draggedByPx / dayWidth;
        var newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(weekEvent.event.start, daysDragged);
        var newEnd;
        if (weekEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(weekEvent.event.end, daysDragged);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragStart = function (weekViewContainer, event) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var dragHelper = new __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__["a" /* CalendarDragHelper */](weekViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.beforeViewRender.emit({
            header: this.days
        });
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.eventRows = this.utils.getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true
        });
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    CalendarWeekViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-week-view',
                    template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventTimesChanged.emit($event)\">\n      </mwl-calendar-week-view-header>\n      <div *ngFor=\"let eventRow of eventRows\" #eventRowContainer class=\"cal-events-row\">\n        <div\n          *ngFor=\"let weekEvent of eventRow.row\"\n          #event\n          class=\"cal-event-container\"\n          [class.cal-draggable]=\"weekEvent.event.draggable\"\n          [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n          [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n          [ngClass]=\"weekEvent.event?.cssClass\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth}\"\n          [validateResize]=\"validateResize\"\n          (resizeStart)=\"resizeStarted(weekViewContainer, weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, dayColumnWidth)\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\"\n          mwlDraggable\n          [dragAxis]=\"{x: weekEvent.event.draggable && currentResizes.size === 0, y: false}\"\n          [dragSnapGrid]=\"{x: dayColumnWidth}\"\n          [validateDrag]=\"validateDrag\"\n          (dragStart)=\"dragStart(weekViewContainer, event)\"\n          (dragEnd)=\"eventDragged(weekEvent, $event.x, dayColumnWidth)\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            [customTemplate]=\"eventTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    CalendarWeekViewComponent.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'excludeDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekStartsOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'headerTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTitleTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'precision': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekendDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayHeaderClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarWeekViewComponent;
}());

//# sourceMappingURL=calendarWeekView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarWeekViewEventComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color.secondary\"\n        [mwlCalendarTooltip]=\"weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"weekEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewEventComponent.ctorParameters = function () { return []; };
    CalendarWeekViewEventComponent.propDecorators = {
        'weekEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTitleTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarWeekViewEventComponent;
}());

//# sourceMappingURL=calendarWeekViewEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewHeader.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventDropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarWeekViewHeaderComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\">\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewHeaderComponent.ctorParameters = function () { return []; };
    CalendarWeekViewHeaderComponent.propDecorators = {
        'days': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayHeaderClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventDropped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarWeekViewHeaderComponent;
}());

//# sourceMappingURL=calendarWeekViewHeader.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarNextView.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarNextViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks__ = __webpack_require__("../../../../date-fns/add_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__ = __webpack_require__("../../../../date-fns/add_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__);




/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarNextViewDirective.prototype.onClick = function () {
        var addFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default.a,
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks___default.a,
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default.a
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    CalendarNextViewDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarNextView]'
                },] },
    ];
    /** @nocollapse */
    CalendarNextViewDirective.ctorParameters = function () { return []; };
    CalendarNextViewDirective.propDecorators = {
        'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return CalendarNextViewDirective;
}());

//# sourceMappingURL=calendarNextView.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarPreviousView.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPreviousViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days__ = __webpack_require__("../../../../date-fns/sub_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks__ = __webpack_require__("../../../../date-fns/sub_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months__ = __webpack_require__("../../../../date-fns/sub_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months__);




/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days___default.a,
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks___default.a,
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months___default.a
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    CalendarPreviousViewDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarPreviousView]'
                },] },
    ];
    /** @nocollapse */
    CalendarPreviousViewDirective.ctorParameters = function () { return []; };
    CalendarPreviousViewDirective.propDecorators = {
        'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return CalendarPreviousViewDirective;
}());

//# sourceMappingURL=calendarPreviousView.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarToday.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarTodayDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today__ = __webpack_require__("../../../../date-fns/start_of_today/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today__);


/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(__WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today___default()());
    };
    CalendarTodayDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarToday]'
                },] },
    ];
    /** @nocollapse */
    CalendarTodayDirective.ctorParameters = function () { return []; };
    CalendarTodayDirective.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return CalendarTodayDirective;
}());

//# sourceMappingURL=calendarToday.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarTooltip.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarTooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_positioning__ = __webpack_require__("../../../../positioning/dist/positioning.js");



var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    CalendarTooltipWindowComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarTooltipWindowComponent.ctorParameters = function () { return []; };
    CalendarTooltipWindowComponent.propDecorators = {
        'contents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarTooltipWindowComponent;
}());

var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document; //tslint:disable-line
        this.placement = 'top'; // tslint:disable-line no-input-rename
        this.positioning = new __WEBPACK_IMPORTED_MODULE_2_positioning__["a" /* Positioning */]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionTooltip = function () {
        if (this.tooltipRef) {
            var targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            var elm = this.tooltipRef.location.nativeElement
                .children[0];
            this.renderer.setStyle(elm, 'top', targetPosition.top + "px");
            this.renderer.setStyle(elm, 'left', targetPosition.left + "px");
        }
    };
    CalendarTooltipDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarTooltip]'
                },] },
    ];
    /** @nocollapse */
    CalendarTooltipDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"],] },] },
    ]; };
    CalendarTooltipDirective.propDecorators = {
        'contents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mwlCalendarTooltip',] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTemplate',] },],
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEvent',] },],
        'appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAppendToBody',] },],
        'onMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
        'onMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
    };
    return CalendarTooltipDirective;
}());

//# sourceMappingURL=calendarTooltip.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/click.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // tslint:disable-line
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        var eventName = typeof window['Hammer'] !== 'undefined' ? 'tap' : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            _this.click.next(event);
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
    };
    ClickDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlClick]'
                },] },
    ];
    /** @nocollapse */
    ClickDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ClickDirective.propDecorators = {
        'click': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mwlClick',] },],
    };
    return ClickDirective;
}());

//# sourceMappingURL=click.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarMomentDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarMomentDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarNativeDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_module__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/calendar.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__calendar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_day_calendarDayView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_week_calendarWeekView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* unused harmony reexport DAYS_OF_WEEK */










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/pipes/calendarDate.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");


/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    CalendarDatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'calendarDate'
                },] },
    ];
    /** @nocollapse */
    CalendarDatePipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return CalendarDatePipe;
}());

//# sourceMappingURL=calendarDate.pipe.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/pipes/calendarEventTitle.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitlePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");


var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event);
    };
    CalendarEventTitlePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'calendarEventTitle'
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitlePipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitleFormatter_provider__["a" /* CalendarEventTitleFormatter */], },
    ]; };
    return CalendarEventTitlePipe;
}());

//# sourceMappingURL=calendarEventTitle.pipe.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDateFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This class is responsible for all formatting of dates. There are 2 implementations available, the `CalendarNativeDateFormatter` (default) which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = /** @class */ (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarDateFormatter;
}(__WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__["a" /* CalendarNativeDateFormatter */]));

//# sourceMappingURL=calendarDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDragHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/util.js");

var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y;
        var newRect = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + x,
            right: this.startPosition.right + x,
            top: this.startPosition.top + y,
            bottom: this.startPosition.bottom + y
        });
        return Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isInside */])(this.dragContainerElement.getBoundingClientRect(), newRect);
    };
    return CalendarDragHelper;
}());

//# sourceMappingURL=calendarDragHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitleFormatter; });
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var CalendarEventTitleFormatter = /** @class */ (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    CalendarEventTitleFormatter.prototype.month = function (event) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = function (event) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    CalendarEventTitleFormatter.prototype.week = function (event) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = function (event) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    CalendarEventTitleFormatter.prototype.day = function (event) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = function (event) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());

//# sourceMappingURL=calendarEventTitleFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarMomentDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MOMENT */
/* unused harmony export CalendarMomentDateFormatter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var MOMENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import * as moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    /**
     * The month view header week day labels
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D MMM');
    };
    /**
     * The week view title
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('[Week] W [of] YYYY');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    /** @nocollapse */
    CalendarMomentDateFormatter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [MOMENT,] },] },
    ]; };
    return CalendarMomentDateFormatter;
}());

//# sourceMappingURL=calendarMomentDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarNativeDateFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__ = __webpack_require__("../../../../date-fns/get_iso_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__);

/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting. It is the default date formatter used by the calendar.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter() {
    }
    /**
     * The month view header week day labels
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new Intl.DateTimeFormat(locale, {
            year: 'numeric'
        }).format(date);
        var weekNumber = __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());

//# sourceMappingURL=calendarNativeDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarResizeHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/util.js");

var CalendarResizeHelper = /** @class */ (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    CalendarResizeHelper.prototype.validateResize = function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth && rectangle.width < this.minWidth) {
            return false;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isInside */])(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());

//# sourceMappingURL=calendarResizeHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");


var CalendarUtils = /** @class */ (function () {
    function CalendarUtils() {
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["c" /* getMonthView */])(args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["e" /* getWeekViewHeader */])(args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["d" /* getWeekView */])(args);
    };
    CalendarUtils.prototype.getDayView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["a" /* getDayView */])(args);
    };
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["b" /* getDayViewHourGrid */])(args);
    };
    CalendarUtils.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CalendarUtils.ctorParameters = function () { return []; };
    return CalendarUtils;
}());

//# sourceMappingURL=calendarUtils.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInside;
function isInside(outer, inner) {
    return (outer.left <= inner.left &&
        inner.left <= outer.right &&
        outer.left <= inner.right &&
        inner.right <= outer.right &&
        outer.top <= inner.top &&
        inner.top <= outer.bottom &&
        outer.top <= inner.bottom &&
        inner.bottom <= outer.bottom);
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/drag-and-drop.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droppable_directive__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/droppable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_helper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggable-helper.provider.js");




var DragAndDropModule = /** @class */ (function () {
    function DragAndDropModule() {
    }
    DragAndDropModule.forRoot = function () {
        return {
            ngModule: DragAndDropModule,
            providers: [__WEBPACK_IMPORTED_MODULE_3__draggable_helper_provider__["a" /* DraggableHelper */]]
        };
    };
    DragAndDropModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */], __WEBPACK_IMPORTED_MODULE_2__droppable_directive__["a" /* DroppableDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */], __WEBPACK_IMPORTED_MODULE_2__droppable_directive__["a" /* DroppableDirective */]]
                },] },
    ];
    /** @nocollapse */
    DragAndDropModule.ctorParameters = function () { return []; };
    return DragAndDropModule;
}());

//# sourceMappingURL=drag-and-drop.module.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/draggable-helper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var DraggableHelper = /** @class */ (function () {
    function DraggableHelper() {
        this.currentDrag = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    return DraggableHelper;
}());

//# sourceMappingURL=draggable-helper.provider.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/draggable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast__ = __webpack_require__("../../../../rxjs/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__draggable_helper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggable-helper.provider.js");












var MOVE_CURSOR = 'move';
var DraggableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function DraggableDirective(element, renderer, draggableHelper, zone) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.dragAxis = { x: true, y: true };
        this.dragSnapGrid = {};
        this.ghostDragEnabled = true;
        this.dragCursor = MOVE_CURSOR;
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragging = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.pointerDown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerMove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerUp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.eventListenerSubscriptions = {};
    }
    DraggableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.checkEventListeners();
        var pointerDrag = this.pointerDown
            .filter(function () { return _this.canDrag(); })
            .flatMap(function (pointerDownEvent) {
            pointerDownEvent.event.preventDefault();
            _this.zone.run(function () {
                _this.dragStart.next({ x: 0, y: 0 });
            });
            _this.setCursor(_this.dragCursor);
            var currentDrag = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
            _this.draggableHelper.currentDrag.next(currentDrag);
            var pointerMove = _this.pointerMove
                .map(function (pointerMoveEvent) {
                pointerMoveEvent.event.preventDefault();
                return {
                    currentDrag: currentDrag,
                    x: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    y: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY
                };
            })
                .map(function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.x =
                        Math.floor(moveData.x / _this.dragSnapGrid.x) *
                            _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.y =
                        Math.floor(moveData.y / _this.dragSnapGrid.y) *
                            _this.dragSnapGrid.y;
                }
                return moveData;
            })
                .map(function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.x = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.y = 0;
                }
                return moveData;
            })
                .filter(function (_a) {
                var x = _a.x, y = _a.y;
                return !_this.validateDrag || _this.validateDrag({ x: x, y: y });
            })
                .takeUntil(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge(_this.pointerUp, _this.pointerDown));
            pointerMove.takeLast(1).subscribe(function (_a) {
                var x = _a.x, y = _a.y;
                _this.zone.run(function () {
                    _this.dragEnd.next({ x: x, y: y });
                });
                currentDrag.complete();
                _this.setCssTransform(null);
                if (_this.ghostDragEnabled) {
                    _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', null);
                }
            });
            _this.pointerMove.next(pointerDownEvent);
            return pointerMove;
        })
            .share();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge(pointerDrag.take(1).map(function (value) { return [, value]; }), pointerDrag.pairwise())
            .filter(function (_a) {
            var previous = _a[0], next = _a[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })
            .map(function (_a) {
            var previous = _a[0], next = _a[1];
            return next;
        })
            .subscribe(function (_a) {
            var x = _a.x, y = _a.y, currentDrag = _a.currentDrag, clientX = _a.clientX, clientY = _a.clientY;
            _this.zone.run(function () {
                _this.dragging.next({ x: x, y: y });
            });
            if (_this.ghostDragEnabled) {
                _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', 'none');
            }
            _this.setCssTransform("translate(" + x + "px, " + y + "px)");
            currentDrag.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData
            });
        });
    };
    DraggableDirective.prototype.ngOnChanges = function (changes) {
        if (changes['dragAxis']) {
            this.checkEventListeners();
        }
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
        this.pointerDown.complete();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    DraggableDirective.prototype.checkEventListeners = function () {
        var _this = this;
        var canDrag = this.canDrag();
        var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', function (event) {
                    _this.onMouseDown(event);
                });
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', function (event) {
                    _this.onMouseUp(event);
                });
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', function (event) {
                    _this.onTouchStart(event);
                });
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', function () {
                    _this.onMouseEnter();
                });
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', function () {
                    _this.onMouseLeave();
                });
            });
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    DraggableDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (mouseMoveEvent) {
                _this.pointerMove.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                });
            });
        }
        this.pointerDown.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    DraggableDirective.prototype.onMouseUp = function (event) {
        if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
        }
        this.pointerUp.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    DraggableDirective.prototype.onTouchStart = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', function (touchMoveEvent) {
                _this.pointerMove.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                });
            });
        }
        this.pointerDown.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
        });
    };
    DraggableDirective.prototype.onTouchEnd = function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
        }
        this.pointerUp.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
        });
    };
    DraggableDirective.prototype.onMouseEnter = function () {
        this.setCursor(this.dragCursor);
    };
    DraggableDirective.prototype.onMouseLeave = function () {
        this.setCursor(null);
    };
    DraggableDirective.prototype.setCssTransform = function (value) {
        if (this.ghostDragEnabled) {
            this.renderer.setStyle(this.element.nativeElement, 'transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-webkit-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-ms-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-moz-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-o-transform', value);
        }
    };
    DraggableDirective.prototype.canDrag = function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    DraggableDirective.prototype.setCursor = function (value) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
    };
    DraggableDirective.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
            _this.eventListenerSubscriptions[type]();
            delete _this.eventListenerSubscriptions[type];
        });
    };
    DraggableDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlDraggable]'
                },] },
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_11__draggable_helper_provider__["a" /* DraggableHelper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    DraggableDirective.propDecorators = {
        'dropData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dragAxis': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dragSnapGrid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ghostDragEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'validateDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dragCursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dragging': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return DraggableDirective;
}());

//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/droppable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__draggable_helper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggable-helper.provider.js");





function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
}
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(element, draggableHelper, zone) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.dragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DroppableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag) {
            var droppableRectangle = _this.element.nativeElement.getBoundingClientRect();
            var currentDragDropData;
            var overlaps = drag.map(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                return isCoordinateWithinRectangle(clientX, clientY, droppableRectangle);
            });
            var overlapsChanged = overlaps.distinctUntilChanged();
            var dragOverActive; // TODO - see if there's a way of doing this via rxjs
            overlapsChanged.filter(function (overlapsNow) { return overlapsNow; }).subscribe(function () {
                dragOverActive = true;
                _this.zone.run(function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlaps.filter(function (overlapsNow) { return overlapsNow; }).subscribe(function () {
                _this.zone.run(function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlapsChanged
                .pairwise()
                .filter(function (_a) {
                var didOverlap = _a[0], overlapsNow = _a[1];
                return didOverlap && !overlapsNow;
            })
                .subscribe(function () {
                dragOverActive = false;
                _this.zone.run(function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData
                    });
                });
            });
            drag.flatMap(function () { return overlaps; }).subscribe({
                complete: function () {
                    if (dragOverActive) {
                        _this.zone.run(function () {
                            _this.drop.next({
                                dropData: currentDragDropData
                            });
                        });
                    }
                }
            });
        });
    };
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.currentDragSubscription.unsubscribe();
    };
    DroppableDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlDroppable]'
                },] },
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_4__draggable_helper_provider__["a" /* DraggableHelper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    DroppableDirective.propDecorators = {
        'dragEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dragLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dragOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'drop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return DroppableDirective;
}());

//# sourceMappingURL=droppable.directive.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag_and_drop_module__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/drag-and-drop.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__drag_and_drop_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_helper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggable-helper.provider.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__draggable_helper_provider__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resizable_module__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resizable_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resizable_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.directive.js");
/* unused harmony reexport Resizable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");
/* unused harmony reexport ResizeHandle */

 // tslint:disable-line
 // tslint:disable-line
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MOUSE_MOVE_THROTTLE_MS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resizable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle__ = __webpack_require__("../../../../rxjs/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");














function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    var diff = Math.abs(value1 - value2);
    return diff < precision;
}
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
function getElementRect(element, ghostElementPositioning) {
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop,
            bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop,
            left: element.nativeElement.offsetLeft,
            right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft
        };
    }
    else {
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top,
            bottom: boundingRect.bottom,
            left: boundingRect.left,
            right: boundingRect.right,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    var elmPosition = elm.nativeElement.getBoundingClientRect();
    var edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
var DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'ew-resize',
    topOrBottom: 'ns-resize'
});
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    var edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = newRectangle[edge] - initialRectangle[edge];
    });
    return edgesDiff;
}
var RESIZE_ACTIVE_CLASS = 'resize-active';
var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable
 *
 * For example
 *
 * ```
 * &lt;div mwlResizable [resizeEdges]="{bottom: true, right: true, top: true, left: true}" [enableGhostResize]="true"&gt;&lt;/div&gt;
 * ```
 */
var Resizable = (function () {
    /**
     * @hidden
     */
    function Resizable(renderer, elm, zone) {
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.pointerEventListenerSubscriptions = {};
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     */
    Resizable.prototype.ngOnInit = function () {
        var _this = this;
        // TODO - use some fancy Observable.merge's for this
        this.pointerEventListenerSubscriptions.pointerDown = this.pointerEventListeners.pointerDown.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mousedown.next({ clientX: clientX, clientY: clientY });
        });
        this.pointerEventListenerSubscriptions.pointerMove = this.pointerEventListeners.pointerMove.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, event = _a.event;
            _this.mousemove.next({ clientX: clientX, clientY: clientY, event: event });
        });
        this.pointerEventListenerSubscriptions.pointerUp = this.pointerEventListeners.pointerUp.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mouseup.next({ clientX: clientX, clientY: clientY });
        });
        var currentResize;
        var removeGhostElement = function () {
            if (currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        var mouseMove = this.mousemove.share();
        mouseMove
            .filter(function () { return !!currentResize; })
            .subscribe(function (_a) {
            var event = _a.event;
            event.preventDefault();
        });
        mouseMove.throttle(function (val) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["interval"])(MOUSE_MOVE_THROTTLE_MS); }).subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            var resizeEdges = getResizeEdges({
                clientX: clientX, clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
            var cursor = currentResize ? '' : getResizeCursor(resizeEdges, resizeCursors);
            _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, !!currentResize);
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        var mousedrag = this.mousedown.flatMap(function (startCoords) {
            var getDiff = function (moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            };
            var getSnapGrid = function () {
                var snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right && currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            var getGrid = function (coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            };
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(mouseMove.take(1).map(function (coords) { return [, coords]; }), mouseMove.pairwise()).map(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
            }).filter(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                if (!previousCoords) {
                    return true;
                }
                var snapGrid = getSnapGrid();
                var previousGrid = getGrid(previousCoords, snapGrid);
                var newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }).map(function (_a) {
                var newCoords = _a[1];
                var snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }).takeUntil(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(_this.mouseup, _this.mousedown));
        }).filter(function () { return !!currentResize; });
        mousedrag.map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
        }).filter(function (newBoundingRect) {
            return newBoundingRect.height > 0 && newBoundingRect.width > 0;
        }).filter(function (newBoundingRect) {
            return _this.validateResize ? _this.validateResize({
                rectangle: newBoundingRect,
                edges: getEdgesDiff({
                    edges: currentResize.edges,
                    initialRectangle: currentResize.startingRect,
                    newRectangle: newBoundingRect
                })
            }) : true;
        }).subscribe(function (newBoundingRect) {
            if (currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            _this.zone.run(function () {
                _this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: currentResize.edges,
                        initialRectangle: currentResize.startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            });
            currentResize.currentRect = newBoundingRect;
        });
        this.mousedown.map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return edges || getResizeEdges({
                clientX: clientX, clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
        }).filter(function (edges) {
            return Object.keys(edges).length > 0;
        }).subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            var startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
                currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
                currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
            }
            _this.zone.run(function () {
                _this.resizeStart.emit({
                    edges: getEdgesDiff({ edges: edges, initialRectangle: startingRect, newRectangle: startingRect }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        this.mouseup.subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.zone.run(function () {
                    _this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: currentResize.edges,
                            initialRectangle: currentResize.startingRect,
                            newRectangle: currentResize.currentRect
                        }),
                        rectangle: currentResize.currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     */
    Resizable.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.resizeHandles.forEach(function (handle) {
            handle.resizable = _this;
        });
    };
    /**
     * @hidden
     */
    Resizable.prototype.ngOnDestroy = function () {
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.pointerEventListenerSubscriptions.pointerDown.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerMove.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerUp.unsubscribe();
    };
    Resizable.prototype.setElementClass = function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    return Resizable;
}());

Resizable.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizable]'
            },] },
];
/** @nocollapse */
Resizable.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
Resizable.propDecorators = {
    'validateResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeEdges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'enableGhostResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeSnapGrid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeCursors': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeCursorPrecision': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ghostElementPositioning': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizeEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizeHandles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_13__resizeHandle_directive__["a" /* ResizeHandle */],] },],
};
var PointerEventListeners = (function () {
    function PointerEventListeners(renderer, zone) {
        this.pointerDown = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var unsubscribeMouseDown, unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY, event: event });
                });
            });
            return function () {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).share();
        this.pointerMove = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var unsubscribeMouseMove, unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({ clientX: event.targetTouches[0].clientX, clientY: event.targetTouches[0].clientY, event: event });
                });
            });
            return function () {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).share();
        this.pointerUp = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var unsubscribeMouseUp, unsubscribeTouchEnd, unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({ clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY, event: event });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({ clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY, event: event });
                });
            });
            return function () {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).share();
    }
    PointerEventListeners.getInstance = function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());
//# sourceMappingURL=resizable.directive.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizable.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resizable_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");



var ResizableModule = (function () {
    function ResizableModule() {
    }
    return ResizableModule;
}());

ResizableModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_1__resizable_directive__["a" /* Resizable */], __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__["a" /* ResizeHandle */]],
                exports: [__WEBPACK_IMPORTED_MODULE_1__resizable_directive__["a" /* Resizable */], __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__["a" /* ResizeHandle */]]
            },] },
];
/** @nocollapse */
ResizableModule.ctorParameters = function () { return []; };
//# sourceMappingURL=resizable.module.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```
 * &lt;div mwlResizable&gt;
 *   &lt;div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * ```
 */
var ResizeHandle = (function () {
    function ResizeHandle(renderer, element, zone) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    ResizeHandle.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @private
     */
    ResizeHandle.prototype.onMousedown = function (event, mouseX, mouseY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (event) {
                    _this.onMousemove(event, event.targetTouches[0].clientX, event.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (event) {
                    _this.onMousemove(event, event.clientX, event.clientY);
                });
            }
            _this.resizable.mousedown.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    /**
     * @private
     */
    ResizeHandle.prototype.onMouseup = function (mouseX, mouseY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    ResizeHandle.prototype.onMousemove = function (event, mouseX, mouseY) {
        this.resizable.mousemove.next({ mouseX: mouseX, mouseY: mouseY, edges: this.resizeEdges, event: event });
    };
    ResizeHandle.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            _this.eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    return ResizeHandle;
}());

ResizeHandle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizeHandle]'
            },] },
];
/** @nocollapse */
ResizeHandle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
ResizeHandle.propDecorators = {
    'resizeEdges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onMousedown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] },],
    'onMouseup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] },],
};
//# sourceMappingURL=resizeHandle.directive.js.map

/***/ }),

/***/ "../../../../calendar-utils/dist/calendar-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DAYS_OF_WEEK */
/* unused harmony export SECONDS_IN_DAY */
/* unused harmony export SECONDS_IN_WEEK */
/* unused harmony export getWeekViewEventOffset */
/* harmony export (immutable) */ __webpack_exports__["e"] = getWeekViewHeader;
/* harmony export (immutable) */ __webpack_exports__["d"] = getWeekView;
/* harmony export (immutable) */ __webpack_exports__["c"] = getMonthView;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDayView;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDayViewHourGrid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day__ = __webpack_require__("../../../../date-fns/end_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days__ = __webpack_require__("../../../../date-fns/difference_in_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day__ = __webpack_require__("../../../../date-fns/start_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day__ = __webpack_require__("../../../../date-fns/get_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week__ = __webpack_require__("../../../../date-fns/start_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week__ = __webpack_require__("../../../../date-fns/end_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month__ = __webpack_require__("../../../../date-fns/start_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__ = __webpack_require__("../../../../date-fns/end_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month__ = __webpack_require__("../../../../date-fns/is_same_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__ = __webpack_require__("../../../../date-fns/is_same_second/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__ = __webpack_require__("../../../../date-fns/set_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__ = __webpack_require__("../../../../date-fns/set_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute__ = __webpack_require__("../../../../date-fns/start_of_minute/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__ = __webpack_require__("../../../../date-fns/difference_in_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__ = __webpack_require__("../../../../date-fns/add_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_max__ = __webpack_require__("../../../../date-fns/max/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_max___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_date_fns_max__);





















var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
var SECONDS_IN_WEEK = SECONDS_IN_DAY * DAYS_IN_WEEK;
function getExcludedSeconds(_a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var endDate = __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default()(startDate, seconds - 1);
    var dayStart = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(startDate);
    var dayEnd = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(__WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default()(endDate, 0));
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds({ dayStart: dayStart, dayEnd: dayEnd, day: day, precision: precision, startDate: startDate, endDate: endDate });
        }
        current = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(_a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(endDate, __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(_a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    var span = SECONDS_IN_DAY;
    var begin = __WEBPACK_IMPORTED_MODULE_20_date_fns_max___default()(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(event.end, begin);
                break;
            default:
                span = __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(event.end, 1), begin) * SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds 7days
    if (totalLength > SECONDS_IN_WEEK) {
        span = SECONDS_IN_WEEK - offsetSeconds;
    }
    span -= getExcludedSeconds({ startDate: begin, seconds: span, excluded: excluded, precision: precision });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(_a) {
    var event = _a.event, startOfWeek = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    if (event.start < startOfWeek) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset = __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(event.start), startOfWeek) * SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(event.start, startOfWeek);
            break;
    }
    offset -= getExcludedSeconds({ startDate: startOfWeek, seconds: offset, excluded: excluded, precision: precision });
    return offset / SECONDS_IN_DAY;
}
function isEventIsPeriod(_a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventStart, periodStart) || __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventStart, periodEnd)) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventEnd, periodStart) || __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(_a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) { return isEventIsPeriod({ event: event, periodStart: periodStart, periodEnd: periodEnd }); });
}
function getWeekDay(_a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var today = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(new Date());
    return {
        date: date,
        isPast: date < today,
        isToday: __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day___default()(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(date)) > -1
    };
}
function getWeekViewHeader(_a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays;
    var start = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var days = [];
    var _loop_2 = function (i) {
        var date = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(start, i);
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            days.push(getWeekDay({ date: date, weekendDays: weekendDays }));
        }
    };
    for (var i = 0; i < DAYS_IN_WEEK; i++) {
        _loop_2(i);
    }
    return days;
}
function getWeekView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e;
    if (!events) {
        events = [];
    }
    var startOfViewWeek = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var endOfViewWeek = __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var maxRange = DAYS_IN_WEEK - excluded.length;
    var eventsMapped = getEventsInPeriod({ events: events, periodStart: startOfViewWeek, periodEnd: endOfViewWeek }).map(function (event) {
        var offset = getWeekViewEventOffset({ event: event, startOfWeek: startOfViewWeek, excluded: excluded, precision: precision });
        var span = getWeekViewEventSpan({ event: event, offset: offset, startOfWeekDate: startOfViewWeek, excluded: excluded, precision: precision });
        return { event: event, offset: offset, span: span };
    }).filter(function (e) { return e.offset < maxRange; }).filter(function (e) { return e.span > 0; }).map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek
    }); }).sort(function (itemA, itemB) {
        var startSecondsDiff = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var eventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= DAYS_IN_WEEK &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            eventRows.push({
                row: [
                    event
                ].concat(otherRowEvents)
            });
        }
    });
    return eventRows;
}
function getMonthView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month___default()(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month___default()(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var start = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewStart, { weekStartsOn: weekStartsOn });
    var end = __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default()(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod({
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_3 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                date = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            var day = getWeekDay({ date: date, weekendDays: weekendDays });
            var events_1 = getEventsInPeriod({
                events: eventsInMonth,
                periodStart: __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(date),
                periodEnd: __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(date)
            });
            day.inMonth = __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month___default()(date, viewDate);
            day.events = events_1;
            day.badgeTotal = events_1.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(end, start) + 1; i++) {
        _loop_3(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) { return day.date.getMonth() === viewDate.getMonth(); });
            if (isRowInMonth) {
                days = days.concat(row);
            }
        }
    }
    else {
        days = initialViewDays;
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days
    };
}
function getDayView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var startOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var previousDayEvents = [];
    var dayViewEvents = getEventsInPeriod({
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    }).sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    }).map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            top += __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default()(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default()(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = previousDayEvents.filter(function (previousEvent) {
            var previousEventTop = previousEvent.top;
            var previousEventBottom = previousEvent.top + previousEvent.height;
            if (top < previousEventBottom && previousEventBottom < bottom) {
                return true;
            }
            else if (previousEventTop <= top && bottom <= previousEventBottom) {
                return true;
            }
            return false;
        });
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        if (height > 0) {
            previousDayEvents.push(dayEvent);
        }
        return dayEvent;
    }).filter(function (dayEvent) { return dayEvent.height > 0; });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod({
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(startOfView),
        periodEnd: __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents
    };
}
function getDayViewHourGrid(_a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var hours = [];
    var startOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate);
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "../../../../date-fns/add_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "../../../../date-fns/add_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ "../../../../date-fns/add_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var setISOYear = __webpack_require__("../../../../date-fns/set_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @returns {Date} the new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)
}

module.exports = addISOYears


/***/ }),

/***/ "../../../../date-fns/add_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ "../../../../date-fns/add_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ "../../../../date-fns/add_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__("../../../../date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "../../../../date-fns/add_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("../../../../date-fns/add_months/index.js")

/**
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added
 * @returns {Date} the new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * var result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var months = amount * 3
  return addMonths(dirtyDate, months)
}

module.exports = addQuarters


/***/ }),

/***/ "../../../../date-fns/add_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ "../../../../date-fns/add_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ "../../../../date-fns/add_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("../../../../date-fns/add_months/index.js")

/**
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @returns {Date} the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, amount * 12)
}

module.exports = addYears


/***/ }),

/***/ "../../../../date-fns/are_ranges_overlapping/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date range overlapping with another date range?
 *
 * @description
 * Is the given date range overlapping with another date range?
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Boolean} whether the date ranges are overlapping
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> false
 */
function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
}

module.exports = areRangesOverlapping


/***/ }),

/***/ "../../../../date-fns/closest_index_to/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate, index) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}

module.exports = closestIndexTo


/***/ }),

/***/ "../../../../date-fns/closest_to/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}

module.exports = closestTo


/***/ }),

/***/ "../../../../date-fns/compare_asc/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ "../../../../date-fns/compare_desc/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft > timeRight) {
    return -1
  } else if (timeLeft < timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareDesc


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_iso_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {
  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)

  var timestampLeft = startOfISOWeekLeft.getTime() -
    startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfISOWeekRight.getTime() -
    startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarISOWeeks


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * var result = differenceInCalendarISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {
  return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight)
}

module.exports = differenceInCalendarISOYears


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

  return yearDiff * 12 + monthDiff
}

module.exports = differenceInCalendarMonths


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getQuarter = __webpack_require__("../../../../date-fns/get_quarter/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight)

  return yearDiff * 4 + quarterDiff
}

module.exports = differenceInCalendarQuarters


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("../../../../date-fns/start_of_week/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 2
 */
function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)

  var timestampLeft = startOfWeekLeft.getTime() -
    startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfWeekRight.getTime() -
    startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarWeeks


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  return dateLeft.getFullYear() - dateRight.getFullYear()
}

module.exports = differenceInCalendarYears


/***/ }),

/***/ "../../../../date-fns/difference_in_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarDays = __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ "../../../../date-fns/difference_in_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInHours


/***/ }),

/***/ "../../../../date-fns/difference_in_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarISOYears = __webpack_require__("../../../../date-fns/difference_in_calendar_iso_years/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")
var subISOYears = __webpack_require__("../../../../date-fns/sub_iso_years/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
function differenceInISOYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight))
  dateLeft = subISOYears(dateLeft, sign * difference)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastISOYearNotFull)
}

module.exports = differenceInISOYears


/***/ }),

/***/ "../../../../date-fns/difference_in_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ "../../../../date-fns/difference_in_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ "../../../../date-fns/difference_in_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarMonths = __webpack_require__("../../../../date-fns/difference_in_calendar_months/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastMonthNotFull)
}

module.exports = differenceInMonths


/***/ }),

/***/ "../../../../date-fns/difference_in_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMonths = __webpack_require__("../../../../date-fns/difference_in_months/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInQuarters (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInQuarters


/***/ }),

/***/ "../../../../date-fns/difference_in_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ "../../../../date-fns/difference_in_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInDays = __webpack_require__("../../../../date-fns/difference_in_days/index.js")

/**
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 2
 */
function differenceInWeeks (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInWeeks


/***/ }),

/***/ "../../../../date-fns/difference_in_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarYears = __webpack_require__("../../../../date-fns/difference_in_calendar_years/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastYearNotFull)
}

module.exports = differenceInYears


/***/ }),

/***/ "../../../../date-fns/distance_in_words/index.js":
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__("../../../../date-fns/compare_desc/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInSeconds = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js")
var differenceInMonths = __webpack_require__("../../../../date-fns/difference_in_months/index.js")
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js")

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWords(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWords(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = Math.round(seconds / 60) - offset
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return localize('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return localize('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return localize('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return localize('halfAMinute', null, localizeOptions)
      } else if (seconds < 60) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', minutes, localizeOptions)
      }
    }

  // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return localize('xMinutes', minutes, localizeOptions)

  // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return localize('aboutXHours', 1, localizeOptions)

  // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return localize('aboutXHours', hours, localizeOptions)

  // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return localize('xDays', 1, localizeOptions)

  // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', nearestMonth, localizeOptions)

  // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return localize('aboutXYears', years, localizeOptions)

    // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return localize('overXYears', years, localizeOptions)

    // N years 9 months up to N year 12 months
    } else {
      return localize('almostXYears', years + 1, localizeOptions)
    }
  }
}

module.exports = distanceInWords


/***/ }),

/***/ "../../../../date-fns/distance_in_words_strict/index.js":
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__("../../../../date-fns/compare_desc/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInSeconds = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js")
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js")

var MINUTES_IN_DAY = 1440
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_YEAR = 525600

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWordsStrict(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {unit: 'm'}
 * )
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 28 January 2015, in months, rounded up?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 28),
 *   new Date(2015, 0, 1),
 *   {unit: 'M', partialMethod: 'ceil'}
 * )
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsStrict(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var unit
  var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor']
  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = mathPartial(seconds / 60) - offset
  var hours, days, months, years

  if (options.unit) {
    unit = String(options.unit)
  } else {
    if (minutes < 1) {
      unit = 's'
    } else if (minutes < 60) {
      unit = 'm'
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'h'
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'd'
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'M'
    } else {
      unit = 'Y'
    }
  }

  // 0 up to 60 seconds
  if (unit === 's') {
    return localize('xSeconds', seconds, localizeOptions)

  // 1 up to 60 mins
  } else if (unit === 'm') {
    return localize('xMinutes', minutes, localizeOptions)

  // 1 up to 24 hours
  } else if (unit === 'h') {
    hours = mathPartial(minutes / 60)
    return localize('xHours', hours, localizeOptions)

  // 1 up to 30 days
  } else if (unit === 'd') {
    days = mathPartial(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 up to 12 months
  } else if (unit === 'M') {
    months = mathPartial(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', months, localizeOptions)

  // 1 year up to max Date
  } else if (unit === 'Y') {
    years = mathPartial(minutes / MINUTES_IN_YEAR)
    return localize('xYears', years, localizeOptions)
  }

  throw new Error('Unknown unit: ' + unit)
}

module.exports = distanceInWordsStrict


/***/ }),

/***/ "../../../../date-fns/distance_in_words_to_now/index.js":
/***/ (function(module, exports, __webpack_require__) {

var distanceInWords = __webpack_require__("../../../../date-fns/distance_in_words/index.js")

/**
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param {Date|String|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = distanceInWordsToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = distanceInWordsToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = distanceInWordsToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWordsToNow (dirtyDate, dirtyOptions) {
  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
}

module.exports = distanceInWordsToNow


/***/ }),

/***/ "../../../../date-fns/each_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the array of dates within the specified range.
 *
 * @description
 * Return the array of dates within the specified range.
 *
 * @param {Date|String|Number} startDate - the first date
 * @param {Date|String|Number} endDate - the last date
 * @param {Number} [step=1] - the step between each day
 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDay(
 *   new Date(2014, 9, 6),
 *   new Date(2014, 9, 10)
 * )
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDay (dirtyStartDate, dirtyEndDate, dirtyStep) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)
  var step = dirtyStep !== undefined ? dirtyStep : 1

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('The first date cannot be after the second date')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(parse(currentDate))
    currentDate.setDate(currentDate.getDate() + step)
  }

  return dates
}

module.exports = eachDay


/***/ }),

/***/ "../../../../date-fns/end_of_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ "../../../../date-fns/end_of_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(59, 59, 999)
  return date
}

module.exports = endOfHour


/***/ }),

/***/ "../../../../date-fns/end_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var endOfWeek = __webpack_require__("../../../../date-fns/end_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek (dirtyDate) {
  return endOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = endOfISOWeek


/***/ }),

/***/ "../../../../date-fns/end_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * var result = endOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuaryOfNextYear)
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}

module.exports = endOfISOYear


/***/ }),

/***/ "../../../../date-fns/end_of_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(59, 999)
  return date
}

module.exports = endOfMinute


/***/ }),

/***/ "../../../../date-fns/end_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ "../../../../date-fns/end_of_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfQuarter


/***/ }),

/***/ "../../../../date-fns/end_of_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(999)
  return date
}

module.exports = endOfSecond


/***/ }),

/***/ "../../../../date-fns/end_of_today/index.js":
/***/ (function(module, exports, __webpack_require__) {

var endOfDay = __webpack_require__("../../../../date-fns/end_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday () {
  return endOfDay(new Date())
}

module.exports = endOfToday


/***/ }),

/***/ "../../../../date-fns/end_of_tomorrow/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 *
 * @description
 * Return the end of tomorrow.
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfTomorrow


/***/ }),

/***/ "../../../../date-fns/end_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ "../../../../date-fns/end_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYear


/***/ }),

/***/ "../../../../date-fns/end_of_yesterday/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of yesterday.
 *
 * @description
 * Return the end of yesterday.
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYesterday


/***/ }),

/***/ "../../../../date-fns/format/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__("../../../../date-fns/get_day_of_year/index.js")
var getISOWeek = __webpack_require__("../../../../date-fns/get_iso_week/index.js")
var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var isValid = __webpack_require__("../../../../date-fns/is_valid/index.js")
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js")

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ "../../../../date-fns/get_date/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ "../../../../date-fns/get_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ "../../../../date-fns/get_day_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfYear = __webpack_require__("../../../../date-fns/start_of_year/index.js")
var differenceInCalendarDays = __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ "../../../../date-fns/get_days_in_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "../../../../date-fns/get_days_in_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isLeapYear = __webpack_require__("../../../../date-fns/is_leap_year/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear (dirtyDate) {
  return isLeapYear(dirtyDate) ? 366 : 365
}

module.exports = getDaysInYear


/***/ }),

/***/ "../../../../date-fns/get_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours (dirtyDate) {
  var date = parse(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours


/***/ }),

/***/ "../../../../date-fns/get_iso_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * var result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()

  if (day === 0) {
    day = 7
  }

  return day
}

module.exports = getISODay


/***/ }),

/***/ "../../../../date-fns/get_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "../../../../date-fns/get_iso_weeks_in_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")
var addWeeks = __webpack_require__("../../../../date-fns/add_weeks/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear (dirtyDate) {
  var thisYear = startOfISOYear(dirtyDate)
  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}

module.exports = getISOWeeksInYear


/***/ }),

/***/ "../../../../date-fns/get_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "../../../../date-fns/get_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds (dirtyDate) {
  var date = parse(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds


/***/ }),

/***/ "../../../../date-fns/get_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes (dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes


/***/ }),

/***/ "../../../../date-fns/get_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ "../../../../date-fns/get_overlapping_days_in_ranges/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

/**
 * @category Range Helpers
 * @summary Get the number of days that overlap in two date ranges
 *
 * @description
 * Get the number of days that overlap in two date ranges
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Number} the number of days that overlap in two date ranges
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges adds 1 for each started overlapping day:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping date ranges returns 0:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> 0
 */
function getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime

  if (!isOverlapping) {
    return 0
  }

  var overlapStartDate = comparedStartTime < initialStartTime
    ? initialStartTime
    : comparedStartTime

  var overlapEndDate = comparedEndTime > initialEndTime
    ? initialEndTime
    : comparedEndTime

  var differenceInMs = overlapEndDate - overlapStartDate

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
}

module.exports = getOverlappingDaysInRanges


/***/ }),

/***/ "../../../../date-fns/get_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}

module.exports = getQuarter


/***/ }),

/***/ "../../../../date-fns/get_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds (dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds


/***/ }),

/***/ "../../../../date-fns/get_time/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime (dirtyDate) {
  var date = parse(dirtyDate)
  var timestamp = date.getTime()
  return timestamp
}

module.exports = getTime


/***/ }),

/***/ "../../../../date-fns/get_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ "../../../../date-fns/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  addDays: __webpack_require__("../../../../date-fns/add_days/index.js"),
  addHours: __webpack_require__("../../../../date-fns/add_hours/index.js"),
  addISOYears: __webpack_require__("../../../../date-fns/add_iso_years/index.js"),
  addMilliseconds: __webpack_require__("../../../../date-fns/add_milliseconds/index.js"),
  addMinutes: __webpack_require__("../../../../date-fns/add_minutes/index.js"),
  addMonths: __webpack_require__("../../../../date-fns/add_months/index.js"),
  addQuarters: __webpack_require__("../../../../date-fns/add_quarters/index.js"),
  addSeconds: __webpack_require__("../../../../date-fns/add_seconds/index.js"),
  addWeeks: __webpack_require__("../../../../date-fns/add_weeks/index.js"),
  addYears: __webpack_require__("../../../../date-fns/add_years/index.js"),
  areRangesOverlapping: __webpack_require__("../../../../date-fns/are_ranges_overlapping/index.js"),
  closestIndexTo: __webpack_require__("../../../../date-fns/closest_index_to/index.js"),
  closestTo: __webpack_require__("../../../../date-fns/closest_to/index.js"),
  compareAsc: __webpack_require__("../../../../date-fns/compare_asc/index.js"),
  compareDesc: __webpack_require__("../../../../date-fns/compare_desc/index.js"),
  differenceInCalendarDays: __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js"),
  differenceInCalendarISOWeeks: __webpack_require__("../../../../date-fns/difference_in_calendar_iso_weeks/index.js"),
  differenceInCalendarISOYears: __webpack_require__("../../../../date-fns/difference_in_calendar_iso_years/index.js"),
  differenceInCalendarMonths: __webpack_require__("../../../../date-fns/difference_in_calendar_months/index.js"),
  differenceInCalendarQuarters: __webpack_require__("../../../../date-fns/difference_in_calendar_quarters/index.js"),
  differenceInCalendarWeeks: __webpack_require__("../../../../date-fns/difference_in_calendar_weeks/index.js"),
  differenceInCalendarYears: __webpack_require__("../../../../date-fns/difference_in_calendar_years/index.js"),
  differenceInDays: __webpack_require__("../../../../date-fns/difference_in_days/index.js"),
  differenceInHours: __webpack_require__("../../../../date-fns/difference_in_hours/index.js"),
  differenceInISOYears: __webpack_require__("../../../../date-fns/difference_in_iso_years/index.js"),
  differenceInMilliseconds: __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js"),
  differenceInMinutes: __webpack_require__("../../../../date-fns/difference_in_minutes/index.js"),
  differenceInMonths: __webpack_require__("../../../../date-fns/difference_in_months/index.js"),
  differenceInQuarters: __webpack_require__("../../../../date-fns/difference_in_quarters/index.js"),
  differenceInSeconds: __webpack_require__("../../../../date-fns/difference_in_seconds/index.js"),
  differenceInWeeks: __webpack_require__("../../../../date-fns/difference_in_weeks/index.js"),
  differenceInYears: __webpack_require__("../../../../date-fns/difference_in_years/index.js"),
  distanceInWords: __webpack_require__("../../../../date-fns/distance_in_words/index.js"),
  distanceInWordsStrict: __webpack_require__("../../../../date-fns/distance_in_words_strict/index.js"),
  distanceInWordsToNow: __webpack_require__("../../../../date-fns/distance_in_words_to_now/index.js"),
  eachDay: __webpack_require__("../../../../date-fns/each_day/index.js"),
  endOfDay: __webpack_require__("../../../../date-fns/end_of_day/index.js"),
  endOfHour: __webpack_require__("../../../../date-fns/end_of_hour/index.js"),
  endOfISOWeek: __webpack_require__("../../../../date-fns/end_of_iso_week/index.js"),
  endOfISOYear: __webpack_require__("../../../../date-fns/end_of_iso_year/index.js"),
  endOfMinute: __webpack_require__("../../../../date-fns/end_of_minute/index.js"),
  endOfMonth: __webpack_require__("../../../../date-fns/end_of_month/index.js"),
  endOfQuarter: __webpack_require__("../../../../date-fns/end_of_quarter/index.js"),
  endOfSecond: __webpack_require__("../../../../date-fns/end_of_second/index.js"),
  endOfToday: __webpack_require__("../../../../date-fns/end_of_today/index.js"),
  endOfTomorrow: __webpack_require__("../../../../date-fns/end_of_tomorrow/index.js"),
  endOfWeek: __webpack_require__("../../../../date-fns/end_of_week/index.js"),
  endOfYear: __webpack_require__("../../../../date-fns/end_of_year/index.js"),
  endOfYesterday: __webpack_require__("../../../../date-fns/end_of_yesterday/index.js"),
  format: __webpack_require__("../../../../date-fns/format/index.js"),
  getDate: __webpack_require__("../../../../date-fns/get_date/index.js"),
  getDay: __webpack_require__("../../../../date-fns/get_day/index.js"),
  getDayOfYear: __webpack_require__("../../../../date-fns/get_day_of_year/index.js"),
  getDaysInMonth: __webpack_require__("../../../../date-fns/get_days_in_month/index.js"),
  getDaysInYear: __webpack_require__("../../../../date-fns/get_days_in_year/index.js"),
  getHours: __webpack_require__("../../../../date-fns/get_hours/index.js"),
  getISODay: __webpack_require__("../../../../date-fns/get_iso_day/index.js"),
  getISOWeek: __webpack_require__("../../../../date-fns/get_iso_week/index.js"),
  getISOWeeksInYear: __webpack_require__("../../../../date-fns/get_iso_weeks_in_year/index.js"),
  getISOYear: __webpack_require__("../../../../date-fns/get_iso_year/index.js"),
  getMilliseconds: __webpack_require__("../../../../date-fns/get_milliseconds/index.js"),
  getMinutes: __webpack_require__("../../../../date-fns/get_minutes/index.js"),
  getMonth: __webpack_require__("../../../../date-fns/get_month/index.js"),
  getOverlappingDaysInRanges: __webpack_require__("../../../../date-fns/get_overlapping_days_in_ranges/index.js"),
  getQuarter: __webpack_require__("../../../../date-fns/get_quarter/index.js"),
  getSeconds: __webpack_require__("../../../../date-fns/get_seconds/index.js"),
  getTime: __webpack_require__("../../../../date-fns/get_time/index.js"),
  getYear: __webpack_require__("../../../../date-fns/get_year/index.js"),
  isAfter: __webpack_require__("../../../../date-fns/is_after/index.js"),
  isBefore: __webpack_require__("../../../../date-fns/is_before/index.js"),
  isDate: __webpack_require__("../../../../date-fns/is_date/index.js"),
  isEqual: __webpack_require__("../../../../date-fns/is_equal/index.js"),
  isFirstDayOfMonth: __webpack_require__("../../../../date-fns/is_first_day_of_month/index.js"),
  isFriday: __webpack_require__("../../../../date-fns/is_friday/index.js"),
  isFuture: __webpack_require__("../../../../date-fns/is_future/index.js"),
  isLastDayOfMonth: __webpack_require__("../../../../date-fns/is_last_day_of_month/index.js"),
  isLeapYear: __webpack_require__("../../../../date-fns/is_leap_year/index.js"),
  isMonday: __webpack_require__("../../../../date-fns/is_monday/index.js"),
  isPast: __webpack_require__("../../../../date-fns/is_past/index.js"),
  isSameDay: __webpack_require__("../../../../date-fns/is_same_day/index.js"),
  isSameHour: __webpack_require__("../../../../date-fns/is_same_hour/index.js"),
  isSameISOWeek: __webpack_require__("../../../../date-fns/is_same_iso_week/index.js"),
  isSameISOYear: __webpack_require__("../../../../date-fns/is_same_iso_year/index.js"),
  isSameMinute: __webpack_require__("../../../../date-fns/is_same_minute/index.js"),
  isSameMonth: __webpack_require__("../../../../date-fns/is_same_month/index.js"),
  isSameQuarter: __webpack_require__("../../../../date-fns/is_same_quarter/index.js"),
  isSameSecond: __webpack_require__("../../../../date-fns/is_same_second/index.js"),
  isSameWeek: __webpack_require__("../../../../date-fns/is_same_week/index.js"),
  isSameYear: __webpack_require__("../../../../date-fns/is_same_year/index.js"),
  isSaturday: __webpack_require__("../../../../date-fns/is_saturday/index.js"),
  isSunday: __webpack_require__("../../../../date-fns/is_sunday/index.js"),
  isThisHour: __webpack_require__("../../../../date-fns/is_this_hour/index.js"),
  isThisISOWeek: __webpack_require__("../../../../date-fns/is_this_iso_week/index.js"),
  isThisISOYear: __webpack_require__("../../../../date-fns/is_this_iso_year/index.js"),
  isThisMinute: __webpack_require__("../../../../date-fns/is_this_minute/index.js"),
  isThisMonth: __webpack_require__("../../../../date-fns/is_this_month/index.js"),
  isThisQuarter: __webpack_require__("../../../../date-fns/is_this_quarter/index.js"),
  isThisSecond: __webpack_require__("../../../../date-fns/is_this_second/index.js"),
  isThisWeek: __webpack_require__("../../../../date-fns/is_this_week/index.js"),
  isThisYear: __webpack_require__("../../../../date-fns/is_this_year/index.js"),
  isThursday: __webpack_require__("../../../../date-fns/is_thursday/index.js"),
  isToday: __webpack_require__("../../../../date-fns/is_today/index.js"),
  isTomorrow: __webpack_require__("../../../../date-fns/is_tomorrow/index.js"),
  isTuesday: __webpack_require__("../../../../date-fns/is_tuesday/index.js"),
  isValid: __webpack_require__("../../../../date-fns/is_valid/index.js"),
  isWednesday: __webpack_require__("../../../../date-fns/is_wednesday/index.js"),
  isWeekend: __webpack_require__("../../../../date-fns/is_weekend/index.js"),
  isWithinRange: __webpack_require__("../../../../date-fns/is_within_range/index.js"),
  isYesterday: __webpack_require__("../../../../date-fns/is_yesterday/index.js"),
  lastDayOfISOWeek: __webpack_require__("../../../../date-fns/last_day_of_iso_week/index.js"),
  lastDayOfISOYear: __webpack_require__("../../../../date-fns/last_day_of_iso_year/index.js"),
  lastDayOfMonth: __webpack_require__("../../../../date-fns/last_day_of_month/index.js"),
  lastDayOfQuarter: __webpack_require__("../../../../date-fns/last_day_of_quarter/index.js"),
  lastDayOfWeek: __webpack_require__("../../../../date-fns/last_day_of_week/index.js"),
  lastDayOfYear: __webpack_require__("../../../../date-fns/last_day_of_year/index.js"),
  max: __webpack_require__("../../../../date-fns/max/index.js"),
  min: __webpack_require__("../../../../date-fns/min/index.js"),
  parse: __webpack_require__("../../../../date-fns/parse/index.js"),
  setDate: __webpack_require__("../../../../date-fns/set_date/index.js"),
  setDay: __webpack_require__("../../../../date-fns/set_day/index.js"),
  setDayOfYear: __webpack_require__("../../../../date-fns/set_day_of_year/index.js"),
  setHours: __webpack_require__("../../../../date-fns/set_hours/index.js"),
  setISODay: __webpack_require__("../../../../date-fns/set_iso_day/index.js"),
  setISOWeek: __webpack_require__("../../../../date-fns/set_iso_week/index.js"),
  setISOYear: __webpack_require__("../../../../date-fns/set_iso_year/index.js"),
  setMilliseconds: __webpack_require__("../../../../date-fns/set_milliseconds/index.js"),
  setMinutes: __webpack_require__("../../../../date-fns/set_minutes/index.js"),
  setMonth: __webpack_require__("../../../../date-fns/set_month/index.js"),
  setQuarter: __webpack_require__("../../../../date-fns/set_quarter/index.js"),
  setSeconds: __webpack_require__("../../../../date-fns/set_seconds/index.js"),
  setYear: __webpack_require__("../../../../date-fns/set_year/index.js"),
  startOfDay: __webpack_require__("../../../../date-fns/start_of_day/index.js"),
  startOfHour: __webpack_require__("../../../../date-fns/start_of_hour/index.js"),
  startOfISOWeek: __webpack_require__("../../../../date-fns/start_of_iso_week/index.js"),
  startOfISOYear: __webpack_require__("../../../../date-fns/start_of_iso_year/index.js"),
  startOfMinute: __webpack_require__("../../../../date-fns/start_of_minute/index.js"),
  startOfMonth: __webpack_require__("../../../../date-fns/start_of_month/index.js"),
  startOfQuarter: __webpack_require__("../../../../date-fns/start_of_quarter/index.js"),
  startOfSecond: __webpack_require__("../../../../date-fns/start_of_second/index.js"),
  startOfToday: __webpack_require__("../../../../date-fns/start_of_today/index.js"),
  startOfTomorrow: __webpack_require__("../../../../date-fns/start_of_tomorrow/index.js"),
  startOfWeek: __webpack_require__("../../../../date-fns/start_of_week/index.js"),
  startOfYear: __webpack_require__("../../../../date-fns/start_of_year/index.js"),
  startOfYesterday: __webpack_require__("../../../../date-fns/start_of_yesterday/index.js"),
  subDays: __webpack_require__("../../../../date-fns/sub_days/index.js"),
  subHours: __webpack_require__("../../../../date-fns/sub_hours/index.js"),
  subISOYears: __webpack_require__("../../../../date-fns/sub_iso_years/index.js"),
  subMilliseconds: __webpack_require__("../../../../date-fns/sub_milliseconds/index.js"),
  subMinutes: __webpack_require__("../../../../date-fns/sub_minutes/index.js"),
  subMonths: __webpack_require__("../../../../date-fns/sub_months/index.js"),
  subQuarters: __webpack_require__("../../../../date-fns/sub_quarters/index.js"),
  subSeconds: __webpack_require__("../../../../date-fns/sub_seconds/index.js"),
  subWeeks: __webpack_require__("../../../../date-fns/sub_weeks/index.js"),
  subYears: __webpack_require__("../../../../date-fns/sub_years/index.js")
}


/***/ }),

/***/ "../../../../date-fns/is_after/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),

/***/ "../../../../date-fns/is_before/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),

/***/ "../../../../date-fns/is_date/index.js":
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "../../../../date-fns/is_equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}

module.exports = isEqual


/***/ }),

/***/ "../../../../date-fns/is_first_day_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth (dirtyDate) {
  return parse(dirtyDate).getDate() === 1
}

module.exports = isFirstDayOfMonth


/***/ }),

/***/ "../../../../date-fns/is_friday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday (dirtyDate) {
  return parse(dirtyDate).getDay() === 5
}

module.exports = isFriday


/***/ }),

/***/ "../../../../date-fns/is_future/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date in the future?
 *
 * @description
 * Is the given date in the future?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture (dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture


/***/ }),

/***/ "../../../../date-fns/is_last_day_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var endOfDay = __webpack_require__("../../../../date-fns/end_of_day/index.js")
var endOfMonth = __webpack_require__("../../../../date-fns/end_of_month/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth


/***/ }),

/***/ "../../../../date-fns/is_leap_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
}

module.exports = isLeapYear


/***/ }),

/***/ "../../../../date-fns/is_monday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday (dirtyDate) {
  return parse(dirtyDate).getDay() === 1
}

module.exports = isMonday


/***/ }),

/***/ "../../../../date-fns/is_past/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date in the past?
 *
 * @description
 * Is the given date in the past?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast (dirtyDate) {
  return parse(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast


/***/ }),

/***/ "../../../../date-fns/is_same_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "../../../../date-fns/is_same_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfHour = __webpack_require__("../../../../date-fns/start_of_hour/index.js")

/**
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 6, 30)
 * )
 * //=> true
 */
function isSameHour (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}

module.exports = isSameHour


/***/ }),

/***/ "../../../../date-fns/is_same_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__("../../../../date-fns/is_same_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
function isSameISOWeek (dirtyDateLeft, dirtyDateRight) {
  return isSameWeek(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})
}

module.exports = isSameISOWeek


/***/ }),

/***/ "../../../../date-fns/is_same_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
function isSameISOYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)
  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}

module.exports = isSameISOYear


/***/ }),

/***/ "../../../../date-fns/is_same_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfMinute = __webpack_require__("../../../../date-fns/start_of_minute/index.js")

/**
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */
function isSameMinute (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
}

module.exports = isSameMinute


/***/ }),

/***/ "../../../../date-fns/is_same_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ "../../../../date-fns/is_same_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfQuarter = __webpack_require__("../../../../date-fns/start_of_quarter/index.js")

/**
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
function isSameQuarter (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}

module.exports = isSameQuarter


/***/ }),

/***/ "../../../../date-fns/is_same_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__("../../../../date-fns/start_of_second/index.js")

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ "../../../../date-fns/is_same_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("../../../../date-fns/start_of_week/index.js")

/**
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4)
 * )
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4),
 *   {weekStartsOn: 1}
 * )
 * //=> false
 */
function isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}

module.exports = isSameWeek


/***/ }),

/***/ "../../../../date-fns/is_same_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}

module.exports = isSameYear


/***/ }),

/***/ "../../../../date-fns/is_saturday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday (dirtyDate) {
  return parse(dirtyDate).getDay() === 6
}

module.exports = isSaturday


/***/ }),

/***/ "../../../../date-fns/is_sunday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday (dirtyDate) {
  return parse(dirtyDate).getDay() === 0
}

module.exports = isSunday


/***/ }),

/***/ "../../../../date-fns/is_this_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameHour = __webpack_require__("../../../../date-fns/is_same_hour/index.js")

/**
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour (dirtyDate) {
  return isSameHour(new Date(), dirtyDate)
}

module.exports = isThisHour


/***/ }),

/***/ "../../../../date-fns/is_this_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameISOWeek = __webpack_require__("../../../../date-fns/is_same_iso_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek (dirtyDate) {
  return isSameISOWeek(new Date(), dirtyDate)
}

module.exports = isThisISOWeek


/***/ }),

/***/ "../../../../date-fns/is_this_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameISOYear = __webpack_require__("../../../../date-fns/is_same_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Is the given date in the same ISO week-numbering year as the current date?
 *
 * @description
 * Is the given date in the same ISO week-numbering year as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week-numbering year
 *
 * @example
 * // If today is 25 September 2014,
 * // is 30 December 2013 in this ISO week-numbering year?
 * var result = isThisISOYear(new Date(2013, 11, 30))
 * //=> true
 */
function isThisISOYear (dirtyDate) {
  return isSameISOYear(new Date(), dirtyDate)
}

module.exports = isThisISOYear


/***/ }),

/***/ "../../../../date-fns/is_this_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameMinute = __webpack_require__("../../../../date-fns/is_same_minute/index.js")

/**
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */
function isThisMinute (dirtyDate) {
  return isSameMinute(new Date(), dirtyDate)
}

module.exports = isThisMinute


/***/ }),

/***/ "../../../../date-fns/is_this_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameMonth = __webpack_require__("../../../../date-fns/is_same_month/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth (dirtyDate) {
  return isSameMonth(new Date(), dirtyDate)
}

module.exports = isThisMonth


/***/ }),

/***/ "../../../../date-fns/is_this_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameQuarter = __webpack_require__("../../../../date-fns/is_same_quarter/index.js")

/**
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter (dirtyDate) {
  return isSameQuarter(new Date(), dirtyDate)
}

module.exports = isThisQuarter


/***/ }),

/***/ "../../../../date-fns/is_this_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameSecond = __webpack_require__("../../../../date-fns/is_same_second/index.js")

/**
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond (dirtyDate) {
  return isSameSecond(new Date(), dirtyDate)
}

module.exports = isThisSecond


/***/ }),

/***/ "../../../../date-fns/is_this_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__("../../../../date-fns/is_same_week/index.js")

/**
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
 * //=> false
 */
function isThisWeek (dirtyDate, dirtyOptions) {
  return isSameWeek(new Date(), dirtyDate, dirtyOptions)
}

module.exports = isThisWeek


/***/ }),

/***/ "../../../../date-fns/is_this_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameYear = __webpack_require__("../../../../date-fns/is_same_year/index.js")

/**
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear (dirtyDate) {
  return isSameYear(new Date(), dirtyDate)
}

module.exports = isThisYear


/***/ }),

/***/ "../../../../date-fns/is_thursday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday (dirtyDate) {
  return parse(dirtyDate).getDay() === 4
}

module.exports = isThursday


/***/ }),

/***/ "../../../../date-fns/is_today/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday (dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday


/***/ }),

/***/ "../../../../date-fns/is_tomorrow/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow (dirtyDate) {
  var tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime()
}

module.exports = isTomorrow


/***/ }),

/***/ "../../../../date-fns/is_tuesday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 2
}

module.exports = isTuesday


/***/ }),

/***/ "../../../../date-fns/is_valid/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("../../../../date-fns/is_date/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ "../../../../date-fns/is_wednesday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 3
}

module.exports = isWednesday


/***/ }),

/***/ "../../../../date-fns/is_weekend/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend


/***/ }),

/***/ "../../../../date-fns/is_within_range/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Boolean} the date is within the range
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // For the date within the range:
 * isWithinRange(
 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the range:
 * isWithinRange(
 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> false
 */
function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyStartDate).getTime()
  var endTime = parse(dirtyEndDate).getTime()

  if (startTime > endTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange


/***/ }),

/***/ "../../../../date-fns/is_yesterday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date yesterday?
 *
 * @description
 * Is the given date yesterday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday (dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime()
}

module.exports = isYesterday


/***/ }),

/***/ "../../../../date-fns/last_day_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var lastDayOfWeek = __webpack_require__("../../../../date-fns/last_day_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek (dirtyDate) {
  return lastDayOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = lastDayOfISOWeek


/***/ }),

/***/ "../../../../date-fns/last_day_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year + 1, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  date.setDate(date.getDate() - 1)
  return date
}

module.exports = lastDayOfISOYear


/***/ }),

/***/ "../../../../date-fns/last_day_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfMonth


/***/ }),

/***/ "../../../../date-fns/last_day_of_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfQuarter


/***/ }),

/***/ "../../../../date-fns/last_day_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = lastDayOfWeek


/***/ }),

/***/ "../../../../date-fns/last_day_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfYear


/***/ }),

/***/ "../../../../date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ "../../../../date-fns/locale/en/build_distance_in_words_locale/index.js":
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ "../../../../date-fns/locale/en/build_format_locale/index.js":
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__("../../../../date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js")

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ "../../../../date-fns/locale/en/index.js":
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__("../../../../date-fns/locale/en/build_distance_in_words_locale/index.js")
var buildFormatLocale = __webpack_require__("../../../../date-fns/locale/en/build_format_locale/index.js")

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ "../../../../date-fns/max/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ "../../../../date-fns/min/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var earliestTimestamp = Math.min.apply(null, dates)
  return new Date(earliestTimestamp)
}

module.exports = min


/***/ }),

/***/ "../../../../date-fns/parse/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("../../../../date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "../../../../date-fns/set_date/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ "../../../../date-fns/set_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts with Monday, set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay (dirtyDate, dirtyDay, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = date.getDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay


/***/ }),

/***/ "../../../../date-fns/set_day_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year setted
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear (dirtyDate, dirtyDayOfYear) {
  var date = parse(dirtyDate)
  var dayOfYear = Number(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}

module.exports = setDayOfYear


/***/ }),

/***/ "../../../../date-fns/set_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ "../../../../date-fns/set_iso_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")
var getISODay = __webpack_require__("../../../../date-fns/get_iso_day/index.js")

/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay (dirtyDate, dirtyDay) {
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}

module.exports = setISODay


/***/ }),

/***/ "../../../../date-fns/set_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getISOWeek = __webpack_require__("../../../../date-fns/get_iso_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek (dirtyDate, dirtyISOWeek) {
  var date = parse(dirtyDate)
  var isoWeek = Number(dirtyISOWeek)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}

module.exports = setISOWeek


/***/ }),

/***/ "../../../../date-fns/set_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")
var differenceInCalendarDays = __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOYear (dirtyDate, dirtyISOYear) {
  var date = parse(dirtyDate)
  var isoYear = Number(dirtyISOYear)
  var diff = differenceInCalendarDays(date, startOfISOYear(date))
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear


/***/ }),

/***/ "../../../../date-fns/set_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds setted
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds (dirtyDate, dirtyMilliseconds) {
  var date = parse(dirtyDate)
  var milliseconds = Number(dirtyMilliseconds)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds


/***/ }),

/***/ "../../../../date-fns/set_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ "../../../../date-fns/set_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__("../../../../date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ "../../../../date-fns/set_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var setMonth = __webpack_require__("../../../../date-fns/set_month/index.js")

/**
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter setted
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter (dirtyDate, dirtyQuarter) {
  var date = parse(dirtyDate)
  var quarter = Number(dirtyQuarter)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}

module.exports = setQuarter


/***/ }),

/***/ "../../../../date-fns/set_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds setted
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds (dirtyDate, dirtySeconds) {
  var date = parse(dirtyDate)
  var seconds = Number(dirtySeconds)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds


/***/ }),

/***/ "../../../../date-fns/set_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ "../../../../date-fns/start_of_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "../../../../date-fns/start_of_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(0, 0, 0)
  return date
}

module.exports = startOfHour


/***/ }),

/***/ "../../../../date-fns/start_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("../../../../date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "../../../../date-fns/start_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "../../../../date-fns/start_of_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ "../../../../date-fns/start_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "../../../../date-fns/start_of_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3
  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfQuarter


/***/ }),

/***/ "../../../../date-fns/start_of_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ "../../../../date-fns/start_of_today/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday () {
  return startOfDay(new Date())
}

module.exports = startOfToday


/***/ }),

/***/ "../../../../date-fns/start_of_tomorrow/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 *
 * @description
 * Return the start of tomorrow.
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfTomorrow


/***/ }),

/***/ "../../../../date-fns/start_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "../../../../date-fns/start_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ "../../../../date-fns/start_of_yesterday/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of yesterday.
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYesterday


/***/ }),

/***/ "../../../../date-fns/sub_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "../../../../date-fns/sub_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addHours = __webpack_require__("../../../../date-fns/add_hours/index.js")

/**
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted
 * @returns {Date} the new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addHours(dirtyDate, -amount)
}

module.exports = subHours


/***/ }),

/***/ "../../../../date-fns/sub_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addISOYears = __webpack_require__("../../../../date-fns/add_iso_years/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * var result = subISOYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addISOYears(dirtyDate, -amount)
}

module.exports = subISOYears


/***/ }),

/***/ "../../../../date-fns/sub_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

/**
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}

module.exports = subMilliseconds


/***/ }),

/***/ "../../../../date-fns/sub_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMinutes = __webpack_require__("../../../../date-fns/add_minutes/index.js")

/**
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @returns {Date} the new date with the mintues subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes


/***/ }),

/***/ "../../../../date-fns/sub_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("../../../../date-fns/add_months/index.js")

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ "../../../../date-fns/sub_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addQuarters = __webpack_require__("../../../../date-fns/add_quarters/index.js")

/**
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted
 * @returns {Date} the new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * var result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters


/***/ }),

/***/ "../../../../date-fns/sub_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addSeconds = __webpack_require__("../../../../date-fns/add_seconds/index.js")

/**
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted
 * @returns {Date} the new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addSeconds(dirtyDate, -amount)
}

module.exports = subSeconds


/***/ }),

/***/ "../../../../date-fns/sub_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__("../../../../date-fns/add_weeks/index.js")

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ "../../../../date-fns/sub_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addYears = __webpack_require__("../../../../date-fns/add_years/index.js")

/**
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @returns {Date} the new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addYears(dirtyDate, -amount)
}

module.exports = subYears


/***/ }),

/***/ "../../../../positioning/dist/positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Positioning; });
/* unused harmony export positionElements */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ })

});
//# sourceMappingURL=basic.module.chunk.js.map