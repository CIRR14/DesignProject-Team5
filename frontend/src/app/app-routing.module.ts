import { ExportComponent } from './components/admin/export/export.component';
import { AvailabilitiesComponent } from './components/admin/availabilities/availabilities/availabilities.component';
import { AuthGuard } from './components/auth/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashComponent } from './components/admin/dash/dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/admin/employees/employee/employees.component';




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
    loadChildren: './components/admin/jobs/jobs.module#JobsModule'
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
