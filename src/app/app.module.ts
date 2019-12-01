import { AreYouSureDialog } from './components/admin/employees/employee-details/employee-details.component';
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
import { EmployeeAvailabilityComponent, DialogOverview } from './components/employee/employee-availability/employee-availability.component';

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { AdminHelpComponent } from './components/admin/admin-help/admin-help.component';
import { EmployeeHelpComponent } from './components/employee/employee-help/employee-help.component';

// import { RouterModule } from '@angular/router';

// import { CommonModule } from '@angular/common';





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
    EmployeeAvailabilityComponent,
    DialogOverview,
    AreYouSureDialog,
    AdminHelpComponent,
    EmployeeHelpComponent
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
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    TreeViewModule,
    ToolbarAllModule,
    ContextMenuAllModule,
    DropDownListAllModule, MultiSelectAllModule, MaskedTextBoxModule, UploaderAllModule, NumericTextBoxAllModule,
    ButtonAllModule, CheckBoxAllModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppMaterialModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  entryComponents: [
    DialogOverview,
    AreYouSureDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
