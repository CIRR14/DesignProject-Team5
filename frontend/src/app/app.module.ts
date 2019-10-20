import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppMaterialModule } from './shared/app-material.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './shared/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DashComponent } from './components/admin/dash/dash.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthModule } from './components/auth/auth.module';
import { AvailabilitiesComponent } from './components/admin/availabilities/availabilities/availabilities.component';
import { ExportComponent } from './components/admin/export/export.component';
import { AddEmployeeComponent } from './components/admin/employees/add-employee/add-employee.component';
import { ViewAvailabilityComponent } from './components/admin/availabilities/view-availability/view-availability.component';
import { EmployeeDetailsComponent } from './components/admin/employees/employee-details/employee-details.component';
import { ViewEmployeesComponent } from './components/admin/employees/view-employees/view-employees.component';
import { EmployeeAvailabilityComponent } from './components/employee/employee-availability/employee-availability.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DashComponent,
    NotFoundComponent,
    AvailabilitiesComponent,
    ExportComponent,
    AddEmployeeComponent,
    ViewAvailabilityComponent,
    EmployeeDetailsComponent,
    ViewEmployeesComponent,
    EmployeeAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppMaterialModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
