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
    private afAuth: AngularFireAuth // Inject Firebase auth service
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


private createDefaultUser(defaultUser) {
  const userRef = this.afs.doc(`users/${defaultUser.uid}`);
  const data: User = {
    uid: defaultUser.uid,
    email: defaultUser.email,
    displayName: defaultUser.displayName,
    photoURL: defaultUser.photoURL,
    emailVerified: defaultUser.emailVerified,
    roles: {
      employee: false,
      admin: false
    }
  };
  userRef.set(data, { merge: true} );
  console.log('Default user created:', data);

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

