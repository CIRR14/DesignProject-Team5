import { AuthService } from '../auth/auth.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent {
  profilePicture = '../../../assets/profile/default-profile.png';
  title = 'Garage Designs of St. Louis Management System';
  isLoggedIn = false;


    constructor(private breakpointObserver: BreakpointObserver,
                private authService: AuthService) {}

      loggedIn =  this.authService.checkLoginStatus()
            .subscribe ( data => {
              console.log(data);
              if (data) {
                this.isLoggedIn = true;
              } else {
                this.isLoggedIn = false;
              }
            });

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
      );





}
