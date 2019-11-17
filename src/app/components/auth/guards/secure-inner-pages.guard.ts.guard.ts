import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SecureInnerPages implements CanActivate, CanActivateChild {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  // checkAuthRole = this.authService.user$.pipe(
  //   take(1),
  //   map(user => user && user.roles.admin ? true : false),
  //   tap( isAdmin => {
  //     if (!isAdmin) {
  //       console.error('Access Denied - Admins only');
  //     }
  //   })
  //   );

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }



}
