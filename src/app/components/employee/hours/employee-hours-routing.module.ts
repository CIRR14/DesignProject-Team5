import { EmployeeGuard } from './../../auth/guards/employee.guard';
import { ClockHoursComponent } from './clock-hours/clock-hours.component';
import { SelectPayPeriodComponent } from './select-pay-period/select-pay-period.component';
import { AdminGuard } from '../../auth/guards/admin.guard';
import { EmployeeComponent } from './../employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const employeeHoursRoutes: Routes = [
    {
      /// "/employee-hours"
    path: '',
    component: EmployeeComponent,
    canActivate: [EmployeeGuard],
    children: [
      // "/employee-hours/selectPayPeriod" or "/employee-hours/clockhours"
      {
        path: '',
        canActivateChild: [EmployeeGuard],
        children: [
          { path: '', component: SelectPayPeriodComponent},
          { path: 'clock-hours', component: ClockHoursComponent}
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(employeeHoursRoutes)],
  exports: [RouterModule]
})
export class EmployeeHoursRoutingModule { }
