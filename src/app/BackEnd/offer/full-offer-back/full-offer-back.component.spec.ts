import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullOfferBackComponent } from './full-offer-back.component';

describe('FullOfferBackComponent', () => {
  let component: FullOfferBackComponent;
  let fixture: ComponentFixture<FullOfferBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullOfferBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullOfferBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
