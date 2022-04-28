import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdsurveyComponent } from './get-by-idsurvey.component';

describe('GetByIdsurveyComponent', () => {
  let component: GetByIdsurveyComponent;
  let fixture: ComponentFixture<GetByIdsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
