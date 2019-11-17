(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-employee-hours-employee-hours-module"],{

/***/ "./src/app/components/employee/employee/employee.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee/employee/employee.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/employee/employee/employee.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee/employee/employee.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee/employee/employee.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/employee/employee/employee.component.ts ***!
  \********************************************************************/
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
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/components/employee/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/components/employee/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/hours/clock-hours/clock-hours.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/employee/hours/clock-hours/clock-hours.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clock-hours works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/employee/hours/clock-hours/clock-hours.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/employee/hours/clock-hours/clock-hours.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvaG91cnMvY2xvY2staG91cnMvY2xvY2staG91cnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee/hours/clock-hours/clock-hours.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/employee/hours/clock-hours/clock-hours.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClockHoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockHoursComponent", function() { return ClockHoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClockHoursComponent = /** @class */ (function () {
    function ClockHoursComponent() {
    }
    ClockHoursComponent.prototype.ngOnInit = function () {
    };
    ClockHoursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clock-hours',
            template: __webpack_require__(/*! ./clock-hours.component.html */ "./src/app/components/employee/hours/clock-hours/clock-hours.component.html"),
            styles: [__webpack_require__(/*! ./clock-hours.component.scss */ "./src/app/components/employee/hours/clock-hours/clock-hours.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClockHoursComponent);
    return ClockHoursComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/hours/employee-hours-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/employee/hours/employee-hours-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeHoursRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeHoursRoutingModule", function() { return EmployeeHoursRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_employee_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/guards/employee.guard */ "./src/app/components/auth/guards/employee.guard.ts");
/* harmony import */ var _clock_hours_clock_hours_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock-hours/clock-hours.component */ "./src/app/components/employee/hours/clock-hours/clock-hours.component.ts");
/* harmony import */ var _select_pay_period_select_pay_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-pay-period/select-pay-period.component */ "./src/app/components/employee/hours/select-pay-period/select-pay-period.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../employee/employee.component */ "./src/app/components/employee/employee/employee.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var employeeHoursRoutes = [
    {
        /// "/employee-hours"
        path: '',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"],
        canActivate: [_auth_guards_employee_guard__WEBPACK_IMPORTED_MODULE_1__["EmployeeGuard"]],
        children: [
            // "/employee-hours/selectPayPeriod" or "/employee-hours/clockhours"
            {
                path: '',
                canActivateChild: [_auth_guards_employee_guard__WEBPACK_IMPORTED_MODULE_1__["EmployeeGuard"]],
                children: [
                    { path: '', component: _select_pay_period_select_pay_period_component__WEBPACK_IMPORTED_MODULE_3__["SelectPayPeriodComponent"] },
                    { path: 'clock-hours', component: _clock_hours_clock_hours_component__WEBPACK_IMPORTED_MODULE_2__["ClockHoursComponent"] }
                ]
            }
        ]
    }
];
var EmployeeHoursRoutingModule = /** @class */ (function () {
    function EmployeeHoursRoutingModule() {
    }
    EmployeeHoursRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(employeeHoursRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], EmployeeHoursRoutingModule);
    return EmployeeHoursRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/employee/hours/employee-hours.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/employee/hours/employee-hours.module.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeHoursModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeHoursModule", function() { return EmployeeHoursModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../employee/employee.component */ "./src/app/components/employee/employee/employee.component.ts");
/* harmony import */ var _shared_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/app-material.module */ "./src/app/shared/app-material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_hours_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-hours-routing.module */ "./src/app/components/employee/hours/employee-hours-routing.module.ts");
/* harmony import */ var _clock_hours_clock_hours_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clock-hours/clock-hours.component */ "./src/app/components/employee/hours/clock-hours/clock-hours.component.ts");
/* harmony import */ var _select_pay_period_select_pay_period_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-pay-period/select-pay-period.component */ "./src/app/components/employee/hours/select-pay-period/select-pay-period.component.ts");








var EmployeeHoursModule = /** @class */ (function () {
    function EmployeeHoursModule() {
    }
    EmployeeHoursModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _employee_hours_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeHoursRoutingModule"],
                _shared_app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"]
            ],
            declarations: [_employee_employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"], _clock_hours_clock_hours_component__WEBPACK_IMPORTED_MODULE_6__["ClockHoursComponent"], _select_pay_period_select_pay_period_component__WEBPACK_IMPORTED_MODULE_7__["SelectPayPeriodComponent"]],
            exports: [_employee_employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"], _clock_hours_clock_hours_component__WEBPACK_IMPORTED_MODULE_6__["ClockHoursComponent"], _select_pay_period_select_pay_period_component__WEBPACK_IMPORTED_MODULE_7__["SelectPayPeriodComponent"]]
        })
    ], EmployeeHoursModule);
    return EmployeeHoursModule;
}());



/***/ }),

/***/ "./src/app/components/employee/hours/select-pay-period/select-pay-period.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/employee/hours/select-pay-period/select-pay-period.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n\n<p class=\"form-inline1\">\n    <mat-form-field>\n    <mat-label>Jobs</mat-label>\n    <mat-select [(value)]=\"selectedJob\" required>\n      <mat-option *ngFor=\"let job of jobOptions\" [value]=\"job.value\">\n        {{job.viewValue}}\n      </mat-option>\n    </mat-select>\n    </mat-form-field>\n\n    <div> you selected: {{selectedJob}} </div>\n\n    <button class=\"Job number\" ng-click=\"reset()\" id=\"JobID\">Select</button>\n\n  <!-- </p> -->\n\n\n\n<div ng-app=\"\" ng-init=\"mySwitch=true\">\n<p>\n    <button mat-raised-button  id=\"clockIn\" (click)=\"clockingIn()\" [disabled]=\"disableClockIn\">Clock In</button>\n</p>\n<p>\n    <button mat-raised-button  id=\"clockOut\"  (click)=\"clockingOut()\" [disabled]=\"disableClockOut\">Clock Out</button>\n</p>\n</div>\n\n<!-- <button mat-raised-button (click)=\"test()\">show test button</button> -->\n\n<!-- <button *ngFor=\"let element of dataSource.data\">\n</button> -->\n\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n\n    <ng-container matColumnDef=\"Job\">\n    <th mat-header-cell *matHeaderCellDef> Job ID</th>\n    <!-- <tr *ngFor = \"let element in element\"> -->\n    <td mat-cell *matCellDef=\"let element\"> {{element.Job}} </td>\n    <!-- </tr> -->\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"dateClock\">\n    <th mat-header-cell *matHeaderCellDef> Date </th>\n    <!-- <tr *ngFor = \"let element in element\"> -->\n    <td mat-cell *matCellDef=\"let element\"> {{element.dateClock}} </td>\n    <!-- </tr> -->\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"clockI\">\n    <th mat-header-cell *matHeaderCellDef> Clock In </th>\n    <!-- <tr *ngFor = \"let element in element\"> -->\n    <td mat-cell *matCellDef=\"let element\"> {{element.clockI}} </td>\n    <!-- </tr> -->\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"clockO\">\n    <th mat-header-cell *matHeaderCellDef> Clock Out </th>\n    <!-- <tr *ngFor = \"let element in element\"> -->\n    <td mat-cell *matCellDef=\"let element\"> {{element.clockO}} </td>\n    <!-- </tr> -->\n    </ng-container>\n\n    <ng-container matColumnDef=\"Hoursworked\">\n    <th mat-header-cell *matHeaderCellDef> Hours Worked </th>\n    <!-- <tr *ngFor = \"let element in element\"> -->\n    <td mat-cell *matCellDef=\"let element\"> {{element.Hoursworked}} </td>\n    <!-- </tr> -->\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>\n\n\n<!-- <div #TABLE>\n  <table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"employee\">\n        <th mat-header-cell *matHeaderCellDef> Employee </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.displayName}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"rate\">\n        <th mat-header-cell *matHeaderCellDef> Rate </th>\n        <td mat-cell *matCellDef=\"let employee\"> $ {{employee.hourlyRate}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"hrs\">\n        <th mat-header-cell *matHeaderCellDef> Hours </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.hours}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"total\">\n        <th mat-header-cell *matHeaderCellDef> Total </th>\n        <td mat-cell *matCellDef=\"let employee\"> $ {{employee.hours * employee.hourlyRate}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div> -->\n\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/employee/hours/select-pay-period/select-pay-period.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/employee/hours/select-pay-period/select-pay-period.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nbutton {\n  margin: 16px 8px; }\n\nspan {\n  padding-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9ob3Vycy9zZWxlY3QtcGF5LXBlcmlvZC9zZWxlY3QtcGF5LXBlcmlvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVcsRUFBQTs7QUFHWjtFQUNDLGdCQUFnQixFQUFBOztBQUdoQjtFQUNBLG1CQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9ob3Vycy9zZWxlY3QtcGF5LXBlcmlvZC9zZWxlY3QtcGF5LXBlcmlvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG4gIH1cblxuYnV0dG9uIHtcblx0bWFyZ2luOiAxNnB4IDhweDtcbiAgfVxuXG4gc3BhbiB7XG5cdHBhZGRpbmctcmlnaHQ6MTVweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/employee/hours/select-pay-period/select-pay-period.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/employee/hours/select-pay-period/select-pay-period.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SelectPayPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPayPeriodComponent", function() { return SelectPayPeriodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var element = [
    { Job: "1234",
        dateClock: "1/1/2019",
        clockI: '8:00',
        clockO: '15:00',
        Hoursworked: 7 }
];
var SelectPayPeriodComponent = /** @class */ (function () {
    function SelectPayPeriodComponent() {
        this.displayedColumns = ['Job', 'dateClock', 'clockI', 'clockO', 'Hoursworked'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.disableClockIn = false;
        this.disableClockOut = true;
        this.jobOptions = [
            { value: 'job1', viewValue: '#1234' },
            { value: 'job2', viewValue: '#2345' },
            { value: 'job3', viewValue: '#3456' },
            { value: 'job4', viewValue: '#4567' }
        ];
        this.selectedJob = 'job1';
    }
    SelectPayPeriodComponent.prototype.clockingIn = function () {
        var dt = new Date();
        this.clockedIn = new Date().getHours() + ':' + new Date().getHours() + ':' + new Date().getSeconds();
        console.log('clockin', this.clockedIn);
        this.disableClockIn = true;
        this.disableClockOut = false;
    };
    SelectPayPeriodComponent.prototype.clockingOut = function () {
        var dt = new Date();
        this.clockedOut = new Date().getHours() + ':' + new Date().getHours() + ':' + new Date().getSeconds();
        console.log('clockout', this.clockedOut);
        this.disableClockIn = false;
        this.disableClockOut = true;
        this.test();
    };
    // JobID(){
    //   var job = new Option();
    //   this.selectedJob ='job1';
    //   console.log('job ID', this.selectedJob)
    // }
    SelectPayPeriodComponent.prototype.dateobj = function () {
        var dateObj = new Date().toLocaleDateString();
        return dateObj;
    };
    SelectPayPeriodComponent.prototype.refresh = function () {
        var _this = this;
        this.refreshTable().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    SelectPayPeriodComponent.prototype.refreshTable = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.dataSource.data);
    };
    SelectPayPeriodComponent.prototype.test = function () {
        var data = {
            dateClock: this.dateobj(),
            Job: this.selectedJob,
            clockI: this.clockedIn,
            clockO: this.clockedOut,
            Hoursworked: this.clockedOut - this.clockedIn
        };
        this.dataSource.data.push(data);
        this.refresh();
        console.table(this.dataSource);
    };
    // element:any
    SelectPayPeriodComponent.prototype.ngOnInit = function () {
        // this.element=
        // [
        //   {
        //     Job:'1234',
        //     dateClock:new Date().toLocaleDateString,
        //     clockI:this.clockedIn,
        //     clockO:this.clockedOut,
        //     Hoursworked: 0
        //   }
        // ]
    };
    SelectPayPeriodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-select-pay-period',
            template: __webpack_require__(/*! ./select-pay-period.component.html */ "./src/app/components/employee/hours/select-pay-period/select-pay-period.component.html"),
            styles: [__webpack_require__(/*! ./select-pay-period.component.scss */ "./src/app/components/employee/hours/select-pay-period/select-pay-period.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectPayPeriodComponent);
    return SelectPayPeriodComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-employee-hours-employee-hours-module.js.map