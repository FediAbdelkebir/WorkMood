import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectBadgeUserComponent } from './affect-badge-user.component';

describe('AffectBadgeUserComponent', () => {
  let component: AffectBadgeUserComponent;
  let fixture: ComponentFixture<AffectBadgeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectBadgeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectBadgeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
