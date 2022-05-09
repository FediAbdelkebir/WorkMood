import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserBadgesComponent } from './show-user-badges.component';

describe('ShowUserBadgesComponent', () => {
  let component: ShowUserBadgesComponent;
  let fixture: ComponentFixture<ShowUserBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
