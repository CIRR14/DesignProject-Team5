import { element } from 'protractor';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../../auth/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User, Roles } from './../../../auth/user';
import { EmployeesService } from './../employees.service';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
subscription: Subscription;
formSubscription: Subscription;
employee: User;
employee$: Observable<User>;
id = 0;

length: number;

form: FormGroup;

employeeName = new FormControl('', Validators.required);
employeeID = new FormControl('', Validators.required);
hourlyRate = new FormControl('', Validators.required);
adminRole = new FormControl('', Validators.required);
employeeRole = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private service: EmployeesService,
    private auth: AuthService,
    fb: FormBuilder,
    private afs: AngularFirestore
  ) {
    this.form = fb.group({
      employeeName: this.employeeName,
      employeeID: this.employeeID,
      hourlyRate: this.hourlyRate,
      adminRole: this.adminRole,
      employeeRole: this.employeeRole
        });
  }

  ngOnInit() {
    this.getEmployeeInfo();

    this.employee$ = this.service.getEmployeeById(this.id);
    this.subscription = this.employee$.subscribe(
        data => {
          this.employee = data;
          this.form.controls.employeeName.setValue(this.employee.displayName);
          this.form.controls.employeeID.setValue(this.employee.empID);
          this.form.controls.hourlyRate.setValue(this.employee.hourlyRate);
          // this.form.controls.adminRole.setValue(this.employee.roles.admin);
      },
        err => {console.log('error', err); } ,
        () => {console.log('what to do after'); }
      );


    this.formSubscription = this.form.get('adminRole').valueChanges.subscribe((value) => {
        console.log(value);
        if (value === 'true') {
          // this.form.get('adminRole').setValue(true);
          this.form.get('employeeRole').setValue('false');
          // this.formSubscription.unsubscribe();
        } else {
          // this.form.get('adminRole').setValue(false);
          this.form.get('employeeRole').setValue('true');
          // this.formSubscription.unsubscribe();
        }
      });

}

ngOnDestroy() {
  this.subscription.unsubscribe();
  this.formSubscription.unsubscribe();

}


  getEmployeeInfo() {
  this.route.params
    .subscribe( params => {
      this.id = params.id;
    });
  return of(this.id);
  }


  onSubmit() {
    console.log('submitted');
    console.log(this.form);

    const userRef = this.afs.doc(`users/${this.employee.uid}`);


    const data: User = {
    empID: this.form.value.employeeID,
    uid: this.employee.uid,
    email: this.employee.email,
    displayName: this.form.value.employeeName,
    photoURL: this.employee.photoURL,
    emailVerified: this.employee.emailVerified,
    hourlyRate: this.form.value.hourlyRate,
    roles: {
      employee: this.stringToBoolean(this.form.value.employeeRole),
      admin: this.stringToBoolean(this.form.value.adminRole)
    }
    };

    console.log(data);
    userRef.set(data, {merge: true} );

  }


  stringToBoolean(word: string) {
    switch (word.toLowerCase().trim()) {
        case 'true': case 'yes': case '1': return true;
        case 'false': case 'no': case '0': case null: return false;
        default: return Boolean(word);
    }
}

}
