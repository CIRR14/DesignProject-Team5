import { JobService } from './../job.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewjobsDataSource } from './view-jobs-datasource';
import { Subscription } from 'rxjs';
import { Job } from '../job';




@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit, OnDestroy{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewjobsDataSource;

// private jobs$: Observable<Job[]>;
<<<<<<< Updated upstream:frontend/src/app/components/admin/jobs/view-jobs/view-jobs.component.ts
 displayedColumns = ['jobId', 'created', 'clientName', 'address'];
=======
 displayedColumns = ['created', 'clientName', 'address', 'jobHours'];
>>>>>>> Stashed changes:src/app/components/admin/jobs/view-jobs/view-jobs.component.ts
 subscription: Subscription;

constructor(
  private afs: AngularFirestore, public service: JobService
) {}

<<<<<<< Updated upstream:frontend/src/app/components/admin/jobs/view-jobs/view-jobs.component.ts
// ngOnInit() {
//   this.jobs$ = this.route.paramMap.pipe(
//     switchMap(() => {
//       return this.service.getJobs();
//     })
//   )
// }



  //  Columns displayed in the table. Columns IDs can be added, removed, or reordered.
  // displayedColumns = ['date', 'text'];


=======
>>>>>>> Stashed changes:src/app/components/admin/jobs/view-jobs/view-jobs.component.ts
  ngOnInit() {
    this.subscription = this.afs.collection<Job>('jobs').valueChanges().subscribe((job) => {
      this.dataSource = new ViewjobsDataSource(this.paginator, this.sort);
      this.dataSource.data = job;
    });

  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
