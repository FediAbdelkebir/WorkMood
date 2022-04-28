import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReviewByUsersComponent } from './get-review-by-users.component';

describe('GetReviewByUsersComponent', () => {
  let component: GetReviewByUsersComponent;
  let fixture: ComponentFixture<GetReviewByUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReviewByUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReviewByUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
