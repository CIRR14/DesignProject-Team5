import { AuthService } from './../../../auth/auth.service';
import { Job } from './../../../admin/jobs/job';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, of, Subscription } from 'rxjs';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { supportsWebAnimations } from '@angular/animations/browser/src/render/web_animations/web_animations_driver';
import { updateBlazorTemplate } from '@syncfusion/ej2-base';




interface JobElement {
  dateClock: any;
  Job: string;
  Hoursworked: any;
}

interface JobOption {
  value: string;
  viewValue: string;
}

interface ClockHours {
  isClockedIn: boolean;
  totalHours: number;
  clockInDate: any;
  clockOutDate: Date;
  job: string;
}

const element: JobElement[] = [];


@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})



export class SelectPayPeriodComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  userSubscription: Subscription;
  clockedInSubscription: Subscription;
  displayedColumns: string[] = ['Job', 'dateClock', 'Hoursworked'];
  dataSource = new MatTableDataSource<JobElement>(element);
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  static = true;

  user = this.auth.currentUser;
  userId = this.auth.currentUser.uid;

  jobOptions: JobOption[] = [];

  clockedIn;
  clockedOut;
  hoursWorked;

  isClockedIn: boolean;
  userClockInfo: ClockHours;

  selectedJob = '1ANY';

  currentDate = new Date();
  maxDate = new Date();

  reference;

  form: FormGroup;

  job = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);
  hours = new FormControl('', [Validators.max(15), Validators.min(0), Validators.required]);
  showForm: boolean = false;

  // date = new FormControl(new Date(), Validators.required);
  // job = new FormControl('', Validators.required);
  // serializedDate = new FormControl((new Date()).toISOString());
  // inputValue = 0;

  constructor(private _snackBar: MatSnackBar, private afs: AngularFirestore, private auth: AuthService,
              private fb: FormBuilder) {
      this.form = fb.group({
        job: this.job,
        date: this.date,
        hours: this.hours
      });
    }


  async ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.reference = await this.getHalf();
    this.clockedInSubscription = this.afs.doc<ClockHours>(`clockHours/${this.userId}`).valueChanges().subscribe((clockHours) => {
      if (clockHours) {
        this.userClockInfo = clockHours;
        this.isClockedIn = clockHours.isClockedIn;
        this.selectedJob = clockHours.job;
      }
    });

    this.subscription = this.afs.collection<Job>(`jobs`).valueChanges().subscribe( jobs => {
      if(!this.jobOptions.length) {
        jobs.forEach((job) => {
          if (job.isActive === true) {
          const data: JobOption = {
            value: job.id,
            viewValue: job.address
          };
          if (jobs.length === this.jobOptions.length) {
          } else {
            this.jobOptions.push(data);
          }
          }
        });
      }
    });
  }




  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}



  clockingIn() {
    const clockRef = this.afs.doc(`clockHours/${this.userId}`);
    const data = {
      job: this.selectedJob,
      isClockedIn: true,
      totalHours: 0,
      clockInDate: new Date(),
      clockOutDate: new Date()
    };
    clockRef.set(data, {merge: true}).then(() => {
      const message = `Clocked in at ${moment().format('hh:mm:ss a')}`;
      this.openSnackBar(message);
    }).catch((err) => {
      alert('COULD NOT CLOCK IN' + err);
    });
  }

  openSnackBar(message: string) {
    const action = 'GOT IT!';
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }



  clockingOut() {
    const clockRef = this.afs.doc(`clockHours/${this.userId}`);
    const totHrs = this.getDifference();
    const data = {
      isClockedIn: false,
      clockOutDate: new Date(),
      totalHours: totHrs,
      job: this.selectedJob
    };
    clockRef.set(data, {merge: true}).then(() => {
      const message = `Clocked out at ${moment().format('hh:mm:ss a')}`;
      this.openSnackBar(message);
      // this.addToTable();
      // ADD this.hoursWorked to job id totalHours;
      this.addHrsToJob(this.hoursWorked, data.job);
      // ADD this.hoursWorked to employee -> payroll -> [month-half] -> hours
      this.addHrsToEmployee(this.hoursWorked, this.userId);
    }).catch((err) => {
      alert('COULD NOT CLOCK IN' + err);
    });
  }

  getDifference(): number { // convert timestamp to date
    const clockedIn: any = new Date(this.userClockInfo.clockInDate.seconds * 1000);
    const clockedOut: any = new Date();

    const difference = (Math.abs(clockedIn - clockedOut) / 36e5).toFixed(2);
    this.hoursWorked = parseFloat(difference);
    return this.hoursWorked;
  }

  addHrsToJob(totalHours, jobId) {
    const jobRef = this.afs.doc(`jobs/${jobId}`);
    jobRef.get().subscribe((job) => {
      const data = {
          jobHours: job.data().jobHours + totalHours
        };

      jobRef.set(data, {merge: true});
    });
    }


   async addHrsToEmployee(totalHours, empId, ref?) {
     if (ref) {
      const empRef = this.afs.doc(`users/${empId}/payPeriod/${ref}`);
      empRef.get().subscribe((emp) => {
        const data = {
          hours: emp.data().hours + totalHours
        };
        empRef.set(data, {merge: true});
      });
     } else {
      const month = new Date().getMonth() + 1;
      const half = this.reference;
      const empRef = this.afs.doc(`users/${empId}/payPeriod/${half}`);

      empRef.get().subscribe((emp) => {
        const data = {
          hours: emp.data().hours + totalHours
        };
        empRef.set(data, {merge: true});
      });
    }
    }

      async getHalf(): Promise<string> {
        return new Promise((resolve) => {

          let half;
          this.afs.collectionGroup(`payPeriod`).valueChanges().subscribe((payPeriods) => {
            payPeriods.forEach((payPeriod: any) => {
              const pPEndDate = new Date(payPeriod.endDate.seconds * 1000);
              const pPStartDate = new Date(payPeriod.startDate.seconds * 1000);
              if (this.currentDate > pPStartDate && this.currentDate <= pPEndDate) {
                half = payPeriod.ref;
                resolve(half);
              }
            });
          });
        });
      }


dateobj() {
    const dateObj = new Date().toLocaleDateString();
    return dateObj;
  }


refresh() {
    this.refreshTable().subscribe((data: JobElement[]) => {
    this.dataSource.data = data;
    });
  }

refreshTable(): Observable<JobElement[]> {
      return of(this.dataSource.data);
    }


addToTable() {
    const data = {
      Job: this.selectedJob,
      dateClock: this.dateobj(),
      Hoursworked: 0
    };

    this.dataSource.data.unshift(data);
    this.refresh();
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
    this.clockedInSubscription.unsubscribe();
  }


async onSubmit() {
  const ref = await this.getHalfForSubmittedHours(this.form.value.date);
  const totalHours = this.form.value.hours;
  const empId = this.userId;
  const jobId = this.form.value.job;
  this.addHrsToEmployee(totalHours, empId, ref);
  this.addHrsToJob(totalHours, jobId);
  this.form.reset();
  this.showForm = false;
  this.openSnackBar('SUBMITTED!');
  }

  getHalfForSubmittedHours(date: Date): Promise<string> {
    return new Promise((resolve) => {

      let half;
      this.afs.collectionGroup(`payPeriod`).valueChanges().subscribe((payPeriods) => {
        payPeriods.forEach((payPeriod: any) => {
          const pPEndDate = new Date(payPeriod.endDate.seconds * 1000);
          const pPStartDate = new Date(payPeriod.startDate.seconds * 1000);
          if (date > pPStartDate && date <= pPEndDate) {
            half = payPeriod.ref;
            resolve(half);
          }
        });
      });
    });
  }
}
