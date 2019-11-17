import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPayPeriodComponent } from './select-pay-period.component';

describe('SelectPayPeriodComponent', () => {
  let component: SelectPayPeriodComponent;
  let fixture: ComponentFixture<SelectPayPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPayPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPayPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
