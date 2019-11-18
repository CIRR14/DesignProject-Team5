import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddJobComponent } from './add-job/add-job.component';
import { AppMaterialModule } from '../../../shared/app-material.module';
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
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [JobComponent, ViewJobsComponent, AddJobComponent, JobDetailsComponent],
  exports: [JobComponent, ViewJobsComponent, AddJobComponent, JobDetailsComponent]
})
export class JobsModule { }
