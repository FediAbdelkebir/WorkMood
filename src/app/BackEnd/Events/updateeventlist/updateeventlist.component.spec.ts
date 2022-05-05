import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeventlistComponent } from './updateeventlist.component';

describe('UpdateeventlistComponent', () => {
  let component: UpdateeventlistComponent;
  let fixture: ComponentFixture<UpdateeventlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateeventlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateeventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
