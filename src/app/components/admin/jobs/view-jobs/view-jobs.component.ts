import { Job } from './../job';
import { JobService } from '../job.service';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewjobsDataSource } from './view-jobs-datasource';
import { ViewInactiveDataSource } from './view-inactive-datasource';
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
      this.inactiveJobs = new ViewInactiveDataSource(this.paginator, this.sort);
      jobs.forEach((job) => {
        if (job.isActive === true) { 
          this.dataSource.data.push(job);
        } else if(job.isActive === false) {
          this.inactiveJobs.inactive.push(job);
        }
      });
    },
    err => {
      console.log(err);
      this.service.errorMessage('Error loading!', 'dismiss');
    });
  }

  OnChange($event) {

      console.log($event);
      console.log(this.isChecked);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
