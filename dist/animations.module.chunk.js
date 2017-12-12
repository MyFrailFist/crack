webpackJsonp(["animations.module"],{

/***/ "../../../../../src/app/animations/animations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Animation card start -->\r\n    <app-card [title]=\"'Enjoy Animation'\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <form class=\"animation-type\">\r\n              <div class=\"row \">\r\n                <div class=\"col-lg-4 offset-lg-3 col-md-12\">\r\n                  <div class=\"m-b-30\">\r\n                    <select class=\"form-control form-control-default waves-effect input input--dropdown js--animations\" (change)=\"animate(toAnimate, $event.target.value, true)\">\r\n                      <optgroup label=\"Attention Seekers\">\r\n                        <option value=\"bounce\">bounce</option>\r\n                        <option value=\"flash\">flash</option>\r\n                        <option value=\"pulse\">pulse</option>\r\n                        <option value=\"rubberBand\">rubberBand</option>\r\n                        <option value=\"shake\">shake</option>\r\n                        <option value=\"swing\">swing</option>\r\n                        <option value=\"tada\">tada</option>\r\n                        <option value=\"wobble\">wobble</option>\r\n                        <option value=\"jello\">jello</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Bouncing Entrances\">\r\n                        <option value=\"bounceIn\">bounceIn</option>\r\n                        <option value=\"bounceInDown\">bounceInDown</option>\r\n                        <option value=\"bounceInLeft\">bounceInLeft</option>\r\n                        <option value=\"bounceInRight\">bounceInRight</option>\r\n                        <option value=\"bounceInUp\">bounceInUp</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Bouncing Exits\">\r\n                        <option value=\"bounceOut\">bounceOut</option>\r\n                        <option value=\"bounceOutDown\">bounceOutDown</option>\r\n                        <option value=\"bounceOutLeft\">bounceOutLeft</option>\r\n                        <option value=\"bounceOutRight\">bounceOutRight</option>\r\n                        <option value=\"bounceOutUp\">bounceOutUp</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Fading Entrances\">\r\n                        <option value=\"fadeIn\">fadeIn</option>\r\n                        <option value=\"fadeInDown\">fadeInDown</option>\r\n                        <option value=\"fadeInDownBig\">fadeInDownBig</option>\r\n                        <option value=\"fadeInLeft\">fadeInLeft</option>\r\n                        <option value=\"fadeInLeftBig\">fadeInLeftBig</option>\r\n                        <option value=\"fadeInRight\">fadeInRight</option>\r\n                        <option value=\"fadeInRightBig\">fadeInRightBig</option>\r\n                        <option value=\"fadeInUp\">fadeInUp</option>\r\n                        <option value=\"fadeInUpBig\">fadeInUpBig</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Fading Exits\">\r\n                        <option value=\"fadeOut\">fadeOut</option>\r\n                        <option value=\"fadeOutDown\">fadeOutDown</option>\r\n                        <option value=\"fadeOutDownBig\">fadeOutDownBig</option>\r\n                        <option value=\"fadeOutLeft\">fadeOutLeft</option>\r\n                        <option value=\"fadeOutLeftBig\">fadeOutLeftBig</option>\r\n                        <option value=\"fadeOutRight\">fadeOutRight</option>\r\n                        <option value=\"fadeOutRightBig\">fadeOutRightBig</option>\r\n                        <option value=\"fadeOutUp\">fadeOutUp</option>\r\n                        <option value=\"fadeOutUpBig\">fadeOutUpBig</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Flippers\">\r\n                        <option value=\"flip\">flip</option>\r\n                        <option value=\"flipInX\">flipInX</option>\r\n                        <option value=\"flipInY\">flipInY</option>\r\n                        <option value=\"flipOutX\">flipOutX</option>\r\n                        <option value=\"flipOutY\">flipOutY</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Lightspeed\">\r\n                        <option value=\"lightSpeedIn\">lightSpeedIn</option>\r\n                        <option value=\"lightSpeedOut\">lightSpeedOut</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Rotating Entrances\">\r\n                        <option value=\"rotateIn\">rotateIn</option>\r\n                        <option value=\"rotateInDownLeft\">rotateInDownLeft</option>\r\n                        <option value=\"rotateInDownRight\">rotateInDownRight</option>\r\n                        <option value=\"rotateInUpLeft\">rotateInUpLeft</option>\r\n                        <option value=\"rotateInUpRight\">rotateInUpRight</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Rotating Exits\">\r\n                        <option value=\"rotateOut\">rotateOut</option>\r\n                        <option value=\"rotateOutDownLeft\">rotateOutDownLeft</option>\r\n                        <option value=\"rotateOutDownRight\">rotateOutDownRight</option>\r\n                        <option value=\"rotateOutUpLeft\">rotateOutUpLeft</option>\r\n                        <option value=\"rotateOutUpRight\">rotateOutUpRight</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Sliding Entrances\">\r\n                        <option value=\"slideInUp\">slideInUp</option>\r\n                        <option value=\"slideInDown\">slideInDown</option>\r\n                        <option value=\"slideInLeft\">slideInLeft</option>\r\n                        <option value=\"slideInRight\">slideInRight</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Sliding Exits\">\r\n                        <option value=\"slideOutUp\">slideOutUp</option>\r\n                        <option value=\"slideOutDown\">slideOutDown</option>\r\n                        <option value=\"slideOutLeft\">slideOutLeft</option>\r\n                        <option value=\"slideOutRight\">slideOutRight</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Zoom Entrances\">\r\n                        <option value=\"zoomIn\">zoomIn</option>\r\n                        <option value=\"zoomInDown\">zoomInDown</option>\r\n                        <option value=\"zoomInLeft\">zoomInLeft</option>\r\n                        <option value=\"zoomInRight\">zoomInRight</option>\r\n                        <option value=\"zoomInUp\">zoomInUp</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Zoom Exits\">\r\n                        <option value=\"zoomOut\">zoomOut</option>\r\n                        <option value=\"zoomOutDown\">zoomOutDown</option>\r\n                        <option value=\"zoomOutLeft\">zoomOutLeft</option>\r\n                        <option value=\"zoomOutRight\">zoomOutRight</option>\r\n                        <option value=\"zoomOutUp\">zoomOutUp</option>\r\n                      </optgroup>\r\n                      <optgroup label=\"Specials\">\r\n                        <option value=\"hinge\">hinge</option>\r\n                        <option value=\"rollIn\">rollIn</option>\r\n                        <option value=\"rollOut\">rollOut</option>\r\n                      </optgroup>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-12\">\r\n                  <button type=\"button\" (click)=\"animate(toAnimate, '', false)\" [disabled]=\"isAnimating || !isVisible\" class=\"btn btn-primary btn-md waves-effect waves-light butt js--triggerAnimation\">Animate me!</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"main-img\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false}\" >\r\n              <div class=\"text-center animation-image\">\r\n                <img class=\"d-block img-fluid img-thumbnail\" src=\"assets/images/slider/slider7.jpg\" alt=\"Third slide\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </app-card>\r\n    <!-- Animation card end -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/animations/animations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_animator__ = __webpack_require__("../../../../css-animator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimationsComponent = (function () {
    function AnimationsComponent(animationService) {
        this.animation = 'bounce';
        this.isVisible = true;
        this.isAnimating = false;
        this.animator = animationService.builder();
        this.animator.useVisibility = true;
    }
    AnimationsComponent.prototype.ngOnInit = function () {
    };
    AnimationsComponent.prototype.animate = function (element, animation, status) {
        var _this = this;
        if (status) {
            this.animation = animation;
        }
        this.isAnimating = true;
        this.animator
            .setType(this.animation)
            .setDuration(1500)
            .animate(element)
            .then(function () {
            _this.isAnimating = false;
        })
            .catch(function (e) {
            _this.isAnimating = false;
            console.log('css-animator: Animation aborted', e);
        });
    };
    return AnimationsComponent;
}());
AnimationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-animations',
        template: __webpack_require__("../../../../../src/app/animations/animations.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_css_animator__["AnimationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_css_animator__["AnimationService"]) === "function" && _a || Object])
], AnimationsComponent);

var _a;
//# sourceMappingURL=animations.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations/animations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsModule", function() { return AnimationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_component__ = __webpack_require__("../../../../../src/app/animations/animations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_routing__ = __webpack_require__("../../../../../src/app/animations/animations.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AnimationsModule = (function () {
    function AnimationsModule() {
    }
    return AnimationsModule;
}());
AnimationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__animations_routing__["a" /* AnimationsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__animations_component__["a" /* AnimationsComponent */]]
    })
], AnimationsModule);

//# sourceMappingURL=animations.module.js.map

/***/ }),

/***/ "../../../../../src/app/animations/animations.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_component__ = __webpack_require__("../../../../../src/app/animations/animations.component.ts");

var AnimationsRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__animations_component__["a" /* AnimationsComponent */],
        data: {
            heading: 'Animations',
            breadcrumb: "Animations"
        }
    }];
//# sourceMappingURL=animations.routing.js.map

/***/ })

});
//# sourceMappingURL=animations.module.chunk.js.map