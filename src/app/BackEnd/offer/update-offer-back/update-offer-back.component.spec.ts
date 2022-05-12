import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfferBackComponent } from './update-offer-back.component';

describe('UpdateOfferBackComponent', () => {
  let component: UpdateOfferBackComponent;
  let fixture: ComponentFixture<UpdateOfferBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOfferBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOfferBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
