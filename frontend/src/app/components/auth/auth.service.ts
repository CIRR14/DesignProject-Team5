import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;


  constructor() { }

  checkLoginStatus() : Observable<boolean> {
    const checkStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
    return of(checkStatus);
  }

  login(): Observable<boolean> {
    // authentication mechanism
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.isLoggedIn = true;
    return of(true);
  }

  logout():void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
