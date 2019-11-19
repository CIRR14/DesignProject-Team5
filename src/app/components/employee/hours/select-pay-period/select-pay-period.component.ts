import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Observable, of, from } from 'rxjs';
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

const element: PeriodicElement[] = [];




@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})



export class SelectPayPeriodComponent implements OnInit {

  displayedColumns: string[] = ['Job', 'dateClock', 'clockI', 'clockO','Hoursworked'];
  dataSource = new MatTableDataSource<PeriodicElement>(element);

 


  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();}

  clockedIn;
  clockedOut;


  disableClockIn: boolean = false;
  disableClockOut: boolean = true;

  jobOptions = [
    {value: 'job1', viewValue: '#1234'},
    {value: 'job2', viewValue: '#2345'},
    {value: 'job3', viewValue: '#3456'},
    {value: 'job4', viewValue: '#4567'}
  ];

  selectedJob = 'job1';


  constructor(private _snackBar: MatSnackBar) {}


  clockingIn(message: string, action: string) {

    var dt = moment();
    this.clockedIn=  moment().format("hh:mm:ss");
    

    this.disableClockIn = true;
    this.disableClockOut = false;

    message = 'hello';
   action = 'okay'
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }

 

  clockingOut() {

    var dt2 = moment();
    this.clockedOut= moment().format("hh:mm:ss");
    
    
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
      Hoursworked: moment.duration(moment(this.clockedOut,"hh:mm:ss").diff(moment(this.clockedIn,"hh:mm:ss"))).hours() + ' Hours ' +  moment.duration(moment(this.clockedOut,"hh:mm:ss").diff(moment(this.clockedIn,"hh:mm:ss"))).minutes() + ' Minutes ' +  moment.duration(moment(this.clockedOut,"hh:mm:ss").diff(moment(this.clockedIn,"hh:mm:ss"))).seconds() +' Seconds'
    };

    this.dataSource.data.push(data);
    this.refresh();
    console.log(this.dataSource);

    if(this.clockedOut<= 1){

    }

  }

  static:boolean = true;


  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  

}

