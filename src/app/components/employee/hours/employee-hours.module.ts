import { EmployeeComponent } from './../employee/employee.component';
import { AppMaterialModule } from './../../../shared/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeHoursRoutingModule } from './employee-hours-routing.module';
import { ClockHoursComponent } from './clock-hours/clock-hours.component';
import { SelectPayPeriodComponent } from './select-pay-period/select-pay-period.component';


@NgModule({
  imports: [
    CommonModule,
    EmployeeHoursRoutingModule,
    AppMaterialModule
  ],
  declarations: [EmployeeComponent, ClockHoursComponent, SelectPayPeriodComponent],
  exports: [EmployeeComponent, ClockHoursComponent, SelectPayPeriodComponent]
})
export class EmployeeHoursModule { }
