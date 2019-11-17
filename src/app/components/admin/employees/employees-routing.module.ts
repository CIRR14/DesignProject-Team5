import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AdminGuard } from './../../auth/guards/admin.guard';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const employeesRouting: Routes = [
  {
    /// "/admin-view-employees"
    path: '',
    component: EmployeeComponent,
    canActivate: [AdminGuard],
    children: [
      // "/admin-view-employees/:id or /admin-view-employees/add-employees or just /admin-view-employees"
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          { path: '', component: ViewEmployeesComponent },
          { path: ':id', component: EmployeeDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(employeesRouting)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
