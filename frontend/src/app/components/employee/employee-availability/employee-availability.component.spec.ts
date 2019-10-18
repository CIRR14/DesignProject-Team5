import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAvailabilityComponent } from './employee-availability.component';

describe('EmployeeAvailabilityComponent', () => {
  let component: EmployeeAvailabilityComponent;
  let fixture: ComponentFixture<EmployeeAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
