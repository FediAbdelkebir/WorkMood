import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetreviewGoodbyusersComponent } from './getreview-goodbyusers.component';

describe('GetreviewGoodbyusersComponent', () => {
  let component: GetreviewGoodbyusersComponent;
  let fixture: ComponentFixture<GetreviewGoodbyusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetreviewGoodbyusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetreviewGoodbyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
