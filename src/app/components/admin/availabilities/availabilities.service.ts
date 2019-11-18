import { User } from './../../auth/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AvailabilitiesService implements OnInit {

event$;


  constructor(private as: AuthService, private route: ActivatedRoute, private afs: AngularFirestore,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  getUsers(): Observable<any> {
      return this.afs.collectionGroup(`users`).valueChanges();
  }

  getEvents(): Observable<any> {
      return this.afs.collectionGroup(`available`).valueChanges();
}

errorMessage(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
    verticalPosition: 'top'
  });
}
}
