import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;


  constructor(private afAuth: AngularFireAuth) { }

  checkLoginStatus() : Observable<boolean> {
    const checkStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
    return of(checkStatus);
  }

  login(): Observable<boolean> {

    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
      .then((response) => {
        console.log(response);
      });


    // authentication mechanism
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.isLoggedIn = true;
    return of(true);
  }

  logout(): void {
    this.afAuth.auth.signOut();
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }

  getLoggedUser() {
          return this.afAuth.authState;
        }
}
