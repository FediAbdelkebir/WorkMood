import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedeventssliderComponent } from './likedeventsslider.component';

describe('LikedeventssliderComponent', () => {
  let component: LikedeventssliderComponent;
  let fixture: ComponentFixture<LikedeventssliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedeventssliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedeventssliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
