import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBadgesComponent } from './update-badges.component';

describe('UpdateBadgesComponent', () => {
  let component: UpdateBadgesComponent;
  let fixture: ComponentFixture<UpdateBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
