webpackJsonp(["data-table.module"],{

/***/ "../../../../../src/app/components/tables/data-table/basic/basic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Ng-X Basic Datatable'\">\r\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\r\n      <ngx-datatable\r\n              class=\"data-table table-responsive\"\r\n              [rows]=\"rowsBasic\"\r\n              [loadingIndicator]=\"loadingIndicator\"\r\n              [columns]=\"columns\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"50\"\r\n              [footerHeight]=\"50\"\r\n              [rowHeight]=\"50\"\r\n              [reorderable]=\"reorderable\">\r\n      </ngx-datatable>\r\n    </app-card>\r\n\r\n    <app-card [title]=\"'Ng-X 100K Virtual Scrolling Rows'\">\r\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable and <code>rowHeight</code></span><br><br>\r\n      <ngx-datatable\r\n              class='data-table scroll'\r\n              [rows]='rows'\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"50\"\r\n              [footerHeight]=\"50\"\r\n              [rowHeight]=\"getRowHeight\"\r\n              [limit]=\"10\"\r\n              [scrollbarV]=\"true\"\r\n              (page)=\"onPage($event)\">\r\n        <ngx-datatable-column name=\"Name\">\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <strong>{{value}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Row Height\" prop=\"height\">\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n\r\n    <app-card [title]=\"'Ng-X Full Screen'\" [blockClass]=\"'table-border-style'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>data-table </code>and<code> fullscreen</code> with ngx-datatable.</span>\r\n      <ngx-datatable\r\n          class=\"data-table fullscreen\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\"\r\n          [rowHeight]=\"50\"\r\n          [scrollbarV]=\"true\"\r\n          [scrollbarH]=\"true\"\r\n          [rows]=\"fullScreenRow\">\r\n        <ngx-datatable-column name=\"Id\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"City\" prop=\"address.city\"></ngx-datatable-column>\r\n        <ngx-datatable-column name=\"State\" prop=\"address.state\"></ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n\r\n    <app-card [title]=\"'Ng-X Search/Filter'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>data-table </code> with ngx-datatable and set <code>search element</code>.</span>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"form-inline f-right\">\r\n            <div class=\"form-group\">\r\n              <label>Search: </label>\r\n              <input\r\n                type='text'\r\n                class=\"form-control input-sm m-l-10\"\r\n                placeholder='Search Name'\r\n                (keyup)='updateFilter($event)'\r\n              />\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <ngx-datatable\r\n          #table\r\n          class='data-table'\r\n          [columns]=\"columns\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"50\"\r\n          [limit]=\"10\"\r\n          [rows]='rowsFilter'>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
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
        var _this = this;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.expanded = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.fetchBasicData(function (data) {
            _this.rowsBasic = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        this.fetch(function (data) {
            _this.rows = data;
        });
        this.fetchFullScreenData(function (data) {
            _this.fullScreenRow = data;
        });
        this.fetchFilterData(function (data) {
            // cache our list
            _this.tempFilter = data.slice();
            // push our inital complete list
            _this.rowsFilter = data;
        });
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent.prototype.fetchBasicData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/basic.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BasicComponent.prototype.fetchFullScreenData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/fullscreen.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BasicComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BasicComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BasicComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    BasicComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            var rows = JSON.parse(req.response);
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                row.height = Math.floor(Math.random() * 80) + 50;
            }
            cb(rows);
        };
        req.send();
    };
    BasicComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    return BasicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]) === "function" && _a || Object)
], BasicComponent.prototype, "table", void 0);
BasicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/basic/basic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/basic/basic.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

var _a;
//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/child-row/child-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/child-row/child-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Ng-X CHILD ROWS (SHOW EXTRA / DETAILED INFORMATION)'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>expandable</code> and <code>data-table</code> inside ngx-datatable element with <code>ngx-datatable-column</code> elements</span>\r\n      <ngx-datatable\r\n              #myTable\r\n              class=\"data-table expandable\"\r\n              [rows]='rows'\r\n              [limit]=\"10\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"50\"\r\n              [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\"\r\n              (page)=\"onPage($event)\">\r\n        <!-- Row Detail Template -->\r\n        <ngx-datatable-row-detail [rowHeight]=\"'auto'\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\r\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\r\n            <div class=\"dt-desc\">\r\n              <table class=\"table-striped table-bordered\">\r\n                <tr>\r\n                  <th colspan=\"2\"><strong>Address</strong></th>\r\n                </tr>\r\n                <tr>\r\n                  <td>City</td>\r\n                  <td>{{row.address.city}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>State</td>\r\n                  <td>{{row.address.state}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </ng-template>\r\n        </ngx-datatable-row-detail>\r\n        <ngx-datatable-column\r\n          [width]=\"50\"\r\n          [resizeable]=\"false\"\r\n          [sortable]=\"false\"\r\n          [draggable]=\"false\"\r\n          [canAutoResize]=\"false\">\r\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\r\n            <a\r\n              href=\"javascript:;\"\r\n              [class.datatable-icon-right]=\"!expanded\"\r\n              [class.datatable-icon-down]=\"expanded\"\r\n              title=\"Expand/Collapse Row\"\r\n              (click)=\"toggleExpandRow(row)\">\r\n            </a>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Index\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <strong>{{row['id']}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Expanded\">\r\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\r\n            <strong>{{expanded === 1}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Name\">\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <strong>{{value}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/child-row/child-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildRowComponent; });
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

var ChildRowComponent = (function () {
    function ChildRowComponent() {
        var _this = this;
        this.rows = [];
        this.expanded = {};
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    ChildRowComponent.prototype.ngOnInit = function () { };
    ChildRowComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    ChildRowComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    ChildRowComponent.prototype.toggleExpandRow = function (row) {
        this.table.rowDetail.toggleExpandRow(row);
    };
    ChildRowComponent.prototype.onDetailToggle = function (event) { };
    return ChildRowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
    __metadata("design:type", Object)
], ChildRowComponent.prototype, "table", void 0);
ChildRowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-child-row',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/child-row/child-row.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/child-row/child-row.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChildRowComponent);

//# sourceMappingURL=child-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/data-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet><spinner></spinner></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
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

var DataTableComponent = (function () {
    function DataTableComponent() {
    }
    DataTableComponent.prototype.ngOnInit = function () {
    };
    return DataTableComponent;
}());
DataTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/data-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/data-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DataTableComponent);

//# sourceMappingURL=data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/data-table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_basic_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_table_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_table_routing__ = __webpack_require__("../../../../../src/app/components/tables/data-table/data-table.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inline_edit_inline_edit_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/inline-edit/inline-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__child_row_child_row_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/child-row/child-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paging_paging_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/paging/paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection_selection_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/selection/selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selection_cell_cell_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/selection/cell/cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection_single_row_single_row_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/selection/single-row/single-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selection_multi_rows_multi_rows_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/selection/multi-rows/multi-rows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__selection_checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/selection/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__other_other_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/other/other.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var DataTableModule = (function () {
    function DataTableModule() {
    }
    return DataTableModule;
}());
DataTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__data_table_routing__["a" /* DataTableRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__data_table_component__["a" /* DataTableComponent */], __WEBPACK_IMPORTED_MODULE_2__basic_basic_component__["a" /* BasicComponent */], __WEBPACK_IMPORTED_MODULE_7__inline_edit_inline_edit_component__["a" /* InlineEditComponent */], __WEBPACK_IMPORTED_MODULE_8__child_row_child_row_component__["a" /* ChildRowComponent */], __WEBPACK_IMPORTED_MODULE_9__paging_paging_component__["a" /* PagingComponent */], __WEBPACK_IMPORTED_MODULE_10__selection_selection_component__["a" /* SelectionComponent */], __WEBPACK_IMPORTED_MODULE_11__selection_cell_cell_component__["a" /* CellComponent */], __WEBPACK_IMPORTED_MODULE_12__selection_single_row_single_row_component__["a" /* SingleRowComponent */], __WEBPACK_IMPORTED_MODULE_13__selection_multi_rows_multi_rows_component__["a" /* MultiRowsComponent */], __WEBPACK_IMPORTED_MODULE_14__selection_checkbox_checkbox_component__["a" /* CheckboxComponent */], __WEBPACK_IMPORTED_MODULE_15__other_other_component__["a" /* OtherComponent */]]
    })
], DataTableModule);

//# sourceMappingURL=data-table.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/data-table.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_basic_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inline_edit_inline_edit_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/inline-edit/inline-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_row_child_row_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/child-row/child-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paging_paging_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/paging/paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_selection_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/selection/selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__other_other_component__ = __webpack_require__("../../../../../src/app/components/tables/data-table/other/other.component.ts");






var DataTableRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Data Tables',
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
                path: 'editable',
                component: __WEBPACK_IMPORTED_MODULE_1__inline_edit_inline_edit_component__["a" /* InlineEditComponent */],
                data: {
                    breadcrumb: 'Editable',
                    status: true
                }
            }, {
                path: 'row-details',
                component: __WEBPACK_IMPORTED_MODULE_2__child_row_child_row_component__["a" /* ChildRowComponent */],
                data: {
                    breadcrumb: 'Row Details',
                    status: true
                }
            }, {
                path: 'paging',
                component: __WEBPACK_IMPORTED_MODULE_3__paging_paging_component__["a" /* PagingComponent */],
                data: {
                    breadcrumb: 'Table Paging',
                    status: true
                }
            }, {
                path: 'selection',
                component: __WEBPACK_IMPORTED_MODULE_4__selection_selection_component__["a" /* SelectionComponent */],
                data: {
                    breadcrumb: 'Selection Table',
                    status: true
                }
            }, {
                path: 'other',
                component: __WEBPACK_IMPORTED_MODULE_5__other_other_component__["a" /* OtherComponent */],
                data: {
                    breadcrumb: 'Other',
                    status: true
                }
            }
        ]
    }
];
//# sourceMappingURL=data-table.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/inline-edit/inline-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/inline-edit/inline-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Ng-X Editable'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>material</code> and <code>data-table</code> inside ngx-datatable element with <code>ngx-datatable-column</code> elements</span>\r\n      <ngx-datatable\r\n        #mydatatable\r\n        class=\"material data-table\"\r\n        [headerHeight]=\"50\"\r\n        [limit]=\"10\"\r\n        [columnMode]=\"'force'\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\"\r\n        [rows]=\"rows\">\r\n        <ngx-datatable-column name=\"Name\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (dblclick)=\"editing[row.$$index + '-name'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-name']\">\r\n              {{value}}\r\n            </span>\r\n            <input\r\n              autofocus\r\n              (blur)=\"updateValue($event, 'name', value, row)\"\r\n              *ngIf=\"editing[row.$$index + '-name']\"\r\n              type=\"text\"\r\n              [value]=\"value\"\r\n              class=\"form-control\"\r\n            />\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\">\r\n          <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n            <span\r\n             title=\"Double click to edit\"\r\n             (dblclick)=\"editing[row.$$index + '-gender'] = true\"\r\n             *ngIf=\"!editing[row.$$index + '-gender']\">\r\n              {{value}}\r\n            </span>\r\n            <select\r\n              *ngIf=\"editing[row.$$index + '-gender']\"\r\n              (change)=\"updateValue($event, 'gender', value, row)\"\r\n              [value]=\"value\"\r\n              class=\"form-control\">\r\n              <option value=\"male\">Male</option>\r\n              <option value=\"female\">Female</option>\r\n            </select>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Age\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/inline-edit/inline-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineEditComponent; });
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

var InlineEditComponent = (function () {
    function InlineEditComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    InlineEditComponent.prototype.ngOnInit = function () { };
    InlineEditComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    InlineEditComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    };
    return InlineEditComponent;
}());
InlineEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inline-edit',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/inline-edit/inline-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/inline-edit/inline-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InlineEditComponent);

//# sourceMappingURL=inline-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/other/other.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/other/other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Angular Datatable'\">\r\n      <span class=\"m-b-20\">use class <code>table table-striped table-bordered full-data-table</code> with table element</span><br><br>\r\n      <div class=\"dt-responsive\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-12 col-sm-12 col-md-6\">\r\n            <div>\r\n              <label class=\"label-control\">Show\r\n                <select class=\"form-control input-sm full-data-show-entry\" [(ngModel)]=\"rowsOnPage\">\r\n                  <option [ngValue]=\"10\">10</option>\r\n                  <option [ngValue]=\"25\">25</option>\r\n                  <option [ngValue]=\"50\">50</option>\r\n                  <option [ngValue]=\"100\">100</option>\r\n                </select>\r\n                entries\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n            <div style=\"text-align: right;\">\r\n              <label>Search:\r\n                <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control input-sm full-data-search\" placeholder=\"Search name\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"panel-heading\">User information</div>-->\r\n        <table class=\"table table-striped table-bordered table-responsive full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n               [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n          <thead>\r\n          <tr>\r\n            <th>\r\n              <mfDefaultSorter  by=\"name\">Name</mfDefaultSorter>\r\n            </th>\r\n            <th>\r\n              <mfDefaultSorter  by=\"position\">Position</mfDefaultSorter>\r\n            </th>\r\n            <th>\r\n              <mfDefaultSorter by=\"office\">Office</mfDefaultSorter>\r\n            </th>\r\n            <th>\r\n              <mfDefaultSorter  by=\"age\">Age</mfDefaultSorter>\r\n            </th>\r\n            <th>\r\n              <mfDefaultSorter by=\"start-date\">Start date</mfDefaultSorter>\r\n            </th>\r\n            <th>\r\n              <mfDefaultSorter by=\"salary\">Salary</mfDefaultSorter>\r\n            </th>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let item of mf.data\">\r\n            <td>{{item.name}}</td>\r\n            <td>{{item.position}}</td>\r\n            <td>{{item.office}}</td>\r\n            <td>{{item.age}}</td>\r\n            <td>{{item.date}}</td>\r\n            <td>{{item.salary}}</td>\r\n          </tr>\r\n          </tbody>\r\n          <tfoot>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Position</th>\r\n            <th>Office</th>\r\n            <th>Age</th>\r\n            <th>Start date</th>\r\n            <th>Salary</th>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"6\">\r\n              <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/other/other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function OtherComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.filterQuery = "";
        this.sortBy = "";
        this.sortOrder = "desc";
    }
    OtherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("assets/data/data.json")
            .subscribe(function (data) {
            _this.data = data.json();
        });
    };
    return OtherComponent;
}());
OtherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-other',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/other/other.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/other/other.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OtherComponent);

var _a;
//# sourceMappingURL=other.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/paging/paging.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/paging/paging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Ng-X Pagination'\">\r\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\r\n      <ngx-datatable\r\n              class=\"data-table\"\r\n              [rows]=\"rowsClient\"\r\n              [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"50\"\r\n              [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\"\r\n              [limit]=\"10\">\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/paging/paging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingComponent; });
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

var PagingComponent = (function () {
    function PagingComponent() {
        var _this = this;
        this.rowsClient = [];
        this.fetch(function (data) {
            _this.rowsClient = data;
        });
    }
    PagingComponent.prototype.ngOnInit = function () {
    };
    PagingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    return PagingComponent;
}());
PagingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paging',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/paging/paging.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/paging/paging.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PagingComponent);

//# sourceMappingURL=paging.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/cell/cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/cell/cell.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Cell Selection'\">\r\n  <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\r\n  <ngx-datatable\r\n          class=\"material data-table selection-cell\"\r\n          [rows]=\"rows\"\r\n          [columnMode]=\"'force'\"\r\n          [columns]=\"columns\"\r\n          [limit]=\"10\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"50\"\r\n          [selected]=\"selected\"\r\n          [selectionType]=\"'cell'\"\r\n          (select)=\"onSelect($event)\"\r\n          (activate)=\"onActivate($event)\">\r\n  </ngx-datatable>\r\n</app-card>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/cell/cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
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

var CellComponent = (function () {
    function CellComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    CellComponent.prototype.ngOnInit = function () { };
    CellComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    CellComponent.prototype.onSelect = function (event) { };
    CellComponent.prototype.onActivate = function (event) { };
    return CellComponent;
}());
CellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table-selection-cell',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/selection/cell/cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/selection/cell/cell.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CellComponent);

//# sourceMappingURL=cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/checkbox/checkbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Checkbox Selection'\">\r\n  <span class=\"m-b-20\">use class <code>dt-chk</code> with ngx-datatable element</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table dt-chk\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'checkbox'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n    <ngx-datatable-column [width]=\"50\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n      <ng-template class=\"datatable-checkbox\" ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\r\n        <div class=\"checkbox-fade fade-in-default datatable-header-cell-label\">\r\n          <label>\r\n            <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"/>\r\n            <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n          </label>\r\n        </div>\r\n\r\n      </ng-template>\r\n      <ng-template class=\"datatable-checkbox\" ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n        <div class=\"checkbox-fade fade-in-default datatable-header-cell-label\">\r\n          <label>\r\n            <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"/>\r\n            <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n          </label>\r\n        </div>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Company\"></ngx-datatable-column>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <span *ngFor='let sel of selected'>\r\n          <label class=\"label label-primary\">{{sel.name}}</label>\r\n        </span>\r\n      <span *ngIf=\"!selected.length\">No Selections</span>\r\n    </div>\r\n  </div>\r\n</app-card>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
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

var CheckboxComponent = (function () {
    function CheckboxComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    CheckboxComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    CheckboxComponent.prototype.onActivate = function (event) { };
    CheckboxComponent.prototype.add = function () {
        this.selected.push(this.rows[1], this.rows[3]);
    };
    CheckboxComponent.prototype.update = function () {
        this.selected = [this.rows[1], this.rows[3]];
    };
    CheckboxComponent.prototype.remove = function () {
        this.selected = [];
    };
    return CheckboxComponent;
}());
CheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table-selection-checkbox',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/selection/checkbox/checkbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/selection/checkbox/checkbox.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckboxComponent);

//# sourceMappingURL=checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/multi-rows/multi-rows.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/multi-rows/multi-rows.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Multi Rows Selection'\">\r\n  <span class=\"m-b-20\">use attribute <code>selectionType</code> as <code>multi</code> with ngx-datatable element and select with <code>Ctrl</code> key</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [columns]=\"columns\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'multi'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n        <span *ngFor='let sel of selected'>\r\n          <label class=\"label label-primary\">{{sel.name}}</label>\r\n        </span>\r\n        <span *ngIf=\"!selected.length\">No Selections</span>\r\n    </div>\r\n  </div>\r\n</app-card>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/multi-rows/multi-rows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiRowsComponent; });
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

var MultiRowsComponent = (function () {
    function MultiRowsComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    MultiRowsComponent.prototype.ngOnInit = function () { };
    MultiRowsComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    MultiRowsComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    MultiRowsComponent.prototype.onActivate = function (event) { };
    return MultiRowsComponent;
}());
MultiRowsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table-selection-multi-rows',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/selection/multi-rows/multi-rows.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/selection/multi-rows/multi-rows.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MultiRowsComponent);

//# sourceMappingURL=multi-rows.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/selection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <app-data-table-selection-cell></app-data-table-selection-cell>\r\n        <app-data-table-selection-single-row></app-data-table-selection-single-row>\r\n        <app-data-table-selection-multi-rows></app-data-table-selection-multi-rows>\r\n        <app-data-table-selection-checkbox></app-data-table-selection-checkbox>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionComponent; });
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

var SelectionComponent = (function () {
    function SelectionComponent() {
    }
    SelectionComponent.prototype.ngOnInit = function () {
    };
    return SelectionComponent;
}());
SelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-selection',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/selection/selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/selection/selection.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SelectionComponent);

//# sourceMappingURL=selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/single-row/single-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/single-row/single-row.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Single Row Selection'\">\r\n  <span class=\"m-b-20\">use attribute <code>selectionType</code> as <code>single</code> with ngx-datatable element</span><br><br>\r\n  <ngx-datatable\r\n          class=\"data-table\"\r\n          [rows]=\"rows\"\r\n          [columnMode]=\"'force'\"\r\n          [columns]=\"columns\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\"\r\n          [limit]=\"10\"\r\n          [selected]=\"selected\"\r\n          [selectionType]=\"'single'\"\r\n          (activate)=\"onActivate($event)\"\r\n          (select)='onSelect($event)'>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <ul>\r\n        <li *ngFor='let sel of selected'>\r\n          <span class=\"label label-primary\">{{sel.name}}</span>\r\n        </li>\r\n        <li *ngIf=\"!selected.length\">No Selections</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</app-card>"

/***/ }),

/***/ "../../../../../src/app/components/tables/data-table/selection/single-row/single-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleRowComponent; });
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

var SingleRowComponent = (function () {
    function SingleRowComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.selected = [data[2]];
            _this.rows = data;
        });
    }
    SingleRowComponent.prototype.ngOnInit = function () { };
    SingleRowComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    SingleRowComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    SingleRowComponent.prototype.onActivate = function (event) { };
    return SingleRowComponent;
}());
SingleRowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table-selection-single-row',
        template: __webpack_require__("../../../../../src/app/components/tables/data-table/selection/single-row/single-row.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/data-table/selection/single-row/single-row.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SingleRowComponent);

//# sourceMappingURL=single-row.component.js.map

/***/ })

});
//# sourceMappingURL=data-table.module.chunk.js.map