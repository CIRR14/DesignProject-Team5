(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-employees-employees-module"],{

/***/ "./src/app/components/admin/employees/employee-details/employee-details.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/employees/employee-details/employee-details.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"employee\">\n\n    <mat-card-actions>\n        <button mat-stroked-button [routerLink]=\"['/admin-view-employees']\" routerDirection=\"backward\">Back</button>\n        <button mat-raised-button position=\"end\" class=\"delete-employee\" color=\"warn\" (click)=\"deleteEmployee()\"> DELETE EMPLOYEE </button>\n      </mat-card-actions>\n\n  <mat-card-title > {{ employee.displayName }} / {{employee.empID}}</mat-card-title>\n  <mat-card-subtitle style=\"color: blue\" *ngIf=\"employee.roles.admin\"> ADMIN </mat-card-subtitle>\n  <mat-card-subtitle style=\"color: green\" *ngIf=\"employee.roles.employee\"> EMPLOYEE </mat-card-subtitle>\n\n  <mat-card-content>\n\n    <form [formGroup]=\"form\"(ngSubmit)=\"onSubmit()\" class=\"employee-form\">\n\n\n      <mat-form-field>\n        <textarea matInput placeholder=\"Employee Name\" formControlName=\"employeeName\"> {{employee.displayName}} </textarea>\n      </mat-form-field>\n\n      <mat-form-field>\n        <textarea matInput placeholder=\"Employee ID\" formControlName=\"employeeID\" maxLength=\"5\"> {{employee.empID}}</textarea>\n      </mat-form-field>\n\n      <mat-form-field class=\"hourlyRate\">\n          <input matInput type=\"number\" maxLength=\"3\" placeholder=\"Hourly Rate\" formControlName=\"hourlyRate\">\n          <span matPrefix> $&nbsp; </span>\n  <!-- {{employee.hourlyRate}} -->\n      </mat-form-field>\n\n      <div class=\"selectRole\">\n        <mat-form-field>\n          <mat-select matInput placeholder=\"Admin\" formControlName=\"adminRole\" >\n            <mat-option value=true> True </mat-option>\n            <mat-option value=false> False </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field >\n          <mat-select matInput placeholder=\"Employee\" formControlName=\"employeeRole\" disabled >\n              <mat-option value=true> True </mat-option>\n              <mat-option value=false> False </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <mat-card-actions>\n        <button mat-raised-button type=\"submit\" color=\"primary\"  [disabled]=\"!form.valid\"> UPDATE EMPLOYEE </button>\n      </mat-card-actions>\n    </form>\n\n    <mat-card-actions>\n      <button mat-raised-button color=\"warn\" [routerLink]=\"['/admin-view-employees']\" > CANCEL </button>\n    </mat-card-actions>\n\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/admin/employees/employee-details/employee-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/employees/employee-details/employee-details.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-form {\n  display: flex;\n  flex-direction: column; }\n\n.employee-form > * {\n  width: 100%; }\n\n.hourlyRate {\n  width: 20% !important; }\n\n.selectRole {\n  display: inline-block; }\n\n.selectRole mat-form-field {\n    margin-right: 1.4%; }\n\n.delete-employee {\n  float: right;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9lbXBsb3llZXMvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZW1wbG95ZWVzL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXBsb3llZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVtcGxveWVlLWZvcm0gPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob3VybHlSYXRlIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0Um9sZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1yaWdodDogMS40JTtcbiAgfVxufVxuXG4uZGVsZXRlLWVtcGxveWVlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/admin/employees/employee-details/employee-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin/employees/employee-details/employee-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../employees.service */ "./src/app/components/admin/employees/employees.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(route, router, service, auth, fb, afs) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.auth = auth;
        this.afs = afs;
        this.id = 0;
        this.employeeName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.employeeID = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.hourlyRate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.adminRole = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.employeeRole = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.form = fb.group({
            employeeName: this.employeeName,
            employeeID: this.employeeID,
            hourlyRate: this.hourlyRate,
            adminRole: this.adminRole,
            employeeRole: this.employeeRole
        });
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeeInfo();
        this.employee$ = this.service.getEmployeeById(this.id);
        this.subscription = this.employee$.subscribe(function (data) {
            _this.employee = data;
            _this.form.controls.employeeName.setValue(_this.employee.displayName);
            _this.form.controls.employeeID.setValue(_this.employee.empID);
            _this.form.controls.hourlyRate.setValue(_this.employee.hourlyRate);
            // this.form.controls.adminRole.setValue(this.employee.roles.admin);
        }, function (err) { console.log('error', err); }, function () { console.log('what to do after'); });
        this.formSubscription = this.form.get('adminRole').valueChanges.subscribe(function (value) {
            console.log(value);
            if (value === 'true') {
                // this.form.get('adminRole').setValue(true);
                _this.form.get('employeeRole').setValue('false');
                // this.formSubscription.unsubscribe();
            }
            else {
                // this.form.get('adminRole').setValue(false);
                _this.form.get('employeeRole').setValue('true');
                // this.formSubscription.unsubscribe();
            }
        });
    };
    EmployeeDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.formSubscription.unsubscribe();
    };
    EmployeeDetailsComponent.prototype.getEmployeeInfo = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params.id;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.id);
    };
    EmployeeDetailsComponent.prototype.onSubmit = function () {
        console.log('submitted');
        console.log(this.form);
        var userRef = this.afs.doc("users/" + this.employee.uid);
        var data = {
            empID: this.form.value.employeeID,
            uid: this.employee.uid,
            email: this.employee.email,
            displayName: this.form.value.employeeName,
            photoURL: this.employee.photoURL,
            emailVerified: this.employee.emailVerified,
            hourlyRate: this.form.value.hourlyRate,
            roles: {
                employee: this.stringToBoolean(this.form.value.employeeRole),
                admin: this.stringToBoolean(this.form.value.adminRole)
            }
        };
        console.log(data);
        userRef.set(data, { merge: true });
        this.router.navigateByUrl('/admin-view-employees');
    };
    EmployeeDetailsComponent.prototype.stringToBoolean = function (word) {
        switch (word.toLowerCase().trim()) {
            case 'true':
            case 'yes':
            case '1': return true;
            case 'false':
            case 'no':
            case '0':
            case null: return false;
            default: return Boolean(word);
        }
    };
    EmployeeDetailsComponent.prototype.deleteEmployee = function () {
        var userRef = this.afs.doc("users/" + this.employee.uid);
        this.router.navigateByUrl('/admin-view-employees');
        setTimeout(function () {
            userRef.delete();
        }, 300);
    };
    EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/components/admin/employees/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.scss */ "./src/app/components/admin/employees/employee-details/employee-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeesService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/employees/employee/employee.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/employees/employee/employee.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/admin/employees/employee/employee.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/employees/employee/employee.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin/employees/employee/employee.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/employees/employee/employee.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/components/admin/employees/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/components/admin/employees/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/employees/employees-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/employees/employees-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EmployeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function() { return EmployeesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/components/admin/employees/employee/employee.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/components/admin/employees/employee-details/employee-details.component.ts");
/* harmony import */ var _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../auth/guards/admin.guard */ "./src/app/components/auth/guards/admin.guard.ts");
/* harmony import */ var _view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-employees/view-employees.component */ "./src/app/components/admin/employees/view-employees/view-employees.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var employeesRouting = [
    {
        /// "/admin-view-employees"
        path: '',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"],
        canActivate: [_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
        children: [
            // "/admin-view-employees/:id or /admin-view-employees/add-employees or just /admin-view-employees"
            {
                path: '',
                canActivateChild: [_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
                children: [
                    { path: '', component: _view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_4__["ViewEmployeesComponent"] },
                    { path: ':id', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeDetailsComponent"] }
                ]
            }
        ]
    }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(employeesRouting)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/admin/employees/employees.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/admin/employees/employees.module.ts ***!
  \****************************************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/app-material.module */ "./src/app/shared/app-material.module.ts");
/* harmony import */ var _view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-employees/view-employees.component */ "./src/app/components/admin/employees/view-employees/view-employees.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/components/admin/employees/employee-details/employee-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employees-routing.module */ "./src/app/components/admin/employees/employees-routing.module.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/components/admin/employees/employee/employee.component.ts");









var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"], _view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_3__["ViewEmployeesComponent"], _employee_employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _employees_routing_module__WEBPACK_IMPORTED_MODULE_7__["EmployeesRoutingModule"],
                _shared_app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
            ],
            exports: [_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"], _view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_3__["ViewEmployeesComponent"]]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/components/admin/employees/employees.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/employees/employees.service.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var EmployeesService = /** @class */ (function () {
    function EmployeesService(as, route, afs) {
        this.as = as;
        this.route = route;
        this.afs = afs;
    }
    EmployeesService.prototype.ngOnInit = function () {
    };
    EmployeesService.prototype.getEmployeeById = function (id) {
        return this.afs.doc("users/" + id).valueChanges();
    };
    EmployeesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/components/admin/employees/view-employees/view-employees-datasource.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin/employees/view-employees/view-employees-datasource.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewEmployeesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEmployeesDataSource", function() { return ViewEmployeesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




// TODO: replace this with real data from your application
/**
 * Data source for the Viewjobs view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var ViewEmployeesDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ViewEmployeesDataSource, _super);
    function ViewEmployeesDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.employeesData = [];
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    ViewEmployeesDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.employeesData),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.employeesData.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.employeesData.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    ViewEmployeesDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ViewEmployeesDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ViewEmployeesDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'created': return compare(+a.id, +b.id, isAsc);
                case 'name': return compare(a.id, b.id, isAsc);
                case 'hourlyRate': return compare(a.id, b.id, isAsc);
                case 'role': return compare(a.id, b.id, isAsc);
                default: return 0;
            }
        });
    };
    return ViewEmployeesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/admin/employees/view-employees/view-employees.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/employees/view-employees/view-employees.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\n    <mat-card-title>\n      EMPLOYEES\n    </mat-card-title>\n\n\n    <table mat-table #table [dataSource]='dataSource' matSort aria-label=\"Elements\">\n      <!-- Name Column -->\n      <ng-container matColumnDef = 'name'>\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.displayName }} </td>\n      </ng-container>\n      <!-- Hourly Rate Column -->\n      <ng-container matColumnDef=\"hourlyRate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Hourly Rate</th>\n        <td mat-cell *matCellDef=\"let row\"> ${{row.hourlyRate}}</td>\n      </ng-container>\n\n      <!-- Role Column -->\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Role</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button class=\"role-button\" mat-button [ngStyle]=\"{'background-color' :row.roles.admin === true ? '#64b5f6': row.roles.employee === true ? '#4db6ac\n          ': '#ff8a65'}\">\n            {{row.roles.admin === true ? 'ADMIN ' :  row.roles.employee === true ? 'EMPLOYEE ' : 'NOT APPROVED' }}\n          </button>\n        </td>\n\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/admin-view-employees', row.uid]\"></tr>\n    </table>\n\n      <mat-paginator #paginator\n        [pageIndex]=\"0\"\n        [pageSize]=\"20\"\n        [pageSizeOptions]=\"[10, 20, 30]\">\n    </mat-paginator>\n\n\n\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/components/admin/employees/view-employees/view-employees.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/employees/view-employees/view-employees.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.add-employees-button {\n  position: absolute;\n  margin: 0;\n  right: 10px; }\n\n.role-button {\n  width: 125px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9lbXBsb3llZXMvdmlldy1lbXBsb3llZXMvdmlldy1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2VtcGxveWVlcy92aWV3LWVtcGxveWVlcy92aWV3LWVtcGxveWVlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC1lbXBsb3llZXMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDA7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ucm9sZS1idXR0b24ge1xuICB3aWR0aDogMTI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/employees/view-employees/view-employees.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/employees/view-employees/view-employees.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEmployeesComponent", function() { return ViewEmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _view_employees_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-employees-datasource */ "./src/app/components/admin/employees/view-employees/view-employees-datasource.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ViewEmployeesComponent = /** @class */ (function () {
    function ViewEmployeesComponent(afs, as) {
        this.afs = afs;
        this.as = as;
        this.displayedColumns = ['name', 'hourlyRate', 'role'];
    }
    ViewEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.as.user$.subscribe(function (res) {
            _this.loggedInUser = res;
        });
        // get all employees
        // display employees
        this.subscription = this.afs.collection('users').valueChanges().subscribe(function (res) {
            _this.dataSource = new _view_employees_datasource__WEBPACK_IMPORTED_MODULE_3__["ViewEmployeesDataSource"](_this.paginator, _this.sort);
            _this.dataSource.employeesData = res;
        });
    };
    ViewEmployeesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ViewEmployeesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ViewEmployeesComponent.prototype, "sort", void 0);
    ViewEmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-view-employees',
            template: __webpack_require__(/*! ./view-employees.component.html */ "./src/app/components/admin/employees/view-employees/view-employees.component.html"),
            styles: [__webpack_require__(/*! ./view-employees.component.scss */ "./src/app/components/admin/employees/view-employees/view-employees.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ViewEmployeesComponent);
    return ViewEmployeesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-admin-employees-employees-module.js.map