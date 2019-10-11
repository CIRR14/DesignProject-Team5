import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.checkLoginStatus()
      .subscribe(val => this.isLoggedIn = val);
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
