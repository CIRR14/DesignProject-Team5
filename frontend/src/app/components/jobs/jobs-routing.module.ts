import { AuthGuard } from './../auth/auth.guard';
import { JobComponent } from './job/job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const projectRoutes: Routes = [
{
  ///   "/jobs"
  path: '',
  component: JobComponent,
  canActivate: [AuthGuard],
  children: [
    //    "/jobs/:id" or just "/jobs"
    {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: ':id', component: JobDetailsComponent },
      { path: '', component: ViewJobsComponent}
    ]
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
