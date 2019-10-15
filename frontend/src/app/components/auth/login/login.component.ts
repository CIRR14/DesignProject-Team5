import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: firebase.User;
  credentials: FormGroup;


  constructor(
    public authService: AuthService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.credentials = fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    // this.authService.checkLoginStatus()
    //   .subscribe(val => this.isLoggedIn = val);

    // this.authService.getLoggedUser()
    //       .subscribe( user => {
    //           console.log(user);
    //           this.user = user;
    //   });


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
