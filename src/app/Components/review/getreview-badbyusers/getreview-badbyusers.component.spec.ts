import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetreviewBadbyusersComponent } from './getreview-badbyusers.component';

describe('GetreviewBadbyusersComponent', () => {
  let component: GetreviewBadbyusersComponent;
  let fixture: ComponentFixture<GetreviewBadbyusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetreviewBadbyusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetreviewBadbyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
