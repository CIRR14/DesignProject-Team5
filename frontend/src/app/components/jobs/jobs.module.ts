import { AppMaterialModule } from './../../shared/app-material.module';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobComponent } from './job/job.component';
import { JobDetailsComponent } from './job-details/job-details.component';



@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    AppMaterialModule
  ],
  declarations: [JobComponent, ViewJobsComponent, JobDetailsComponent],
  exports: [JobComponent, ViewJobsComponent, JobDetailsComponent]
})
export class JobsModule { }
