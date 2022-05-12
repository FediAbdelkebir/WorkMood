import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOfferBackComponent } from './show-offer-back.component';

describe('ShowOfferBackComponent', () => {
  let component: ShowOfferBackComponent;
  let fixture: ComponentFixture<ShowOfferBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOfferBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOfferBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
