import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  checkIfEmployee = this.authService.user$.pipe(
    take(1),
    map(user => user && user.roles.employee ? true : false),
    tap( isEmployee => {
      if (!isEmployee) {
        console.error('Access Denied - Employees only');
        this.router.navigateByUrl('/login');
      }
    })
  );



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfEmployee;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfEmployee;
  }

}
