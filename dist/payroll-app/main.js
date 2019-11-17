(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/admin/employees/employees.module": [
		"./src/app/components/admin/employees/employees.module.ts",
		"components-admin-employees-employees-module"
	],
	"./components/admin/jobs/jobs.module": [
		"./src/app/components/admin/jobs/jobs.module.ts",
		"components-admin-jobs-jobs-module"
	],
	"./components/employee/hours/employee-hours.module": [
		"./src/app/components/employee/hours/employee-hours.module.ts",
		"components-employee-hours-employee-hours-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _components_auth_guards_employee_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/guards/employee.guard */ "./src/app/components/auth/guards/employee.guard.ts");
/* harmony import */ var _components_employee_employee_availability_employee_availability_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/employee/employee-availability/employee-availability.component */ "./src/app/components/employee/employee-availability/employee-availability.component.ts");
/* harmony import */ var _components_admin_export_export_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/export/export.component */ "./src/app/components/admin/export/export.component.ts");
/* harmony import */ var _components_admin_availabilities_availabilities_availabilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/availabilities/availabilities/availabilities.component */ "./src/app/components/admin/availabilities/availabilities/availabilities.component.ts");
/* harmony import */ var _components_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/guards/admin.guard */ "./src/app/components/auth/guards/admin.guard.ts");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _components_admin_dash_dash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/dash/dash.component */ "./src/app/components/admin/dash/dash.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var appRoutes = [
    {
        path: 'admin-dash',
        component: _components_admin_dash_dash_component__WEBPACK_IMPORTED_MODULE_7__["DashComponent"],
        canActivate: [_components_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
    },
    {
        path: 'admin-view-employees',
        loadChildren: './components/admin/employees/employees.module#EmployeesModule'
    },
    {
        path: 'admin-availabilities',
        component: _components_admin_availabilities_availabilities_availabilities_component__WEBPACK_IMPORTED_MODULE_4__["AvailabilitiesComponent"],
        canActivate: [_components_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
    },
    {
        path: 'admin-jobs',
        loadChildren: './components/admin/jobs/jobs.module#JobsModule'
        // Lazy Loading
    },
    {
        path: 'admin-export',
        component: _components_admin_export_export_component__WEBPACK_IMPORTED_MODULE_3__["ExportComponent"],
        canActivate: [_components_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
    },
    {
        path: 'employee-availability',
        component: _components_employee_employee_availability_employee_availability_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeAvailabilityComponent"],
        canActivate: [_components_auth_guards_employee_guard__WEBPACK_IMPORTED_MODULE_1__["EmployeeGuard"]]
    },
    {
        path: 'employee-hours',
        loadChildren: './components/employee/hours/employee-hours.module#EmployeeHoursModule'
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-nav></app-my-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Garage Designs Management System';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _shared_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/app-material.module */ "./src/app/shared/app-material.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/my-nav/my-nav.component */ "./src/app/shared/my-nav/my-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _components_admin_dash_dash_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/dash/dash.component */ "./src/app/components/admin/dash/dash.component.ts");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/auth/auth.module */ "./src/app/components/auth/auth.module.ts");
/* harmony import */ var _components_admin_availabilities_availabilities_availabilities_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/availabilities/availabilities/availabilities.component */ "./src/app/components/admin/availabilities/availabilities/availabilities.component.ts");
/* harmony import */ var _components_admin_export_export_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/export/export.component */ "./src/app/components/admin/export/export.component.ts");
/* harmony import */ var _components_admin_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/employees/add-employee/add-employee.component */ "./src/app/components/admin/employees/add-employee/add-employee.component.ts");
/* harmony import */ var _components_admin_availabilities_view_availability_view_availability_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/availabilities/view-availability/view-availability.component */ "./src/app/components/admin/availabilities/view-availability/view-availability.component.ts");
/* harmony import */ var _components_employee_employee_availability_employee_availability_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/employee/employee-availability/employee-availability.component */ "./src/app/components/employee/employee-availability/employee-availability.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/@syncfusion/ej2-angular-calendars.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "./node_modules/@syncfusion/ej2-angular-navigations/@syncfusion/ej2-angular-navigations.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "./node_modules/@syncfusion/ej2-angular-inputs/@syncfusion/ej2-angular-inputs.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ "./node_modules/@syncfusion/ej2-angular-buttons/@syncfusion/ej2-angular-buttons.es5.js");

































// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_10__["MyNavComponent"],
                _components_admin_dash_dash_component__WEBPACK_IMPORTED_MODULE_15__["DashComponent"],
                _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                _components_admin_availabilities_availabilities_availabilities_component__WEBPACK_IMPORTED_MODULE_18__["AvailabilitiesComponent"],
                _components_admin_export_export_component__WEBPACK_IMPORTED_MODULE_19__["ExportComponent"],
                _components_admin_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__["AddEmployeeComponent"],
                _components_admin_availabilities_view_availability_view_availability_component__WEBPACK_IMPORTED_MODULE_21__["ViewAvailabilityComponent"],
                _components_employee_employee_availability_employee_availability_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeAvailabilityComponent"],
                _components_employee_employee_availability_employee_availability_component__WEBPACK_IMPORTED_MODULE_22__["DialogOverview"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_17__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_23__["CalendarModule"],
                _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_24__["ScheduleAllModule"],
                _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_24__["RecurrenceEditorAllModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_23__["DatePickerAllModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_23__["TimePickerAllModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_23__["DateTimePickerAllModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_25__["TreeViewModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_25__["ToolbarAllModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_25__["ContextMenuAllModule"],
                _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_26__["DropDownListAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_26__["MultiSelectAllModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__["MaskedTextBoxModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__["UploaderAllModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__["NumericTextBoxAllModule"],
                _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_28__["ButtonAllModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_28__["CheckBoxAllModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"],
                _shared_app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase)
            ],
            entryComponents: [
                _components_employee_employee_availability_employee_availability_component__WEBPACK_IMPORTED_MODULE_22__["DialogOverview"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/availabilities/availabilities.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/availabilities/availabilities.service.ts ***!
  \***************************************************************************/
/*! exports provided: AvailabilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilitiesService", function() { return AvailabilitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var AvailabilitiesService = /** @class */ (function () {
    function AvailabilitiesService(as, route, afs) {
        this.as = as;
        this.route = route;
        this.afs = afs;
    }
    AvailabilitiesService.prototype.ngOnInit = function () {
    };
    AvailabilitiesService.prototype.getUsers = function () {
        return this.afs.collectionGroup("users").valueChanges();
    };
    AvailabilitiesService.prototype.getEvents = function () {
        return this.afs.collectionGroup("available").valueChanges();
    };
    AvailabilitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], AvailabilitiesService);
    return AvailabilitiesService;
}());



/***/ }),

/***/ "./src/app/components/admin/availabilities/availabilities/availabilities.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/admin/availabilities/availabilities/availabilities.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\n    <mat-card-title> AVAILABILITIES </mat-card-title>\n    <mat-card-subtitle> These are the dates your employees are available in the month </mat-card-subtitle>\n    <ejs-datepicker #datepicker [(value)]='selectedDate' [showClearButton]=false></ejs-datepicker>\n\n            <ejs-schedule *ngIf=\"eventsLoaded && usersLoaded\" #scheduleObj cssClass='schedule-resource' width='100%' height='650px' [selectedDate]=\"selectedDate\"\n            [eventSettings]=\"eventSettings\" [currentView]=\"currentView\" (dataBinding)=\"getEvents($event)\" [showHeaderBar]=\"showHeaderBar\">\n            <e-resources>\n                <e-resource field='OwnerId' title='Owners' [dataSource]='ownerCollections' [allowMultiple]='allowMultiple'\n                    name='Owners' textField='OwnerText' idField='OwnerId' colorField='Color'>\n                </e-resource>\n             </e-resources>\n            </ejs-schedule>\n\n  </mat-card>\n\n"

/***/ }),

/***/ "./src/app/components/admin/availabilities/availabilities/availabilities.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/admin/availabilities/availabilities/availabilities.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-alignment {\n  padding-left: 30px;\n  padding-top: 20px; }\n\n.e-checkbox-wrapper.margaret .e-frame {\n  background-color: #ea7a57;\n  border-color: transparent; }\n\n.e-checkbox-wrapper.robert .e-frame {\n  background-color: #df5286;\n  border-color: transparent; }\n\n.e-checkbox-wrapper.laura .e-frame {\n  background-color: #865fcf;\n  border-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hdmFpbGFiaWxpdGllcy9hdmFpbGFiaWxpdGllcy9hdmFpbGFiaWxpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYXZhaWxhYmlsaXRpZXMvYXZhaWxhYmlsaXRpZXMvYXZhaWxhYmlsaXRpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gtYWxpZ25tZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5lLWNoZWNrYm94LXdyYXBwZXIubWFyZ2FyZXQgLmUtZnJhbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTdhNTc7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmUtY2hlY2tib3gtd3JhcHBlci5yb2JlcnQgLmUtZnJhbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjUyODY7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmUtY2hlY2tib3gtd3JhcHBlci5sYXVyYSAuZS1mcmFtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2NWZjZjtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/availabilities/availabilities/availabilities.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/admin/availabilities/availabilities/availabilities.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AvailabilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilitiesComponent", function() { return AvailabilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _availabilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../availabilities.service */ "./src/app/components/admin/availabilities/availabilities.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-data */ "./node_modules/@syncfusion/ej2-data/index.js");







var AvailabilitiesComponent = /** @class */ (function () {
    function AvailabilitiesComponent(aService, afs, as) {
        this.aService = aService;
        this.afs = afs;
        this.as = as;
        this.today = new Date();
        this.eventCollection = [];
        this.eventDataSource = this.getEvents();
        this.ownerCollections = [];
        this.ownerDataSource = this.getEmployees();
        this.allowMultiple = true;
        this.selectedDate = new Date();
        this.dataManger = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_6__["DataManager"]({
            json: this.eventDataSource,
            crossDomain: true
        });
        this.eventSettings = { dataSource: this.dataManger };
        this.showHeaderBar = true;
        this.currentView = 'Month';
    }
    AvailabilitiesComponent.prototype.ngOnInit = function () {
        var width = window.innerWidth;
        if (width > 730) {
            this.desktop = true;
        }
        else {
            this.desktop = false;
        }
    };
    AvailabilitiesComponent.prototype.getEmployees = function () {
        var _this = this;
        // GETS EMPLOYEES FROM 'USERS' IN FIREBASE //
        this.employees$ = this.aService.getUsers();
        this.employeeSubscription = this.employees$.subscribe(function (data) {
            _this.users = data;
            _this.users.forEach(function (element, i) {
                var generatedColor = _this.generateColor(i);
                _this.users = {
                    OwnerText: element.displayName,
                    OwnerId: element.uid,
                    Color: generatedColor
                };
                _this.ownerCollections.push(_this.users);
            });
            _this.usersLoaded = Promise.resolve(true);
        });
        return this.ownerCollections;
    };
    AvailabilitiesComponent.prototype.generateColor = function (index) {
        // RETURN COLOR FROM ARRAY OF THE INDEX
        var colors = [
            '#7986CB',
            '#4DD0E1',
            '#64B5F6',
            '#4DB6AC',
            '#FFD54F',
            '#DCE775',
            '#90A4AE',
            '#FFB74D',
            '#81C784',
            '#5d4037',
            '#ffc107'
        ];
        return colors[index];
    };
    AvailabilitiesComponent.prototype.getEvents = function () {
        var _this = this;
        /// GETS EVENTS FROM 'AVAILABILITY' IN FIREBASE //
        if (this.eventCollection.length === 0) {
            this.availableEvents$ = this.aService.getEvents();
            this.eventSubscription = this.availableEvents$.subscribe(function (events) {
                _this.availableEvents = events;
                _this.availableEvents.forEach(function (event, index) {
                    event.available.forEach(function (timestamp) {
                        _this.availableEvents = {
                            Id: index,
                            OwnerId: event.userId,
                            Subject: event.title,
                            StartTime: new Date(timestamp.seconds * 1000),
                            EndTime: new Date((timestamp.seconds + 1) * 1000),
                            IsAllDay: true,
                            IsReadonly: true
                        };
                        _this.eventCollection.push(_this.availableEvents);
                    });
                });
                _this.eventsLoaded = Promise.resolve(true);
            });
            return this.eventCollection;
        }
        else {
            console.log('events already loaded');
        }
    };
    AvailabilitiesComponent.prototype.onPopupOpen = function () {
        console.log('hello');
    };
    AvailabilitiesComponent.prototype.ngOnDestroy = function () {
        this.employeeSubscription.unsubscribe();
        this.eventSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('scheduleObj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["ScheduleComponent"])
    ], AvailabilitiesComponent.prototype, "scheduleObj", void 0);
    AvailabilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-availabilities',
            template: __webpack_require__(/*! ./availabilities.component.html */ "./src/app/components/admin/availabilities/availabilities/availabilities.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["AgendaService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["ResizeService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["DragAndDropService"]],
            styles: [__webpack_require__(/*! ./availabilities.component.scss */ "./src/app/components/admin/availabilities/availabilities/availabilities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_availabilities_service__WEBPACK_IMPORTED_MODULE_3__["AvailabilitiesService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AvailabilitiesComponent);
    return AvailabilitiesComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/availabilities/view-availability/view-availability.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/admin/availabilities/view-availability/view-availability.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  view-availability works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/availabilities/view-availability/view-availability.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/admin/availabilities/view-availability/view-availability.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYXZhaWxhYmlsaXRpZXMvdmlldy1hdmFpbGFiaWxpdHkvdmlldy1hdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/availabilities/view-availability/view-availability.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/admin/availabilities/view-availability/view-availability.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ViewAvailabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAvailabilityComponent", function() { return ViewAvailabilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewAvailabilityComponent = /** @class */ (function () {
    function ViewAvailabilityComponent() {
    }
    ViewAvailabilityComponent.prototype.ngOnInit = function () {
    };
    ViewAvailabilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-availability',
            template: __webpack_require__(/*! ./view-availability.component.html */ "./src/app/components/admin/availabilities/view-availability/view-availability.component.html"),
            styles: [__webpack_require__(/*! ./view-availability.component.scss */ "./src/app/components/admin/availabilities/view-availability/view-availability.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewAvailabilityComponent);
    return ViewAvailabilityComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/dash/dash.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/dash/dash.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\n    <mat-card-title>\n       DASHBOARD\n\n        <button style=\"float: right\" mat-raised-button (click)=\"exportAsExcel()\">\n            <mat-icon class=\"sidebar-icon\">file_upload</mat-icon>\n            EXPORT\n        </button>\n\n    </mat-card-title>\n    <mat-card-subtitle>\n      Current Pay Period:\n    <br/>\n      {{currentPayPeriod}}\n    </mat-card-subtitle>\n\n  <mat-card-content>\n    <div #TABLE>\n    <table *ngIf=\"payrollData.length > 1\" mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\" style=\"font-weight: bold;\"> {{element.name}} </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"rate\">\n            <th mat-header-cell *matHeaderCellDef> Rate </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.rate}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"hours\">\n            <th mat-header-cell *matHeaderCellDef> Hours </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.hours}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"total\">\n            <th mat-header-cell *matHeaderCellDef> Total </th>\n            <td mat-cell *matCellDef=\"let element\" style=\"font-weight: bold;\"> $ {{element.rate * element.hours}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  </mat-card-content>\n\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/components/admin/dash/dash.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/dash/dash.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9kYXNoL2Rhc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2Rhc2gvZGFzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/admin/dash/dash.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/admin/dash/dash.component.ts ***!
  \*********************************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);





var DashComponent = /** @class */ (function () {
    function DashComponent(afs, auth) {
        this.afs = afs;
        this.auth = auth;
        this.payPeriodData = [];
        this.userData = [];
        this.payrollData = [];
        this.displayedColumns = ['name', 'rate', 'hours', 'total'];
        this.dataSource = this.payrollData;
        this.currentDate = new Date();
        this.currentMonth = new Date().getMonth() + 1;
    }
    DashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.payPeriodRef = this.afs.collectionGroup("payPeriod");
        this.payPeriod$ = this.payPeriodRef.valueChanges();
        this.usersRef = this.afs.collection('users');
        this.user$ = this.usersRef.valueChanges();
        this.loggedInUserSubscription = this.auth.user$.subscribe(function (user) {
            _this.loggedInUser = user;
        });
        this.getInfo();
    };
    DashComponent.prototype.getInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllEmployees()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getAllPayPeriods()];
                    case 2:
                        _a.sent();
                        this.matchEmpAndPayPeriod();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashComponent.prototype.exportAsExcel = function () {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(wb, ws, 'payroll');
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](wb, 'PayrollReport.xlsx');
    };
    DashComponent.prototype.ngOnDestroy = function () {
        this.loggedInUserSubscription.unsubscribe();
    };
    DashComponent.prototype.getCurrentPayPeriod = function (endDate, startDate) {
        endDate = endDate.toLocaleDateString();
        startDate = startDate.toLocaleDateString();
        return startDate + " - " + endDate;
    };
    DashComponent.prototype.getAllEmployees = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.user$.subscribe(function (users) {
                users.forEach(function (user) {
                    var data = {
                        uid: user.uid,
                        name: user.displayName,
                        rate: user.hourlyRate,
                    };
                    _this.userData.push(data);
                    resolve();
                });
            });
        });
    };
    DashComponent.prototype.getAllPayPeriods = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.payPeriod$.subscribe(function (payPeriods) {
                payPeriods.forEach(function (payPeriod) {
                    var pPEndDate = new Date(payPeriod.endDate.seconds * 1000);
                    var pPStartDate = new Date(payPeriod.startDate.seconds * 1000);
                    _this.currentPayPeriod = _this.getCurrentPayPeriod(pPEndDate, pPStartDate);
                    if (_this.currentDate > pPStartDate && _this.currentDate <= pPEndDate) {
                        _this.payPeriodData.push(payPeriod);
                        resolve();
                    }
                });
            });
        });
    };
    DashComponent.prototype.matchEmpAndPayPeriod = function () {
        var _this = this;
        this.userData.forEach(function (user) {
            _this.payPeriodData.forEach(function (payP) {
                if (user.uid === payP.uid) {
                    var data = {
                        name: user.name,
                        rate: user.rate,
                        hours: payP.hours,
                        uid: user.uid
                    };
                    _this.payrollData.push(data);
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('TABLE'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], DashComponent.prototype, "table", void 0);
    DashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/components/admin/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.scss */ "./src/app/components/admin/dash/dash.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/employees/add-employee/add-employee.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/employees/add-employee/add-employee.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-employee works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/employees/add-employee/add-employee.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/employees/add-employee/add-employee.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZW1wbG95ZWVzL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/employees/add-employee/add-employee.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/employees/add-employee/add-employee.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent() {
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
    };
    AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! ./add-employee.component.html */ "./src/app/components/admin/employees/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.scss */ "./src/app/components/admin/employees/add-employee/add-employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/export/export.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/export/export.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\n    <mat-card-title> EXPORT </mat-card-title>\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/components/admin/export/export.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/export/export.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZXhwb3J0L2V4cG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/export/export.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/export/export.component.ts ***!
  \*************************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExportComponent = /** @class */ (function () {
    function ExportComponent() {
    }
    ExportComponent.prototype.ngOnInit = function () {
    };
    ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-export',
            template: __webpack_require__(/*! ./export.component.html */ "./src/app/components/admin/export/export.component.html"),
            styles: [__webpack_require__(/*! ./export.component.scss */ "./src/app/components/admin/export/export.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/auth-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/auth/auth-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var authRoutes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(authRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/app-material.module */ "./src/app/shared/app-material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/components/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _shared_app_material_module__WEBPACK_IMPORTED_MODULE_1__["AppMaterialModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth // Inject Firebase auth service,
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.user$ = this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (user) {
            if (user) {
                _this.currentUser = user;
                // console.log(this.currentUser);
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        }));
    }
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        window.location.reload(); // TODO: FIND A BETTER WAY TO FIX
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credentials) {
            _this.checkIfUserExists(credentials.user);
        });
    };
    AuthService.prototype.checkIfUserExists = function (user) {
        var _this = this;
        var userRef = this.afs.doc("users/" + user.uid);
        userRef.get()
            .subscribe(function (doc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!doc.exists) return [3 /*break*/, 2];
                        console.log('Existing User:');
                        return [4 /*yield*/, this.getUserData(doc.data())];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        console.log('New user');
                        return [4 /*yield*/, this.createDefaultUser(user)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    AuthService.prototype.getUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            empID: user.empID,
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            hourlyRate: user.hourlyRate,
            roles: {
                employee: user.roles.employee,
                admin: user.roles.admin
            }
        };
        userRef.set(data, { merge: true });
    };
    AuthService.prototype.createDefaultUser = function (defaultUser) {
        var userRef = this.afs.doc("users/" + defaultUser.uid);
        var data = {
            empID: Math.round(Math.random() * 100000).toString(),
            uid: defaultUser.uid,
            email: defaultUser.email,
            displayName: defaultUser.displayName,
            photoURL: defaultUser.photoURL,
            emailVerified: defaultUser.emailVerified,
            hourlyRate: 0,
            roles: {
                employee: false,
                admin: false
            }
        };
        userRef.set(data, { merge: true });
        console.log('Default user created:', data);
    };
    // Abilities and Roles Authorization
    // Assign roles to an ability method
    AuthService.prototype.isAdmin = function (user) {
        var isAdmin = ['admin'];
        return this.checkAuthorization(user, isAdmin);
    };
    AuthService.prototype.isEmployee = function (user) {
        var isEmployee = ['employee'];
        return this.checkAuthorization(user, isEmployee);
    };
    AuthService.prototype.canCreate = function (user) {
        var allowed = ['admin'];
        return this.checkAuthorization(user, allowed);
    };
    AuthService.prototype.canRead = function (user) {
        var allowed = ['admin', 'employee'];
        return this.checkAuthorization(user, allowed);
    };
    AuthService.prototype.canUpdate = function (user) {
        var allowed = ['admin'];
        return this.checkAuthorization(user, allowed);
    };
    AuthService.prototype.canDelete = function (user) {
        var allowed = ['admin'];
        return this.checkAuthorization(user, allowed);
    };
    AuthService.prototype.checkIfLoggedIn = function (user) {
        if (!user) {
            return false;
        }
        else {
            return true;
        }
    };
    // determines if user has matching role
    AuthService.prototype.checkAuthorization = function (user, allowedRoles) {
        if (!user) {
            return false;
        }
        else {
            for (var _i = 0, allowedRoles_1 = allowedRoles; _i < allowedRoles_1.length; _i++) {
                var role = allowedRoles_1[_i];
                if (user.roles[role]) {
                    return true;
                }
            }
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] // Inject Firebase auth service,
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/auth/guards/admin.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/auth/guards/admin.guard.ts ***!
  \*******************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.checkIfAdmin = this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user && user.roles.admin ? true : false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (isAdmin) {
            if (!isAdmin) {
                console.error('Access Denied - Admins only');
                _this.router.navigateByUrl('/login');
            }
        }));
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return this.checkIfAdmin;
    };
    AdminGuard.prototype.canActivateChild = function (next, state) {
        return this.checkIfAdmin;
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/components/auth/guards/employee.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/guards/employee.guard.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeGuard", function() { return EmployeeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var EmployeeGuard = /** @class */ (function () {
    function EmployeeGuard(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.checkIfEmployee = this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user && user.roles.employee ? true : false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (isEmployee) {
            if (!isEmployee) {
                console.error('Access Denied - Employees only');
                _this.router.navigateByUrl('/login');
            }
        }));
    }
    EmployeeGuard.prototype.canActivate = function (next, state) {
        return this.checkIfEmployee;
    };
    EmployeeGuard.prototype.canActivateChild = function (next, state) {
        return this.checkIfEmployee;
    };
    EmployeeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeeGuard);
    return EmployeeGuard;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!isLoggedIn\">\n  <mat-card-content>\n<mat-card-title>\n  Login to Garage Designs STL\n</mat-card-title>\n<mat-card-subtitle>\n  Please log in with your google account or create one to access.\n</mat-card-subtitle>\n\n  <!-- <form [formGroup]=\"credentials\" class=\"loginForm\">\n          <table cellspacing=\"0\">\n\n            <tr>\n              <td>\n                <mat-form-field class=\"field-full-width\">\n                  <input matInput formControlName=\"email\" type=\"email\" id=\"email\" placeholder=\"Enter email\" aria-describedby=\"emailHelp\" #userEmail required>\n                </mat-form-field>\n              </td>\n            </tr>\n\n            <tr>\n                <td>\n                  <mat-form-field class=\"field-full-width\">\n                  <input matInput formControlName=\"password\" type=\"password\" id=\"password\" placeholder=\"Password\" #userPassword required>\n                  </mat-form-field>\n              </td>\n            </tr>\n\n          </table>\n        </form> -->\n\n\n\n\n        <!-- <mat-card-actions>\n          <button mat-raised-button [disabled]=\"!credentials.valid\" (click)=\"authService.logIn(credentials.value.email, credentials.value.password)\" color=\"primary\">Login</button>\n        </mat-card-actions> -->\n\n          <!-- Calling GoogleAuth Api from AuthService -->\n         <mat-card-actions>\n            <button mat-raised-button color=\"primary\" (click)=\"authService.googleLogin()\">\n              Log in with Google\n            </button>\n         </mat-card-actions>\n\n         <mat-card-subtitle>\n            ** Your administrator will approve you as an admin or an employee if this is your first time logging in **\n         </mat-card-subtitle>\n        </mat-card-content>\n\n         <!-- <mat-card-actions>\n            <button mat-raised-button color=\"primary\" (click)=\"authService.signOut()\" [routerLink]=\"['/login']\">\n              Log Out\n            </button>\n         </mat-card-actions> -->\n\n    </mat-card>\n\n\n\n\n<mat-card *ngIf=\"isLoggedIn\">\n    <mat-card-content>\n      You are logged in as {{user.displayName}}! You are an\n      <span *ngIf=\"user.roles.admin\"> Admin!</span>\n      <span *ngIf=\"user.roles.employee\">Employee!</span>\n        <form>\n    <button mat-raised-button (click)=\"authService.signOut()\" [routerLink]=\"['/login']\" color=\"warn\">Logout</button>\n      </form>\n    </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content {\n  flex: 1 1 auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmxvZ2luRm9ybSB7XG4gIC8vIGNlbnRlciBmb3JtXG59XG5cbi5maWVsZC1mdWxsLXdpZHRoIHtcbiAgLy8gbWFrZSBmaWVsZCBmdWxsIHdpZHRoXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.authService.checkLoginStatus()
        //   .subscribe(val => this.isLoggedIn = val);
        var _this = this;
        // this.authService.getLoggedUser()
        //       .subscribe( user => {
        //           console.log(user);
        //           this.user = user;
        //   });
        this.authService.user$.subscribe(function (userRepsonse) {
            if (userRepsonse) {
                _this.isLoggedIn = true;
                _this.user = userRepsonse;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/employee-availability/dialog.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee/employee-availability/dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/components/employee/employee-availability/employee-availability.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/employee/employee-availability/employee-availability.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>What days are you available in {{currentDate | date:\"MMMM\"}} ? </mat-card-title>\n  <mat-card-subtitle> <mat-icon class=\"icon\">radio_button_checked</mat-icon> - current availabilities</mat-card-subtitle>\n  <mat-card-content>\n\n\n            <ejs-calendar [value]='dateValue' [min]='minDate' [max]='maxDate' [values]='dateValues'\n            [isMultiSelection]='multiSelect'  (change)='setAvailable($event)' (renderDayCell)='disabledDate($event)' style=\"width: 100%\">\n            </ejs-calendar>\n            <button  mat-button color=\"primary\" (click)=\"submit()\"> SUBMIT </button>\n      </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/employee/employee-availability/employee-availability.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/employee/employee-availability/employee-availability.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ejs-calendar {\n  margin: auto; }\n\nbutton {\n  width: 100%;\n  flex: 1 1 auto;\n  text-align: center; }\n\nmat-card-title {\n  text-align: center; }\n\nmat-card-subtitle {\n  text-align: center; }\n\n.icon {\n  color: #e3165b;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS1hdmFpbGFiaWxpdHkvZW1wbG95ZWUtYXZhaWxhYmlsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFhO0VBQ2Isc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWVlL2VtcGxveWVlLWF2YWlsYWJpbGl0eS9lbXBsb3llZS1hdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJlanMtY2FsZW5kYXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIFxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgbWF0LWNhcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmljb257XG4gICAgY29sb3I6I2UzMTY1YjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/employee/employee-availability/employee-availability.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/employee/employee-availability/employee-availability.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EmployeeAvailabilityComponent, DialogOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAvailabilityComponent", function() { return EmployeeAvailabilityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverview", function() { return DialogOverview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var EmployeeAvailabilityComponent = /** @class */ (function () {
    function EmployeeAvailabilityComponent(afs, authService, dialog) {
        this.afs = afs;
        this.authService = authService;
        this.dialog = dialog;
        this.month = new Date().getMonth();
        this.fullYear = new Date().getFullYear();
        this.today = new Date().getDate();
        this.dateValues = [];
        this.multiSelect = true;
        this.dateValue = new Date(this.fullYear, this.month, 11);
        this.minDate = new Date(this.fullYear, this.month, this.today + 1);
        this.maxDate = new Date(this.fullYear, this.month, 31);
        this.availableDates = [];
        this.currentUser = this.authService.currentUser;
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth() + 1;
        this.getEmployeesAvail();
    }
    EmployeeAvailabilityComponent.prototype.ngOnInit = function () {
    };
    EmployeeAvailabilityComponent.prototype.disabledDate = function (args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            args.isDisabled = true;
        }
    };
    EmployeeAvailabilityComponent.prototype.setAvailable = function (args) {
        this.selectedDate = args.value;
        this.availableDates = args.values;
        this.availableDates.forEach(function (selectedDate) {
        });
    };
    EmployeeAvailabilityComponent.prototype.submit = function () {
        var _this = this;
        var availabilityRef = this.afs.doc("users/" + this.currentUser.uid + "/available/" + this.currentMonth);
        var data = {
            title: this.currentUser.displayName,
            userId: this.currentUser.uid,
            available: this.availableDates
        };
        if (this.availableDates.length > 0) {
            availabilityRef.set(data, { merge: true }).then(function () {
                _this.openDialog();
            }).catch(function () {
                alert('AVAILABILITY NOT SUBMITTED. PLEASE TRY AGAIN');
            });
        }
        else {
            console.log('please select dates that you are available');
        }
    };
    EmployeeAvailabilityComponent.prototype.getEmployeesAvail = function () {
        var _this = this;
        var employeeAvailRef = this.afs.doc("users/" + this.currentUser.uid + "/available/" + this.currentMonth);
        var myAvailability = [];
        this.getAvail = employeeAvailRef.get()
            .subscribe(function (data) {
            data.data().available.forEach(function (timestamp) {
                var timestamps = new Date(timestamp.seconds * 1000);
                myAvailability.push(timestamps);
            });
            _this.dateValues = myAvailability;
        });
        return myAvailability;
    };
    EmployeeAvailabilityComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogOverview, {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    EmployeeAvailabilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-employee-availability',
            template: __webpack_require__(/*! ./employee-availability.component.html */ "./src/app/components/employee/employee-availability/employee-availability.component.html"),
            styles: [__webpack_require__(/*! ./employee-availability.component.scss */ "./src/app/components/employee/employee-availability/employee-availability.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], EmployeeAvailabilityComponent);
    return EmployeeAvailabilityComponent;
}());

var DialogOverview = /** @class */ (function () {
    function DialogOverview(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogOverview.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverview = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog.html */ "./src/app/components/employee/employee-availability/dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], DialogOverview);
    return DialogOverview;
}());



/***/ }),

/***/ "./src/app/shared/app-material.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/app-material.module.ts ***!
  \***********************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/my-nav/my-nav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/my-nav/my-nav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav position=\"start\" #leftDrawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>\n      <img mat-card-avatar src='{{profilePicture}}'>\n    </mat-toolbar>\n    <mat-card-title *ngIf=\"user\">\n      {{ user.displayName }}\n    </mat-card-title>\n    <br/>\n      <mat-card-subtitle>\n        Admin: {{ authService.isAdmin(user) }}\n        <br/>\n        Employee: {{ authService.isEmployee(user)}}\n      </mat-card-subtitle>\n\n    <mat-nav-list *ngIf=\"authService.isAdmin(user)\">\n      <a mat-list-item routerLink=\"/admin-dash\" routerLinkActive=\"active\"> <mat-icon class=\"sidebar-icon\">dashboard</mat-icon>Dashboard </a>\n      <a mat-list-item routerLink=\"/admin-view-employees\" routerLinkActive=\"active\"><mat-icon class=\"sidebar-icon\">people_alt</mat-icon>Employees</a>\n      <a mat-list-item routerLink=\"/admin-availabilities\" routerLinkActive=\"active\"><mat-icon class=\"sidebar-icon\">calendar_today</mat-icon>Availabilities</a>\n      <a mat-list-item routerLink=\"/admin-jobs\" routerLinkActive=\"active\"><mat-icon class=\"sidebar-icon\">card_travel</mat-icon>Jobs</a>\n      <!-- <a mat-list-item routerLink=\"/admin-export\" routerLinkActive=\"active\"><mat-icon class=\"sidebar-icon\">file_upload</mat-icon>EXPORT</a> -->\n    </mat-nav-list>\n\n    <mat-nav-list *ngIf=\"!authService.isAdmin(user) && authService.isEmployee(user)\">\n        <a mat-list-item routerLink=\"/employee-availability\" routerLinkActive=\"active\"> <mat-icon class=\"sidebar-icon\">calendar_today</mat-icon>Availability </a>\n        <a mat-list-item routerLink=\"/employee-hours\" routerLinkActive=\"active\"><mat-icon class=\"sidebar-icon\">watch_later</mat-icon>Clock Hours</a>\n      </mat-nav-list>\n\n      <mat-nav-list class=\"rightDrawer-list\">\n        <a mat-list-item *ngIf=\"user\" routerLink=\"/login\"> <mat-icon class=\"sidebar-icon\">arrow_back</mat-icon>Logout </a>\n        <a mat-list-item *ngIf=\"!user\" routerLink=\"/login\" routerLinkActive=\"active\"> <mat-icon class=\"sidebar-icon\">exit_to_app</mat-icon>Login </a>\n        <a mat-list-item routerLink=\"/help\" routerLinkActive=\"active\"><mat-icon class=\"sidebar-icon\">help</mat-icon>Help</a>\n    </mat-nav-list>\n\n\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button mat-button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"leftDrawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span class=\"title\">{{title}}</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/shared/my-nav/my-nav.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/my-nav/my-nav.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  text-align: center; }\n\n.sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\nmat-toolbar {\n  height: auto;\n  padding: 16px; }\n\nimg {\n  height: 100%;\n  width: 100%; }\n\n.title {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.rightDrawer-list {\n  padding-top: 88px; }\n\n.active {\n  background-color: #103C6E;\n  color: #C7E5FD;\n  font-weight: bold; }\n\n.active .sidebar-icon {\n    padding-right: 10px;\n    color: #C7E5FD; }\n\n.sidebar-icon {\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvc2hhcmVkL215LW5hdi9teS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUhuQjtJQUtJLG1CQUFtQjtJQUNuQixjQUFlLEVBQUE7O0FBS25CO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbXktbmF2L215LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHREcmF3ZXItbGlzdCB7XG4gIHBhZGRpbmctdG9wOiA4OHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwM0M2RTtcbiAgY29sb3I6ICNDN0U1RkQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAuc2lkZWJhci1pY29uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAgI0M3RTVGRDtcbiAgfVxufVxuXG5cbi5zaWRlYmFyLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/my-nav/my-nav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/my-nav/my-nav.component.ts ***!
  \***************************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.profilePicture = '../../../assets/profile/default-profile.png';
        this.title = 'Garage Designs of St. Louis';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
    }
    MyNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.user$.subscribe(function (userResponse) {
            _this.user = userResponse;
            console.log(_this.user);
            _this.setUserPicture();
        });
    };
    MyNavComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            console.log('unsubscribed!');
        }
    };
    MyNavComponent.prototype.setUserPicture = function () {
        if (this.user) {
            if (this.user.photoURL) {
                this.profilePicture = this.user.photoURL;
            }
        }
    };
    MyNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/shared/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.scss */ "./src/app/shared/my-nav/my-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  404 NOT FOUND\n</h1>\n"

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
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
    hmr: false,
    firebase: {
        apiKey: 'AIzaSyD3ZXUmSHNXYr9j9X4uczMloans_VYO2nk',
        authDomain: 'gd-management-system.firebaseapp.com',
        databaseURL: 'https://gd-management-system.firebaseio.com',
        projectId: 'gd-management-system',
        storageBucket: '',
        messagingSenderId: '815057845388'
    }
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

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samiabrahim/Documents/GitHub/PayrollProject/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map