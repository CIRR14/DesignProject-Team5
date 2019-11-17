import { Subscription, Observable } from 'rxjs';
import { ViewjobsDataSource } from './view-jobs/view-jobs-datasource';
import { Job } from './job';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';




@Injectable({
  providedIn: 'root'
})
export class JobService {

  job: Job;

  constructor(public afs: AngularFirestore) { }

  getJobById(id): Observable<any> {
    return this.afs.doc(`jobs/${id}`).valueChanges();
  }
}
