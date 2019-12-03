import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription, of } from 'rxjs';
import { User } from './../../auth/user';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollectionGroup, AngularFirestoreCollection } from '@angular/fire/firestore';

import * as XLSX from 'xlsx';

export interface PayrollElement {
  name: string;
  rate: number;
  hours: number;
  uid: string;
}


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit, OnDestroy {
  @ViewChild('TABLE') table: ElementRef;
  @ViewChild('datepicker') datepicker: ElementRef;

  payPeriodRef: AngularFirestoreCollectionGroup<any>;
  payPeriod$: Observable<any>;
  payPeriodData = [];

  usersRef: AngularFirestoreCollection<any>;
  user$: Observable<any>;
  userData = [];

  loggedInUser: User;
  loggedInUserSubscription: Subscription;

  payrollData = [];
  displayedColumns: string[] = ['name', 'rate', 'hours', 'total'];
  dataSource = new MatTableDataSource<PayrollElement>();

  currentDate: Date = new Date();
  // currentMonth = new Date().getMonth() + 1;
  currentPayPeriod: string;

  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  

  ngOnInit() {
    this.dataSource.data = this.payrollData;
    this.payPeriodRef = this.afs.collectionGroup(`payPeriod`);
    this.payPeriod$ = this.payPeriodRef.valueChanges();

    this.usersRef = this.afs.collection('users');
    this.user$ = this.usersRef.valueChanges();

    this.loggedInUserSubscription = this.auth.user$.subscribe(user => {
      this.loggedInUser = user;
    });

    this.getInfo();
  }

  async getInfo() {
    await this.getAllEmployees();
    await this.getAllPayPeriods();
    await this.matchEmpAndPayPeriod();
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'payroll');
    XLSX.writeFile(wb, 'PayrollReport.xlsx');

    // CHECK IF THE PAY PERIOD EXISTS, IF NOT, CREATE ONE WITH THE APPROPRIATE VALUES
  }

  ngOnDestroy() {
    // this.loggedInUserSubscription.unsubscribe();
  }

  async change($event) {
      // this.payPeriodData = [];
      // this.userData = [];
      this.payPeriodData = [];
      this.userData = [];
      this.payrollData = [];
      this.currentDate = $event.value;
      this.ngOnInit();
      this.refresh();
  }

  getCurrentPayPeriod(endDate, startDate) {
    endDate = endDate.toLocaleDateString();
    startDate = startDate.toLocaleDateString();

    return `${startDate} - ${endDate}`;
  }

  getAllEmployees() {
    return new Promise((resolve) => {
      this.user$.subscribe((users) => {
        users.forEach(user => {
          const data = {
            uid: user.uid,
            name: user.displayName,
            rate: user.hourlyRate,
          };
          this.userData.push(data);
          resolve();
        });
      });
    });
  }

  getAllPayPeriods() {
    return new Promise((resolve) => {
      this.payPeriod$.subscribe((payPeriods) => {
        payPeriods.forEach((payPeriod) => {
          const pPEndDate = new Date(payPeriod.endDate.seconds * 1000);
          const pPStartDate = new Date(payPeriod.startDate.seconds * 1000);
          if (this.currentDate > pPStartDate && this.currentDate <= pPEndDate) {
            this.currentPayPeriod = this.getCurrentPayPeriod(pPEndDate, pPStartDate);
            this.payPeriodData.push(payPeriod);
            resolve();
          }
        });
      });
    });
  }

  matchEmpAndPayPeriod() {
    return new Promise((resolve) => {
      this.userData.forEach((user) => {
        this.payPeriodData.forEach((payP) => {
          if (user.uid === payP.uid) {
            const data: PayrollElement = {
              name: user.name,
              rate: user.rate,
              hours: payP.hours,
              uid: user.uid
            };
            this.payrollData.push(data);
            resolve();
          }
        });
      });
    });
  }

  refresh() {
    this.refreshTable().subscribe((data: PayrollElement[]) => {
      this.dataSource.data = data;
    });
  }

  refreshTable(): Observable<PayrollElement[]> {
    return of(this.dataSource.data);
  }
}
