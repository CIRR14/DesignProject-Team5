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

  available: boolean = null;
  datesClicked = [];

  constructor() { }

  ngOnInit() {
  }


  setAvailable(args): void {
    this.datesClicked.push(args.value);
    console.log(this.datesClicked);
    
    if (this.available === false) {
  
      this.available = true;
      
      console.log(this.available);
    } else if (this.available === true) {
    
      this.available = false;
      console.log(this.available);
    } else {

      this.available = false;
      console.log('first time ', this.available);
    }
   

    
  }


  /// when date is clicked check if its the same date that was clicked before..
  // if its false, set to true.
  // if its true, set to false.

  checkIfSameDate(date) {
    // set previous date
    if (date === date) {
console.log(date)
    } else {
      console.log('wtf')
    }

  }

  
} 
