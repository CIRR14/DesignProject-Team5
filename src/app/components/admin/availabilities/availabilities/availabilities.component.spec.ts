import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitiesComponent } from './availabilities.component';

describe('AvailabilitiesComponent', () => {
  let component: AvailabilitiesComponent;
  let fixture: ComponentFixture<AvailabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
