import { Job } from './../../../admin/jobs/job';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Observable, of, Subscription } from 'rxjs';
import * as moment from 'moment';
import { actionBegin } from '@syncfusion/ej2-schedule';
import {MatSnackBar} from '@angular/material/snack-bar';


export interface PeriodicElement {
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

const element: PeriodicElement[] = [];


@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})



export class SelectPayPeriodComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  subscription: Subscription;
  displayedColumns: string[] = ['Job', 'dateClock', 'clockI', 'clockO', 'Hoursworked'];
  dataSource = new MatTableDataSource<PeriodicElement>(element);

// TODO: get jobs from database
  jobOptions: JobOption[] = [
    {value: 'default', viewValue: 'Any Job'}
  ];

  clockedIn;
  clockedOut;


  disableClockIn = false;
  disableClockOut = true;

  selectedJob = 'AnyJob';

  static = true;

  constructor(private _snackBar: MatSnackBar, private afs: AngularFirestore) {}


  ngOnInit() {
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



  clockingIn(message: string, action: string) {
    const dt = moment();
    this.clockedIn =  moment().format('hh:mm:ss');
    this.disableClockIn = true;
    this.disableClockOut = false;

    message = `Clocked in at ${this.clockedIn}`;
    action = 'GOT IT!';
    this._snackBar.open(message, action, {
      duration: 5000,
    });

  }



  clockingOut() {

    const dt2 = moment();
    this.clockedOut = moment().format('hh:mm:ss');


    this.disableClockIn = false;
    this.disableClockOut = true;

    this.test();

  }


  dateobj() {
    const dateObj = new Date().toLocaleDateString();
    return dateObj;
  }


  refresh() {
    this.refreshTable().subscribe((data: PeriodicElement[]) => {
    this.dataSource.data = data;
    });
  }

  refreshTable(): Observable<PeriodicElement[]> {
      return of(this.dataSource.data);
    }


  test() {
    const data = {
      dateClock: this.dateobj(),
      Job: this.selectedJob,
      clockI: this.clockedIn,
      clockO:  this.clockedOut,
      Hoursworked: moment.duration(
            moment(this.clockedOut, 'hh:mm:ss').diff(moment(this.clockedIn, 'hh:mm:ss'))
            ).hours() + ' Hours ' +  moment.duration(moment(this.clockedOut, 'hh:mm:ss')
            .diff(moment(this.clockedIn, 'hh:mm:ss'))).minutes() + ' Minutes ' +  moment.duration(
            moment(this.clockedOut, 'hh:mm:ss').diff(moment(this.clockedIn, 'hh:mm:ss'))
            ).seconds() + ' Seconds'
    };

    this.dataSource.data.push(data);
    this.refresh();
    console.log(this.dataSource);

    if (this.clockedOut <= 1) {

    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

