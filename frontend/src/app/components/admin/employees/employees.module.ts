import { AppMaterialModule } from './../../../shared/app-material.module';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [EmployeeDetailsComponent, ViewEmployeesComponent, EmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppMaterialModule
  ],
  exports: [EmployeeDetailsComponent, ViewEmployeesComponent]
})
export class EmployeesModule { }
