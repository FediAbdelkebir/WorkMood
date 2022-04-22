import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproudComponent } from './ourproud.component';

describe('OurproudComponent', () => {
  let component: OurproudComponent;
  let fixture: ComponentFixture<OurproudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurproudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
