import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBadgeUserComponent } from './delete-badge-user.component';

describe('DeleteBadgeUserComponent', () => {
  let component: DeleteBadgeUserComponent;
  let fixture: ComponentFixture<DeleteBadgeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBadgeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBadgeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
