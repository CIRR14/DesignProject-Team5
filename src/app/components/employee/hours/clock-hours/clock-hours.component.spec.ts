import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockHoursComponent } from './clock-hours.component';

describe('ClockHoursComponent', () => {
  let component: ClockHoursComponent;
  let fixture: ComponentFixture<ClockHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
