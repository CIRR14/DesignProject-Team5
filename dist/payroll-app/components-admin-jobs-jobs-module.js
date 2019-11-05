(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-jobs-jobs-module"],{

/***/ "./src/app/components/admin/jobs/add-job/add-job.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/jobs/add-job/add-job.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"job-card\">\n    <mat-card-title>\n      Add\n    </mat-card-title>\n    <mat-card-content>\n\n      <mat-form-field>\n        <input disabled matInput placeholder=\"Select when job was created...\"  name=\"created\" [(ngModel)]=\"job.created\" [matDatepicker]=\"created\">\n        <mat-datepicker-toggle matSuffix [for]=\"created\"></mat-datepicker-toggle>\n        <mat-datepicker disabled=\"false\" #created></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field>\n        <textarea placeholder=\"Enter client first name...\" rows=\"3\" maxlength=\"300\" matInput [(ngModel)]=\"job.clientName\" name=\"firstName\"></textarea>\n      </mat-form-field>\n\n      <mat-form-field>\n        <textarea placeholder=\"Enter client address...\" rows=\"3\" maxlength=\"300\" matInput [(ngModel)]=\"job.address\" name=\"address\"></textarea>\n      </mat-form-field>\n\n      <mat-form-field>\n          <textarea placeholder=\"Enter job status...\" rows=\"3\" maxlength=\"300\" matInput [(ngModel)]=\"job.status\" name=\"status\"></textarea>\n      </mat-form-field>\n\n      <mat-form-field>\n          <textarea placeholder=\"Enter job id...\" rows=\"3\" maxlength=\"300\" matInput [(ngModel)]=\"job.id\" name=\"id\"></textarea>\n      </mat-form-field>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button [routerLink]=\"['/admin-jobs']\" routerDirection=\"backward\" color=\"warn\" type=\"cancel\">Cancel</button>\n      <button mat-button position=\"end\" [disabled]=\"!formIsFilledOut\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n </form>\n"

/***/ }),

/***/ "./src/app/components/admin/jobs/add-job/add-job.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/jobs/add-job/add-job.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-card {\n  min-width: 150px;\n  max-width: 400px;\n  width: 100%;\n  margin: auto; }\n\n.mat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9qb2JzL2FkZC1qb2IvYWRkLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vam9icy9hZGQtam9iL2FkZC1qb2IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9iLWNhcmQge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/jobs/add-job/add-job.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/admin/jobs/add-job/add-job.component.ts ***!
  \********************************************************************/
/*! exports provided: AddJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobComponent", function() { return AddJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AddJobComponent = /** @class */ (function () {
    function AddJobComponent(db) {
        this.db = db;
        this.job = [];
        this.formIsFilledOut = false;
    }
    AddJobComponent.prototype.ngOnInit = function () {
    };
    AddJobComponent.prototype.onSubmit = function () {
        var _this = this;
        this.job.created = new Date(this.job.created).valueOf();
        this.db.list('jobs').push(this.job)
            .then(function (_) {
            _this.job = {};
            console.log('success');
        });
    };
    AddJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-job',
            template: __webpack_require__(/*! ./add-job.component.html */ "./src/app/components/admin/jobs/add-job/add-job.component.html"),
            styles: [__webpack_require__(/*! ./add-job.component.scss */ "./src/app/components/admin/jobs/add-job/add-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AddJobComponent);
    return AddJobComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/jobs/job-details/job-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/jobs/job-details/job-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <button mat-stroked-button [routerLink]= \"['/admin-jobs']\" routerDirection=\"backward\">\n    back\n  </button>\n<mat-card-header>\n  JOB ID: {{id}}\n</mat-card-header>\n<!-- <mat-card-content>\n  <mat-card-title>\n    {{theJob.clientName.firstName}} {{theJob.clientName.lastName}}\n  </mat-card-title>\n  <mat-card-subtitle [ngStyle]=\"{'color': theJob.status === 'not started' ? 'red': theJob.status === 'in progress' ? 'yellow': theJob.status === 'done' ? 'green': ''}\">\n    status\n  </mat-card-subtitle>\n  {{theJob.created | date: 'MM/dd/yyyy'}}\n  <br>\n  {{theJob.jobAddress.street}}\n  <br>\n  {{theJob.jobAddress.city}}, {{theJob.jobAddress.zipCode}}\n\n</mat-card-content> -->\n\n\n\n\n\n\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/admin/jobs/job-details/job-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/jobs/job-details/job-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vam9icy9qb2ItZGV0YWlscy9qb2ItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/jobs/job-details/job-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/jobs/job-details/job-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: JobDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function() { return JobDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/components/admin/jobs/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var JobDetailsComponent = /** @class */ (function () {
    function JobDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
        this.id = 0;
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            console.log(params);
            _this.id = params.id;
            _this.theJob = _this.service.getJobById(_this.id);
        });
    };
    JobDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-job-details',
            template: __webpack_require__(/*! ./job-details.component.html */ "./src/app/components/admin/jobs/job-details/job-details.component.html"),
            styles: [__webpack_require__(/*! ./job-details.component.scss */ "./src/app/components/admin/jobs/job-details/job-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]])
    ], JobDetailsComponent);
    return JobDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/jobs/job.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/admin/jobs/job.service.ts ***!
  \******************************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_jobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock.jobs */ "./src/app/components/admin/jobs/mock.jobs.ts");




var JobService = /** @class */ (function () {
    function JobService() {
    }
    JobService.prototype.getJobs = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_jobs__WEBPACK_IMPORTED_MODULE_3__["JOBS"]);
    };
    JobService.prototype.getJobById = function (id) {
        var job = _mock_jobs__WEBPACK_IMPORTED_MODULE_3__["JOBS"].find(function (x) { return x.id === +id; });
        return job;
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/components/admin/jobs/job/job.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/admin/jobs/job/job.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/admin/jobs/job/job.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/admin/jobs/job/job.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vam9icy9qb2Ivam9iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin/jobs/job/job.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/admin/jobs/job/job.component.ts ***!
  \************************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobComponent = /** @class */ (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/components/admin/jobs/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/components/admin/jobs/job/job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/jobs/jobs-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/admin/jobs/jobs-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: JobsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsRoutingModule", function() { return JobsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_job_add_job_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-job/add-job.component */ "./src/app/components/admin/jobs/add-job/add-job.component.ts");
/* harmony import */ var _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/guards/admin.guard */ "./src/app/components/auth/guards/admin.guard.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/components/admin/jobs/job/job.component.ts");
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-details/job-details.component */ "./src/app/components/admin/jobs/job-details/job-details.component.ts");
/* harmony import */ var _view_jobs_view_jobs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-jobs/view-jobs.component */ "./src/app/components/admin/jobs/view-jobs/view-jobs.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var jobsRoutes = [
    {
        ///   "/admin-jobs"
        path: '',
        component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"],
        canActivate: [_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]],
        children: [
            //    "/admin-jobs/:id" or "/admin-jobs/addJob" or just "/admin-jobs"
            {
                path: '',
                canActivateChild: [_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]],
                children: [
                    { path: '', component: _view_jobs_view_jobs_component__WEBPACK_IMPORTED_MODULE_5__["ViewJobsComponent"] },
                    { path: 'addJob', component: _add_job_add_job_component__WEBPACK_IMPORTED_MODULE_1__["AddJobComponent"] },
                    { path: ':id', component: _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_4__["JobDetailsComponent"] }
                ]
            }
        ]
    }
];
var JobsRoutingModule = /** @class */ (function () {
    function JobsRoutingModule() {
    }
    JobsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(jobsRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], JobsRoutingModule);
    return JobsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/admin/jobs/jobs.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/admin/jobs/jobs.module.ts ***!
  \******************************************************/
/*! exports provided: JobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_job_add_job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-job/add-job.component */ "./src/app/components/admin/jobs/add-job/add-job.component.ts");
/* harmony import */ var _shared_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/app-material.module */ "./src/app/shared/app-material.module.ts");
/* harmony import */ var _view_jobs_view_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-jobs/view-jobs.component */ "./src/app/components/admin/jobs/view-jobs/view-jobs.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs-routing.module */ "./src/app/components/admin/jobs/jobs-routing.module.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./job/job.component */ "./src/app/components/admin/jobs/job/job.component.ts");
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./job-details/job-details.component */ "./src/app/components/admin/jobs/job-details/job-details.component.ts");










var JobsModule = /** @class */ (function () {
    function JobsModule() {
    }
    JobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["JobsRoutingModule"],
                _shared_app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_job_job_component__WEBPACK_IMPORTED_MODULE_8__["JobComponent"], _view_jobs_view_jobs_component__WEBPACK_IMPORTED_MODULE_4__["ViewJobsComponent"], _add_job_add_job_component__WEBPACK_IMPORTED_MODULE_2__["AddJobComponent"], _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_9__["JobDetailsComponent"]],
            exports: [_job_job_component__WEBPACK_IMPORTED_MODULE_8__["JobComponent"], _view_jobs_view_jobs_component__WEBPACK_IMPORTED_MODULE_4__["ViewJobsComponent"], _add_job_add_job_component__WEBPACK_IMPORTED_MODULE_2__["AddJobComponent"], _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_9__["JobDetailsComponent"]]
        })
    ], JobsModule);
    return JobsModule;
}());



/***/ }),

/***/ "./src/app/components/admin/jobs/mock.jobs.ts":
/*!****************************************************!*\
  !*** ./src/app/components/admin/jobs/mock.jobs.ts ***!
  \****************************************************/
/*! exports provided: JOBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOBS", function() { return JOBS; });
var JOBS = [
    { id: 1,
        clientName: {
            firstName: 'Rick',
            lastName: 'Sanchez'
        },
        jobAddress: {
            street: '1245 Rick & Morty Rd',
            city: 'Schezwan',
            zipCode: 23411
        },
        status: 'not started',
        created: new Date(2019, 10, 4)
    },
    { id: 2,
        clientName: {
            firstName: 'Sponge',
            lastName: 'Bob'
        },
        jobAddress: {
            street: '1223 Bikini Bottom Rd.',
            city: 'Bikini Bottom',
            zipCode: 82838
        },
        status: 'in progress',
        created: new Date(2019, 4, 23)
    },
    { id: 3,
        clientName: {
            firstName: 'Yeet',
            lastName: 'Yeeters'
        },
        jobAddress: {
            street: '445 Yeeters Rd.',
            city: 'YeetNation',
            zipCode: 40204
        },
        status: 'done',
        created: new Date(2019, 10, 4)
    }
];


/***/ }),

/***/ "./src/app/components/admin/jobs/view-jobs/view-jobs-datasource.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/jobs/view-jobs/view-jobs-datasource.ts ***!
  \*************************************************************************/
/*! exports provided: ViewjobsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewjobsDataSource", function() { return ViewjobsDataSource; });
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
var ViewjobsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ViewjobsDataSource, _super);
    function ViewjobsDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = [];
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    ViewjobsDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    ViewjobsDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ViewjobsDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ViewjobsDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'created': return compare(+a.id, +b.id, isAsc);
                case 'clientName': return compare(a.created, b.created, isAsc);
                case 'address': return compare(a.created, b.created, isAsc);
                case 'status': return compare(a.created, b.created, isAsc);
                default: return 0;
            }
        });
    };
    return ViewjobsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/admin/jobs/view-jobs/view-jobs.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/jobs/view-jobs/view-jobs.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\n  <mat-card-title> JOBS\n    <button mat-raised-button class=\"add-job-button\" [routerLink]=\"['/admin-jobs/addJob']\"> Add Job </button>\n  </mat-card-title>\n  <table mat-table #table [dataSource]='dataSource' matSort aria-label=\"Elements\">\n    <!-- Date Column -->\n    <ng-container matColumnDef = 'created'>\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.created | date: 'MM/dd/yyyy'}} </td>\n    </ng-container>\n    <!-- Client Name Column -->\n    <ng-container matColumnDef=\"clientName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Client Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.clientName}}</td>\n    </ng-container>\n    <!-- Address Column -->\n    <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Address</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.jobAddress}}</td>\n      </ng-container>\n      <!-- Address Column -->\n    <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n        <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"{'color': row.status === 'not started' ? 'red': row.status === 'in progress' ? 'yellow': row.status === 'done' ? 'green': ''}\" >{{row.status}}</td>\n      </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/admin-jobs', row.id]\"></tr>\n  </table>\n\n    <mat-paginator #paginator\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/admin/jobs/view-jobs/view-jobs.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/jobs/view-jobs/view-jobs.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.add-job-button {\n  position: absolute;\n  margin: 0;\n  right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYWJyYWhpbS9Eb2N1bWVudHMvR2l0SHViL1BheXJvbGxQcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9qb2JzL3ZpZXctam9icy92aWV3LWpvYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vam9icy92aWV3LWpvYnMvdmlldy1qb2JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWpvYi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMDtcbiAgcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/admin/jobs/view-jobs/view-jobs.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/jobs/view-jobs/view-jobs.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJobsComponent", function() { return ViewJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _view_jobs_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-jobs-datasource */ "./src/app/components/admin/jobs/view-jobs/view-jobs-datasource.ts");





var ViewJobsComponent = /** @class */ (function () {
    function ViewJobsComponent(
    // private service: JobService,
    // private route: ActivatedRoute,
    db) {
        this.db = db;
        // private jobs$: Observable<Job[]>;
        this.displayedColumns = ['created', 'clientName', 'address', 'status'];
    }
    // ngOnInit() {
    //   this.jobs$ = this.route.paramMap.pipe(
    //     switchMap(() => {
    //       return this.service.getJobs();
    //     })
    //   )
    // }
    //  Columns displayed in the table. Columns IDs can be added, removed, or reordered.
    // displayedColumns = ['date', 'text'];
    ViewJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.db.list('jobs').valueChanges().subscribe(function (d) {
            _this.dataSource = new _view_jobs_datasource__WEBPACK_IMPORTED_MODULE_4__["ViewjobsDataSource"](_this.paginator, _this.sort);
            _this.dataSource.data = d;
        });
    };
    ViewJobsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ViewJobsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ViewJobsComponent.prototype, "sort", void 0);
    ViewJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view-jobs',
            template: __webpack_require__(/*! ./view-jobs.component.html */ "./src/app/components/admin/jobs/view-jobs/view-jobs.component.html"),
            styles: [__webpack_require__(/*! ./view-jobs.component.scss */ "./src/app/components/admin/jobs/view-jobs/view-jobs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ViewJobsComponent);
    return ViewJobsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-admin-jobs-jobs-module.js.map