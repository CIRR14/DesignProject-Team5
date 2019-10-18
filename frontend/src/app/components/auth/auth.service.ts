import { Roles } from './user';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { auth } from 'firebase';
import { Injectable, NgZone } from '@angular/core';
import { User } from '../auth/user';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  private usersCollection: AngularFirestoreCollection<User>;
  private usersDoc: AngularFirestoreDocument<User>;
  private  registers: Observable<User[]>;



  constructor(
    private afs: AngularFirestore,   // Inject Firestore service
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    private ngZone: NgZone) {


      this.user$ = this.afAuth.authState
        .pipe(
        switchMap( (user) => {
          if (user) {
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

private oAuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider)
    .then((credentials) => {
      this.updateUserData(credentials.user);
    });
}

signOut() {
  this.afAuth.auth.signOut();
}

private updateUserData(user) {
  // Sets user data to firestore on login
  if (user.roles) {
    const userRef: AngularFirestoreDocument <User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: {
        employee: user.roles.employee,
        admin: user.roles.admin
      }
    };
    userRef.set(data, { merge: true} );
  }
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

