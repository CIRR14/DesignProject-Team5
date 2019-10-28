import { User } from './../../../auth/user';
import { EmployeesService } from './../employees.service';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
subscription: Subscription;
employee: User;
employee$: Observable<User>;
id = 0;

mockData = [
  { name: 'hello', value: 13 },
  { name: 'yeet', value: 1000}
];

  constructor(
    private route: ActivatedRoute,
    private service: EmployeesService
  ) { }

  ngOnInit() {
    this.getEmployeeInfo();

    this.employee$ = this.service.getEmployeeById(this.id);
    this.subscription = this.employee$.subscribe(
        data => {this.employee = data; },
        err => {console.log('error', err); } ,
        () => {console.log('what to do after'); }
      );

}

ngOnDestroy() {
  this.subscription.unsubscribe();

}


  getEmployeeInfo() {
  this.route.params
    .subscribe( params => {
      this.id = params.id;
    });
  return of(this.id);
  }

}
