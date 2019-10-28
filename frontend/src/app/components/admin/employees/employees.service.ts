import { User } from './../../auth/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { ViewEmployeesItem, ViewEmployeesDataSource } from './view-employees/view-employees-datasource';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService implements OnInit {

  employee: User;



  constructor(private as: AuthService, private route: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  getEmployeeById(id: number): Observable<any> {
    return this.afs.doc(`users/${id}`).valueChanges();
  }
}
