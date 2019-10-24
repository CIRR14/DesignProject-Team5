import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs';
import { ViewEmployeesItem } from './view-employees/view-employees-datasource';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService implements OnInit{

  constructor(private as: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params
    .subscribe(params => {
      console.log(params );
    });
  }

}
