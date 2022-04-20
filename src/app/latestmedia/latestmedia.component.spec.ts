import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestmediaComponent } from './latestmedia.component';

describe('LatestmediaComponent', () => {
  let component: LatestmediaComponent;
  let fixture: ComponentFixture<LatestmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
