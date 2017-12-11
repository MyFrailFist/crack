webpackJsonp(["file-upload.module"],{

/***/ "../../../../../src/app/components/file-upload/file-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#uploadInput {\n\t/*Hide input bar*/\n\tdisplay : none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Your Files'\">\n\n      <div>\n        <input type=\"file\" (change)=\"singleUpload($event)\" id=\"uploadInput\">\n      </div>\n\n      <div class=\"container\">\n        <!--[disabled]=\"!pickedFile\" Took this NG directive away as it was no longer needed-->\n        <button (click)=\"openFileSelect()\" class = \"btn btn-primary\">Upload</button>\n        <br>\n        <br>\n        <app-list-file><spinner></spinner></app-list-file>\n      <div *ngIf = \"uploadingList[0]\" class=\"panel panel-primary\">\n        <div class=\"panel-heading bg-primary\">\n          Upload Progress\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-responsive\">\n\n            <tr *ngFor=\"let upload of uploadingList\" >\n              <td *ngIf=\"upload.progress < 100\" > Uploading: \"{{upload.name}}{{upload.extension}}\" , Completed: {{upload.progress}}%</td>\n              <td class=\"table-success\" *ngIf=\"upload.progress === 100\"> \"{{upload.name}}{{upload.extension}}\" Uploaded</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      </div>\n    </app-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_upload__ = __webpack_require__("../../../../../src/app/components/file-upload/shared/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__ = __webpack_require__("../../../../../src/app/components/file-upload/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_list_file_service__ = __webpack_require__("../../../../../src/app/components/file-upload/shared/list-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {FileUploader} from "ng2-file-upload";



var FileUploadComponent = (function () {
    function FileUploadComponent(uploadSvc) {
        this.uploadSvc = uploadSvc;
        this.uploadingList = [];
    }
    // detectFile(event){
    //   //console.log this
    //   this.pickedFile = event.target.files;
    // }
    FileUploadComponent.prototype.openFileSelect = function () {
        document.getElementById("uploadInput").click();
    };
    FileUploadComponent.prototype.singleUpload = function (event) {
        //console.log this
        // let file = this.pickedFile.item(0)
        //.item(0) is a DOM method, select the item of index 0
        var file = event.target.files.item(0);
        this.uploadingNow = new __WEBPACK_IMPORTED_MODULE_1__shared_upload__["a" /* Upload */](file);
        this.uploadingList.push(this.uploadingNow);
        this.uploadSvc.pushUpload(this.uploadingNow);
        // this.lfs.getUserFolder("12ffs3czxczxc");
    };
    // resetFileLibDb(){
    //   this.uploadSvc.resetFileLibDb();
    // }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-file-upload',
        template: __webpack_require__("../../../../../src/app/components/file-upload/file-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/file-upload/file-upload.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_3__shared_list_file_service__["a" /* ListFileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__["a" /* UploadService */]) === "function" && _a || Object])
], FileUploadComponent);

var _a;
//# sourceMappingURL=file-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-upload/file-upload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_upload_component__ = __webpack_require__("../../../../../src/app/components/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_file_list_file_component__ = __webpack_require__("../../../../../src/app/components/file-upload/list-file/list-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_upload_routing__ = __webpack_require__("../../../../../src/app/components/file-upload/file-upload.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {UploadFormComponent} from './upload-form/upload-form.component';





var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__file_upload_routing__["a" /* FileUploadRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase, 'angular-auth-firebase')
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__file_upload_component__["a" /* FileUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_4__list_file_list_file_component__["a" /* ListFileComponent */]
            //UploadFormComponent
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */]]
    })
], FileUploadModule);

//# sourceMappingURL=file-upload.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-upload/file-upload.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_upload_component__ = __webpack_require__("../../../../../src/app/components/file-upload/file-upload.component.ts");

var FileUploadRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__file_upload_component__["a" /* FileUploadComponent */],
        data: {
            breadcrumb: "File Upload"
        }
    }];
//# sourceMappingURL=file-upload.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-upload/list-file/list-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#fileOptionsDropdown{\n\tbackground: none;\n}\n\n#fileHeader{\n\twidth: 60%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/file-upload/list-file/list-file.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\" style=\"display:none;\"></button>\n<app-modal-basic #modalDefault>\n    <div class=\"app-modal-header\">\n        <h4 class=\"modal-title\">Rename \"{{selectedFile.name}}{{selectedFile.extension}}\"</h4>\n        <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"app-modal-body\">\n        <form #renameForm=\"ngForm\" (ngSubmit)=\"renameFile(renameForm)\" (keydown.enter)=\"$event.preventDefault()\">\n\t        New name :\n\t        <input type=\"text\" name=\"newName\" ngModel>\n\t        <button id=\"submitForm\" type=\"submit\" style=\"display: none;\"></button>\n\t\t</form>\n    </div>\n    <div class=\"app-modal-footer\">\n        <button id=\"closeModal\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" (click)=\"dismissModalSubmit()\">Save changes</button> \n    </div>\n</app-modal-basic>\n\n\n<table class=\"table table-responsive\">\n\t<thead class=\"thead-light\">\n\t\t<tr>\n\t\t\t<th id=\"fileHeader\">File</th>\n\t\t\t<th>Date Uploaded</th>\n\t\t\t<th>File size</th>\n\t\t\t<th></th>\n\t\t</tr>\n\t</thead>\n\t\t<tr *ngFor=\"let file of listOfUploads\">\n\t\t\t<td>{{file.name}}{{file.extension}}</td>\n\t\t\t<td>{{file.createdOn | date: \"short\"}}</td>\n\t\t\t<td>{{file.size[0]}}{{file.size[1]}}</td>\n\t\t\t<td>\n\t\t\t\t<div ngbDropdown class=\"dropdown-default dropdown open\" id=\"fileOptionsDropdown\">\n\t                <button ngbDropdownToggle class=\"btn btn-default dropdown-toggle waves-effect waves-light \" type=\"button\" id=\"dropdown1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">...</button>\n\t                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown1\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\n\t                    <a class=\"dropdown-item waves-light waves-effect\" href=\"{{file.url}}\">Download</a>\n\t                    <a class=\"dropdown-item waves-light waves-effect\" (click)=\"renameSelectFile(file)\">Rename</a>\n\t                    <a class=\"dropdown-item waves-light waves-effect\" (click)=\"deleteFile(file)\">Delete</a>\n\t                </div>\n\t            </div>\n\t\t\t</td>\n\t\t</tr>\n\n</table>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/file-upload/list-file/list-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_list_file_service__ = __webpack_require__("../../../../../src/app/components/file-upload/shared/list-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__ = __webpack_require__("../../../../../src/app/components/file-upload/shared/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListFileComponent = (function () {
    function ListFileComponent(listFileSvc, uploadSvc) {
        this.listFileSvc = listFileSvc;
        this.uploadSvc = uploadSvc;
        this.dummy = {
            $key: null,
            file: null,
            nameRefToStorage: null,
            size: null,
            name: "placeholder",
            url: null,
            extension: ".placeholder",
            progress: null,
            createdOn: null,
            userFileLibraryItem: null
        };
    }
    //Modal methods
    ListFileComponent.prototype.openMyModal = function (event) {
        document.querySelector("#" + event).classList.add('md-show');
    };
    ListFileComponent.prototype.closeMyModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    ListFileComponent.prototype.deleteFile = function (upload) {
        this.uploadSvc.deleteUpload(upload);
    };
    ListFileComponent.prototype.renameSelectFile = function (upload) {
        this.selectedFile = upload;
        document.getElementById("modalButton").click();
    };
    ListFileComponent.prototype.renameFile = function (newNameForm) {
        var newName = newNameForm.value.newName;
        this.uploadSvc.renameUpload(this.selectedFile, newName);
    };
    ListFileComponent.prototype.dismissModalSubmit = function () {
        document.getElementById("submitForm").click();
        document.getElementById("closeModal").click();
    };
    ListFileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.listOfUploads = this.listFileSvc.deliverListOfUploaded()
        // console.log("hi")
        this.selectedFile = this.dummy;
        this.listFileSvc.fetchData(function (uploads) {
            _this.listOfUploads = uploads;
        });
    };
    return ListFileComponent;
}());
ListFileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-file',
        template: __webpack_require__("../../../../../src/app/components/file-upload/list-file/list-file.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/file-upload/list-file/list-file.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_list_file_service__["a" /* ListFileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_list_file_service__["a" /* ListFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_list_file_service__["a" /* ListFileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__["a" /* UploadService */]) === "function" && _b || Object])
], ListFileComponent);

var _a, _b;
//# sourceMappingURL=list-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-upload/shared/list-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListFileService = (function () {
    function ListFileService(db, firebaseAuth) {
        this.db = db;
        this.firebaseAuth = firebaseAuth;
        this.userID = this.firebaseAuth.authState.uid;
        this.fileNameList = [];
    }
    // deliverListOfUploaded(): Upload[]{
    //   var fileNameList: Upload[] = [];
    //   var userFolder: Upload[];
    //   this.uploads = this.db.list(`${this.userID}/`);
    //   this.uploads.forEach(listRecords => { //Get user dataList
    //     userFolder = listRecords;
    //   })
    //   userFolder.forEach(rec => { //Get individual records under user dataList
    //     if (rec.currentFile === true ){
    //       fileNameList.push(rec)
    //     }
    //   })
    //   return fileNameList;
    // }
    // fetchData(): Promise<Upload[]>{
    //   return this.db.list(`fileLibrary/${this.userID}/`)
    //   .map(fetchedUploads => 
    //     fetchedUploads = this.filterData(fetchedUploads)
    //   ) //Reassign the uploadList to a filtered one, showing only currentFiles
    //   .first() //Captures the first item emitted by observable, which is the list of upload records we need
    //   .toPromise(); //Convert the observable created to a promise, resolving with the list of upload records
    //   // return new Promise(resolve => resolve(uploads))
    // }
    // private filterData(uploads: Upload[]): Upload[] {
    //   //var userFolder: Upload[] = []
    //   var fileNameList: Upload[] = []
    //   // uploads.forEach(listRecords => { //Get user dataList
    //   //   userFolder = listRecords;
    //   // })
    //   uploads.forEach(rec => { //Get individual records under user dataList
    //     if (rec.userFileLibraryItem === true ){
    //       fileNameList.push(rec)
    //     }
    //   })
    //   return fileNameList
    // }
    ListFileService.prototype.fetchData = function (exportData) {
        this.uploads = this.db.list("fileLibrary/" + this.userID + "/");
        this.uploads.subscribe(function (uploadList) {
            uploadList.forEach(function (upload) {
                //var index = this.fileNameList.indexOf(upload,0)
                // if (upload.currentFile === true && index === -1) {
                //   this.fileNameList.push(upload)
            });
            exportData(uploadList);
        }, function (err) { return console.log(err); });
    };
    return ListFileService;
}());
ListFileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ListFileService);

var _a, _b;
//# sourceMappingURL=list-file.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-upload/shared/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// firebase.initializeApp(environment.firebase);
var UploadService = (function () {
    function UploadService(db, firebaseAuth) {
        this.db = db;
        this.firebaseAuth = firebaseAuth;
        this.userID = this.firebaseAuth.authState.uid;
        //12ffs3czxczxc
        this.basePath = this.userID;
        this.retrievedRecords = [];
        this.uploadingProgress = [];
    }
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child("fileLibrary/" + this.basePath + "/" + upload.file.name).put(upload.file);
        this.uploadingProgress.push(upload);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            upload.progress = Math.ceil((uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100);
        }, function (error) {
            console.log(error);
        }, function () {
            upload.url = uploadTask.snapshot.downloadURL;
            _this.saveFileData(upload);
        });
    };
    UploadService.prototype.saveFileData = function (upload) {
        var _this = this;
        this.getData()
            .then(function (data) {
            //Using promise to get data ensures this run smoothly and delete duplicated records BEFORE upload record is pushed.
            _this.delDuplicateRecord(upload, data);
            _this.db.list("fileLibrary/" + _this.basePath + "/").push(upload);
        });
        //Reload after saving record to database. Using promise as premature reload will cause the data to be not saved.
        //push record to database after all others currentFile are set to false
    };
    UploadService.prototype.getData = function () {
        return this.db.list("fileLibrary/" + this.basePath + "/")
            .first()
            .toPromise();
    };
    UploadService.prototype.delDuplicateRecord = function (upload, dataList) {
        var _this = this;
        // let userFolder: Upload[] = [];
        // dataList.forEach(listRecords => { //Get user dataList
        //   userFolder = listRecords; 
        // }) 
        dataList.forEach(function (rec) {
            if (upload.name == rec.name) {
                //Demote old records with same file name, allowing new record to be the currentFile
                _this.db.object("fileLibrary/" + _this.basePath + "/" + rec.$key).remove();
            }
        });
    };
    UploadService.prototype.deleteUpload = function (upload) {
        var _this = this;
        this.deleteStorageFile(upload.nameRefToStorage)
            .then(function () {
            _this.deleteFileData(upload.$key);
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadService.prototype.deleteFileData = function (key) {
        this.db.object("fileLibrary/" + this.basePath + "/" + key).remove();
    };
    UploadService.prototype.deleteStorageFile = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        return storageRef.child("fileLibrary/" + this.basePath + "/" + name).delete();
    };
    UploadService.prototype.renameUpload = function (upload, newName) {
        this.db.object("fileLibrary/" + this.basePath + "/" + upload.$key).update({ name: newName });
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UploadService);

var _a, _b;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-upload/shared/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var Upload = (function () {
    function Upload(file) {
        this.file = file;
        this.createdOn = __WEBPACK_IMPORTED_MODULE_0_firebase__["database"].ServerValue.TIMESTAMP;
        this.userFileLibraryItem = true;
        //Used to reference to firebase Storage
        this.nameRefToStorage = file.name;
        //Used for display
        var splitName = file.name.split(".");
        this.extension = ".".concat(splitName[splitName.length - 1]);
        this.name = file.name.replace(this.extension, "");
        if (file.size < 1024) {
            this.size = [file.size, "B"];
        }
        else if (file.size >= 1024 && file.size < Math.pow(1024, 2)) {
            var sizeInKB = Math.round(file.size / 1024);
            this.size = [sizeInKB, " KB"];
        }
        else if (file.size >= Math.pow(1024, 2) && file.size < Math.pow(1024, 3)) {
            var sizeInMB = Math.round(file.size / (Math.pow(1024, 2)));
            this.size = [sizeInMB, " MB"];
        }
        else if (file.size >= Math.pow(1024, 3) && file.size < Math.pow(1024, 4)) {
            var sizeInGB = Math.round(file.size / (Math.pow(1024, 3)));
            this.size = [sizeInGB, "GB"];
        }
        else if (file.size >= Math.pow(1024, 4)) {
            var sizeInTB = Math.round(file.size / (Math.pow(1024, 4)));
            this.size = [sizeInTB, "TB"];
        }
    }
    return Upload;
}());

//# sourceMappingURL=upload.js.map

/***/ })

});
//# sourceMappingURL=file-upload.module.chunk.js.map