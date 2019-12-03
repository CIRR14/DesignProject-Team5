import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../../auth/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User, Roles } from './../../../auth/user';
import { EmployeesService } from './../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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
    private router: Router,
    private service: EmployeesService,
    private auth: AuthService,
    fb: FormBuilder,
    private afs: AngularFirestore,
    public dialog: MatDialog
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
          // this.form.controls.adminRole.setValue(this.employee.roles.employee);
      },
        err => {console.log('error', err); } ,
        () => {console.log('what to do after'); }
      );


    this.formSubscription = this.form.get('adminRole').valueChanges.subscribe((value) => {
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
    userRef.set(data, {merge: true})
    .then(() => {
      this.service.successMessage('Successfully updated!', 'dismiss');
      this.router.navigateByUrl('/admin-view-employees');
    }).catch((err) => {
      console.log(err);
      this.service.errorMessage('Error updating!', 'dismiss');
    });


  }


  stringToBoolean(word: string) {
    switch (word.toLowerCase().trim()) {
        case 'true': case 'yes': case '1': return true;
        case 'false': case 'no': case '0': case null: return false;
        default: return Boolean(word);
    }
}


openDialog(): void {
  const dialogRef = this.dialog.open(AreYouSureDialog, {
    width: '30%',
    hasBackdrop: true
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.deleteEmployee();
    }
  });
}


deleteEmployee() {
  const userRef = this.afs.doc(`users/${this.employee.uid}`);

  this.afs.collection(`users/${this.employee.uid}/available`).valueChanges().subscribe((eachAv) => {
    eachAv.forEach((val: any) => {
      const availabilityRef = this.afs.doc(`users/${this.employee.uid}/available/${val.ref}`);
      availabilityRef.delete();
    });
    });

  // this.afs.collection(`users/${this.employee.uid}/payPeriod`).valueChanges().subscribe((eachPp) => {
  //     eachPp.forEach((val: any) => {
  //       const payperiodRef = this.afs.doc(`users/${this.employee.uid}/payPeriod/${val.ref}`);
  //       payperiodRef.delete();
  //     });
  //     });

  this.router.navigateByUrl('/admin-view-employees');

  setTimeout(() => {
    userRef.delete();
  }, 300);

}

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'delete-dialog.html',
})
export class AreYouSureDialog {

  constructor(
    public dialogRef: MatDialogRef<AreYouSureDialog>) {}
    

  onNoClick(): void {
    this.dialogRef.close();
  }

}