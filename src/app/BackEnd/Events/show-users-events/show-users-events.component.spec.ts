import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsersEventsComponent } from './show-users-events.component';

describe('ShowUsersEventsComponent', () => {
  let component: ShowUsersEventsComponent;
  let fixture: ComponentFixture<ShowUsersEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUsersEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUsersEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
