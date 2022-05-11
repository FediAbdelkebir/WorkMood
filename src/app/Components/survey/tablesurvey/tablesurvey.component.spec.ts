import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesurveyComponent } from './tablesurvey.component';

describe('TablesurveyComponent', () => {
  let component: TablesurveyComponent;
  let fixture: ComponentFixture<TablesurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
