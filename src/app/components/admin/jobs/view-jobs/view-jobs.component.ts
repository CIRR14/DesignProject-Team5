import { Job } from './../job';
import { JobService } from '../job.service';
import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewjobsDataSource } from './view-jobs-datasource';
import { ViewInactiveDataSource } from './view-inactive-datasource';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit, OnDestroy {

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild('INACTIVETABLE') inactiveTable: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) inactivePaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) inactiveSort: MatSort;
  dataSource: ViewjobsDataSource;
  inactiveJobs: ViewInactiveDataSource;


  displayedColumns = ['created', 'clientName', 'address', 'jobHours', 'description'];
  subscription: Subscription;
  isMobile: boolean;


 isChecked =  false;


constructor(
  private afs: AngularFirestore, public service: JobService
) {}

  ngOnInit() {

    this.subscription = this.afs.collection<Job>(`jobs`).valueChanges().subscribe( jobs => {
      this.dataSource = new ViewjobsDataSource(this.paginator, this.sort);
      this.inactiveJobs = new ViewInactiveDataSource(this.inactivePaginator, this.inactiveSort);
      jobs.forEach((job) => {
        if (job.isActive === true) {
          this.dataSource.data.push(job);
        } else if (job.isActive === false) {
          this.inactiveJobs.inactive.push(job);
        }
      });
    },
    err => {
      console.log(err);
      this.service.errorMessage('Error loading!', 'dismiss');
    });
  }
  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Jobs');
    XLSX.writeFile(wb, 'jobs.xlsx');
  }

  exportInactive() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.inactiveTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Inactive Jobs');
    XLSX.writeFile(wb, 'inactive-jobs.xlsx');
  }

  OnChange($event) {
      console.log($event);
      console.log(this.isChecked);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
