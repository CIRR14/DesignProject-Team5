import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  user: firebase.User;


  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.checkLoginStatus()
      .subscribe(val => this.isLoggedIn = val);

    this.authService.getLoggedUser()
          .subscribe( user => {
              console.log(user);
              this.user = user;
      });


  }

  login() {
    this.authService.login()
    .subscribe((data) => {
      console.log (data);
      this.isLoggedIn = data;

      this.router.navigate(['/dash']);
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
