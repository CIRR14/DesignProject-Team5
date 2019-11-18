import { Job } from './../job';
import { JobService } from '../job.service';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewjobsDataSource } from './view-jobs-datasource';
import { Subscription, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewjobsDataSource;

displayedColumns = ['created', 'clientName', 'address', 'jobHours', 'description'];
 subscription: Subscription;
 isMobile: boolean;

constructor(
  private afs: AngularFirestore, public service: JobService
) {}

  ngOnInit() {
    this.subscription = this.afs.collection<Job>(`jobs`).valueChanges().subscribe( jobs => {
      this.dataSource = new ViewjobsDataSource(this.paginator, this.sort);
      this.dataSource.data = jobs;
    },
    err => {
      console.log(err);
      this.service.errorMessage('Error loading!', 'dismiss');
    });
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
