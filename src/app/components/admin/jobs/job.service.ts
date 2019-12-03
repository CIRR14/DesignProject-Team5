import { AngularFirestore } from '@angular/fire/firestore';
import { Job } from './job';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  job: Job;

  constructor(private afs: AngularFirestore, private _snackBar: MatSnackBar) { }

  getJobById(id): Observable<any> {
    return this.afs.doc(`jobs/${id}`).valueChanges();
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
