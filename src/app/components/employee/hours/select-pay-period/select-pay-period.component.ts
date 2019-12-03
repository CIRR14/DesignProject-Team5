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

  reference;

  form: FormGroup;

  job = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);
  hours = new FormControl('', Validators.required);
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
        console.log(this.userClockInfo);
        this.selectedJob = clockHours.job;
      }
    });

    this.subscription = this.afs.collection<Job>(`jobs`).valueChanges().subscribe( jobs => {
      jobs.forEach((job) => {
        if (job.isActive === true) {
        const data: JobOption = {
          value: job.id,
          viewValue: job.address
        };
        this.jobOptions.push(data);
        }
      });
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
    console.log('in', clockedIn);
    console.log('out', clockedOut);

    const difference = (Math.abs(clockedIn - clockedOut) / 36e5).toFixed(2);
    this.hoursWorked = parseFloat(difference);
    console.log('hours worked', this.hoursWorked);


    // this.clockedOut = moment().format('hh:mm:ss');
    // this.hoursWorked = moment.duration(
    //   moment(this.clockedOut, 'hh:mm:ss').diff(moment(this.clockedIn, 'hh:mm:ss'))
    //   ).asHours().toFixed(2);
    return this.hoursWorked;
  }

  addHrsToJob(totalHours, jobId) {
    console.log(totalHours, 'AND', jobId);
    const jobRef = this.afs.doc(`jobs/${jobId}`);
    jobRef.get().subscribe((job) => {
      // console.log(job.data());
      const data = {
          jobHours: job.data().jobHours + totalHours
        };

      jobRef.set(data, {merge: true});
    });
    }


   async addHrsToEmployee(totalHours, empId, ref?) {
     if (ref) {
      console.log('im in ref');
      const empRef = this.afs.doc(`users/${empId}/payPeriod/${ref}`);
      empRef.get().subscribe((emp) => {
        console.log(emp.data());
        const data = {
          hours: emp.data().hours + totalHours
        };
        empRef.set(data, {merge: true});
      });
     } else {
      console.log(totalHours, 'AND', empId);
      const month = new Date().getMonth() + 1;
      const half = this.reference;
      const empRef = this.afs.doc(`users/${empId}/payPeriod/${half}`);

      empRef.get().subscribe((emp) => {
        console.log(emp.data());
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
                console.log(payPeriod.ref);
                half = payPeriod.ref;
                resolve(half);
              }
            });
          });
          console.log('this is half', half);
        });
      }
      // const today = new Date();
      // this.afs.collection(`users/${this.userId}/payPeriod`).valueChanges().subscribe((info) => {
      //     console.log(info);
      //     info.forEach((eachPP: any) => {
      //       const endDate = new Date(eachPP.endDate.seconds * 1000);
      //       const startDate = new Date(eachPP.startDate.seconds * 1000);
      //       if (today > startDate && today <= endDate) {
      //         this.reference = eachPP.ref;
      //       }
      //   });
      // });



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
    console.log(this.dataSource);
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
    this.clockedInSubscription.unsubscribe();
  }


async onSubmit() {
  console.log(this.form.value);
  const ref = await this.getHalfForSubmittedHours(this.form.value.date);
  const totalHours = this.form.value.hours;
  const empId = this.userId;
  const jobId = this.form.value.job;
  console.log('HALF', ref);
  this.addHrsToEmployee(totalHours, empId, ref);
  this.addHrsToJob(totalHours, jobId);
  this.form.reset();
  this.showForm = false;
  this.openSnackBar('SUBMITTED!')

  }

  getHalfForSubmittedHours(date: Date): Promise<string> {
    console.log(date);
    return new Promise((resolve) => {

      let half;
      this.afs.collectionGroup(`payPeriod`).valueChanges().subscribe((payPeriods) => {
        payPeriods.forEach((payPeriod: any) => {
          const pPEndDate = new Date(payPeriod.endDate.seconds * 1000);
          const pPStartDate = new Date(payPeriod.startDate.seconds * 1000);
          if (date > pPStartDate && date <= pPEndDate) {
            console.log(payPeriod.ref);
            half = payPeriod.ref;
            resolve(half);
          }
        });
      });
    });
  }
}


// onSubmit() {
//   console.log(this.job);

//   const jobRef = this.as.doc(`jobs/${this.job.id}`);
//   const data: Job = {
//     created: this.job.created,
//     clientName: this.job.clientName,
//     address: this.job.address,
//     id: this.job.id,
//     description: this.job.description,
//     jobHours: this.getJobHours(this.job.id),
//     isActive: true
//   };
//   jobRef.set(data, {merge: true})
//     .then(() => {
//     this.service.successMessage('Successfully Added!', 'dismiss');
//     this.router.navigateByUrl('admin-jobs');
//   }).catch((err) => {
//     console.log(err);
//     this.service.errorMessage('Error adding job!', 'dismiss');
//   });
// }
