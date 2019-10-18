import { AddJobComponent } from './add-job/add-job.component';
import { AdminGuard } from '../../auth/guards/admin.guard';
import { JobComponent } from './job/job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const jobsRoutes: Routes = [
{
  ///   "/admin-jobs"
  path: '',
  component: JobComponent,
  canActivate: [AdminGuard],
  children: [
    //    "/admin-jobs/:id" or "/admin-jobs/addJob" or just "/admin-jobs"
    {
    path: '',
    canActivateChild: [AdminGuard],
    children: [
      { path: '', component: ViewJobsComponent},
      { path: 'addJob', component: AddJobComponent },
      { path: ':id', component: JobDetailsComponent }
    ]
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(jobsRoutes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
