import { User } from './../../components/auth/user';
import { AuthService } from '../../components/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit, OnDestroy {
  profilePicture = '../../../assets/profile/default-profile.png';
  title = 'Garage Designs of St. Louis';
  user: User;
  subscription: Subscription;


    constructor(private breakpointObserver: BreakpointObserver,
                public authService: AuthService) {}

      isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
          .pipe(
          map(result => result.matches)
       );

       ngOnInit() {
            this.subscription = this.authService.user$.subscribe((userResponse) => {
              this.user = userResponse;
              console.log(this.user);
              this.setUserPicture();
            });
       }

       ngOnDestroy() {
        if (this.subscription) {
          this.subscription.unsubscribe();
          console.log('unsubscribed!');
        }
      }

      setUserPicture() {
        if (this.user) {
          if(this.user.photoURL){
            this.profilePicture = this.user.photoURL;
          }
        }
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
