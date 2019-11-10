
import { AuthService } from './../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-availability',
  templateUrl: './employee-availability.component.html',
  styleUrls: ['./employee-availability.component.scss']
})
export class EmployeeAvailabilityComponent implements OnInit {
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
  currentUser: firebase.User;
  currentDate: Date = new Date();
  currentMonth = this.currentDate.getMonth() + 1;


  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    // TODO: get dates from the db and show on the frontend dates that are already in the db
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

      console.log(selectedDate);

    });
  }


  submit() {
    const availabilityRef = this.afs.doc(`users/${this.currentUser.uid}/available/${this.currentMonth}`);

    const data = {
      title: this.currentUser.displayName,
      userId: this.currentUser.uid,
      available: this.availableDates
    };

    if( this.availableDates.length > 0 ){
      availabilityRef.set(data, {merge: true});
    } else {
      console.log('please select dates that you are available');
    }

  }


}
