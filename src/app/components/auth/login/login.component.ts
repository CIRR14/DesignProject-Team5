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
  ) {
   }

  ngOnInit() {
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

}
