import { EmployeeGuard } from './components/auth/guards/employee.guard';
import { EmployeeAvailabilityComponent } from './components/employee/employee-availability/employee-availability.component';
import { ExportComponent } from './components/admin/export/export.component';
import { AvailabilitiesComponent } from './components/admin/availabilities/availabilities/availabilities.component';
import { AdminGuard } from './components/auth/guards/admin.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashComponent } from './components/admin/dash/dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ViewEmployeesComponent } from './components/admin/employees/view-employees/view-employees.component';




const appRoutes: Routes = [
  {
    path: 'admin-dash',
    component: DashComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-view-employees',
    component: ViewEmployeesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-availabilities',
    component: AvailabilitiesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-jobs',
    loadChildren: './components/admin/jobs/jobs.module#JobsModule'
    // Lazy Loading
  },
  {
    path: 'admin-export',
    component: ExportComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'employee-availability',
    component: EmployeeAvailabilityComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'employee-hours',
    loadChildren: './components/employee/hours/employee-hours.module#EmployeeHoursModule'
  },
  {
    path: '',
    redirectTo: '/login',
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
