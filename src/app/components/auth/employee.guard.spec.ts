import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeGuard } from './guards/employee.guard';

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeGuard]
    });
  });

  it('should ...', inject([EmployeeGuard], (guard: EmployeeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
