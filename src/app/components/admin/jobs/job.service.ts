import { AngularFirestore } from '@angular/fire/firestore';
import { Job } from './job';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  job: Job;

  constructor(private afs: AngularFirestore) { }

  getJobById(id): Observable<any> {
    return this.afs.doc(`jobs/${id}`).valueChanges();
  }
}
