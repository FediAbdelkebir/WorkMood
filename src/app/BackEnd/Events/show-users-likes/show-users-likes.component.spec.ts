import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsersLikesComponent } from './show-users-likes.component';

describe('ShowUsersLikesComponent', () => {
  let component: ShowUsersLikesComponent;
  let fixture: ComponentFixture<ShowUsersLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUsersLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUsersLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
