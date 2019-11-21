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
  clockInDate: Date;
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

  jobOptions: JobOption[] = [
    {value: 'Default', viewValue: 'Any Job'}
  ];

  clockedIn;
  clockedOut;
  hoursWorked;

  isClockedIn: boolean;
  userClockInfo: ClockHours;

  selectedJob = 'Any Job';

  static = true;


  constructor(private _snackBar: MatSnackBar, private afs: AngularFirestore, private auth: AuthService) {}


  ngOnInit() {
    this.clockedInSubscription = this.afs.doc<ClockHours>(`clockHours/${this.userId}`).valueChanges().subscribe((clockHours) => {
      this.userClockInfo = clockHours;
      this.isClockedIn = clockHours.isClockedIn;
      console.log(this.userClockInfo);
      this.selectedJob = clockHours.job;
    });

    this.subscription = this.afs.collection<Job>(`jobs`).valueChanges().subscribe( jobs => {
      jobs.forEach((job) => {
        const data: JobOption = {
          value: job.id,
          viewValue: job.address
        };
        this.jobOptions.push(data);
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
      totalHours: 0, // TODO CHANGE
      clockInDate: new Date(),
      clockOutDate: new Date()
    };
    clockRef.set(data, {merge: true}).then(() => {
      this.openSnackBar();
    }).catch((err) => {
      alert('COULD NOT CLOCK IN' + err);
    });

    this.clockedIn =  moment().format('hh:mm:ss');
  }

  openSnackBar() {
    const message = `Clocked in at ${this.clockedIn}`;
    const action = 'GOT IT!';
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }



  clockingOut() {
    const clockRef = this.afs.doc(`clockHours/${this.userId}`);
    const data = {
      isClockedIn: false,
      clockOutDate: new Date(),
      totalHours: this.getDifference()
    };
    clockRef.set(data, {merge: true}).then(() => {
      this.addToTable();
    }).catch((err) => {
      alert('COULD NOT CLOCK IN' + err);
    });
  }

  getDifference(): number {
    const clockedIn = this.userClockInfo.clockInDate;
    const clockedOut = this.userClockInfo.clockOutDate;
    console.log('in', clockedIn);
    console.log('out', clockedOut);

    this.clockedOut = moment().format('hh:mm:ss');
    this.hoursWorked = moment.duration(
      moment(this.clockedOut, 'hh:mm:ss').diff(moment(this.clockedIn, 'hh:mm:ss'))
      ).asHours().toFixed(2);
    return this.hoursWorked;
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

