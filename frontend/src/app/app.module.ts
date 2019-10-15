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

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DashComponent } from './components/admin/dash/dash.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthModule } from './shared/auth/auth.module';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { AvailabilitiesComponent } from './components/admin/availabilities/availabilities.component';
import { ExportComponent } from './components/admin/export/export.component';






@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DashComponent,
    NotFoundComponent,
    EmployeesComponent,
    AvailabilitiesComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppMaterialModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
