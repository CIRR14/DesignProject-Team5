import { User } from './../../components/auth/user';
import { AuthService } from '../../components/auth/auth.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {
  profilePicture = '../../../assets/profile/default-profile.png';
  title = 'Garage Designs of St. Louis Management System';
  user: User;


    constructor(private breakpointObserver: BreakpointObserver,
                public authService: AuthService) {}

      isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
          .pipe(
          map(result => result.matches)
       );

       ngOnInit() {
            this.authService.user$.subscribe(user => this.user = user);
       }


      // loggedIn =  this.authService.checkLoginStatus()
      //       .subscribe ( data => {
      //         console.log(data);
      //         if (data) {
      //           this.isLoggedIn = true;
      //         } else {
      //           this.isLoggedIn = false;
      //         }
      //       });






}
