import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeventsliderComponent } from './addeventslider.component';

describe('AddeventsliderComponent', () => {
  let component: AddeventsliderComponent;
  let fixture: ComponentFixture<AddeventsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeventsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeventsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
