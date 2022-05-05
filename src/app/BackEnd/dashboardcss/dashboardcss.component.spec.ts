import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcssComponent } from './dashboardcss.component';

describe('DashboardcssComponent', () => {
  let component: DashboardcssComponent;
  let fixture: ComponentFixture<DashboardcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardcssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
