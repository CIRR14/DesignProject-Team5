import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-help',
  templateUrl: './admin-help.component.html',
  styleUrls: ['./admin-help.component.scss']
})
export class AdminHelpComponent implements OnInit {

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
