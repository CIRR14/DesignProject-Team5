import { User } from './../../auth/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService implements OnInit {

  employee: User;

  constructor(private as: AuthService, private route: ActivatedRoute, private afs: AngularFirestore,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getEmployeeById(id: number): Observable<any> {
    return this.afs.doc(`users/${id}`).valueChanges();
  }

  successMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  errorMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}
