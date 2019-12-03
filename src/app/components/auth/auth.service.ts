import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { auth } from 'firebase';
import { Injectable, NgZone } from '@angular/core';
import { User } from '../auth/user';
import { AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  currentUser: firebase.User;



  constructor(
    private afs: AngularFirestore,   // Inject Firestore service
    private afAuth: AngularFireAuth // Inject Firebase auth service,

   ) {

      this.user$ = this.afAuth.authState
        .pipe(
        switchMap( (user) => {
          if (user) {
            this.currentUser = user;
            // console.log(this.currentUser);
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
        );
}

googleLogin() {
 const provider = new auth.GoogleAuthProvider();
 return this.oAuthLogin(provider);
}

signOut() {
  this.afAuth.auth.signOut();
  window.location.reload(); // TODO: FIND A BETTER WAY TO FIX
}

private oAuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider)
    .then((credentials) => {
      this.checkIfUserExists(credentials.user);
    });
}


private checkIfUserExists(user) {
  const userRef = this.afs.doc(`users/${user.uid}`);
  userRef.get()
    .subscribe(async (doc) => {
    if (doc.exists) {
        console.log('Existing User:');
        await this.getUserData(doc.data());
    } else {
        console.log('New user');
        await this.createDefaultUser(user);
    }
});
}

private getUserData(user) {

  const userRef = this.afs.doc(`users/${user.uid}`);

  const data: User = {
      empID: user.empID,
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      hourlyRate: user.hourlyRate,
      roles: {
        employee: user.roles.employee,
        admin: user.roles.admin
      }
    };
  userRef.set(data, { merge: true} );
}


private createDefaultUser(defaultUser) {
  const userRef = this.afs.doc(`users/${defaultUser.uid}`);
  const data: User = {
    empID: Math.round(Math.random() * 100000).toString(),
    uid: defaultUser.uid,
    email: defaultUser.email,
    displayName: defaultUser.displayName,
    photoURL: defaultUser.photoURL,
    emailVerified: defaultUser.emailVerified,
    hourlyRate: 0,
    roles: {
      employee: false,
      admin: false
    }
  };
  userRef.set(data, { merge: true} );
  console.log('Default user created:', data);

  //Create clockHours 
  const clockHourRef = this.afs.doc(`clockHours/${defaultUser.uid}`);
  const clockHrData = {
    isClockedIn : false,
    totalHours: 0,
    clockInDate: new Date(),
    clockOutDate: new Date(),
    job: '1ANY'
  };
  clockHourRef.set(clockHrData, { merge: true });

  // TODO: Hardcoded -> change this
  const pp1ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/11-2`);
  const pp1 = {
      startDate: new Date(2019, 10, 10),
      endDate: new Date(2019, 10, 23),
      hours: 0,
      uid: defaultUser.uid,
      ref: '11-2'
    };
  pp1ref.set(pp1, {merge: true});

  const pp2ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/12-1`);
  const pp2 = {
      startDate: new Date(2019, 10, 24),
      endDate: new Date(2019, 11, 7),
      hours: 0,
      uid: defaultUser.uid,
      ref: '12-1'
    };
  pp2ref.set(pp2, {merge: true});


  const pp3ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/12-2`);
  const pp3 = {
      startDate: new Date(2019, 11, 8),
      endDate: new Date(2019, 11, 21),
      hours: 0,
      uid: defaultUser.uid,
      ref: '12-2'
    };
  pp3ref.set(pp3, {merge: true});

  const pp4ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/01-1`);
  const pp4 = {
      startDate: new Date(2019, 11, 22),
      endDate: new Date(2019, 0, 4),
      hours: 0,
      uid: defaultUser.uid,
      ref: '01-1'
    };
  pp4ref.set(pp4, {merge: true});

  const pp5ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/01-2`);
  const pp5 = {
      startDate: new Date(2019, 0, 5),
      endDate: new Date(2019, 0, 18),
      hours: 0,
      uid: defaultUser.uid,
      ref: '01-2'
    };
  pp5ref.set(pp5, {merge: true});

  const pp6ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/02-1`);
  const pp6 = {
      startDate: new Date(2019, 0, 19),
      endDate: new Date(2019, 1, 1),
      hours: 0,
      uid: defaultUser.uid,
      ref: '02-1'
    };
  pp6ref.set(pp6, {merge: true});

  const pp7ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/02-2`);
  const pp7 = {
      startDate: new Date(2019, 1, 2),
      endDate: new Date(2019, 1, 15),
      hours: 0,
      uid: defaultUser.uid,
      ref: '02-2'
    };
  pp7ref.set(pp7, {merge: true});

  const pp8ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/03-1`);
  const pp8 = {
      startDate: new Date(2019, 1, 16),
      endDate: new Date(2019, 1, 29),
      hours: 0,
      uid: defaultUser.uid,
      ref: '03-1'
    };
  pp8ref.set(pp8, {merge: true});

  const pp9ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/03-2`);
  const pp9 = {
      startDate: new Date(2019, 2, 1),
      endDate: new Date(2019, 2, 14),
      hours: 0,
      uid: defaultUser.uid,
      ref: '03-2'
    };
  pp9ref.set(pp9, {merge: true});

  const pp10ref = this.afs.doc(`users/${defaultUser.uid}/payPeriod/04-1`);
  const pp10 = {
      startDate: new Date(2019, 2, 15),
      endDate: new Date(2019, 2, 28),
      hours: 0,
      uid: defaultUser.uid,
      ref: '04-1'
    };
  pp10ref.set(pp10, {merge: true});

}




// Abilities and Roles Authorization
// Assign roles to an ability method


  isAdmin( user: User ): boolean {
  const isAdmin = ['admin'];
  return this.checkAuthorization(user, isAdmin);
}

  isEmployee( user: User ): boolean {
  const isEmployee = ['employee'];
  return this.checkAuthorization(user, isEmployee);
}


  canCreate( user: User ): boolean {
  const allowed = ['admin'];
  return this.checkAuthorization(user, allowed);
}

  canRead( user: User ): boolean {
  const allowed = ['admin', 'employee'];
  return this.checkAuthorization(user, allowed);
}

  canUpdate( user: User ): boolean {
  const allowed = ['admin'];
  return this.checkAuthorization(user, allowed);
}

  canDelete( user: User ): boolean {
  const allowed = ['admin'];
  return this.checkAuthorization(user, allowed);
}

  checkIfLoggedIn(user: User): boolean {
  if (!user) {
    return false;
  } else {
    return true;
  }
}


// determines if user has matching role
private checkAuthorization(user: User, allowedRoles: string[]): boolean {
  if (!user) {
    return false;
  } else {
    for (const role of allowedRoles) {
      if (user.roles[role] ) {
        return true;
      }
    }
    return false;
  }
}
}

