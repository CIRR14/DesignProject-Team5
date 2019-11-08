import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, OnDestroy } from '@angular/core';

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

    availabilityRef.set(data, {merge: true});

  }


}
