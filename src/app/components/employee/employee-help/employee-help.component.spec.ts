import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHelpComponent } from './employee-help.component';

describe('EmployeeHelpComponent', () => {
  let component: EmployeeHelpComponent;
  let fixture: ComponentFixture<EmployeeHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
