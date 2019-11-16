import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { getDefaultDateObject } from '@syncfusion/ej2-base';
import { of, Observable } from 'rxjs';

export interface PeriodicElement {
  dateClock: any;
  Job: string;
  clockI: any;
  clockO: any;
  Hoursworked: Number;
}

const element: PeriodicElement[] = [
  {Job: "1234",
  dateClock:"1/1/2019",
  clockI:'8:00',
  clockO:'15:00',
  Hoursworked: 7}
];




@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})



export class SelectPayPeriodComponent implements OnInit {

  displayedColumns: string[] = ['Job', 'dateClock', 'clockI', 'clockO','Hoursworked'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
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


  constructor() {



  }

  clockingIn() {
    var dt = new Date()
    this.clockedIn= new Date().getHours()+':'+ new Date().getHours()+':'+ new Date().getSeconds();
    console.log('clockin', this.clockedIn);
    this.disableClockIn = true;
    this.disableClockOut = false;

  }



  clockingOut() {
    var dt = new Date();
    this.clockedOut= new Date().getHours()+':'+ new Date().getHours()+':'+ new Date().getSeconds();
    console.log('clockout', this.clockedOut);
    this.disableClockIn = false;
    this.disableClockOut = true;

    this.test();

  }

  // JobID(){
  //   var job = new Option();
  //   this.selectedJob ='job1';
  //   console.log('job ID', this.selectedJob)

  // }

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
      Hoursworked: this.clockedOut - this.clockedIn
    };

    this.dataSource.data.push(data);
    this.refresh();
    console.table(this.dataSource);

  }

  // element:any

  ngOnInit() {


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
  }



}

