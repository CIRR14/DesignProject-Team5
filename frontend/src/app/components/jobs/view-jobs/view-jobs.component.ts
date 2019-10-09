import { JobService } from './../job.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewjobsDataSource, ViewjobsItem } from './view-jobs-datasource';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../job';
import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {

private jobs$: Observable<Job[]>;
 displayedColumns = ['created', 'clientName', 'address', 'status'];

constructor(
  private service: JobService,
  private route: ActivatedRoute
) {}

ngOnInit() {
  this.jobs$ = this.route.paramMap.pipe(
    switchMap(() => {
      return this.service.getJobs();
    })
  )
}


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // dataSource: ViewjobsDataSource;

  //  Columns displayed in the table. Columns IDs can be added, removed, or reordered.
  // displayedColumns = ['date', 'text'];
  // subscription: Subscription;

  // constructor(private db: AngularFireDatabase) {}

  // ngOnInit() {
  //   this.subscription = this.db.list<ViewjobsItem>('jobs').valueChanges().subscribe(d => {
  //     console.log('data streaming');
  //     this.dataSource = new ViewjobsDataSource(this.paginator, this.sort);
  //     this.dataSource.data = d;
  //   });
  // }

  // ngOnDestroy(): void {
  //  this.subscription.unsubscribe();
  // }
}
