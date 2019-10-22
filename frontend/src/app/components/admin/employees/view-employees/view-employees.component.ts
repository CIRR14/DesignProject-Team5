import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ViewEmployeesDataSource, ViewEmployeesItem } from './view-employees-datasource';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss']
})
export class ViewEmployeesComponent implements OnInit, OnDestroy{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewEmployeesDataSource;

  displayedColumns = ['name', 'hourlyRate', 'role'];
  subscription: Subscription;

  constructor( private afs: AngularFirestore) { }

  ngOnInit() {

// get all employees
// display employees



    this.subscription = this.afs.collection<ViewEmployeesItem>('users').valueChanges().subscribe( res => {
      this.dataSource = new ViewEmployeesDataSource(this.paginator, this.sort);
      this.dataSource.employeesData = res;
    });
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}


}
