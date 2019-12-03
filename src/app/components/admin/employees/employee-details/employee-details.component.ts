import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../../auth/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User, Roles } from './../../../auth/user';
import { EmployeesService } from './../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

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
role = new FormControl('', Validators.required);

isAdmin: boolean;
isEmployee: boolean;
// employeeRole = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmployeesService,
    private auth: AuthService,
    fb: FormBuilder,
    private afs: AngularFirestore
  ) {
    this.form = fb.group({
      employeeName: this.employeeName,
      employeeID: this.employeeID,
      hourlyRate: this.hourlyRate,
      role: this.role,
      // employeeRole: this.employeeRole
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
          // this.form.controls.role.setValue('');
      },
        err => {console.log('error', err); } ,
        () => {console.log('what to do after'); }
      );


    this.formSubscription = this.form.get('role').valueChanges.subscribe((value) => {
        console.log(value);
        if (value === 'admin') {
          this.isAdmin = true;
          this.isEmployee = false;
        } else {
          this.isAdmin = false;
          this.isEmployee = true;
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
      employee: this.isEmployee,
      admin: this.isAdmin
    }
    };
    userRef.set(data, {merge: true})
    .then(() => {
      this.service.successMessage('Successfully updated!', 'dismiss');
      this.router.navigateByUrl('/admin-view-employees');
    }).catch((err) => {
      console.log(err);
      this.service.errorMessage('Error updating!', 'dismiss');
    });

    
  }



deleteEmployee() {
  const userRef = this.afs.doc(`users/${this.employee.uid}`);

  this.afs.collection(`users/${this.employee.uid}/available`).valueChanges().subscribe((eachAv) => {
    eachAv.forEach((val: any) => {
      console.log(val.ref);
      const availabilityRef = this.afs.doc(`users/${this.employee.uid}/available/${val.ref}`);
      availabilityRef.delete();
    });
    });

  this.afs.collection(`users/${this.employee.uid}/payPeriod`).valueChanges().subscribe((eachPp) => {
      eachPp.forEach((val: any) => {
        console.log(val.ref);
        const payperiodRef = this.afs.doc(`users/${this.employee.uid}/payPeriod/${val.ref}`);
        payperiodRef.delete();
      });
      });

  this.router.navigateByUrl('/admin-view-employees');

  setTimeout(() => {
    userRef.delete();
  }, 300);

}

}
