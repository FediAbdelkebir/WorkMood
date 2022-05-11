import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchoiceCompanyorEmployeeComponent } from './addchoice-companyor-employee.component';

describe('AddchoiceCompanyorEmployeeComponent', () => {
  let component: AddchoiceCompanyorEmployeeComponent;
  let fixture: ComponentFixture<AddchoiceCompanyorEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchoiceCompanyorEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchoiceCompanyorEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
