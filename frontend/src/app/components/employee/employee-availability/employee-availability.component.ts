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

  availableDates = [];
  selectedDate;

  constructor() { }

  ngOnInit() {
  }


  setAvailable(args): void {
    this.selectedDate = args.value;
    this.availableDates = args.values;

    this.availableDates.forEach(selectedDate => {

      console.log(selectedDate);

    });
  }


}
