import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { User } from 'src/app/components/auth/user';
import { EventEmitter } from 'selenium-webdriver';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ok } from 'assert';

@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})
export class SelectPayPeriodComponent implements OnInit {
  hours: 'HH:mm:ss a';
  user: User;
  isLoggedIn: boolean;
  clockOut: boolean;
  now: Date = new Date();
  public text: string = 'Clock In';


  constructor(public authService: AuthService) {
    setInterval(() => { this.now = new Date(); }, 1);
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

  public changeText(): void {
    alert('Clocking in at:' + this.now);
    if (this.text === 'Clock In') {
      this.text = 'Clock Out'
    } else {
      this.text = 'Clock In'
    }
  }
}