import { User } from './../user';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: User;
  isLoggedIn: boolean;


  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    // this.authService.checkLoginStatus()
    //   .subscribe(val => this.isLoggedIn = val);

    // this.authService.getLoggedUser()
    //       .subscribe( user => {
    //           console.log(user);
    //           this.user = user;
    //   });

    this.authService.user$.subscribe((userRepsonse) => {
      if (userRepsonse) {
        this.isLoggedIn = true;
        this.user = userRepsonse;
      } else {
        this.isLoggedIn = false;
      }
    }
    );


  }

  // login() {
  //   this.authService.login()
  //   .subscribe((data) => {
  //     console.log (data);
  //     this.isLoggedIn = data;

  //     this.router.navigate(['/dash']);
  //   });
  // }

  // logout() {
  //   this.authService.logout();
  //   this.isLoggedIn = false;
  // }

}
