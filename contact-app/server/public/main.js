(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_contact_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/contact/contacts/contacts.component */ "./src/app/contact/contacts/contacts.component.ts");
/* harmony import */ var _app_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/contact/contact/contact.component */ "./src/app/contact/contact/contact.component.ts");
/* harmony import */ var _app_contact_contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/contact/contact-view/contact-view.component */ "./src/app/contact/contact-view/contact-view.component.ts");
/* harmony import */ var _app_hours_hours_hours_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/hours/hours/hours.component */ "./src/app/hours/hours/hours.component.ts");
/* harmony import */ var _app_hours_hour_hour_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/hours/hour/hour.component */ "./src/app/hours/hour/hour.component.ts");
/* harmony import */ var _app_hours_hours_view_hours_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/hours/hours-view/hours-view.component */ "./src/app/hours/hours-view/hours-view.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: _app_contact_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"],
    },
    {
        path: 'contact',
        component: _app_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
    },
    {
        path: 'view/contact/:id',
        component: _app_contact_contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_5__["ContactViewComponent"],
    },
    {
        path: 'hours',
        component: _app_hours_hours_hours_component__WEBPACK_IMPORTED_MODULE_6__["HoursComponent"],
    },
    {
        path: 'hour',
        component: _app_hours_hour_hour_component__WEBPACK_IMPORTED_MODULE_7__["HourComponent"],
    },
    {
        path: 'view/hours/:id',
        component: _app_hours_hours_view_hours_view_component__WEBPACK_IMPORTED_MODULE_8__["HourViewComponent"],
    },
    {
        path: '**',
        redirectTo: 'others/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">Code Chanllenge</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/contacts\">Contact</a></li>\n        <li class=\"\"><a routerLink=\"/hours\">Register Hours</a></li>\n    </ul>\n    </div>\n  </nav>\n  \n  \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Contacts';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contacts/contacts.component */ "./src/app/contact/contacts/contacts.component.ts");
/* harmony import */ var _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact/contact.component */ "./src/app/contact/contact/contact.component.ts");
/* harmony import */ var _contact_contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact-view/contact-view.component */ "./src/app/contact/contact-view/contact-view.component.ts");
/* harmony import */ var _app_hours_hours_hours_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/hours/hours/hours.component */ "./src/app/hours/hours/hours.component.ts");
/* harmony import */ var _app_hours_hour_hour_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/hours/hour/hour.component */ "./src/app/hours/hour/hour.component.ts");
/* harmony import */ var _app_hours_hours_view_hours_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/hours/hours-view/hours-view.component */ "./src/app/hours/hours-view/hours-view.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");

















// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _contact_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"],
                _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _contact_contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_8__["ContactViewComponent"],
                _app_hours_hour_hour_component__WEBPACK_IMPORTED_MODULE_10__["HourComponent"],
                _app_hours_hours_hours_component__WEBPACK_IMPORTED_MODULE_9__["HoursComponent"],
                _app_hours_hours_view_hours_view_component__WEBPACK_IMPORTED_MODULE_11__["HourViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["NgxDatatableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact-view/contact-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contact/contact-view/contact-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC12aWV3L2NvbnRhY3Qtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact-view/contact-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/contact/contact-view/contact-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{contact.name}}\n  </h1>\n</div>\n\n<div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n\n        <button type=\"button\" routerLink=\"/contacts\" class=\"btn btn-primary\">Back to Contacts</button>\n\n        <div class=\"container\">\n          <hr>\n          <label class=\"h5\">Name : </label> &nbsp;<label>{{contact.name}}</label>\n          <hr>\n          <label class=\"h5\">Email : </label> &nbsp;<label>{{contact.email}}</label>\n          <hr>\n          <label class=\"h5\">Gender : </label> &nbsp;<label>{{contact.gender}}</label>\n          <hr>\n          <label class=\"h5\">Date Of Birth : </label> &nbsp;<label>{{contact.dob  | date  }}</label>\n          <hr>\n          <label class=\"h5\">Amount : </label> &nbsp;<label>{{contact.amount}}</label>\n          <hr>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact-view/contact-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-view/contact-view.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactViewComponent", function() { return ContactViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_contact_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/contact.model */ "./src/app/shared/models/contact.model.ts");
/* harmony import */ var _shared_services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/contact.service */ "./src/app/shared/services/contact.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");






var ContactViewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactViewComponent, _super);
    function ContactViewComponent(activatedRoute, contactService) {
        var _this = _super.call(this, contactService) || this;
        _this.activatedRoute = activatedRoute;
        _this.contactService = contactService;
        _this.contact = new _shared_models_contact_model__WEBPACK_IMPORTED_MODULE_3__["Contact"]();
        return _this;
    }
    ContactViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.getSingle(params.id).subscribe(function (res) {
                _this.contact = res;
            });
        });
    };
    ContactViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-view',
            template: __webpack_require__(/*! ./contact-view.component.html */ "./src/app/contact/contact-view/contact-view.component.html"),
            styles: [__webpack_require__(/*! ./contact-view.component.css */ "./src/app/contact/contact-view/contact-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])
    ], ContactViewComponent);
    return ContactViewComponent;
}(_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["Common"]));



/***/ }),

/***/ "./src/app/contact/contact/contact.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contact/contact/contact.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contact/contact/contact.component.html":
/*!********************************************************!*\
  !*** ./src/app/contact/contact/contact.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <form [formGroup]=\"contactForm\" (ngSubmit)=\"OnSubmit()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.name.errors.required\">Name is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Gender</label> <br>\n            <label>\n              <input type=\"radio\" value=\"Male\" formControlName=\"gender\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\">\n              <span> Male </span>\n            </label> &nbsp;\n            <label>\n              <input type=\"radio\" value=\"Female\" formControlName=\"gender\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\">\n              <span> Female </span>\n            </label>\n            <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.gender.errors.required\">Gender is required</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Date Of Birth</label>\n            <input type=\"text\" formControlName=\"dob\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" bsDatepicker />\n            <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.dob.errors.required\">Date of birth is required</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Amount</label>\n            <input type=\"number\" formControlName=\"amount\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.amount.errors }\" />\n            <div *ngIf=\"submitted && f.amount.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.amount.errors.required\">Amount is required</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\">save</button>&nbsp;<button type=\"button\"\n              routerLink=\"/contacts\" class=\"btn btn-primary\">Go to List</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contact/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/contact.service */ "./src/app/shared/services/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ContactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactComponent, _super);
    function ContactComponent(formBuilder, contactService, router) {
        var _this = _super.call(this, contactService) || this;
        _this.formBuilder = formBuilder;
        _this.contactService = contactService;
        _this.router = router;
        _this.submitted = false;
        _this.title = 'Contacts';
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            gender: ['Male', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(ContactComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.contactForm.controls; },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        this.add(this.contactForm.value).subscribe(function (res) {
            if (res) {
                alert('Contact Saved');
            }
            else {
                alert('Some Error while saving data please contact an admin');
            }
            _this.router.navigateByUrl('/contacts');
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}(_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["Common"]));



/***/ }),

/***/ "./src/app/contact/contacts/contacts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact/contacts/contacts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contacts/contacts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact/contacts/contacts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <button class=\"btn btn-primary\" routerLink=\"/contact\">Add a Contact</button>\n        <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"40\"\n          [footerHeight]=\"40\" [limit]=\"10\" [rowHeight]=\"'auto'\" [reorderable]=\"reorderable\">\n          <ngx-datatable-column prop=\"name\" [width]=\"120\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              Name\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"email\" [width]=\"250\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              Email\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"gender\" [width]=\"120\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              Gender\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"amount\" [width]=\"120\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              Amount\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"dob\" [width]=\"120\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              Date of Birth\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              {{value | date: 'MM/dd/yyyy'}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"id\" [width]=\"200\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              <button class=\"btn btn-primary btn-sm\" [routerLink]=\"'/view/contact/' + value\">View</button>&nbsp;\n              <button class=\"btn btn-danger btn-sm\" (click)=\"OnDelete(value)\">Delete</button>\n            </ng-template>\n\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contacts/contacts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact/contacts/contacts.component.ts ***!
  \********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/contact.service */ "./src/app/shared/services/contact.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");




var ContactsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactsComponent, _super);
    function ContactsComponent(contactService) {
        var _this = _super.call(this, contactService) || this;
        _this.contactService = contactService;
        _this.title = 'Contacts';
        _this.rows = [];
        _this.columns = [
            { prop: 'name', name: 'Name' },
            { name: 'Gender' },
            { name: 'Email' },
            { name: 'Amount' },
            { prop: 'dob', name: 'Date of Birth' }
        ];
        _this.GetContacts(); // Calling Common class method diractly
        return _this;
    }
    ContactsComponent.prototype.OnDelete = function (id) {
        var _this = this;
        this.delete(id).subscribe(function (res) {
            _this.GetContacts();
        });
    };
    ContactsComponent.prototype.GetContacts = function () {
        var _this = this;
        this.getAll().subscribe(function (data) {
            _this.rows = data.data;
        });
    };
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contact/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contact/contacts/contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactsComponent);
    return ContactsComponent;
}(_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["Common"]));



/***/ }),

/***/ "./src/app/hours/hour/hour.component.css":
/*!***********************************************!*\
  !*** ./src/app/hours/hour/hour.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXJzL2hvdXIvaG91ci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hours/hour/hour.component.html":
/*!************************************************!*\
  !*** ./src/app/hours/hour/hour.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <form [formGroup]=\"hourForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label>Comments</label>\n            <input type=\"text\" formControlName=\"comments\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.name.errors.required\">Name is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Amount</label>\n            <input type=\"number\" formControlName=\"hours\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.amount.errors }\" />\n            <div *ngIf=\"submitted && f.amount.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.amount.errors.required\">Amount is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\">save</button>&nbsp;<button type=\"button\"\n              routerLink=\"/hours\" class=\"btn btn-primary\">Go to List</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hours/hour/hour.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hours/hour/hour.component.ts ***!
  \**********************************************/
/*! exports provided: HourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourComponent", function() { return HourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_hour_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/hour.service */ "./src/app/shared/services/hour.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HourComponent = /** @class */ (function () {
    function HourComponent(formBuilder, hourService, router) {
        this.formBuilder = formBuilder;
        this.hourService = hourService;
        this.router = router;
        this.submitted = false;
        this.title = 'Hours';
    }
    HourComponent.prototype.ngOnInit = function () {
        this.hourForm = this.formBuilder.group({
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hours: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(HourComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.hourForm.controls; },
        enumerable: true,
        configurable: true
    });
    HourComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.hourForm.invalid) {
            return;
        }
        this.hourService.postHour(this.hourForm.value).subscribe(function (res) {
            if (res) {
                alert('Hour Saved');
            }
            else {
                alert('Some Error while saving data please hour an admin');
            }
            _this.router.navigateByUrl('/hours');
        });
    };
    HourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hour',
            template: __webpack_require__(/*! ./hour.component.html */ "./src/app/hours/hour/hour.component.html"),
            styles: [__webpack_require__(/*! ./hour.component.css */ "./src/app/hours/hour/hour.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_hour_service__WEBPACK_IMPORTED_MODULE_3__["HourService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HourComponent);
    return HourComponent;
}());



/***/ }),

/***/ "./src/app/hours/hours-view/hours-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hours/hours-view/hours-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXJzL2hvdXJzLXZpZXcvaG91cnMtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hours/hours-view/hours-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/hours/hours-view/hours-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{hour.name}}\n  </h1>\n</div>\n\n<div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n\n        <button type=\"button\" routerLink=\"/hours\" class=\"btn btn-primary\">Back to Hours</button>\n\n        <div class=\"container\">\n          <hr>\n          <label class=\"h5\">Comments : </label> &nbsp;<label>{{hour.comments}}</label>\n          <hr>\n          <label class=\"h5\">Hours : </label> &nbsp;<label>{{hour.hours}}</label>\n          <hr>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hours/hours-view/hours-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hours/hours-view/hours-view.component.ts ***!
  \**********************************************************/
/*! exports provided: HourViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourViewComponent", function() { return HourViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_hour_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/hour.model */ "./src/app/shared/models/hour.model.ts");
/* harmony import */ var _shared_services_hour_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/hour.service */ "./src/app/shared/services/hour.service.ts");





var HourViewComponent = /** @class */ (function () {
    function HourViewComponent(activatedRoute, hourService) {
        this.activatedRoute = activatedRoute;
        this.hourService = hourService;
        this.hour = new _shared_models_hour_model__WEBPACK_IMPORTED_MODULE_3__["Hour"]();
    }
    HourViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.hourService.getHour(params.id).subscribe(function (res) {
                _this.hour = res;
            });
        });
    };
    HourViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hour-view',
            template: __webpack_require__(/*! ./hours-view.component.html */ "./src/app/hours/hours-view/hours-view.component.html"),
            styles: [__webpack_require__(/*! ./hours-view.component.css */ "./src/app/hours/hours-view/hours-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_hour_service__WEBPACK_IMPORTED_MODULE_4__["HourService"]])
    ], HourViewComponent);
    return HourViewComponent;
}());



/***/ }),

/***/ "./src/app/hours/hours/hours.component.css":
/*!*************************************************!*\
  !*** ./src/app/hours/hours/hours.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXJzL2hvdXJzL2hvdXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/hours/hours/hours.component.html":
/*!**************************************************!*\
  !*** ./src/app/hours/hours/hours.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <button class=\"btn btn-primary\" routerLink=\"/hour\">Add a Hour</button>\n        <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"40\"\n          [footerHeight]=\"40\" [limit]=\"10\" [rowHeight]=\"'auto'\">\n          <ngx-datatable-column prop=\"name\" [width]=\"120\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              Comments\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"amount\" [width]=\"120\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              No Of Hours\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"id\" [width]=\"200\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n\n            </ng-template>\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n              <button class=\"btn btn-primary btn-sm\" [routerLink]=\"'/view/hour/' + value\">View</button>&nbsp;\n              <button class=\"btn btn-danger btn-sm\" (click)=\"OnDelete(value)\">Delete</button>\n            </ng-template>\n\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hours/hours/hours.component.ts":
/*!************************************************!*\
  !*** ./src/app/hours/hours/hours.component.ts ***!
  \************************************************/
/*! exports provided: HoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursComponent", function() { return HoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_hour_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/hour.service */ "./src/app/shared/services/hour.service.ts");



var HoursComponent = /** @class */ (function () {
    function HoursComponent(hourService) {
        this.hourService = hourService;
        this.title = 'Hours';
        this.rows = [];
        this.columns = [
            { prop: 'comments', name: 'Comments' },
            { name: 'Hours' }
        ];
        this.GetHours();
    }
    HoursComponent.prototype.OnDelete = function (id) {
        var _this = this;
        this.hourService.deleteHour(id).subscribe(function (res) {
            _this.GetHours();
        });
    };
    HoursComponent.prototype.GetHours = function () {
        var _this = this;
        var studentsObservable = this.hourService.getHours();
        studentsObservable.subscribe(function (Data) {
            _this.rows = Data.data;
        });
    };
    HoursComponent.prototype.ngOnInit = function () {
    };
    HoursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hours',
            template: __webpack_require__(/*! ./hours.component.html */ "./src/app/hours/hours/hours.component.html"),
            styles: [__webpack_require__(/*! ./hours.component.css */ "./src/app/hours/hours/hours.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hour_service__WEBPACK_IMPORTED_MODULE_2__["HourService"]])
    ], HoursComponent);
    return HoursComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/contact.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/contact.model.ts ***!
  \************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/shared/models/hour.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/hour.model.ts ***!
  \*********************************************/
/*! exports provided: Hour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hour", function() { return Hour; });
var Hour = /** @class */ (function () {
    function Hour() {
    }
    return Hour;
}());



/***/ }),

/***/ "./src/app/shared/services/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
var Common = /** @class */ (function () {
    function Common(dbService) {
        this.dbService = dbService;
    }
    Common.prototype.getAll = function () {
        return this.dbService.getAllData();
    };
    Common.prototype.getSingle = function (data) {
        if (data) {
            return this.dbService.getSingleData(data);
        }
    };
    Common.prototype.add = function (data) {
        if (data) {
            return this.dbService.addData(data);
        }
    };
    Common.prototype.delete = function (data) {
        if (data) {
            return this.dbService.deleteData(data);
        }
    };
    return Common;
}());



/***/ }),

/***/ "./src/app/shared/services/contact.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/contact.service.ts ***!
  \****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContactService = /** @class */ (function () {
    function ContactService(http, router) {
        this.http = http;
        this.router = router;
    }
    // Get All Contact
    ContactService.prototype.getAllData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/contacts');
    };
    ContactService.prototype.getSingleData = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/contacts/' + id);
    };
    // Insert New Contact
    ContactService.prototype.addData = function (contact) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/contacts', contact);
    };
    // Delete Single Contact
    ContactService.prototype.deleteData = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/contacts/' + id);
    };
    // Update a Contact
    ContactService.prototype.putData = function (contact) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/contacts/' + contact.id, contact);
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/shared/services/hour.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/hour.service.ts ***!
  \*************************************************/
/*! exports provided: HourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourService", function() { return HourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HourService = /** @class */ (function () {
    function HourService(http, router) {
        this.http = http;
        this.router = router;
    }
    // Get All Hour
    HourService.prototype.getHours = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/hours');
    };
    HourService.prototype.getHour = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/hours/' + id);
    };
    // Insert New Hour
    HourService.prototype.postHour = function (hour) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/hours', hour);
    };
    // Delete Single Hour
    HourService.prototype.deleteHour = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/hours/' + id);
    };
    // Update a Hour
    HourService.prototype.putHour = function (hour) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/hours/' + hour.id, hour);
    };
    HourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HourService);
    return HourService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3030'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\upwork\repo\codechallenge\contact-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map