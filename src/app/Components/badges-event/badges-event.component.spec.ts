import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesEventComponent } from './badges-event.component';

describe('BadgesEventComponent', () => {
  let component: BadgesEventComponent;
  let fixture: ComponentFixture<BadgesEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
