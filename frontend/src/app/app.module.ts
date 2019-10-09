import { AppMaterialModule } from './shared/app-material.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DashComponent } from './components/dash/dash.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthModule } from './components/auth/auth.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import { ExportComponent } from './components/export/export.component';




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
    AppMaterialModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
