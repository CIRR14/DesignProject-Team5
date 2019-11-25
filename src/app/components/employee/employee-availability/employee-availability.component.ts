import { Subscription } from 'rxjs';

import { AuthService } from './../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-availability',
  templateUrl: './employee-availability.component.html',
  styleUrls: ['./employee-availability.component.scss']
})
export class EmployeeAvailabilityComponent implements OnInit {

  constructor(private afs: AngularFirestore, private authService: AuthService, public dialog: MatDialog) {
    this.getEmployeesAvail();
   }

  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public today: number = new Date().getDate();
  public dateValues: Date[] = [];
  public multiSelect = true;
  public dateValue: Date = new Date(this.fullYear, this.month , 11);
  public minDate: Date = new Date(this.fullYear, this.month, this.today + 1);
  public maxDate: Date = new Date(this.fullYear, this.month, 31);

  availableDates = [];
  selectedDate;
  currentUser: firebase.User = this.authService.currentUser;
  currentDate: Date = new Date();
  currentMonth = this.currentDate.getMonth() + 1;

  getAvail: Subscription;

  ngOnInit() {
  }


  disabledDate(args): void {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
    }
}

  setAvailable(args): void {
    this.selectedDate = args.value;
    this.availableDates = args.values;


    this.availableDates.forEach(selectedDate => {
    });
  }


  submit() {
    const availabilityRef = this.afs.doc(`users/${this.currentUser.uid}/available/${this.currentMonth}`);

    const data = {
      title: this.currentUser.displayName,
      userId: this.currentUser.uid,
      available: this.availableDates,
      ref: this.currentMonth
    };

    if (this.availableDates.length > 0 ) {
        availabilityRef.set(data, {merge: true}).then(() => {
          this.openDialog();
        }).catch(() => {
          alert('AVAILABILITY NOT SUBMITTED. PLEASE TRY AGAIN')
        });
    } else {
      console.log('please select dates that you are available');
    }

  }


  getEmployeesAvail() {
    const employeeAvailRef = this.afs.doc(`users/${this.currentUser.uid}/available/${this.currentMonth}`);
    const myAvailability = [];

    this.getAvail = employeeAvailRef.get()
      .subscribe((data) => { 
        if(data.data()) {
          data.data().available.forEach(timestamp => {
            const timestamps = new Date(timestamp.seconds * 1000);
            myAvailability.push(timestamps);
          });
          this.dateValues = myAvailability;
        } else {
          console.log('no availability yet');
        }
      });
    return myAvailability;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
