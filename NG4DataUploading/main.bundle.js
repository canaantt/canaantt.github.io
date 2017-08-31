webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class='container-main'>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        // user: any;
        // public test;
        // public watchTest;
        // constructor(private loginService: LoginService) {
        //      this.setWatch();
        //      this.seeWatch();
        //  }
        // setWatch() {
        //   this.watchTest = this.loginService.userGoogleProfile;
        // }
        // seeWatch() {
        //   this.watchTest.subscribe((data) => {
        //       this.user = data;
        //       console.log('!!!!!at root!!!!', data);
        //   });
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_app_router_module__ = __webpack_require__("../../../../../src/app/router/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projects_dashboard_projects_dashboard_component__ = __webpack_require__("../../../../../src/app/projects-dashboard/projects-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__permissions_permissions_component__ = __webpack_require__("../../../../../src/app/permissions/permissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__files_files_component__ = __webpack_require__("../../../../../src/app/files/files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_state_service__ = __webpack_require__("../../../../../src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_file_service__ = __webpack_require__("../../../../../src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_update_emit_service__ = __webpack_require__("../../../../../src/app/service/update-emit.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__projects_dashboard_projects_dashboard_component__["a" /* ProjectsDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__permissions_permissions_component__["a" /* PermissionsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__files_files_component__["a" /* FilesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__projects_dashboard_projects_dashboard_component__["b" /* DateFormatter */],
            __WEBPACK_IMPORTED_MODULE_21__permissions_permissions_component__["b" /* UserFullNamePipe */],
            __WEBPACK_IMPORTED_MODULE_22__files_files_component__["b" /* Overlapping */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_28__help_help_component__["a" /* HelpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__router_app_router_module__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_23__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_27__service_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_24__service_state_service__["a" /* StateService */],
            __WEBPACK_IMPORTED_MODULE_29__service_update_emit_service__["a" /* UpdateEmitService */],
            __WEBPACK_IMPORTED_MODULE_25__service_file_service__["a" /* FileService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/files/files.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"file-header\">Upload Dataset</h5>\n<br>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div *ngIf=\"project.File\">\n      <label>Existing File meta data</label>\n      <button *ngIf=\"permission.Role==='admin' || permission.Role==='read-write'\" type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeAllFiles()\">\n          <span class=\"fa fa-minus-circle\"></span>Remove\n      </button>\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <h6>File Name</h6>\n        </div>\n        <div class=\"col-3\">\n          <h6>Size</h6>\n        </div>\n        <div class=\"col-3\">\n          <h6>Timestamp</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <p>{{project.File.filename}}</p>\n        </div>\n        <div class=\"col-3\">\n          <p>{{project.File.size}}</p>\n        </div>\n        <div class=\"col-3\">\n          <p>{{project.File.timestamp}}</p>\n        </div>\n      </div>\n\n      <hr>\n    </div>\n\n    <div class=\"col-12\" *ngIf=\"hasFiles\">\n      <label>File summary</label>\n      <table>\n        <thead>\n          <td>Clinical Sheet Name</td>\n          <td>Patient Size</td>\n          <td>Sample Size</td>\n        </thead>\n        <tbody class=\"form-group row\" *ngFor=\"let sum of uploadStatus.uploadSummaryClinical\">\n          <tr>\n            <td><span>{{sum.sheet}}</span></td>\n            <td><span *ngIf=\"sum.patients\">{{sum.patients.length}}</span></td>\n            <td><span *ngIf=\"sum.samples\">{{sum.samples.length}}</span></td>\n          </tr>\n        </tbody>\n      </table>\n      <hr>\n      <table>\n        <thead>\n          <td>Molecular Sheet Name</td>\n          <td>Sample Size</td>\n          <td>Biomarker Size</td>\n        </thead>\n        <tbody class=\"form-group row\" *ngFor=\"let sum of uploadStatus.uploadSummaryMolecular\">\n          <tr>\n            <td><span>{{sum.sheet}}</span></td>\n            <td><span *ngIf=\"sum.samples\">{{sum.samples.length}}</span></td>\n            <td><span *ngIf=\"sum.markers\">{{sum.markers.length}}</span></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div *ngIf=\"permission.Role==='admin' || permission.Role==='read-write'\" class=\"form-group\">\n      <label for=\"exampleInputFile\"></label>\n      <input #fileInput type=\"file\" class=\"form-control-file \" name=\"single\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\"\n        ng2FileSelect [uploader]=\"uploader\" (change)=\"updateStatus(uploader.queue[0])\" />\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/files/files.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "/**\n *  If you want to override some bootstrap variables, you have to change values here.\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\n */\n.btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary, .file-header {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n/**\n *  Do not remove the comments below. It's the markers used by wiredep to inject\n *  sass dependencies when defined in the bower.json of your dependencies\n */\nbody,\nhtml {\n  font-family: \"Lato\";\n  font-size: 14px;\n  font-weight: 300;\n  background: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\na, a:active, a:hover, a:visited {\n  color: #039BE5;\n  text-decoration: none; }\n\na:active, a:hover {\n  color: #03ADFF; }\n\n.tooltip {\n  z-index: 99999 !important; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 13px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\n *  all your sass files automatically\n */\n.file-header {\n  margin-bottom: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/files/files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_file_service__ = __webpack_require__("../../../../../src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Overlapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Overlapping = (function () {
    function Overlapping() {
    }
    Overlapping.prototype.transform = function (arr1, arr2) {
        var overlapped = __WEBPACK_IMPORTED_MODULE_4_underscore__["intersection"](arr1, arr2);
        return overlapped.length / arr1.length * 100;
    };
    return Overlapping;
}());
Overlapping = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'Overlapping'
    }),
    __metadata("design:paramtypes", [])
], Overlapping);

var FilesComponent = (function () {
    function FilesComponent(fb, fileService) {
        this.fb = fb;
        this.fileService = fileService;
        this.hasFiles = false;
        this.errorMsg = '';
        this.uploadedstring = 'Not Uploaded';
        this.uploadStatus = {
            'uploadSummaryClinical': [],
            'uploadSummaryMolecular': [],
            'allSamplesUploaded': [],
            'allPatientsUploaded': []
        };
        this.uploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('IN FILE COMPONENT, project is: ', this.project);
    }
    FilesComponent.prototype.uploadComplete = function (message) {
        this.uploaded.emit(message);
    };
    FilesComponent.prototype.ngOnInit = function () {
        this.id = this.project._id;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3000/upload/' + this.id + '/' + this.user.email });
        this.filerefresh();
    };
    FilesComponent.prototype.filerefresh = function () {
        var _this = this;
        console.log('in File component refresh()');
        this.fileService.uploadingValidation(this.id + '_uploadingSummary')
            .catch(this.handleError)
            .subscribe(function (res) {
            if (res[0].length > 0) {
                _this.hasFiles = true;
            }
            _this.uploadStatus.uploadSummaryClinical = res[0].filter(function (m) { return 'patients' in m; });
            _this.uploadStatus.uploadSummaryMolecular = res[0].filter(function (m) { return 'markers' in m; });
            var meta = res[0].filter(function (m) { return m.meta; })[0];
            _this.uploadStatus.allSamplesUploaded = meta.allSampleIDs;
            _this.uploadStatus.allPatientsUploaded = meta.allPatientIDs;
        });
    };
    FilesComponent.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    FilesComponent.prototype.updateStatus = function (fileitem) {
        if (this.errorMessage.Name !== '' || this.errorMessage.DataCompliance !== '') {
            alert('Please fill all the required fields before proceeding with data uploading.');
        }
        else {
            fileitem.upload();
            this.uploadedstring = 'Uploaded';
            console.log(fileitem.file);
            this.project.File = {
                'filename': fileitem.file.name,
                'size': fileitem.file.size,
                'timestamp': Date()
            };
            this.uploadComplete('Being uploaded');
            this.filerefresh();
            // if (fileitem.file.size >= 10000000) {
            alert('An email will be sent shortly after the operation is complete.');
            // }
        }
    };
    FilesComponent.prototype.cancelUpdate = function (fileitem) {
        var len = this.uploader.queue.length;
        this.uploader.queue.pop();
        this.uploadComplete('Being canceled');
    };
    FilesComponent.prototype.removeAllFiles = function () {
        var confirmDeletion = confirm('Are you sure you want to delete all the files related to this dataset? ');
        if (confirmDeletion) {
            this.fileService.removeFilesByProjectID(this.id);
            this.project.File = null;
            console.log('test...');
            this.uploadComplete('Being removed');
            this.hasFiles = false;
            this.uploader.queue = [];
        }
        else {
            console.log('file deletion is canceled.');
        }
    };
    FilesComponent.prototype.projectValidChecking = function () {
        this.errorMsg = 'Still working on this feature';
        return false;
    };
    return FilesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FilesComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FilesComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FilesComponent.prototype, "permission", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FilesComponent.prototype, "errorMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FilesComponent.prototype, "uploaded", void 0);
FilesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-files',
        template: __webpack_require__("../../../../../src/app/files/files.component.html"),
        styles: [__webpack_require__("../../../../../src/app/files/files.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */]) === "function" && _c || Object])
], FilesComponent);

var _a, _b, _c;
//# sourceMappingURL=files.component.js.map

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"help\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <!-- START Help Google Registration -->\n        <h5 class=\"help-header mb-3\">Data Portal & Google</h5>\n        <p>Oncoscape's Data Portal uses Google’s Authentication Service, a secure mechanism for managing accounts, so that users\n          do not need a separate login and password for their datasets. Your name and Google email address will be the only\n          personal information from your Google account that will be shared with Oncoscape. At login, Google provides the\n          Data Portal a randomly generated code that verifies your identity within the system.\n        </p>\n        <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <h5 class=\"mb-0\">\n                <a class=\"help-accordion-title\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\"\n                  aria-controls=\"collapseOne\">\n                  <h6>First Time Registration</h6>\n                </a>\n              </h5>\n            </div>\n\n            <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"card-block\">\n                <ol>\n                  <li>Click the \"Register\" button</li>\n                  <li>Please review the User Agreement and fill in your First & Last Name, Institutional Email and Institution.\n                    Click \"Agree\".\n                    <li>Authentication works in a pop-up box please ensure you have popups enabled</li>\n                    <li>A new window will appear that asks for your Google account information (if you do not have a Google account,\n                      instructions for creating one can be found <a href=\"https://accounts.google.com/SignUp?hl=en\">here</a>.\n                      Enter your Google email account and click “Next”</li>\n                    <li>Google will find your account and, if you are not already signed into Google on your browser, will be\n                      prompted to enter your Google password. Enter your password and click “Sign in” </li>\n                    <li>Google will display a page describing what information will be shared with Oncoscape's Data Portal (i.e.,\n                      your name, email address, and public Google + URL, if you have one). By clicking the “Allow” button\n                      you agree to use your Google account to sign in the Data Portal.  </li>\n                    <li>You will be directed to the Dataset Dashboard page and can now add private datasets</li>\n                    <li>Once you have registered, upon returing to the site simply click the login button and Google with automatically\n                      log you in and and reroute you to the Dataset Dashboard.\n                    </li>\n                    <li>If you have questions, please contact the <a href=\"http://resources.sttrcancer.org/oncoscape-contact\"> Oncoscape Team.</a>  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n              <h5 class=\"mb-0\">\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  <h6>Returning Users</h6>\n                </a>\n              </h5>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n              <div class=\"card-block\">\n                <ol>\n                  <li>Once you have registered, upon returing to the site simply click the login button and Google with automatically\n                    log you in and and reroute you to the Dataset Dashboard.\n                  </li>\n                  <li>If you have questions, please contact the <a href=\"http://resources.sttrcancer.org/oncoscape-contact\"> Oncoscape Team.</a>  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- END Help Google Registration -->\n      </div>\n      <!-- END col-->\n    </div>\n    <!-- END row -->\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <!-- START Help Dataset Upload -->\n        <h5 class=\"help-header mt-5 mb-3\">Uploading a Dataset</h5>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n          specimen book. It has survived not only five centuries, and more recently with desktop publishing software like\n          Aldus PageMaker including versions of Lorem Ipsum.\n        </p>\n        <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n              <h5 class=\"mb-0\">\n                <a class=\"help-accordion-title\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"true\"\n                  aria-controls=\"collapseThree\">\n                  <h6>Add New Dataset</h6>\n                </a>\n              </h5>\n            </div>\n\n            <div id=\"collapseThree\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n              <div class=\"card-block\">\n                <ol>\n                  <li></li>\n                  <li></li>\n                  <li></li>\n                  <li></li>\n                  <li></li>\n                  <li>If you have questions, please contact the <a href=\"http://resources.sttrcancer.org/oncoscape-contact\"> Oncoscape Team.</a>  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingFour\">\n              <h5 class=\"mb-0\">\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                  <h6>Edit Dataset</h6>\n                </a>\n              </h5>\n            </div>\n            <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n              <div class=\"card-block\">\n                <ol>\n                  <li></li>\n                  <li></li>\n                  <li></li>\n                  <li></li>\n                  <li></li>\n                  <li>If you have questions, please contact the <a href=\"http://resources.sttrcancer.org/oncoscape-contact\"> Oncoscape Team.</a>  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingFive\">\n              <h5 class=\"mb-0\">\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n                  <h6>Delete Dataset</h6>\n                </a>\n              </h5>\n            </div>\n            <div id=\"collapseFive\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\n              <div class=\"card-block\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n                helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\n                heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- END Help Dataset Upload -->\n      </div>\n      <!-- END col-->\n    </div>\n    <!-- END row-->\n    <h5 class=\"help-header my-5\">Example Datasets</h5>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/help/help.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, ".btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary, .help-header {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n.help {\n  padding-top: 150px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/help/help.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"landing\">\n    <div class=\"container py-5 text-center\">\n        <div class=\"row\">\n            <div class=\"col-md-6 mx-auto\">\n                <div class=\"card rounded-2\">\n                    <div class=\"card-header text-center\">\n                        <h3 class=\"mb-0 landing-title\">Data Portal</h3>\n                    </div>\n                    <div class=\"text-center card-body\">\n                        <div class=\"btn-group\">\n                            <div class=\"btn landing-button\">\n                                <a class=\"text-center\" *ngIf='!user' (click)=\"googleLogin()\">Login </a>\n                                <a class=\"text-center\" *ngIf='user' (click)=\"googleLogOut()\">Logout</a>\n                            </div>\n                            <div class=\"btn landing-button\" (click)=\"goRegister()\">Register</div>\n                        </div>\n                        <div class=\"col-12\">\n                            <p><a href=\"#/help\" class=\"landing-link\">Register with Google. &nbsp;See Help</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, ".btn-primary, .landing-button {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary, a.landing-link {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n.landing {\n  margin-top: 225px; }\n\n.landing-title {\n  font-weight: 300;\n  letter-spacing: 10px;\n  font-size: 30px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-transform: uppercase;\n  color: #039BE5; }\n\n.landing-button {\n  margin-top: 40px;\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_state_service__ = __webpack_require__("../../../../../src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LandingComponent = (function () {
    function LandingComponent(fb, stateService, userService, loginService, ref, zone, router) {
        this.fb = fb;
        this.stateService = stateService;
        this.userService = userService;
        this.loginService = loginService;
        this.ref = ref;
        this.zone = zone;
        this.router = router;
        this.counter = 0;
    }
    LandingComponent.prototype.getUser = function () {
        var _this = this;
        // console.log('Landing getUser being called', this.counter++);
        this.stateService.user.subscribe(function (res) {
            _this.zone.run(function () { _this.user = res; });
        });
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getUser();
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].timer(10, 500);
        this.subscription = timer.subscribe(function () {
            _this.getUser();
            if (_this.user !== null) {
                _this.subscription.unsubscribe();
                console.log('This section is called.');
            }
        });
    };
    LandingComponent.prototype.update = function () {
        var _this = this;
        this.stateService.user.subscribe(function (res) {
            _this.user = res;
            console.log('in update');
            _this.ref.markForCheck();
            console.log('after ref.markForCheck');
        });
    };
    LandingComponent.prototype.goRegister = function () {
        this.router.navigate(['/register']);
    };
    LandingComponent.prototype.googleLogin = function () {
        this.loginService.googleLogin();
    };
    LandingComponent.prototype.googleLogOut = function () {
        this.loginService.googleLogOut();
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_state_service__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _g || Object])
], LandingComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/permission.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Permission; });
// enum roles {'admin', 'read-write', 'read-only'};
var Permission = (function () {
    function Permission() {
    }
    return Permission;
}());

//# sourceMappingURL=permission.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"header\">\n  <nav class=\"navbar navbar-toggleable-sm navbar-inverse bg-faded fixed-top\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">\n      <img alt='Brand' src='../assets/images/logo-white.png' class='navbar-logo-img d-inline-block align-top '>\n      <span class=\"navbar-logo-text\">Oncoscape</span>\n    </a>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav float-left\">\n        <a class=\"navbar-items nav-item nav-link active \" *ngIf='user' (click)='goDashboard()'><span class=\"fa fa-dashboard\"></span>Dashboard</a>\n        <a class=\"navbar-items nav-item nav-link active \" *ngIf='user' (click)='goHelp()'><span class=\"fa fa-question-circle\"></span>Help</a>        \n        <a class=\"nav-item nav-link navbar-items active\" href=\"http://resources.sttrcancer.org/oncoscape-contact\"><span class=\"fa fa-comments\"></span>Feedback</a>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img *ngIf='user'  class=\"navbar-pic\" src={{user.thumbnail}} alt=\"Smiley face\"></a>\n          <div *ngIf='user' class=\"dropdown-menu \" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" (click)=\"toProfile()\">Account</a>\n            <div class=\"dropdown-item\">\n              <a *ngIf='!user'  (click)=\"googleLogin()\">Login</a>\n              <a *ngIf='user' (click)=\"googleLogOut()\">Sign out</a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    \n  </nav>\n  <nav class=\"navbar fixed-bottom\">\n      <ng2-slim-loading-bar [color]=\"color\" [height]=\"'10px'\"></ng2-slim-loading-bar> \n  </nav>\n</div>\n \n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "/**\n *  If you want to override some bootstrap variables, you have to change values here.\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\n */\n.btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n/**\n *  Do not remove the comments below. It's the markers used by wiredep to inject\n *  sass dependencies when defined in the bower.json of your dependencies\n */\nbody,\nhtml {\n  font-family: \"Lato\";\n  font-size: 14px;\n  font-weight: 300;\n  background: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\na, a:active, a:hover, a:visited {\n  color: #039BE5;\n  text-decoration: none; }\n\na:active, a:hover {\n  color: #03ADFF; }\n\n.tooltip {\n  z-index: 99999 !important; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 13px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\n *  all your sass files automatically\n */\n.navbar {\n  border: none;\n  box-shadow: 0 2px 3px #bbb; }\n\n.navbar-logo-img {\n  max-height: 40px;\n  image-rendering: crisp-edges;\n  margin-right: 10px;\n  margin-left: 60px; }\n\n.navbar-logo-text {\n  font-size: 18px;\n  line-height: 40px;\n  vertical-align: middle;\n  color: #FFFFFF;\n  letter-spacing: 6px;\n  text-transform: uppercase; }\n\n.navbar-inverse {\n  border: none;\n  background-color: #039BE5; }\n\n.navbar-inverse .navbar-toggle {\n  border: none; }\n\n.navbar-items {\n  padding-right: 5px;\n  color: #fff;\n  margin-top: 12px;\n  font-size: 14px;\n  cursor: pointer; }\n  .navbar-items span {\n    margin-right: 5px;\n    color: #fff; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #0383c2; }\n\n.navbar-inverse .navbar-toggle {\n  border-color: #fff; }\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #FFFFFF; }\n\n.navbar-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-left: 10px;\n  margin-right: 60px;\n  cursor: pointer; }\n\n.dropdown-item {\n  font-size: 12px; }\n\n.dropdown-menu {\n  min-width: 8rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_state_service__ = __webpack_require__("../../../../../src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_update_emit_service__ = __webpack_require__("../../../../../src/app/service/update-emit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = (function () {
    function NavbarComponent(stateService, userService, loginService, updateEmitService, slimLoadingBarService, router) {
        var _this = this;
        this.stateService = stateService;
        this.userService = userService;
        this.loginService = loginService;
        this.updateEmitService = updateEmitService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.router = router;
        this.colors = ['red', 'orange', 'blue', '#9fe25a', 'purple', '#88c26e', '#70936c', '#40e0d0', '#99d5cf'];
        this.counter = 0;
        console.log('in Nav Constructor');
        this.stateService.user.subscribe(function (data) {
            _this.user = data;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateEmitService.updateStatus
            .subscribe(function (res) {
            console.log(res);
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            _this.color = _this.colors[(_this.counter++ % 9)];
            _this.completeLoading();
        });
    };
    NavbarComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.interval = 50;
        this.slimLoadingBarService.start(function () {
            console.log('Loading complete');
        });
    };
    NavbarComponent.prototype.stopLoading = function () {
        this.slimLoadingBarService.stop();
    };
    NavbarComponent.prototype.completeLoading = function () {
        this.slimLoadingBarService.complete();
    };
    NavbarComponent.prototype.goDashboard = function () {
        if (this.user) {
            this.router.navigate(['projects/', 'dashboard']);
        }
        else {
            alert('Please Log in or register.');
        }
    };
    NavbarComponent.prototype.goHelp = function () {
        this.router.navigate(['help']);
    };
    NavbarComponent.prototype.googleLogOut = function () {
        this.loginService.googleLogOut();
    };
    NavbarComponent.prototype.toProfile = function () {
        var _this = this;
        this.userService.getUserIDByGmail(this.user.email)
            .subscribe(function (res) {
            _this.router.navigate(["/users/" + res[0]._id + "/"]);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_state_service__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_update_emit_service__["a" /* UpdateEmitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_update_emit_service__["a" /* UpdateEmitService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _f || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/permissions/permissions.component.html":
/***/ (function(module, exports) {

module.exports = "<div #permissions class=\"permissions\">\n  <hr>\n  <h5 class=\"permissions-header\">Permissions</h5>\n  <br>\n  <!-- START of title row -->\n  <div class=\"row \">\n    <div class=\"col-3\">\n      <h6>Current User</h6>\n    </div>\n    <div class=\"col-3 \">\n      <h6>Permissions</h6>\n    </div>\n    <div class=\"col-2\">\n      <h6>Remove/Add</h6>\n    </div>\n  </div>\n  <!-- END of title row -->\n  <!-- START of admin -->\n  <div *ngIf=\"role === 'admin'\">\n    <div *ngFor=\"let permission of permissions$ | async\">\n      <div *ngIf=\"project.Author === permission.User\" class=\"row\">\n        <div class=\"col-3\">\n          <p>{{permission.User | userFullName | async }}</p>\n        </div>\n        <div class=\"col-3\">\n          <p>Dataset Administrator</p>\n        </div>\n        <div class=\"col-2\">\n          <p class=\"fa fa-ban\" style=\"color:#cdcdcd;\"></p>\n        </div>\n      </div>\n      <!-- START of current users -->\n      <div *ngIf=\"project.Author !== permission.User\">\n        <div class=\"row\">\n          <div class=\"col-3\">\n            <p>{{permission.User | userFullName | async }}</p>\n          </div>\n          <div class=\"col-3\">\n            <select [(ngModel)]=\"permission.Role\" (change)=\"updatePermission(permission, $event.target.value)\" class=\"form-control\">\n              <option *ngFor=\"let role of roles\" [value]=\"role\">{{role}}</option>\n            </select>\n          </div>\n          <div class=\"col-2\">\n            <span *ngIf=\"project.Author !== permission.User\" class=\"fa fa-minus-circle permission-fa\" (click)=\"deletePermission(permission)\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END of current users -->\n    <br>\n    <br>\n    <!-- START of new users -->\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h6>Add New Users</h6>\n      </div>\n    </div>\n    <form class='submitForm' [formGroup]=\"newPermissionForm\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-3\">\n            <input class=\"form-control\" type=\"text\" formControlName=\"Email\" placeholder=\"Enter Registered Users Email\">\n          </div>\n          <div class=\"col-3\">\n            <select formControlName=\"Role\" class=\"form-control\">\n                          <option *ngFor=\"let role of roles\" [ngValue]=\"role\">{{role}}</option>\n                        </select>\n          </div>\n          <div class=\"col-2\">\n            <span (click)=\"submitPermissions()\" class=\"fa fa-plus-circle permission-fa\"></span>\n          </div>\n        </div>\n        <small [hidden]=\"newPermissionForm.controls.Email.valid\" class=\"text-danger\">Please Add Valid Email</small>\n      </div>\n    </form>\n    <small class=\"text-danger\">{{emailError}}</small>\n    <!-- END of new users -->\n  </div>\n  <!-- END of admin ngIf -->\n  <!-- START different view if not an admin -->\n  <div *ngIf=\"role !== 'admin'\">\n    <div class=\"form-group\" *ngFor=\"let permission of permissions$ | async\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <p class=\"detail-users\">{{permission.User | userFullName | async }}</p>\n        </div>\n        <div class=\"col-3\">\n          <p>{{permission.Role}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END different view if not an admin -->\n</div>\n<hr>"

/***/ }),

/***/ "../../../../../src/app/permissions/permissions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "/**\n *  If you want to override some bootstrap variables, you have to change values here.\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\n */\n.btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary, .permissions-header {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n/**\n *  Do not remove the comments below. It's the markers used by wiredep to inject\n *  sass dependencies when defined in the bower.json of your dependencies\n */\nbody,\nhtml {\n  font-family: \"Lato\";\n  font-size: 14px;\n  font-weight: 300;\n  background: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\na, a:active, a:hover, a:visited {\n  color: #039BE5;\n  text-decoration: none; }\n\na:active, a:hover {\n  color: #03ADFF; }\n\n.tooltip {\n  z-index: 99999 !important; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 13px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\n *  all your sass files automatically\n */\n.permissions-header {\n  margin-bottom: 0px; }\n\n.permissions-fa {\n  margin-top: 10px;\n  color: #039BE5; }\n  .permissions-fa:hover {\n    color: #03ADFF; }\n\n.permission-fa {\n  margin-top: 10px;\n  color: #039BE5; }\n  .permission-fa:hover {\n    color: #03ADFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/permissions/permissions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_permission__ = __webpack_require__("../../../../../src/app/models/permission.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_permission_service__ = __webpack_require__("../../../../../src/app/service/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_userEmail_validator__ = __webpack_require__("../../../../../src/app/validators/userEmail.validator.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserFullNamePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var roles;
(function (roles) {
    roles[roles["admin"] = 0] = "admin";
    roles[roles["read-write"] = 1] = "read-write";
    roles[roles["read-only"] = 2] = "read-only";
})(roles || (roles = {}));
var UserFullNamePipe = (function () {
    function UserFullNamePipe(userService) {
        this.userService = userService;
    }
    UserFullNamePipe.prototype.transform = function (id) {
        return this.userService.getUsersByID(id)
            .map(function (res) { return res[0].FirstName + ' ' + res[0].LastName; });
    };
    return UserFullNamePipe;
}());
UserFullNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'userFullName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserFullNamePipe);

var PermissionsComponent = (function () {
    function PermissionsComponent(userService, permissionService, fb) {
        this.userService = userService;
        this.permissionService = permissionService;
        this.fb = fb;
        this.roles = ['admin', 'read-write', 'read-only'];
    }
    PermissionsComponent.prototype.ngOnInit = function () {
        this.newPermissionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroup */]({
            Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_5__validators_userEmail_validator__["a" /* UserEmailValidators */].UserEmailFormat]),
            Role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('read-only', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.id = this.project._id;
        this.getPermissions();
        console.log('Current role is...........', this.role);
    };
    PermissionsComponent.prototype.getPermissions = function () {
        this.permissions$ = this.permissionService.getPermissionsByProjectID(this.id);
    };
    PermissionsComponent.prototype.permissionItem = function (val) {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroup */]({
            Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */](val, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_5__validators_userEmail_validator__["a" /* UserEmailValidators */].UserEmailFormat]),
            Role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('read-only', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    };
    PermissionsComponent.prototype.addPermission = function (formValue) {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_2__models_permission__["a" /* Permission */]();
        this.userService.userValidationByEmail(formValue.Email)
            .subscribe(function (res) {
            console.log(res[0]);
            if (typeof (res[0]) !== 'undefined') {
                p.User = res[0]._id;
                p.Project = _this.project._id;
                p.Role = formValue.Role;
                _this.permissionService.getPermissionByUserByProject(p.User, p.Project)
                    .subscribe(function (res) {
                    if (typeof (res) === 'undefined') {
                        _this.permissionService.create(p).subscribe(function () { return _this.getPermissions(); });
                    }
                    else {
                        alert('This user has already been added to this project');
                        return;
                    }
                });
            }
            else {
                _this.emailError = 'Email is not in the user list. Please invite this user to register first.';
            }
            console.log(_this.emailError);
        });
    };
    PermissionsComponent.prototype.submitPermissions = function () {
        this.addPermission(this.newPermissionForm.value);
        this.newPermissionForm.reset({ Email: '', Role: 'read-only' });
    };
    PermissionsComponent.prototype.updatePermission = function (permission, permissionRole) {
        var _this = this;
        this.permissionService.update(permission, permissionRole).subscribe(function () { return _this.getPermissions; });
    };
    PermissionsComponent.prototype.updatePermissions = function () {
        var _this = this;
        this.newPermissionForm.get('Permissions').value.forEach(function (element) {
            console.log(element);
            _this.updatePermission(element, element.Role);
        });
    };
    PermissionsComponent.prototype.deletePermission = function (permission) {
        var _this = this;
        this.permissionService.delete(permission).subscribe(function () { return _this.getPermissions(); });
    };
    return PermissionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PermissionsComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PermissionsComponent.prototype, "role", void 0);
PermissionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-permissions',
        template: __webpack_require__("../../../../../src/app/permissions/permissions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/permissions/permissions.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_permission_service__["a" /* PermissionService */], __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_permission_service__["a" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_permission_service__["a" /* PermissionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _d || Object])
], PermissionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=permissions.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\">\n   <div *ngIf=\"project\">\n      <div class=\"container\">\n        <div class=\"row \">\n          <div class=\"col-12 \">\n            <h5 class=\"detail-header\">Dataset Details</h5>\n            <small class=\"text-danger\" *ngIf=\"errorMessage.Name!==''\">{{errorMessage.Name}}</small>\n            <form>\n              <div class=\"row \">\n                <div class=\"col-10\">\n                  <div class=\"form-group \">\n                    <label class=\"detail-label\">Dataset Name<span class=\"text-danger\">*</span></label>\n                    <input [(ngModel)]=\"project.Name\" name=\"projectName\" class=\"form-control\" placeholder=\"Dataset Name\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"detail-label \">Description</label>\n                    <textarea [(ngModel)]=\"project.Description\" name=\"projectDescription\" class=\"form-control\" rows=\"10\"></textarea>\n                  </div>\n                </div>\n              </div>\n            <!-- END project details -->\n            <!-- START annotations -->\n            <div #annotations>\n              <div *ngIf='project.Annotations.length > 0'>\n                <div class=\"row \">\n                  <div class=\"col-3\">\n                    <h6>Dataset Annotation<span class=\"text-danger\">*</span></h6>\n                  </div>\n                  <div class=\"col-3 \">\n                    <h6>Key Value<span class=\"text-danger\">*</span></h6>\n                  </div>\n                  <div class=\"col-2\">\n                    <h6>Remove/Add</h6>\n                  </div>\n                </div>\n                <!-- START saved annotation values -->\n                <div *ngFor=\"let annot of project.Annotations; let i = index\">\n                  <div class=\"row\">\n                    <div class=\"col-3\">\n                      <p>{{annot.key}}</p>\n                    </div>\n                    <div class=\"col-3 \">\n                      <p>{{annot.value}}</p>\n                    </div>\n                    <div class=\"col-2\">\n                      <div class=\"fa fa-minus-circle detail-fa\" (click)=\"project.Annotations.splice(i,1)\"></div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n              </div>\n              <!-- START add new annotations -->\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <h6>Add New Annotation</h6>\n                </div>\n              </div>\n              <form class='submitForm' [formGroup]=\"newAnnotationForm\" (ngSubmit)=\"submitAnnotations()\">\n                <div class=\"row \">\n                  <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" formControlName=\"key\" placeholder=\"e.g. Sample Size\">\n                  </div>\n                  <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" formControlName=\"value\" placeholder=\"e.g. 110\">\n                  </div>\n                  <div class=\"col-2\">\n                    <div class=\"fa fa-plus-circle detail-fa\" (click)=\"submitAnnotations()\"></div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </form>\n          <!-- END annotations -->\n          <!-- START permissions -->\n          <div *ngIf=\"permission\">\n            <app-permissions [role]=\"permission.Role\" [project]=\"project\"></app-permissions>\n            <div *ngIf=\"permission.Role==='admin' || permission.Role==='read-write'\" class=\"well form-group\">\n              <div clas=\"col-12\">\n                <h5 class=\"detail-header\">Regulatory Infomation<span class=\"text-danger\">*</span></h5>\n                <p>Is this data derived from Human Subjects?</p>\n              </div>\n            </div>\n            <!-- START human yes/no -->\n            <div class=\"row\">\n              <div class=\"col-1\">\n                <input type=\"radio\" value=\"human\" name=\"human\" [(ngModel)]=\"project.DataCompliance.ComplianceOption\" (change)=\"collectDataCompliance('human')\">&nbsp;Yes\n              </div>\n              <div class=\"col-1\">\n                <input type=\"radio\" value=\"non-human\" name=\"non-human\" [(ngModel)]=\"project.DataCompliance.ComplianceOption\" (change)=\"collectDataCompliance('non-human')\">&nbsp;No\n              </div>\n            </div>\n            <!-- END human yes/no -->\n            <!-- START appropriate Documentation -->\n            <div *ngIf=\"project.DataCompliance.ComplianceOption === 'human'\">\n              <br>\n              <div>Please Select Appropriate Documentation </div>\n              <small class=\"text-danger\" *ngIf=\"errorMessage.DataCompliance !==''\">{{errorMessage.DataCompliance}}</small>\n              <br>\n              <div class=\"row\">\n                <div class=\"col-3\">\n                  <input type=\"radio\" value=\"IRBChecked\" name=\"humanStudy\" [(ngModel)]=\"project.DataCompliance.HumanStudy\">&nbsp;IRB\n                  <div *ngIf=\"project.DataCompliance.HumanStudy === 'IRBChecked'\">\n                    <label>Enter IRB Number</label>\n                    <input name=\"IRBNumber\" class=\"form-control\" [(ngModel)]=\"project.DataCompliance.IRBNumber\" rows=\"1\">\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <input type=\"radio\" value=\"IECChecked\" name=\"humanStudy\" [(ngModel)]=\"project.DataCompliance.HumanStudy\">&nbsp;IEC\n\n                  <div *ngIf=\"project.DataCompliance.HumanStudy  === 'IECChecked'\">\n                    <label>Enter IEC Number </label>\n                    <input name=\"IECNumber\" class=\"form-control\" [(ngModel)]=\"project.DataCompliance.IECNumber\" rows=\"1\">\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <input type=\"radio\" value=\"ExemptedCheckedWithWaiver\" name=\"humanStudy\" [(ngModel)]=\"project.DataCompliance.HumanStudy\">&nbsp;Exempted\n                  with Waiver\n                  <div *ngIf=\"project.DataCompliance.HumanStudy  === 'ExemptedCheckedWithWaiver'\">\n                    <label>Enter Waiver Number </label>\n                    <input name=\"exempted\" class=\"form-control\" [(ngModel)]=\"project.DataCompliance.Waiver\" rows=\"1\">\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <input type=\"radio\" value=\"ExemptedChecked\" name=\"humanStudy\" [(ngModel)]=\"project.DataCompliance.HumanStudy\">&nbsp;Exempted\n                </div>\n              </div>\n            </div>\n            <!-- END appropriate documentation -->\n            <hr>\n            <app-files [project]=\"project\" [user]=\"user\" [permission]=\"permission\" [errorMessage]=\"errorMessage\" (uploaded)=\"fileUpdates($event)\"></app-files>\n          </div>\n          <!-- END permissions -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/project-detail/project-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "/**\n *  If you want to override some bootstrap variables, you have to change values here.\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\n */\n.btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary, .detail-header {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n/**\n *  Do not remove the comments below. It's the markers used by wiredep to inject\n *  sass dependencies when defined in the bower.json of your dependencies\n */\nbody,\nhtml {\n  font-family: \"Lato\";\n  font-size: 14px;\n  font-weight: 300;\n  background: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\na, a:active, a:hover, a:visited {\n  color: #039BE5;\n  text-decoration: none; }\n\na:active, a:hover {\n  color: #03ADFF; }\n\n.tooltip {\n  z-index: 99999 !important; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 13px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\n *  all your sass files automatically\n */\n.detail {\n  padding-top: 0px;\n  position: absolute; }\n\n.detail-header {\n  margin-bottom: 25px; }\n\n.detail-label {\n  font-weight: 400; }\n\n.detail-fa {\n  margin-top: 10px;\n  color: #039BE5; }\n  .detail-fa:hover {\n    color: #03ADFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_permission_service__ = __webpack_require__("../../../../../src/app/service/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_file_service__ = __webpack_require__("../../../../../src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_irb_service__ = __webpack_require__("../../../../../src/app/service/irb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__permissions_permissions_component__ = __webpack_require__("../../../../../src/app/permissions/permissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__files_files_component__ = __webpack_require__("../../../../../src/app/files/files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_state_service__ = __webpack_require__("../../../../../src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_update_emit_service__ = __webpack_require__("../../../../../src/app/service/update-emit.service.ts");
/* unused harmony export IrbDetailService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var roles;
(function (roles) {
    roles[roles["full-access"] = 0] = "full-access";
    roles[roles["read-only"] = 1] = "read-only";
})(roles || (roles = {}));
var IrbDetailService = (function () {
    function IrbDetailService(irbService) {
        this.irbService = irbService;
    }
    IrbDetailService.prototype.transform = function (id) {
        return this.irbService.getIrbObjIDByIRBNumber(id)
            .map(function (response, err) {
            if (err) {
                console.log(err);
                return err;
            }
            else {
                return response[0].IRBTitle;
            }
        });
    };
    return IrbDetailService;
}());
IrbDetailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'IrbDetailService'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__service_irb_service__["a" /* IrbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_irb_service__["a" /* IrbService */]) === "function" && _a || Object])
], IrbDetailService);

var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(route, projectService, permissionService, fileService, irbService, userService, stateService, elementRef, updateEmitService, fb) {
        var _this = this;
        this.route = route;
        this.projectService = projectService;
        this.permissionService = permissionService;
        this.fileService = fileService;
        this.irbService = irbService;
        this.userService = userService;
        this.stateService = stateService;
        this.elementRef = elementRef;
        this.updateEmitService = updateEmitService;
        this.fb = fb;
        this.errorMessage = { Name: '', DataCompliance: '' };
        this.id = this.route.snapshot.params['id'];
        this.stateService.user.subscribe(function (res) {
            if (res !== null) {
                _this.user = res;
                _this.getUserID(res.email, _this.id);
            }
        });
        this.projectService.getProjectByID(this.route.snapshot.params['id'])
            .subscribe(function (res0) {
            _this.project = res0;
        });
        var eventStreamClick = __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromEvent(elementRef.nativeElement, 'click')
            .map(function () { return _this.project; })
            .debounceTime(500)
            .subscribe(function (input) {
            _this.statusMsg = '';
            _this.update(_this.project);
        });
        var eventStreamKeyUp = __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromEvent(elementRef.nativeElement, 'keyup')
            .map(function () { return _this.project; })
            .debounceTime(500)
            .subscribe(function (input) {
            _this.statusMsg = '';
            _this.update(_this.project);
        });
    }
    ProjectDetailComponent.prototype.getUserID = function (id, projectID) {
        var _this = this;
        this.userService.getUserIDByGmail(id)
            .subscribe(function (res) {
            _this.getPermission(res[0]._id, projectID);
            _this.userID = res[0]._id;
        });
    };
    ProjectDetailComponent.prototype.getPermission = function (userID, projectID) {
        var _this = this;
        this.permissionService.getPermissionByUserByProject(userID, projectID)
            .subscribe(function (res) {
            _this.permission = res;
        });
    };
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.newAnnotationForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({
            key: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    ProjectDetailComponent.prototype.update = function (project) {
        var _this = this;
        if (!this.updatePreChecking(project)) {
            console.log('Please see the error message in red.');
        }
        else {
            this.projectService.update(project).subscribe(function () {
                _this.statusReport();
                _this.refresh();
            });
        }
    };
    ProjectDetailComponent.prototype.updatePreChecking = function (project) {
        if (this.project.Name === '') {
            this.errorMessage.Name = 'Project Name is required.';
            return false;
        }
        else {
            this.errorMessage.Name = '';
            if (this.project.DataCompliance.ComplianceOption === 'human'
                && this.project.DataCompliance.IRBNumber === null
                && this.project.DataCompliance.IECNumber === null
                && this.project.DataCompliance.Waiver === null) {
                this.errorMessage.DataCompliance = 'Any dataset derived from human study needs more specification.';
                return false;
            }
            else {
                if (this.project.DataCompliance.HumanStudy === 'IRBChecked'
                    && this.project.DataCompliance.IRBNumber === '') {
                    this.errorMessage.DataCompliance = 'IRB option is checked, must fill the IRB number to proceed.';
                    return false;
                }
                else if (this.project.DataCompliance.HumanStudy === 'IECChecked'
                    && this.project.DataCompliance.IECNumber === '') {
                    this.errorMessage.DataCompliance = 'IEC option is checked, must fill the IEC number to proceed.';
                    return false;
                }
                else if (this.project.DataCompliance.HumanStudy === 'ExemptedCheckedWithWaiver'
                    && this.project.DataCompliance.Waiver === '') {
                    this.errorMessage.DataCompliance = 'Waiver option is checked, must fill the Waiver number to proceed.';
                    return false;
                }
                else {
                    this.errorMessage.DataCompliance = '';
                    return true;
                }
            }
        }
    };
    ProjectDetailComponent.prototype.refresh = function () {
        var _this = this;
        this.projectService.getProjectByID(this.route.snapshot.params['id'])
            .subscribe(function (res0) {
            _this.filesComponent.filerefresh();
        });
    };
    ProjectDetailComponent.prototype.statusReport = function () {
        var _this = this;
        // this.statusMsg = 'Saving updates...';
        // this.completeLoading();
        // setTimeout(() => this.completeLoading(), 500);
        // this.lastModifiedTime = Date();
        setTimeout(function () { return _this.updateEmitService.updateState(); });
    };
    ProjectDetailComponent.prototype.fileUpdates = function (event) {
        this.update(this.project);
    };
    ProjectDetailComponent.prototype.submitAnnotations = function () {
        // document.getElementById('annotationKey').focus();
        this.project.Annotations.push(this.newAnnotationForm.value);
        this.newAnnotationForm.reset({ key: '', value: '' });
    };
    ProjectDetailComponent.prototype.collectDataCompliance = function (value) {
        if (value === 'human') {
            this.update(this.project);
        }
        else if (value === 'non-human') {
            this.project.DataCompliance.IRBNumber = '';
            this.project.DataCompliance.IECNumber = '';
            this.project.DataCompliance.Waiver = '';
            this.project.DataCompliance.HumanStudy = '';
            this.update(this.project);
        }
    };
    return ProjectDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_12__permissions_permissions_component__["a" /* PermissionsComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12__permissions_permissions_component__["a" /* PermissionsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__permissions_permissions_component__["a" /* PermissionsComponent */]) === "function" && _b || Object)
], ProjectDetailComponent.prototype, "permissionComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_13__files_files_component__["a" /* FilesComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__files_files_component__["a" /* FilesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__files_files_component__["a" /* FilesComponent */]) === "function" && _c || Object)
], ProjectDetailComponent.prototype, "filesComponent", void 0);
ProjectDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-detail',
        template: __webpack_require__("../../../../../src/app/project-detail/project-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-detail/project-detail.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__service_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_6__service_irb_service__["a" /* IrbService */], __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__service_permission_service__["a" /* PermissionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_project_service__["a" /* ProjectService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_permission_service__["a" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_permission_service__["a" /* PermissionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_file_service__["a" /* FileService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__service_irb_service__["a" /* IrbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_irb_service__["a" /* IrbService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_14__service_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__service_state_service__["a" /* StateService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_15__service_update_emit_service__["a" /* UpdateEmitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__service_update_emit_service__["a" /* UpdateEmitService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _o || Object])
], ProjectDetailComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=project-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects-dashboard/projects-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <h5 class=\"dashboard-header\">Datasets Dashboard</h5>\n            </div>\n            <div class=\"col-6\">\n                <button class='btn btn-primary' (click)='add()'><span class=\"fa fa-plus\"></span> &nbsp; Dataset</button>\n            </div>\n        </div>\n        <div class=\"mb-5\" *ngFor=\"let project of projects\">\n            <!--START card-->\n            <div class=\"card card-cascade \">\n                <!--START card header-->\n                <div class=\"view gradient-card-header dashboard-blue-gradient\">\n                    <h5  class=\"dashboard-title text-center\">{{project.Name}}</h5>\n                </div>\n                <!--END card header-->\n                <!--START card body-->\n                <div class=\"card-body \">\n                    <p class=\"card-text\">\n                        {{project.Description}}\n                    </p>\n                </div>\n                <!--END card body-->\n                <!-- START card footer -->\n                <div class=\"dashboard-dotted card-footer\">\n                    <div class=\"row\">\n                        <div class=\"col-4 text-left\">\n                            <p class=\"text-left mt-2\">Created {{project.Date | DateFormatter: 'WithTime'}}</p>\n                        </div>\n                        <div class=\"col-8 text right\">\n                            <button type=\"button\" [class.selected]=\"project === selectedProject\" (click)=\"onSelect(project)\" class=\"btn btn-primary\">Edit</button>\n                            <button (click)=\"delete(project)\" class=\" btn btn-primary \">Delete</button>\n                        </div>\n                    </div>\n                </div>\n                <!-- END card footer -->\n            </div>\n            <!--END card-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects-dashboard/projects-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, ".btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary, .dashboard-header {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n.dashboard-title {\n  color: #FFFFFF;\n  font-weight: 300;\n  margin-top: 10px;\n  font-size: 22px;\n  padding: 12px; }\n\n.dashboard .btn {\n  width: 110px;\n  margin-right: 5px;\n  float: right; }\n\n.dashboard-blue-gradient {\n  background: linear-gradient(135deg, #039BE5 2%, #042a68); }\n\n.dashboard-dotted {\n  background-image: -webkit-repeating-radial-gradient(center center, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 1px, transparent 1px, transparent 100%);\n  background-image: repeating-radial-gradient(center center, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 1px, transparent 1px, transparent 100%);\n  background-size: 3px 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects-dashboard/projects-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_permission_service__ = __webpack_require__("../../../../../src/app/service/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_irb_service__ = __webpack_require__("../../../../../src/app/service/irb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_file_service__ = __webpack_require__("../../../../../src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_state_service__ = __webpack_require__("../../../../../src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.transform = function (id, option) {
        var d = id.split('T');
        var d1 = d[0].split('-');
        switch (option) {
            case 'Date':
                return d1[1] + '/' + d1[2] + '/' + d1[0];
            case 'WithTime':
                var d2 = d[1].substr(0, 8);
                return d1[1] + '/' + d1[2] + '/' + d1[0] + ' ' + d2;
        }
    };
    return DateFormatter;
}());
DateFormatter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'DateFormatter'
    }),
    __metadata("design:paramtypes", [])
], DateFormatter);

var ProjectsDashboardComponent = (function () {
    function ProjectsDashboardComponent(fb, projectService, permissionService, irbService, fileService, userService, stateService, zone, router) {
        var _this = this;
        this.fb = fb;
        this.projectService = projectService;
        this.permissionService = permissionService;
        this.irbService = irbService;
        this.fileService = fileService;
        this.userService = userService;
        this.stateService = stateService;
        this.zone = zone;
        this.router = router;
        console.log('Dashboard Component constructor');
        this.stateService.user
            .subscribe(function (res) {
            _this.user = res;
            if (_this.user !== null) {
                _this.getUserID(_this.user.email);
            }
        });
    }
    ProjectsDashboardComponent.prototype.onSelect = function (Project) {
        this.selectedProject = Project;
        var id = this.selectedProject._id;
        this.router.navigate(["/projects/" + id + "/"]);
    };
    ProjectsDashboardComponent.prototype.getUserID = function (id) {
        var _this = this;
        this.userService.getUserIDByGmail(id)
            .subscribe(function (res) {
            _this.getPermissions(res[0]._id);
            _this.userID = res[0]._id;
        });
    };
    ProjectsDashboardComponent.prototype.getPermissions = function (id) {
        var _this = this;
        this.permissionService.getPermissionsByUserID(id)
            .subscribe(function (res) {
            _this.getProjectIDs(res);
            _this.permissions = res;
        });
    };
    ProjectsDashboardComponent.prototype.getProjectIDs = function (permissions) {
        this.projectIDs = __WEBPACK_IMPORTED_MODULE_11_underscore__["uniq"](permissions.map(function (r) { return r.Project; }));
        this.getProjects();
    };
    ProjectsDashboardComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjectsByIDs(this.projectIDs)
            .subscribe(function (res) {
            _this.zone.run(function () { _this.projects = res; });
        });
    };
    ProjectsDashboardComponent.prototype.delete = function (project) {
        var confirmDeletion = confirm('Are you absolutely sure you want to delete?');
        if (confirmDeletion) {
            this.projectService.delete(project).subscribe(function () { return console.log('project is being removed.'); });
            var index = this.projectIDs.indexOf(project._id);
            this.projectIDs.splice(index, 1);
            this.getProjects();
            this.fileService.removeFilesByProjectID(project._id);
            this.permissionService.removePermisionsByProjectID(project._id);
        }
        else {
            console.log('Deletion cancled.');
        }
    };
    ProjectsDashboardComponent.prototype.add = function () {
        var _this = this;
        console.log('in add');
        this.newProjectForm = this.fb.group({
            Name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('Name Your New Dataset', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            Description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('The largest recorded snowflake was in MT during year 1887, 15 inches wide', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4)),
            Private: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */](true),
            Author: this.userID,
            DataCompliance: { 'IRBNumber': null, 'IECNumber': null, 'Waiver': null, 'ComplianceOption': 'human' }
        });
        this.projectService.create(this.newProjectForm.value)
            .subscribe(function () {
            _this.getRecentAddedProject();
        });
        this.getProjects();
    };
    ProjectsDashboardComponent.prototype.getRecentAddedProject = function () {
        var _this = this;
        this.projectService.getRecentProject(this.userID)
            .subscribe(function (res) {
            _this.addPermission(res['_id']);
            _this.newAddedProject = res;
        });
    };
    ProjectsDashboardComponent.prototype.addPermission = function (projectID) {
        var _this = this;
        var newPermission = {
            'User': this.userID,
            'Role': 'admin',
            'Project': projectID
        };
        this.permissionService.create(newPermission)
            .subscribe(function () { return _this.getPermissions(_this.userID); });
    };
    return ProjectsDashboardComponent;
}());
ProjectsDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects-dashboard',
        template: __webpack_require__("../../../../../src/app/projects-dashboard/projects-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects-dashboard/projects-dashboard.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_irb_service__["a" /* IrbService */], __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__service_permission_service__["a" /* PermissionService */], __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_permission_service__["a" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_permission_service__["a" /* PermissionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_irb_service__["a" /* IrbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_irb_service__["a" /* IrbService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__service_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_state_service__["a" /* StateService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */]) === "function" && _j || Object])
], ProjectsDashboardComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=projects-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"projects\">\n    <header class=\"projects container-fluid\">\n        <div class=\"row\">\n            <div routerLinkActive=\"active\" routerLink='dashboard'></div>\n        </div>\n    </header>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "/**\n *  If you want to override some bootstrap variables, you have to change values here.\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\n */\n.btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n/**\n *  Do not remove the comments below. It's the markers used by wiredep to inject\n *  sass dependencies when defined in the bower.json of your dependencies\n */\nbody,\nhtml {\n  font-family: \"Lato\";\n  font-size: 14px;\n  font-weight: 300;\n  background: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\na, a:active, a:hover, a:visited {\n  color: #039BE5;\n  text-decoration: none; }\n\na:active, a:hover {\n  color: #03ADFF; }\n\n.tooltip {\n  z-index: 99999 !important; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 13px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\n *  all your sass files automatically\n */\n.projects-header {\n  padding-bottom: 25px;\n  font-weight: 400;\n  color: #039BE5;\n  letter-spacing: 7px; }\n\n.projects {\n  margin-top: 150px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */]]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pie\">\n    <header class=\"pie container-fluid\">\n        <div class=\"row\">\n            <hr>\n            <h3>New User Registration</h3>\n            <h4>Legal Document</h4>\n            <h5>What is Lorem Ipsum?</h5>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n            <h5>Why do we use it?</h5>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n            <h5>Where does it come from?</h5>\n            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\n            <h5>Where can I get some?</h5>\n            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>\n            \n                    <form [formGroup]=\"newUserForm\">\n                        <div class=\"form-inline\" style=\"padding-bottom: 20px\">\n                            <!-- <label>Required: </label> -->\n                            <div class=\"form-group\">\n                                <!--<label for=\"firstName\">First Name</label>-->\n                                <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"FirstName\" placeholder=\"First Name\">\n                                <label><span class=\"text-danger\">*</span></label>\n                            </div>\n                            <div class=\"form-group\">\n                                <!--<label for=\"lastName\">Last Name</label>-->\n                                <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"LastName\"  placeholder=\"Last Name\">\n                                <label><span class=\"text-danger\">*</span></label>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"Email\" formControlName=\"Email\" placeholder=\"Institutional Email\">\n                                <label><span class=\"text-danger\">*</span></label>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"Institution\" formControlName=\"Institution\" placeholder=\"Institutional\">\n                                <label><span class=\"text-danger\">*</span></label>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"submit\" (click)=\"submit()\" class=\"btn\" value=\"AGREE\" >\n                        </div>\n                    </form>\n                    <!-- <p>Form Status: {{ newUserForm.status }}</p>\n                    <p>Form value: {{ newUserForm.value | json }}</p> -->\n                    \n        </div>\n    </header>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "/**\n *  If you want to override some bootstrap variables, you have to change values here.\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\n */\n.btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n/**\n *  Do not remove the comments below. It's the markers used by wiredep to inject\n *  sass dependencies when defined in the bower.json of your dependencies\n */\nbody,\nhtml {\n  font-family: \"Lato\";\n  font-size: 14px;\n  font-weight: 300;\n  background: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\na, a:active, a:hover, a:visited {\n  color: #039BE5;\n  text-decoration: none; }\n\na:active, a:hover {\n  color: #03ADFF; }\n\n.tooltip {\n  z-index: 99999 !important; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 13px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\n *  all your sass files automatically\n */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_state_service__ = __webpack_require__("../../../../../src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(fb, userService, stateService, loginService, router) {
        this.fb = fb;
        this.userService = userService;
        this.stateService = stateService;
        this.loginService = loginService;
        this.router = router;
        this.loginService.googleLogOut();
    }
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var self = this;
        this.newUserForm.value.Consent = true;
        this.newUserForm.value.Gmail = '';
        this.loginService.googleLogOut();
        if (this.newUserForm.value.FirstName === '' ||
            this.newUserForm.value.LastName === '' ||
            this.newUserForm.value.Email === '' ||
            this.newUserForm.value.Institution === '') {
            alert('Please fill all the required fields to proceed');
            return;
        }
        else {
            this.userService.userValidationByEmail(this.newUserForm.value.Email)
                .subscribe(function (res) {
                if (typeof (res[0]) !== 'undefined') {
                    alert('This email has already been linked to existing user. Please check accuracy.');
                    return;
                }
                else {
                    _this.stateService.internalUser.next(_this.newUserForm.value);
                    _this.loginService.googleLogin();
                }
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.newUserForm = this.fb.group({
            FirstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            LastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            Institution: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('LoginComponent'),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "login", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_state_service__["a" /* StateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/router/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_dashboard_projects_dashboard_component__ = __webpack_require__("../../../../../src/app/projects-dashboard/projects-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    }, {
        path: 'landing',
        component: __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */]
    }, {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_2__users_users_component__["a" /* UsersComponent */],
        children: [
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail_component__["a" /* UserDetailComponent */] }
        ]
    }, {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */]
    }, {
        path: 'help',
        component: __WEBPACK_IMPORTED_MODULE_9__help_help_component__["a" /* HelpComponent */]
    }, {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__["a" /* ProjectsComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__projects_dashboard_projects_dashboard_component__["a" /* ProjectsDashboardComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__project_detail_project_detail_component__["a" /* ProjectDetailComponent */] }
        ]
    }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRouterModule);

//# sourceMappingURL=app-router.module.js.map

/***/ }),

/***/ "../../../../../src/app/service/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileService = (function () {
    function FileService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.filesUrl = 'http://localhost:3000/files';
    }
    FileService.prototype.getFilesByProjectID = function (id) {
        var url = this.filesUrl + "/" + id;
        return this.http.get(url, { headers: this.headers })
            .map(function (res) {
            return res.json();
        });
    };
    FileService.prototype.removeFilesByProjectID = function (id) {
        var url = this.filesUrl + "/" + id;
        this.http.delete(url, { headers: this.headers }).subscribe(function (err) { return console.log(err); });
    };
    FileService.prototype.create = function (file) {
        return this.http
            .post(this.filesUrl, JSON.stringify(file), { headers: this.headers });
    };
    FileService.prototype.uploadingValidation = function (id) {
        return this.http.get(this.filesUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    FileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FileService;
}());
FileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], FileService);

var _a;
//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/irb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IrbService = (function () {
    function IrbService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.irbsUrl = 'http://localhost:3000/irbs';
    }
    IrbService.prototype.getIrbs = function () {
        return this.http.get(this.irbsUrl)
            .map(function (res) { return res.json(); });
    };
    IrbService.prototype.getIrbsByProjID = function (id) {
        return this.http.get(this.irbsUrl)
            .map(function (res) { return res.json().filter(function (value) { return value._id === id; }); });
    };
    IrbService.prototype.getIrbObjIDByIRBNumber = function (id) {
        return this.http.get(this.irbsUrl)
            .map(function (res) { return res.json().filter(function (value) { return value.IRBNumber === id; }); });
    };
    IrbService.prototype.delete = function (irb) {
        var url = this.irbsUrl + "/" + irb._id;
        return this.http.delete(url, { headers: this.headers });
    };
    IrbService.prototype.create = function (irb) {
        return this.http
            .post(this.irbsUrl, JSON.stringify(irb), { headers: this.headers });
    };
    IrbService.prototype.update = function (irb) {
        var url = this.irbsUrl + "/" + irb._id;
        return this.http
            .put(url, JSON.stringify(irb), { headers: this.headers });
    };
    IrbService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return IrbService;
}());
IrbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], IrbService);

var _a;
//# sourceMappingURL=irb.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hellojs__ = __webpack_require__("../../../../hellojs/dist/hello.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hellojs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hellojs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_state_service__ = __webpack_require__("../../../../../src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    // userGoogleProfile: EventEmitter<any> ;
    function LoginService(stateService, userService, router) {
        this.stateService = stateService;
        this.userService = userService;
        this.router = router;
        this.GOOGLE_CLIENT_ID = '1098022410981-p7n5ejjji8qlvdtff274pol54jo5i8ks.apps.googleusercontent.com';
        // this.userGoogleProfile = new EventEmitter<any>();
        __WEBPACK_IMPORTED_MODULE_1_hellojs__["init"]({
            google: this.GOOGLE_CLIENT_ID,
        }, {
            force: true,
            redirect_uri: '/landing',
            display: 'popup',
            response_type: 'token',
            scope: 'email'
        });
        __WEBPACK_IMPORTED_MODULE_1_hellojs__["on"]('auth.login', this.authLogin.bind(this));
        __WEBPACK_IMPORTED_MODULE_1_hellojs__["on"]('auth.logout', this.authLogout.bind(this));
        __WEBPACK_IMPORTED_MODULE_1_hellojs__["on"]('auth.change', function () { alert('state changed!'); });
    }
    LoginService.prototype.googleLogin = function () {
        this.googleLogOut();
        this.stateService.user.next(null);
        __WEBPACK_IMPORTED_MODULE_1_hellojs__["login"]('google');
    };
    LoginService.prototype.googleLogOut = function () {
        __WEBPACK_IMPORTED_MODULE_1_hellojs__["logout"]('google', {});
        this.stateService.user.next(null);
        // this.userGoogleProfile.emit(null);
    };
    LoginService.prototype.authLogin = function (auth) {
        __WEBPACK_IMPORTED_MODULE_1_hellojs__('google').api('me').then(this.updateUserInfo.bind(this));
    };
    LoginService.prototype.authLogout = function (auth) {
        this.updateUserInfo.bind(this, null);
        this.router.navigate(['/landing']);
    };
    LoginService.prototype.updateUserInfo = function (v) {
        var _this = this;
        this.stateService.internalUser.subscribe(function (res) {
            var internalUser = res;
            if (internalUser !== null && internalUser.Gmail === '') {
                internalUser.Gmail = v.email;
                _this.userService.create(internalUser)
                    .subscribe(function () { return alert('New User is added to database'); });
            }
            else {
                _this.userService.getUserIDByGmail(v.email)
                    .subscribe(function (r) {
                    if (typeof (r[0]) !== 'undefined') {
                        _this.stateService.user.next(v);
                        // this.userGoogleProfile.emit(v);
                        _this.router.navigate(['/projects', 'dashboard']);
                    }
                    else {
                        alert('User is not registered yet. Please register. Please turn on the browser pop-up window.');
                        _this.router.navigate(['/landing']);
                    }
                });
            }
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_state_service__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginService);

var _a, _b, _c;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/permission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var roles;
(function (roles) {
    roles[roles["admin"] = 0] = "admin";
    roles[roles["read-write"] = 1] = "read-write";
    roles[roles["read-only"] = 2] = "read-only";
})(roles || (roles = {}));
var PermissionService = (function () {
    function PermissionService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.permissionsUrl = 'http://localhost:3000/permissions'; // URL to web api
    }
    PermissionService.prototype.getPermissions = function () {
        return this.http.get(this.permissionsUrl);
    };
    PermissionService.prototype.getPermissionByID = function (id) {
        return this.http.get(this.permissionsUrl)
            .map(function (res) { return res.json().filter(function (value) { return value._id === id; }); });
    };
    PermissionService.prototype.getPermissionsByProjectID = function (id) {
        return this.http.get(this.permissionsUrl)
            .map(function (res) { return res.json().filter(function (value) { return value.Project === id; }); });
    };
    PermissionService.prototype.getPermissionsByUserID = function (id) {
        return this.http.get(this.permissionsUrl)
            .map(function (res) { return res.json().filter(function (value) { return value.User === id; }); });
    };
    PermissionService.prototype.getPermissionsByIDs = function (ids) {
        return this.http.get(this.permissionsUrl)
            .map(function (res) { return res.json().filter(function (value) { return ids.indexOf(value._id) > -1; }); });
    };
    PermissionService.prototype.getPermissionByUserByProject = function (userID, projectID) {
        return this.http.get(this.permissionsUrl)
            .map(function (res) { return res.json().filter(function (value) { return (value.User === userID && value.Project === projectID); })[0]; });
    };
    PermissionService.prototype.removePermisionsByProjectID = function (id) {
        var _this = this;
        this.http.get(this.permissionsUrl)
            .map(function (res) { return res.json().filter(function (value) { return value.Project === id; })
            .map(function (permission) { return permission._id; }); })
            .subscribe(function (res) {
            _this.deletePermissions(res).subscribe();
        });
    };
    PermissionService.prototype.deletePermissions = function (inputObject) {
        var _this = this;
        var observableBatch = [];
        inputObject.forEach(function (item, key) {
            observableBatch.push(_this.http.delete('http://localhost:3000/permissions/' + item).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(observableBatch);
    };
    PermissionService.prototype.delete = function (permission) {
        var url = this.permissionsUrl + "/" + permission._id;
        return this.http.delete(url, { headers: this.headers });
    };
    PermissionService.prototype.deleteById = function (id) {
        var url = this.permissionsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers });
    };
    PermissionService.prototype.create = function (permission) {
        return this.http
            .post(this.permissionsUrl, JSON.stringify(permission), { headers: this.headers });
    };
    PermissionService.prototype.update = function (permission, permissionRole) {
        var url = this.permissionsUrl + "/" + permission._id;
        permission.Role = permissionRole;
        return this.http.put(url, JSON.stringify(permission), { headers: this.headers });
    };
    PermissionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PermissionService;
}());
PermissionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PermissionService);

var _a;
//# sourceMappingURL=permission.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.projectsUrl = 'http://localhost:3000/projects'; // URL to web api
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectsUrl);
    };
    ProjectService.prototype.getRecentProject = function (userID) {
        return this.http.get(this.projectsUrl)
            .map(function (res) {
            var filtered = res.json().filter(function (value) { return value.Author === userID; });
            return filtered[filtered.length - 1];
        });
    };
    ProjectService.prototype.getProjectByID = function (id) {
        var url = this.projectsUrl + "/" + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getProjectsByIDs = function (ids) {
        return this.http.get(this.projectsUrl)
            .map(function (res) { return res.json().filter(function (value) { return ids.indexOf(value._id) > -1; }); });
    };
    ProjectService.prototype.getProjectByUserID = function (id) {
        var url = this.projectsUrl + "/" + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.delete = function (project) {
        var url = this.projectsUrl + "/" + project._id;
        return this.http.delete(url, { headers: this.headers });
    };
    ProjectService.prototype.create = function (project) {
        return this.http
            .post(this.projectsUrl, JSON.stringify(project), { headers: this.headers });
    };
    ProjectService.prototype.update = function (project) {
        var url = this.projectsUrl + "/" + project._id;
        return this.http
            .put(url, JSON.stringify(project), { headers: this.headers });
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProjectService;
}());
ProjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = (function () {
    function StateService() {
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](null);
        this.internalUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](null);
    }
    return StateService;
}());
StateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StateService);

//# sourceMappingURL=state.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/update-emit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateEmitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateEmitService = (function () {
    function UpdateEmitService() {
        this.updateStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UpdateEmitService.prototype.updateState = function () {
        console.log('In update-emit updating statue...................');
        this.updateStatus.emit('Saving update ...');
    };
    return UpdateEmitService;
}());
UpdateEmitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UpdateEmitService);

//# sourceMappingURL=update-emit.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.usersUrl = 'http://localhost:3000/users'; // URL to web api
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl);
    };
    UserService.prototype.getUsersByID = function (id) {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json().filter(function (value) { return id.indexOf(value._id) > -1; }); });
    };
    UserService.prototype.getUserIDByGmail = function (gmail) {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json().filter(function (value) { return value.Gmail === gmail; }); });
    };
    UserService.prototype.getUsersByIDs = function (ids) {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json().filter(function (value) { return ids.indexOf(value._id) > -1; }); });
    };
    UserService.prototype.userValidationByEmail = function (email) {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json().filter(function (value) { return value.Email === email; }); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); });
    };
    UserService.prototype.delete = function (user) {
        var url = this.usersUrl + "/" + user._id;
        return this.http.delete(url, { headers: this.headers });
    };
    UserService.prototype.create = function (user) {
        return this.http
            .post(this.usersUrl, JSON.stringify(user), { headers: this.headers });
    };
    UserService.prototype.update = function (user) {
        var url = this.usersUrl + "/" + user._id;
        return this.http.put(url, JSON.stringify(user), { headers: this.headers });
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-detail\">\n  <div *ngIf=\"user\">\n    <div class=\"container\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">First Name </label>\n        <div class=\"col-sm-10\">\n          <input class=\"form-control\" [(ngModel)]=\"user.FirstName\" placeholder=\"First Name\" />\n          <p *ngIf=\"error.fn !==''\"><small class=\"text-danger\">{{error.fn}}</small></p>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Last Name </label>\n        <div class=\"col-sm-10\">\n          <input class=\"form-control\" [(ngModel)]=\"user.LastName\" placeholder=\"Last Name\" />\n          <p *ngIf=\"error.ln !==''\"><small class=\"text-danger\">{{error.ln}}</small></p>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"user.Email\" class=\"form-control\" placeholder=\"Email\">\n          <p *ngIf=\"error.email.empty !=='' || error.email.format !=='' || error.email.duplicate !==''\">\n            <small class=\"text-danger\">{{error.email.empty}}{{error.email.format}}{{error.email.duplicate}}\n                    </small></p>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Institution</label>\n        <div class=\"col-sm-10\">\n          <input class=\"form-control\" [(ngModel)]=\"user.Institution\" placeholder=\"Institution\" />\n          <p *ngIf=\"error.fn !==''\"><small class=\"text-danger\">{{error.fn}}</small></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 user-memberDate\">\n          <label>Member since </label>\n          <span>{{user.Date | DateFormatter : 'Date'}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, ".btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n.user-detail {\n  margin-top: 150px; }\n\n.user-static {\n  font-size: 12px;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_update_emit_service__ = __webpack_require__("../../../../../src/app/service/update-emit.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailComponent = (function () {
    function UserDetailComponent(route, router, elementRef, updateEmitService, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.elementRef = elementRef;
        this.updateEmitService = updateEmitService;
        this.userService = userService;
        this.error = {
            fn: '',
            ln: '',
            email: { empty: '', format: '', duplicate: '' },
            in: ''
        };
        this.id = this.route.snapshot.params['id'];
        this.userService.getUsersByID(this.id)
            .subscribe(function (res) {
            console.log(res);
            _this.user = res[0];
        });
        var eventStream = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(elementRef.nativeElement, 'keyup')
            .map(function () { return _this.user; })
            .debounceTime(500)
            .subscribe(function (input) {
            // console.log(this.user);
            // this.updatePreChecking(this.user);
            _this.update(_this.user);
        });
    }
    UserDetailComponent.prototype.updatePreChecking = function (user) {
        var _this = this;
        if (this.user.FirstName === '') {
            this.error.fn = 'Should not be empty.';
        }
        else {
            this.error.fn = '';
        }
        if (this.user.LastName === '') {
            this.error.ln = 'Should not be empty.';
        }
        else {
            this.error.ln = '';
        }
        if (this.user.Email === '') {
            this.error.email.empty = 'Should not be empty.';
        }
        else {
            this.error.email.empty = '';
        }
        if (this.user.Email.search('[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+') === -1) {
            this.error.email.format = '::Not Email format. Please check accuracy.';
        }
        else {
            this.error.email.format = '';
        }
        this.userService.userValidationByEmail(this.user.Email)
            .subscribe(function (res) {
            if (typeof (res[0]) !== 'undefined' && res[0]._id !== _this.id) {
                _this.error.email.duplicate = '::This institute email is associated with' +
                    'another existing user. Please choose a different institutional email.';
            }
            else {
                _this.error.email.duplicate = '';
            }
        });
        if (this.user.Institution === '') {
            this.error.in = 'Should not be empty.';
        }
        else {
            this.error.in = '';
        }
        if (this.error.fn === '' &&
            this.error.ln === '' &&
            this.error.email.empty === '' &&
            this.error.email.format === '' &&
            this.error.email.duplicate === '' &&
            this.error.in === '') {
            return true;
        }
        else {
            return false;
        }
    };
    UserDetailComponent.prototype.update = function (user) {
        var _this = this;
        if (!this.updatePreChecking(user)) {
            console.log(this.error);
            console.log('Please see the error message in red.');
        }
        else {
            this.userService.update(user).subscribe(function () {
                _this.updateEmitService.updateState();
            });
        }
    };
    UserDetailComponent.prototype.goHomepage = function () {
        this.router.navigate(['/landing']);
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-detail/user-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_update_emit_service__["a" /* UpdateEmitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_update_emit_service__["a" /* UpdateEmitService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _e || Object])
], UserDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pie\">\n    <header class=\"pie container-fluid\">\n        <div class=\"row\">\n         <div routerLinkActive=\"active\"></div>\n        </div>\n    </header>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "/**\n *  If you want to override some bootstrap variables, you have to change values here.\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\n */\n.btn-primary {\n  color: #FFFFFF;\n  background: #039BE5;\n  text-decoration: none;\n  border-radius: 0;\n  padding: 10px;\n  width: 120px;\n  height: 40px;\n  line-height: 20px;\n  margin-right: 10px;\n  font-weight: 300; }\n\n.link-primary {\n  text-decoration: none;\n  color: #039BE5;\n  font-size: 13px;\n  cursor: pointer; }\n\n.header-primary {\n  font-weight: 300;\n  color: #039BE5;\n  margin-bottom: 50px;\n  margin-top: 0;\n  letter-spacing: 0px; }\n\n.card-header {\n  padding: .75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #FFFFFF; }\n\n.card-footer {\n  padding: .75rem 1.25rem;\n  background-color: #FFFFFF;\n  border-top: 1px solid lightgray; }\n\np.card-text {\n  margin: 12px;\n  font-size: 14px; }\n\n.form-control {\n  font-weight: 300; }\n\n/**\n *  Do not remove the comments below. It's the markers used by wiredep to inject\n *  sass dependencies when defined in the bower.json of your dependencies\n */\nbody,\nhtml {\n  font-family: \"Lato\";\n  font-size: 14px;\n  font-weight: 300;\n  background: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\na, a:active, a:hover, a:visited {\n  color: #039BE5;\n  text-decoration: none; }\n\na:active, a:hover {\n  color: #03ADFF; }\n\n.tooltip {\n  z-index: 99999 !important; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 13px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\n *  all your sass files automatically\n */\n.user-memberDate {\n  color: #039BE5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_userEmail_validator__ = __webpack_require__("../../../../../src/app/validators/userEmail.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
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
    function UsersComponent(fb, userService, http) {
        this.fb = fb;
        this.userService = userService;
        this.http = http;
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (res) {
            _this.users = res.json();
        });
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UsersComponent.prototype.delete = function (user) {
        var _this = this;
        this.userService.delete(user).subscribe(function (response) {
            _this.getUsers();
        });
    };
    UsersComponent.prototype.submit = function () {
        var _this = this;
        this.userService.create(this.newUserForm.value).subscribe(function () { return _this.getUsers(); });
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers();
        this.newUserForm = this.fb.group({
            FirstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            LastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            Photo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */](''),
            Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_userEmail_validator__["a" /* UserEmailValidators */].UserEmailFormat]),
            Group: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('')
        });
        this.newUserForm.valueChanges
            .filter(function (val) {
            console.log(val.Email);
            return val.Email.length >= 2;
        }).map(function (val) { return val.Email; })
            .debounceTime(500)
            .switchMap(function (val) { return _this.users.map(function (users) { return users.Email; }).filter(function (emails) { return emails.indexOf(val) === -1; }); })
            .subscribe(function (val) {
            if (val.length === 0) {
                console.log('valid');
            }
            else {
                console.log('invalid');
            }
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]) === "function" && _c || Object])
], UsersComponent);

var _a, _b, _c;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/validators/userEmail.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEmailValidators; });



var UserEmailValidators = (function () {
    function UserEmailValidators() {
    }
    UserEmailValidators.UserEmailFormat = function (control) {
        if (control.value.search('[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+') > -1) {
            console.log('Within UserEmail static Function UserEmail function...');
            return null;
        }
        return { validEmailFormat: true };
    };
    return UserEmailValidators;
}());

//# sourceMappingURL=userEmail.validator.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map