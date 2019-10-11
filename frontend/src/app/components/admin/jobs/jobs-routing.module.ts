import { AddJobComponent } from './add-job/add-job.component';
import { AuthGuard } from '../../../shared/auth/auth.guard';
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
      { path: '', component: ViewJobsComponent},
      { path: 'addJob', component: AddJobComponent },
      { path: ':id', component: JobDetailsComponent }
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
