import { Observable, Subscription } from 'rxjs';
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
  dataSource = this.payrollData;

  currentDate = new Date();
  currentMonth = new Date().getMonth() + 1;
  currentPayPeriod: string;

  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  @ViewChild('TABLE') table: ElementRef;

  ngOnInit() {
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
    this.matchEmpAndPayPeriod();
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'payroll');
    XLSX.writeFile(wb, 'PayrollReport.xlsx');
  }

  ngOnDestroy() {
    this.loggedInUserSubscription.unsubscribe();
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
          this.currentPayPeriod = this.getCurrentPayPeriod(pPEndDate, pPStartDate);
          if (this.currentDate > pPStartDate && this.currentDate <= pPEndDate) {
            this.payPeriodData.push(payPeriod);
            resolve();
          }
        });
      });
    });
  }

  matchEmpAndPayPeriod() {
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
        }
      });
    });
  }
}
