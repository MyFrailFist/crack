webpackJsonp(["animations.module"],{

/***/ "../../../../../src/app/animations/animations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Animation card start -->\n    <app-card [title]=\"'Enjoy Animation'\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <form class=\"animation-type\">\n              <div class=\"row \">\n                <div class=\"col-lg-4 offset-lg-3 col-md-12\">\n                  <div class=\"m-b-30\">\n                    <select class=\"form-control form-control-default waves-effect input input--dropdown js--animations\" (change)=\"animate(toAnimate, $event.target.value, true)\">\n                      <optgroup label=\"Attention Seekers\">\n                        <option value=\"bounce\">bounce</option>\n                        <option value=\"flash\">flash</option>\n                        <option value=\"pulse\">pulse</option>\n                        <option value=\"rubberBand\">rubberBand</option>\n                        <option value=\"shake\">shake</option>\n                        <option value=\"swing\">swing</option>\n                        <option value=\"tada\">tada</option>\n                        <option value=\"wobble\">wobble</option>\n                        <option value=\"jello\">jello</option>\n                      </optgroup>\n                      <optgroup label=\"Bouncing Entrances\">\n                        <option value=\"bounceIn\">bounceIn</option>\n                        <option value=\"bounceInDown\">bounceInDown</option>\n                        <option value=\"bounceInLeft\">bounceInLeft</option>\n                        <option value=\"bounceInRight\">bounceInRight</option>\n                        <option value=\"bounceInUp\">bounceInUp</option>\n                      </optgroup>\n                      <optgroup label=\"Bouncing Exits\">\n                        <option value=\"bounceOut\">bounceOut</option>\n                        <option value=\"bounceOutDown\">bounceOutDown</option>\n                        <option value=\"bounceOutLeft\">bounceOutLeft</option>\n                        <option value=\"bounceOutRight\">bounceOutRight</option>\n                        <option value=\"bounceOutUp\">bounceOutUp</option>\n                      </optgroup>\n                      <optgroup label=\"Fading Entrances\">\n                        <option value=\"fadeIn\">fadeIn</option>\n                        <option value=\"fadeInDown\">fadeInDown</option>\n                        <option value=\"fadeInDownBig\">fadeInDownBig</option>\n                        <option value=\"fadeInLeft\">fadeInLeft</option>\n                        <option value=\"fadeInLeftBig\">fadeInLeftBig</option>\n                        <option value=\"fadeInRight\">fadeInRight</option>\n                        <option value=\"fadeInRightBig\">fadeInRightBig</option>\n                        <option value=\"fadeInUp\">fadeInUp</option>\n                        <option value=\"fadeInUpBig\">fadeInUpBig</option>\n                      </optgroup>\n                      <optgroup label=\"Fading Exits\">\n                        <option value=\"fadeOut\">fadeOut</option>\n                        <option value=\"fadeOutDown\">fadeOutDown</option>\n                        <option value=\"fadeOutDownBig\">fadeOutDownBig</option>\n                        <option value=\"fadeOutLeft\">fadeOutLeft</option>\n                        <option value=\"fadeOutLeftBig\">fadeOutLeftBig</option>\n                        <option value=\"fadeOutRight\">fadeOutRight</option>\n                        <option value=\"fadeOutRightBig\">fadeOutRightBig</option>\n                        <option value=\"fadeOutUp\">fadeOutUp</option>\n                        <option value=\"fadeOutUpBig\">fadeOutUpBig</option>\n                      </optgroup>\n                      <optgroup label=\"Flippers\">\n                        <option value=\"flip\">flip</option>\n                        <option value=\"flipInX\">flipInX</option>\n                        <option value=\"flipInY\">flipInY</option>\n                        <option value=\"flipOutX\">flipOutX</option>\n                        <option value=\"flipOutY\">flipOutY</option>\n                      </optgroup>\n                      <optgroup label=\"Lightspeed\">\n                        <option value=\"lightSpeedIn\">lightSpeedIn</option>\n                        <option value=\"lightSpeedOut\">lightSpeedOut</option>\n                      </optgroup>\n                      <optgroup label=\"Rotating Entrances\">\n                        <option value=\"rotateIn\">rotateIn</option>\n                        <option value=\"rotateInDownLeft\">rotateInDownLeft</option>\n                        <option value=\"rotateInDownRight\">rotateInDownRight</option>\n                        <option value=\"rotateInUpLeft\">rotateInUpLeft</option>\n                        <option value=\"rotateInUpRight\">rotateInUpRight</option>\n                      </optgroup>\n                      <optgroup label=\"Rotating Exits\">\n                        <option value=\"rotateOut\">rotateOut</option>\n                        <option value=\"rotateOutDownLeft\">rotateOutDownLeft</option>\n                        <option value=\"rotateOutDownRight\">rotateOutDownRight</option>\n                        <option value=\"rotateOutUpLeft\">rotateOutUpLeft</option>\n                        <option value=\"rotateOutUpRight\">rotateOutUpRight</option>\n                      </optgroup>\n                      <optgroup label=\"Sliding Entrances\">\n                        <option value=\"slideInUp\">slideInUp</option>\n                        <option value=\"slideInDown\">slideInDown</option>\n                        <option value=\"slideInLeft\">slideInLeft</option>\n                        <option value=\"slideInRight\">slideInRight</option>\n                      </optgroup>\n                      <optgroup label=\"Sliding Exits\">\n                        <option value=\"slideOutUp\">slideOutUp</option>\n                        <option value=\"slideOutDown\">slideOutDown</option>\n                        <option value=\"slideOutLeft\">slideOutLeft</option>\n                        <option value=\"slideOutRight\">slideOutRight</option>\n                      </optgroup>\n                      <optgroup label=\"Zoom Entrances\">\n                        <option value=\"zoomIn\">zoomIn</option>\n                        <option value=\"zoomInDown\">zoomInDown</option>\n                        <option value=\"zoomInLeft\">zoomInLeft</option>\n                        <option value=\"zoomInRight\">zoomInRight</option>\n                        <option value=\"zoomInUp\">zoomInUp</option>\n                      </optgroup>\n                      <optgroup label=\"Zoom Exits\">\n                        <option value=\"zoomOut\">zoomOut</option>\n                        <option value=\"zoomOutDown\">zoomOutDown</option>\n                        <option value=\"zoomOutLeft\">zoomOutLeft</option>\n                        <option value=\"zoomOutRight\">zoomOutRight</option>\n                        <option value=\"zoomOutUp\">zoomOutUp</option>\n                      </optgroup>\n                      <optgroup label=\"Specials\">\n                        <option value=\"hinge\">hinge</option>\n                        <option value=\"rollIn\">rollIn</option>\n                        <option value=\"rollOut\">rollOut</option>\n                      </optgroup>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-12\">\n                  <button type=\"button\" (click)=\"animate(toAnimate, '', false)\" [disabled]=\"isAnimating || !isVisible\" class=\"btn btn-primary btn-md waves-effect waves-light butt js--triggerAnimation\">Animate me!</button>\n                </div>\n              </div>\n            </form>\n            <div class=\"main-img\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false}\" >\n              <div class=\"text-center animation-image\">\n                <img class=\"d-block img-fluid img-thumbnail\" src=\"assets/images/slider/slider7.jpg\" alt=\"Third slide\">\n              </div>\n            </div>\n          </div>\n        </div>\n    </app-card>\n    <!-- Animation card end -->\n  </div>\n</div>"

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