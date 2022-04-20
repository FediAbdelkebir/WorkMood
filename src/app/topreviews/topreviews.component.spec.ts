import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopreviewsComponent } from './topreviews.component';

describe('TopreviewsComponent', () => {
  let component: TopreviewsComponent;
  let fixture: ComponentFixture<TopreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
