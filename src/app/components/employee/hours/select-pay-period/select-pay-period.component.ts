import { AuthService } from './../../../auth/auth.service';
import { Job } from './../../../admin/jobs/job';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Observable, of, Subscription } from 'rxjs';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material/snack-bar';



interface JobElement {
  dateClock: any;
  Job: string;
  clockI: any;
  clockO: any;
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
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  subscription: Subscription;
  userSubscription: Subscription;
  clockedInSubscription: Subscription;
  displayedColumns: string[] = ['Job', 'dateClock', 'clockI', 'clockO', 'Hoursworked'];
  dataSource = new MatTableDataSource<JobElement>(element);
  user = this.auth.currentUser;
  userId = this.auth.currentUser.uid;

  jobOptions: JobOption[] = [];

  clockedIn;
  clockedOut;
  hoursWorked;

  isClockedIn: boolean;
  userClockInfo: ClockHours;

  selectedJob = '1ANY';

  static = true;

  reference = this.getHalf();


  constructor(private _snackBar: MatSnackBar, private afs: AngularFirestore, private auth: AuthService) {}


  ngOnInit() {
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      this.addToTable();
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


   async addHrsToEmployee(totalHours, empId) {
      console.log(totalHours, 'AND', empId);
      const month = new Date().getMonth() + 1;
      const half = this.reference;
      const empRef = this.afs.doc(`users/${empId}/payPeriod/${half}`);

      empRef.get().subscribe((emp) => {
        // console.log(emp.data());
        const data = {
          hours: emp.data().hours + totalHours
        };
        empRef.set(data, {merge: true});
      });
    }

      getHalf(): string {
        const currentMonth = new Date().getMonth() + 1;
        const oneOrTwo = 2;
        const ref = `${currentMonth}-${oneOrTwo}`;
        return ref;
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
      dateClock: this.dateobj(),
      Job: this.selectedJob,
      clockI: this.clockedIn,
      clockO:  this.clockedOut,
      Hoursworked: this.hoursWorked
    };

    this.dataSource.data.push(data);
    this.refresh();
    console.log(this.dataSource);
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
    this.clockedInSubscription.unsubscribe();
  }

}

