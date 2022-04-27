import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedeventsComponent } from './likedevents.component';

describe('LikedeventsComponent', () => {
  let component: LikedeventsComponent;
  let fixture: ComponentFixture<LikedeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
