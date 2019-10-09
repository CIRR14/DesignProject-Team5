import { ExportComponent } from './components/export/export.component';
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import { AuthGuard } from './components/auth/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashComponent } from './components/dash/dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';




const appRoutes: Routes = [
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'availabilities',
    component: AvailabilitiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'jobs',
    loadChildren: './components/jobs/jobs.module#JobsModule'
    // Lazy Loading
  },
  {
    path: 'export',
    component: ExportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
