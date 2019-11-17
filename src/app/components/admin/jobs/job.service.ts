import { Job } from './job';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { JOBS } from './mock.jobs';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(JOBS);
  }

  getJobById(id: number): Job {
    const job = JOBS.find( x => x.id === +id );
    return job;
  }
}
