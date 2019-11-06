import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1234, name: "1/1/2019", weight: "3:00", symbol: "4:00"},
  {position: 2345, name: "2/2/2019", weight: "3:00", symbol: "4:00"},

];

@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})

export class SelectPayPeriodComponent implements OnInit { 

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {  

  setInterval(() =>
    {
    var dt = new Date();
    document.getElementById("currentDate").innerHTML = dt.toLocaleDateString();
  });

  setInterval(() =>
  {
    var dt = new Date();
    document.getElementById("currentTime").innerHTML = dt.toLocaleTimeString();
  });
    
  }

  ngOnInit() {
  }


}
