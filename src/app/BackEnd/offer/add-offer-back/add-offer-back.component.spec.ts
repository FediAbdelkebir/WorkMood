import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferBackComponent } from './add-offer-back.component';

describe('AddOfferBackComponent', () => {
  let component: AddOfferBackComponent;
  let fixture: ComponentFixture<AddOfferBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfferBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
