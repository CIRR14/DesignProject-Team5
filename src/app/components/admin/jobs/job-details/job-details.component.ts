import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription, Observable, of } from 'rxjs';
import { JobService } from '../job.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Job } from '../job';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  theJob: Job;
  job$: Observable<Job>;
  id = 0;

  length: number;

  constructor(
    private route: ActivatedRoute,
    private service: JobService,
    private afs: AngularFirestore
  ) { }


  ngOnInit() {
    this.getJobInfo();

    this.job$ = this.service.getJobById(this.id);
    this.subscription = this.job$.subscribe(
      data => {
        console.log(data);
        this.theJob = data;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getJobInfo() {
    this.route.params
    .subscribe( params => {
      this.id = params.id;
    });
    return of(this.id);
  }



}
