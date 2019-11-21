import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-help',
  templateUrl: './employee-help.component.html',
  styleUrls: ['./employee-help.component.scss']
})
export class EmployeeHelpComponent implements OnInit {

  constructor() { }
  scrollToElement($element): void {
    $element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start'
    });
  }
  ngOnInit() {
  }

}
