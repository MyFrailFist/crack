webpackJsonp(["advance.module"],{

/***/ "../../../../../src/app/components/advance/advance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceComponent; });
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

var AdvanceComponent = (function () {
    function AdvanceComponent() {
    }
    AdvanceComponent.prototype.ngOnInit = function () {
    };
    return AdvanceComponent;
}());
AdvanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-advance',
        template: '<router-outlet><spinner></spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], AdvanceComponent);

//# sourceMappingURL=advance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/advance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceModule", function() { return AdvanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_component__ = __webpack_require__("../../../../../src/app/components/advance/advance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__advance_routing__ = __webpack_require__("../../../../../src/app/components/advance/advance.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal_component__ = __webpack_require__("../../../../../src/app/components/advance/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/advance/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notify_notify_component__ = __webpack_require__("../../../../../src/app/components/advance/notify/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdvanceModule = (function () {
    function AdvanceModule() {
    }
    return AdvanceModule;
}());
AdvanceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__advance_routing__["a" /* AdvanceRoutes */]),
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__advance_component__["a" /* AdvanceComponent */],
            __WEBPACK_IMPORTED_MODULE_5__modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__notify_notify_component__["a" /* NotifyComponent */]
        ]
    })
], AdvanceModule);

//# sourceMappingURL=advance.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/advance.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_component__ = __webpack_require__("../../../../../src/app/components/advance/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/advance/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_notify_component__ = __webpack_require__("../../../../../src/app/components/advance/notify/notify.component.ts");



var AdvanceRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Advance Components',
            status: false
        },
        children: [
            {
                path: 'modal',
                component: __WEBPACK_IMPORTED_MODULE_0__modal_modal_component__["a" /* ModalComponent */],
                data: {
                    breadcrumb: 'Modal',
                    status: true
                }
            }, {
                path: 'notifications',
                component: __WEBPACK_IMPORTED_MODULE_1__notifications_notifications_component__["a" /* NotificationsComponent */],
                data: {
                    breadcrumb: 'Notifications',
                    status: true
                }
            }, {
                path: 'notify',
                component: __WEBPACK_IMPORTED_MODULE_2__notify_notify_component__["a" /* NotifyComponent */],
                data: {
                    breadcrumb: 'PNOTIFY',
                    status: true
                }
            }
        ]
    }
];
//# sourceMappingURL=advance.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-page\">\n    <!-- Static Example modal start-->\n    <div class=\"col-sm-12\">\n        <app-card [title]=\"'Static Example'\">\n            <!-- popup example start -->\n            <div class=\"bd-example bd-example-modal\">\n                <div class=\"modal\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\">Modal title</h5>\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">×</span>\n                                </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <p>Modal body text goes here.</p>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-secondary mobtn\" data-dismiss=\"modal\">Close</button>\n                                <button type=\"button\" class=\"btn btn-primary mobtn\">Save changes</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- popup example end -->\n        </app-card>\n    </div>\n    <!-- Static Example modal start-->\n    <!-- bootstrap modal start -->\n    <div class=\"col-lg-12 col-xl-6\">\n        <app-card [title]=\"'Bootstrap modals'\">\n            <p>use code<code> modal-lg, modal-sm</code> to use large and small popup modal.</p>\n            <ul>\n                <li>\n                    <!-- modal static-->\n                    <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\">Static</button>\n                    <app-modal-basic #modalDefault>\n                        <div class=\"app-modal-header\">\n                            <h4 class=\"modal-title\">Modal title</h4>\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"app-modal-body\">\n                            <h5>Default Modal</h5>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                        </div>\n                        <div class=\"app-modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\n                            <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n                        </div>\n                    </app-modal-basic>\n                </li>\n                <li>\n                    <!-- modal large-->\n                    <button type=\"button\" class=\"btn btn-primary waves-effect\" (click)=\"modalLarge.show()\">Large</button>\n                    <app-modal-basic #modalLarge [dialogClass]=\"'modal-lg'\">\n                        <div class=\"app-modal-header\">\n                            <h4 class=\"modal-title\">Modal title</h4>\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalLarge.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"app-modal-body\">\n                            <h5>Large Modal</h5>\n                            <p>This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>\n                        </div>\n                        <div class=\"app-modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalLarge.hide()\">Close</button>\n                            <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n                        </div>\n                    </app-modal-basic>\n                </li>\n                <li>\n                    <!-- modal small-->\n                    <button type=\"button\" class=\"btn btn-success waves-effect\" (click)=\"modalSmall.show()\">Small</button>\n                    <app-modal-basic #modalSmall [dialogClass]=\"'modal-sm'\">\n                        <div class=\"app-modal-header\">\n                            <h4 class=\"modal-title\">Modal title</h4>\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"app-modal-body\">\n                            <h5>Small Modal</h5>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing .</p>\n                        </div>\n                        <div class=\"app-modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\n                        </div>\n                    </app-modal-basic>\n                </li>\n            </ul>\n        </app-card>\n    </div>\n    <!-- Bootstrap modal end -->\n    <!-- Custom modal start -->\n    <div class=\"col-lg-12 col-xl-6\">\n        <app-card [title]=\"'Custom modals'\">\n            <p>use custom modals tabs, overflow, lightbox, Multi modal.</p>\n            <ul>\n                <li>\n                    <!-- modal tabs -->\n                    <button type=\"button\" class=\"btn btn-warning waves-effect\" (click)=\"modalTabs.show()\">Tabs</button>\n                    <app-modal-basic #modalTabs [hideHeader]=\"true\" [hideFooter]=\"true\">\n                        <div class=\"app-modal-body\">\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalTabs.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                            <ngb-tabset>\n                                <ngb-tab title=\"Home\">\n                                    <ng-template ngbTabContent>\n                                        <div [@fadeInOutTranslate] class=\"m-t-15\">\n                                            <div class=\"m-4\">\n                                                <h6>Home</h6>\n                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                                            </div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab title=\"Profile\">\n                                    <ng-template ngbTabContent>\n                                        <div [@fadeInOutTranslate] class=\"m-t-15\">\n                                            <div class=\"m-4\">\n                                                <h6>Profile</h6>\n                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                                            </div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab title=\"Messages\">\n                                    <ng-template ngbTabContent>\n                                        <div [@fadeInOutTranslate] class=\"m-t-15\">\n                                            <div class=\"m-4\">\n                                                <h6>Messages</h6>\n                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                                            </div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab title=\"Settings\">\n                                    <ng-template ngbTabContent>\n                                        <div [@fadeInOutTranslate] class=\"m-t-15\">\n                                            <div class=\"m-4\">\n                                                <h6>Settings</h6>\n                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                                            </div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-tab>\n                            </ngb-tabset>\n                        </div>\n                    </app-modal-basic>\n                </li>\n                <li>\n                    <!-- modal overflow start-->\n                    <button type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"modalOverflow.show()\">Overflow</button>\n                    <app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\n                        <div class=\"app-modal-body\">\n                            <button type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                            <h5 class=\"font-header\">Some text above the scrollable box</h5>\n                            <p>This is Photoshop's version of Lorem IpThis is Photoshop's version Similique velit aut et cumque illum consequatur of Lorem Ipsum.</p>\n                            <h5>Overflow container</h5>\n                            <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"350px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\n                                <p>This is Photoshop's Similique velit aut et cumque illum consequatur version of Lorem IpThis is Photoshop's version of Lorem Ipsum.</p>\n                                <img src=\"assets/images/modal/overflow.jpg\" alt=\"\" class=\"img img-fluid\" />\n                                <p class=\"p-t-15\">Similique velit aut et cumque illum consequatur doloribus quis ipsam sunt sint qui impedit nihil voluptate animi nesciunt corporis aspernatur quaerat sed rem voluptas commodi magnam porro eum sunt quis ullam aut odit laudantium quia soluta corrupti aut qui officiis hic voluptatibus aut itaque voluptates qui expedita minus autem aliquid et debitis omnis provident quia voluptate illo tempora illum maiores perferendis dolorem recusandae ut reprehenderit ad est eum occaecati quam non et quod amet illo id doloremque vitae porro porro sit amet voluptatem quia laboriosam aliquam quia quis facilis eveniet dolorum sunt neque rerum earum ut eaque ab tenetur quia nam quis rerum cumque eos excepturi nostrum qui distinctio porro enim vitae eligendi accusantium quia possimus et autem error repellendus vitae ad quia laborum minima autem nulla optio ad ea nobis animi illo voluptates cum recusandae temporibus voluptate amet quam excepturi odio quia suscipit inventore et rerum quos rerum aut doloribus aut consequatur earum impedit reiciendis saepe voluptates exercitationem maxime culpa saepe ducimus culpa ut aliquam magnam aut veniam sit totam architecto vel distinctio aspernatur aut qui labore quaerat rerum voluptatem sapiente sint sed explicabo et hic laboriosam sit nesciunt et minus et aut dignissimos ut porro incidunt sint et nihil id tempora aut et illum molestiae aperiam minus earum repellendus tempora illo itaque amet facilis quia rem iure quod corrupti dolores et sequi sunt ipsa labore quia unde qui blanditiis ut eos at quia beatae sit repellat quibusdam neque natus expedita sed perspiciatis atque quas voluptatem autem velit enim qui omnis molestiae et repellat sapiente corporis ipsam sed veritatis in quo quod et occaecati quia rerum iusto cumque accusamus numquam sunt quo sequi id molestiae consequatur doloribus molestiae autem nisi nostrum blanditiis et nihil sed nobis incidunt omnis quos minima eius quo accusamus qui ea minus aut est tempora quia inventore ad delectus vel et accusamus fuga eius ipsa aliquam alias sint maxime quae enim atque corrupti libero eos nesciunt et voluptas velit numquam illo non qui quaerat enim omnis et ex asperiores inventore quisquam est enim labore ut nobis consequatur fuga ut quo vel molestiae alias eius quod aspernatur laudantium pariatur eius fuga inventore esse at alias repudiandae perspiciatis id qui fuga consequatur recusandae atque iste commodi sapiente eaque labore ipsa aut sint quo vel recusandae ab iusto ducimus minus voluptas ex et illo commodi ipsa pariatur qui quae adipisci saepe dicta delectus nostrum illum incidunt laboriosam est maxime eum debitis et explicabo quia doloribus quod occaecati tempore tempora labore nihil enim recusandae et dolorum temporibus molestiae sint non porro neque minus provident reprehenderit similique illum voluptate qui dicta dolorum totam quia ut nihil dolore fugiat laboriosam molestiae eveniet omnis consequatur non magni nemo consequatur laboriosam non facilis harum eaque illo pariatur rerum dolores quis autem nemo aut enim tenetur pariatur et non quam repudiandae quia aliquam sunt corporis aperiam natus aut reprehenderit non non illum cum laboriosam nulla quaerat eligendi laudantium perspiciatis.</p>\n                            </div>\n                            <h5 class=\"font-header p-t-15\">Some text below the scrollable box</h5>\n                            <p>This is Photoshop's version of Lorem IpThis is Similique velit aut et cumque illum consequatur Photoshop's version of Lorem Ipsum.</p>\n                        </div>\n                    </app-modal-basic>\n                </li>\n                <li>\n                    <!-- modal light box-->\n\n                    <button type=\"button\" class=\"btn btn-info waves-effect\" (click)=\"modalLightBox.show()\">Light Box</button>\n                    <app-modal-basic #modalLightBox [hideHeader]=\"true\" [hideFooter]=\"true\">\n                        <div class=\"app-modal-body\">\n                            <button type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalLightBox.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                            <img src=\"assets/images/modal/overflow.jpg\" alt=\"\" class=\"img img-fluid\" />\n                        </div>\n                    </app-modal-basic>\n                </li>\n                <li>\n                    <!-- multi modal -->\n                    <button type=\"button\" class=\"btn btn-success waves-effect m-b-10\" (click)=\"modalMulti1.show()\">Multi Model</button>\n                    <!-- modal 1 -->\n                    <app-modal-basic #modalMulti1>\n                        <div class=\"app-modal-header\">\n                            <h4 class=\"modal-title\">Modal 1</h4>\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti1.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"app-modal-body\">\n                            Content for the dialog / modal goes here.\n                            <p class=\"p-t-50 p-b-50\">more content</p>\n                            <button data-toggle=\"modal\" (click)=\"modalMulti2.show()\" class=\"btn btn-primary waves-effect waves-light\">Launch modal</button>\n                        </div>\n                        <div class=\"app-modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default waves-effect \" (click)=\"modalMulti1.hide()\">Close</button>\n                            <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\">Save changes</button>\n                        </div>\n                    </app-modal-basic>\n                    <!-- modal 2 -->\n                    <app-modal-basic #modalMulti2>\n                        <div class=\"app-modal-header\">\n                            <h4 class=\"modal-title\">Modal 2</h4>\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti2.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"app-modal-body\">\n                            Content for the dialog / modal goes here.\n                            <p class=\"p-t-40 p-b-40\">more content</p>\n                            <button data-toggle=\"modal\" (click)=\"modalMulti3.show()\" class=\"btn btn-primary\">Launch modal</button>\n                        </div>\n                        <div class=\"app-modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalMulti2.hide()\">Close</button>\n                            <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n                        </div>\n                    </app-modal-basic>\n                    <!-- modal 3 -->\n                    <app-modal-basic #modalMulti3>\n                        <div class=\"app-modal-header\">\n                            <h4 class=\"modal-title\">Modal 3</h4>\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti3.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"app-modal-body\">\n                            Content for the dialog / modal goes here.\n                            <p class=\"p-t-30 p-b-30\">more content</p>\n                            <button data-toggle=\"modal\" (click)=\"modalMulti4.show()\" class=\"btn btn-primary\">Launch modal</button>\n                        </div>\n                        <div class=\"app-modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalMulti3.hide()\">Close</button>\n                            <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n                        </div>\n                    </app-modal-basic>\n                    <!-- modal 4 -->\n                    <app-modal-basic #modalMulti4>\n                        <div class=\"app-modal-header\">\n                            <h4 class=\"modal-title\">Modal 4</h4>\n                            <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti4.hide()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"app-modal-body\">\n                            Content for the dialog / modal goes here.\n                            <p class=\"p-t-20 p-b-20\">more content</p>\n                        </div>\n                        <div class=\"app-modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalMulti4.hide()\">Close</button>\n                            <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n                        </div>\n                    </app-modal-basic>\n                </li>\n            </ul>\n        </app-card>\n    </div>\n    <!-- Custom modal end -->\n    <!-- Sweet alert start -->\n    <div class=\"col-sm-12\">\n        <app-card [title]=\"'Sweet Alert/Message Box'\">\n            <p>use button<code> (click) </code> set for <code>swal</code> function to use effect.</p>\n            <ul>\n                <li>\n                    <button type=\"button\" class=\"btn btn-primary sweet-1 m-b-10\" (click)=\"openBasicSwal()\">Basic</button>\n                </li>\n                <li>\n                    <button type=\"button\" class=\"btn btn-success alert-success-msg m-b-10\" (click)=\"openSuccessSwal()\">Success</button>\n                </li>\n                <li>\n                    <button type=\"button\" class=\"btn btn-warning alert-confirm m-b-10\" (click)=\"openConfirmsSwal()\">Confirm</button>\n                </li>\n                <li>\n                    <button type=\"button\" class=\"btn btn-danger alert-success-cancel m-b-10\" (click)=\"openSuccessCancelSwal()\">Success or Cancel</button>\n                </li>\n                <li>\n                    <button type=\"button\" class=\"btn btn-primary alert-prompt m-b-10\" (click)=\"openPromptSwal()\">Prompt</button>\n                </li>\n                <li>\n                    <button type=\"button\" class=\"btn btn-success alert-ajax m-b-10\" (click)=\"openAjaxSwal()\">Ajax</button>\n                </li>\n            </ul>\n        </app-card>\n    </div>\n    <!-- Sweet alert end -->\n    <!-- Animation modal start / Nifty Modal Window Effects start-->\n    <div class=\"col-sm-12\">\n        <app-card [title]=\"'Animation Modals'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n            <p>use button with class<code> md-effect-1 to 18</code> to use effect.</p>\n            <div class=\"animation-model\">\n                <button type=\"button\" class=\"btn btn-default btn-outline-default waves-effect md-trigger\" (click)=\"openMyModal('effect-1')\">Fade in &amp; Scale</button>\n                <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger\" (click)=\"openMyModal('effect-2')\">Slide in (right)</button>\n                <button type=\"button\" class=\"btn btn-success btn-outline-success waves-effect md-trigger\" (click)=\"openMyModal('effect-3')\">Slide in (bottom)</button>\n                <button type=\"button\" class=\"btn btn-warning btn-outline-warning waves-effect md-trigger\" (click)=\"openMyModal('effect-4')\">Newspaper</button>\n                <button type=\"button\" class=\"btn btn-danger btn-outline-danger waves-effect md-trigger\" (click)=\"openMyModal('effect-5')\">Fall</button>\n                <button type=\"button\" class=\"btn btn-info btn-outline-info waves-effect md-trigger\" (click)=\"openMyModal('effect-6')\">Side Fall</button>\n                <button type=\"button\" class=\"btn btn-default btn-outline-default waves-effect md-trigger\" (click)=\"openMyModal('effect-7')\">Sticky Up</button>\n                <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger\" (click)=\"openMyModal('effect-8')\">3D Flip (horizontal)</button>\n                <button type=\"button\" class=\"btn btn-success btn-outline-success waves-effect md-trigger\" (click)=\"openMyModal('effect-9')\">3D Flip (vertical)</button>\n                <button type=\"button\" class=\"btn btn-warning btn-outline-warning waves-effect md-trigger\" (click)=\"openMyModal('effect-10')\">3D Sign</button>\n                <button type=\"button\" class=\"btn btn-danger btn-outline-danger waves-effect md-trigger\" (click)=\"openMyModal('effect-11')\">Super Scaled</button>\n                <button type=\"button\" class=\"btn btn-info btn-outline-info waves-effect md-trigger\" (click)=\"openMyModal('effect-12')\">Just Me</button>\n                <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger\" (click)=\"openMyModal('effect-13')\">3D Slit</button>\n                <button type=\"button\" class=\"btn btn-success btn-outline-success waves-effect md-trigger\" (click)=\"openMyModal('effect-14')\">3D Rotate Bottom</button>\n                <button type=\"button\" class=\"btn btn-warning btn-outline-warning waves-effect md-trigger\" (click)=\"openMyModal('effect-15')\">3D Rotate In Left</button>\n                <button type=\"button\" class=\"btn btn-danger btn-outline-danger waves-effect md-trigger md-setperspective\" (click)=\"openMyModal('effect-17')\">Let me in</button>\n                <button type=\"button\" class=\"btn btn-default btn-outline-default waves-effect md-trigger md-setperspective\" (click)=\"openMyModal('effect-18')\">Make way!</button>\n                <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger md-setperspective\" (click)=\"openMyModal('effect-19')\">Slip from top</button>\n                <!-- animation modal Dialogs start -->\n                <app-modal-animation [modalID]=\"'effect-1'\" [modalClass]=\"'md-effect-1'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-2'\" [modalClass]=\"'md-effect-2'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-3'\" [modalClass]=\"'md-effect-3'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-4'\" [modalClass]=\"'md-effect-4'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-5'\" [modalClass]=\"'md-effect-5'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-6'\" [modalClass]=\"'md-effect-6'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-7'\" [modalClass]=\"'md-effect-7'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-8'\" [modalClass]=\"'md-effect-8'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-9'\" [modalClass]=\"'md-effect-9'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-10'\" [modalClass]=\"'md-effect-10'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-11'\" [modalClass]=\"'md-effect-11'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-12'\" [modalClass]=\"'md-effect-12'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-danger md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-13'\" [modalClass]=\"'md-effect-13'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-14'\" [modalClass]=\"'md-effect-14'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-15'\" [modalClass]=\"'md-effect-15'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-17'\" [modalClass]=\"'md-effect-17'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-18'\" [modalClass]=\"'md-effect-18'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n\n                <app-modal-animation [modalID]=\"'effect-19'\" [modalClass]=\"'md-effect-19'\">\n                    <h3>Modal Dialog</h3>\n                    <div>\n                        <p>This is a modal window. You can do the following things with it:</p>\n                        <ul>\n                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                            <li><strong>Close:</strong> click on the button below to close the modal.</li>\n                        </ul>\n                        <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n                    </div>\n                    <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n                </app-modal-animation>\n            </div>\n        </app-card>\n    </div>\n    <!-- Animation modal end / Nifty Modal Window Effects end-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/advance/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__ = __webpack_require__("../../../../../src/app/shared/elements/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = (function () {
    function ModalComponent() {
        this.showDialog = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.openMyModal = function (event) {
        document.querySelector("#" + event).classList.add('md-show');
    };
    ModalComponent.prototype.closeMyModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    ModalComponent.prototype.openBasicModal = function (event) {
        this.showDialog = !this.showDialog;
        setTimeout(function () {
            document.querySelector("#" + event).classList.add('md-show');
        }, 25);
    };
    ModalComponent.prototype.closeBasicModal = function (event) {
        var _this = this;
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
        setTimeout(function () {
            _this.visible = false;
            _this.showDialog = !_this.showDialog;
        }, 300);
    };
    ModalComponent.prototype.openSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Error!',
            text: 'Do you want to continue',
            type: 'error',
            confirmButtonText: 'Cool',
            allowOutsideClick: true
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openBasicSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: "Here's a message!",
            text: "It's pretty, isn't it?"
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openSuccessSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Good job!',
            text: 'You clicked the button!',
            type: 'success'
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openConfirmsSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openSuccessCancelSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success m-r-10',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openPromptSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            animation: false,
            progressSteps: ['1', '2', '3']
        });
        var steps = [
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ];
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.queue(steps).then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result) +
                    '</pre>',
                confirmButtonText: 'Lovely!',
                showCancelButton: false
            });
        }, function () {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openAjaxSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (email === 'taken@example.com') {
                            reject('This email is already taken.');
                        }
                        else {
                            resolve();
                        }
                    }, 2000);
                });
            },
            allowOutsideClick: false
        }).then(function (email) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "visible", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/components/advance/modal/modal.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_elements_animation__["a" /* fadeInOutTranslate */]]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-page\">\n    <div class=\"row\">\n        <!-- bootstrap modal start -->\n        <div class=\"col-sm-12\">\n            <!-- Notification card start -->\n            <app-card [title]=\"'Notifications'\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"sub-title\">Notification Position</div>\n                        <p>This plugin has layout options where you can display it in any corner of the screen, simply click one layout corners and press the buttons on the other section to see the magic</p>\n                        <div class=\"location-selector\">\n                            <div class=\"bit top left\" data-position=\"top left\"></div>\n                            <div class=\"bit top right\" data-position=\"top right\"></div>\n                            <div class=\"bit top\" data-position=\"top\"></div>\n                            <div class=\"bit bottom left\" data-position=\"bottom left\"></div>\n                            <div class=\"bit bottom right\" data-position=\"bottom right\"></div>\n                            <div class=\"bit bottom\" data-position=\"bottom\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"sub-title\">Notification Position</div>\n                        <p>Notification All Options : <code> (click) with option, title, msg, showClose, timeout, position, theme, type</code></p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-left', closeOther:true})\">Top Left</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-right', closeOther:true})\">Top Right</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-center', closeOther:true})\">Top Center</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-left', closeOther:true})\">Bottom Left</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-right', closeOther:true})\">Bottom Right</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-center', closeOther:true})\">Bottom Center</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'center-center', closeOther:true})\">Center Center</button>\n                            </li>\n                        </ul>\n                        <div class=\"sub-title\">Notification Default</div>\n                        <p>Change data-type : <code> theme=\"default\"</code> to change notification color</p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-inverse waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'default'})\">Default</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-info waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'info'})\">Info</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-success waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'success'})\">Success</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-warning waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'warning'})\">Warning</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-danger waves-effect\" (click)=\"addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'error'})\">Danger/Error</button>\n                            </li>\n                        </ul>\n                        <div class=\"sub-title\">Notification Bootstrap</div>\n                        <p>Change data-type : <code> theme=\"bootstrap\"</code> to change notification color</p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-inverse waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'default'})\">Default</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-info waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'info'})\">Info</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-success waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'success'})\">Success</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-warning waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'warning'})\">Warning</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-danger waves-effect\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'error'})\">Danger/Error</button>\n                            </li>\n                        </ul>\n                        <div class=\"sub-title\">Notification Material</div>\n                        <p>Change data-type : <code> theme=\"bootstrap\"</code> to change notification color</p>\n                        <ul class=\"notifications\">\n                            <li>\n                                <button class=\"btn btn-inverse waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'default'})\">Default</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-info waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'info'})\">Info</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-success waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'success'})\">Success</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-primary waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-warning waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'warning'})\">Warning</button>\n                            </li>\n                            <li>\n                                <button class=\"btn btn-danger waves-effect\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'error'})\">Danger/Error</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </app-card>\n            <!-- Notification card end -->\n        </div>\n        <!-- Bootstrap modal end -->\n    </div>\n</div>\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "../../../../../src/app/components/advance/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(toastyService) {
        this.toastyService = toastyService;
        this.position = 'bottom-right';
        this.showClose = true;
        this.timeout = 5000;
        this.theme = 'bootstrap';
        this.type = 'default';
        this.closeOther = false;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been added removed!');
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__("../../../../../src/app/components/advance/notifications/notifications.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/advance/notify/notify.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Basic notifications card start -->\n    <app-card [title]=\"'Basic notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>Primary Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'crate', subType: 'warn'})\">Warning <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>warn</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Success Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'success'})\">Success <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>success</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Info Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info'})\">Info <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>info</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Danger Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'error'})\">Danger <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>danger</code> to use this style notification</td>\n          </tr>\n          <!-- basic notification end -->\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Basic notifications card end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- Basic notifications card start -->\n    <app-card [title]=\"'Animate notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>fromRight Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight'})\">Default/fromRight <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>fromRight</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>fromLeft Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromLeft'})\">fromLeft <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>fromLeft</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Sacle Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'scale'})\">Scale <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>scale</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Rotate Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'rotate'})\">Rotate <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>rotate</code> to use this style notification</td>\n          </tr>\n          <!-- basic notification end -->\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Basic notifications card end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- notifications option start -->\n    <app-card [title]=\"'Options notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>No Title</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({msg: 'Check me out! - no title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Title <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use title <code>null or not use 'title' input</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>No Message</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Only Title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Message <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use msg <code>not use 'msg' input</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Small Icon</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Small Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'small-icon'})\">Small Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use theClass <code>small-icon</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>No Icon</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'No Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'no-icon'})\">No Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use theClass <code>no-icon</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Click To Close</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Click To Close', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', clickToClose: true})\"> Click to close <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use clickToClose <code>true/false</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Show Progress</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Show Progress', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:false, showProgressBar: true})\"> Show Progress <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use showProgressBar<code>true</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Pus On Hover</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Push On Hover', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:true, showProgressBar: true})\"> Push On Hover <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use pauseOnHover<code>true</code> to use this style notification</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- notifications option end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- notifications position start -->\n      <app-card [title]=\"'notifications position'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>Top Left</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Top Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'left', maxStack: 1})\">Top Left <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>top</code> position2 <code>left</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Top Right</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Top Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'right', maxStack: 1})\">Top Right <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>top</code> position2 <code>right</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Bottom Left</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Bottom Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'left', maxStack: 1})\">Bottom Left <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>bottom</code> position2 <code>left</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Bottom Right</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Bottom Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'right', maxStack: 1})\">Bottom Right <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>bottom</code> position2 <code>right</code> to use this style notification</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- notifications option end -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/advance/notify/notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifyComponent = (function () {
    function NotifyComponent(servicePNotify) {
        this.servicePNotify = servicePNotify;
        this.options = {
            position: ["bottom", "right"],
        };
        this.position1 = 'bottom';
        this.position2 = 'right';
        this.timeOut = 1000;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.lastOnBottom = true;
        this.clickToClose = true;
        this.maxLength = 0;
        this.maxStack = 8;
        this.preventDuplicates = false;
        this.preventLastDuplicates = false;
        this.rtl = false;
        this.animate = 'fromRight';
        this.subType = 'success';
    }
    NotifyComponent.prototype.ngOnInit = function () {
    };
    NotifyComponent.prototype.addNotify = function (options) {
        //this.pauseOnHover = (options.indexOf("pauseOnHover") > -1) ? options.pauseOnHover : this.pauseOnHover;
        this.servicePNotify.remove();
        this.options = {
            position: [("position1" in options) ? options.position1 : this.position1, ("position2" in options) ? options.position2 : this.position2],
            maxStack: ("maxStack" in options) ? options.maxStack : this.maxStack,
            timeOut: options.timeOut ? options.timeOut : this.timeOut,
            showProgressBar: ('showProgressBar' in options) ? options.showProgressBar : this.showProgressBar,
            pauseOnHover: ('pauseOnHover' in options) ? options.pauseOnHover : this.pauseOnHover,
            lastOnBottom: ('lastOnBottom' in options) ? options.lastOnBottom : this.lastOnBottom,
            clickToClose: ('clickToClose' in options) ? options.clickToClose : this.clickToClose,
            maxLength: options.maxLength ? options.maxLength : this.maxLength,
            preventDuplicates: ('preventDuplicates' in options) ? options.preventDuplicates : this.preventDuplicates,
            preventLastDuplicates: ('preventLastDuplicates' in options) ? options.preventLastDuplicates : this.preventLastDuplicates,
            theClass: options.theClass ? options.theClass : this.theClass,
            rtl: ('rtl' in options) ? options.rtl : this.rtl,
            animate: options.animate ? options.animate : this.animate,
            icons: options.icons ? options.icons : this.icons
        };
        switch (options.type) {
            case 'success':
                this.servicePNotify.success(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'error':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'alert':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'warn':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'info':
                this.servicePNotify.info(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'create':
                this.servicePNotify.create(options.title ? options.title : this.title, options.msg ? options.msg : this.msg, options.type ? options.type : this.subType);
                break;
            case 'html':
                this.servicePNotify.html(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            default:
                this.servicePNotify.alert(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
        }
    };
    return NotifyComponent;
}());
NotifyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notify',
        template: __webpack_require__("../../../../../src/app/components/advance/notify/notify.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["a" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["a" /* NotificationsService */]) === "function" && _a || Object])
], NotifyComponent);

var _a;
//# sourceMappingURL=notify.component.js.map

/***/ }),

/***/ "../../../../sweetalert2/dist/sweetalert2.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v6.6.6
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  customClass: '',
  target: 'body',
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusCancel: false,
  showCloseButton: false,
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onOpen: null,
  onClose: null,
  useRejections: true
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/* global MouseEvent */

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousWindowKeyDown: null,
  previousActiveElement: null,
  previousBodyPadding: null

  /*
   * Add modal + overlay to DOM
   */
};var init = function init(params) {
  if (typeof document === 'undefined') {
    console.error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = document.querySelector(params.target);
  if (!targetElement) {
    console.warn('SweetAlert2: Can\'t find the target "' + params.target + '"');
    targetElement = document.body;
  }
  targetElement.appendChild(container);

  var modal = getModal();
  var input = getChildByClass(modal, swalClasses.input);
  var file = getChildByClass(modal, swalClasses.file);
  var range = modal.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(modal, swalClasses.select);
  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(modal, swalClasses.textarea);

  input.oninput = function () {
    sweetAlert.resetValidationError();
  };

  input.onkeydown = function (event) {
    setTimeout(function () {
      if (event.keyCode === 13 && params.allowEnterKey) {
        event.stopPropagation();
        sweetAlert.clickConfirm();
      }
    }, 0);
  };

  file.onchange = function () {
    sweetAlert.resetValidationError();
  };

  range.oninput = function () {
    sweetAlert.resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    sweetAlert.resetValidationError();
    range.previousSibling.value = range.value;
  };

  select.onchange = function () {
    sweetAlert.resetValidationError();
  };

  checkbox.onchange = function () {
    sweetAlert.resetValidationError();
  };

  textarea.oninput = function () {
    sweetAlert.resetValidationError();
  };

  return modal;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '" aria-label="Close this dialog">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getModal = function getModal() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
};

var getIcons = function getIcons() {
  var modal = getModal();
  return modal.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements(focusCancel) {
  var buttons = [getConfirmButton(), getCancelButton()];
  if (focusCancel) {
    buttons.reverse();
  }
  var focusableElements = buttons.concat(Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, *[tabindex]:not([tabindex="-1"])')));
  return uniqueArray(focusableElements);
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addClass = function addClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.add(className);
  });
};

var removeClass = function removeClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.remove(className);
  });
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jqeury $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var fireClick = function fireClick(node) {
  if (!isVisible(node)) {
    return false;
  }

  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var animationEndEvent = function () {
  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'msAnimation': 'MSAnimationEnd',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  window.onkeydown = states.previousWindowKeyDown;
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (x && y) {
      // IE has no scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// JavaScript Debounce Function
// Simplivied version of https://davidwalsh.name/javascript-debounce-function
var debounce = function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    var later = function later() {
      timeout = null;
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var modalParams = _extends({}, defaultParams);
var queue = [];
var swal2Observer = void 0;

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = getModal() || init(params);

  for (var param in params) {
    if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
      console.warn('SweetAlert2: Unknown parameter "' + param + '"');
    }
  }

  // Set modal width
  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

  modal.style.padding = params.padding + 'px';
  modal.style.background = params.background;
  var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Close button
  if (params.showCloseButton) {
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Custom Class
  modal.className = swalClasses.modal;
  if (params.customClass) {
    addClass(modal, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      console.warn('SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      console.error('SweetAlert2: Unknown alert type: ' + params.type);
      return false;
    }
    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on cancel and confirm buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass(confirmButton, swalClasses.styled);
    addClass(cancelButton, swalClasses.styled);
  } else {
    removeClass(confirmButton, swalClasses.styled);
    removeClass(cancelButton, swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(modal, swalClasses.noanimation);
  } else {
    addClass(modal, swalClasses.noanimation);
  }
};

/*
 * Animations
 */
var openModal = function openModal(animation, onComplete) {
  var container = getContainer();
  var modal = getModal();

  if (animation) {
    addClass(modal, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(modal, swalClasses.hide);
  } else {
    removeClass(modal, swalClasses.fade);
  }
  show(modal);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass(document.documentElement, swalClasses.shown);
  addClass(document.body, swalClasses.shown);
  addClass(container, swalClasses.shown);
  fixScrollbar();
  iOSfix();
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args[0] === undefined) {
    console.error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, modalParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        params.inputValidator = function (email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
      }

      if (params.input === 'url' && params.inputValidator === null) {
        params.inputValidator = function (url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
      }
      break;

    default:
      console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var modal = getModal();

  return new Promise(function (resolve, reject) {
    // Close on timer
    if (params.timer) {
      modal.timeout = setTimeout(function () {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('timer');
        } else {
          resolve({ dismiss: 'timer' });
        }
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(modal, swalClasses[inputType]);
        case 'checkbox':
          return modal.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return modal.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(modal, swalClasses.input);
      }
    };

    // Get the value of the modal input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
          sweetAlert.closeModal(params.onClose);
          resolve(preConfirmValue || value);
        }, function (error) {
          sweetAlert.hideLoading();
          if (error) {
            sweetAlert.showValidationError(error);
          }
        });
      } else {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          resolve(value);
        } else {
          resolve({ value: value });
        }
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                params.inputValidator(inputValue, params.extraParams).then(function () {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  confirm(inputValue);
                }, function (error) {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  if (error) {
                    sweetAlert.showValidationError(error);
                  }
                });
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            sweetAlert.closeModal(params.onClose);
            if (params.useRejections) {
              reject('cancel');
            } else {
              resolve({ dismiss: 'cancel' });
            }
          }
          break;
        default:
      }
    };

    var buttons = modal.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing modal by close button
    getCloseButton().onclick = function () {
      sweetAlert.closeModal(params.onClose);
      if (params.useRejections) {
        reject('close');
      } else {
        resolve({ dismiss: 'close' });
      }
    };

    // Closing modal by overlay click
    container.onclick = function (e) {
      if (e.target !== container) {
        return;
      }
      if (params.allowOutsideClick) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('overlay');
        } else {
          resolve({ dismiss: 'overlay' });
        }
      }
    };

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;
      var keyCode = e.keyCode || e.which;

      if ([9, 13, 32, 27, 37, 38, 39, 40].indexOf(keyCode) === -1) {
        // Don't do work on keys we don't care about.
        return;
      }

      var targetElement = e.target || e.srcElement;

      var focusableElements = getFocusableElements(params.focusCancel);
      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
      for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
        if (targetElement === focusableElements[_i4]) {
          btnIndex = _i4;
          break;
        }
      }

      // TAB
      if (keyCode === 9) {
        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ENTER/SPACE
      } else if (keyCode === 13 || keyCode === 32) {
        if (btnIndex === -1 && params.allowEnterKey) {
          // ENTER/SPACE clicked outside of a button.
          if (params.focusCancel) {
            fireClick(cancelButton, e);
          } else {
            fireClick(confirmButton, e);
          }
          e.stopPropagation();
          e.preventDefault();
        }

        // ESC
      } else if (keyCode === 27 && params.allowEscapeKey === true) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('esc');
        } else {
          resolve({ dismiss: 'esc' });
        }
      }
    };

    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
      states.previousWindowKeyDown = window.onkeydown;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass(buttonsWrapper, swalClasses.loading);
      removeClass(modal, swalClasses.loading);
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Set modal min-height to disable scrolling inside the modal
    sweetAlert.recalculateHeight = debounce(function () {
      var modal = getModal();
      if (!modal) {
        return;
      }
      var prevState = modal.style.display;
      modal.style.minHeight = '';
      show(modal);
      modal.style.minHeight = modal.scrollHeight + 1 + 'px';
      modal.style.display = prevState;
    }, 50);

    // Show block with validation error
    sweetAlert.showValidationError = function (error) {
      var validationError = getValidationError();
      validationError.innerHTML = error;
      show(validationError);

      var input = getInput();
      if (input) {
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);
      sweetAlert.recalculateHeight();

      var input = getInput();
      if (input) {
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(modal, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(modal, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(modal, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(modal, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(modal, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(modal, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(modal, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(modal, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        console.error('SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openModal(params.animation, params.onOpen);

    // Focus the first element (input or button)
    if (params.allowEnterKey) {
      setFocus(-1, 1);
    } else {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }

    // fix scroll
    getContainer().scrollTop = 0;

    // Observe changes inside the modal and adjust height
    if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
      swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
      swal2Observer.observe(modal, { childList: true, characterData: true, subtree: true });
    }
  });
};

/*
 * Global function to determine if swal2 modal is shown
 */
sweetAlert.isVisible = function () {
  return !!getModal();
};

/*
 * Global function for chaining sweetAlert modals
 */
sweetAlert.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert(queue[i]).then(function (result) {
          queueResult.push(result);
          step(i + 1, callback);
        }, function (dismiss) {
          resetQueue();
          reject(dismiss);
        });
      } else {
        resetQueue();
        resolve(queueResult);
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current modal in queue
 */
sweetAlert.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a modal to the queue
 */
sweetAlert.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a modal from the queue
 */
sweetAlert.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
  var container = getContainer();
  var modal = getModal();
  if (!modal) {
    return;
  }
  removeClass(modal, swalClasses.show);
  addClass(modal, swalClasses.hide);
  clearTimeout(modal.timeout);

  resetPrevState();

  var removeModalAndResetState = function removeModalAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass(document.documentElement, swalClasses.shown);
    removeClass(document.body, swalClasses.shown);
    undoScrollbar();
    undoIOSfix();
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(modal, swalClasses.hide)) {
        removeModalAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removeModalAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = function () {
  var modal = getModal();
  if (!modal) {
    sweetAlert('');
  }
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass(buttonsWrapper, swalClasses.loading);
  addClass(modal, swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
};

/**
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return console.error('SweetAlert2: the argument for setDefaults() is required and has to be a object');
  }

  for (var param in userParams) {
    if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
      console.warn('SweetAlert2: Unknown parameter "' + param + '"');
      delete userParams[param];
    }
  }

  _extends(modalParams, userParams);
};

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = function () {
  modalParams = _extends({}, defaultParams);
};

sweetAlert.noop = function () {};

sweetAlert.version = '6.6.6';

sweetAlert.default = sweetAlert;

return sweetAlert;

})));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ })

});
//# sourceMappingURL=advance.module.chunk.js.map