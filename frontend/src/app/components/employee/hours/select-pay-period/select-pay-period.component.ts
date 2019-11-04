import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { User } from 'src/app/components/auth/user';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})
export class SelectPayPeriodComponent implements OnInit {


  constructor() { }

  ngOnInit() {
 
  
  }
  
  
  
 }


