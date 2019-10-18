import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


constructor(
  private authService: AuthService,
  private router: Router
) {

}
checkIfAdmin = this.authService.user$.pipe(
  take(1),
  map(user => user && user.roles.admin ? true : false),
  tap( isAdmin => {
    if (!isAdmin) {
      console.error('Access Denied - Admins only');
      this.router.navigateByUrl('/login');
    }
  })
  );

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfAdmin;
    }


    canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkIfAdmin;
    }
}
