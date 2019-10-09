import { JobService } from './../job.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  private theJob: Job;
  private id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: JobService
  ) { }


  ngOnInit() {
    this.route.params
    .subscribe(params => {
      console.log( params );
      this.id = params.id;
      this.theJob = this.service.getJobById(this.id);
    })
  }

}
