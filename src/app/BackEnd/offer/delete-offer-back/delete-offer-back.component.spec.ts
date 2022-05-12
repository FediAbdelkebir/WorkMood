import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOfferBackComponent } from './delete-offer-back.component';

describe('DeleteOfferBackComponent', () => {
  let component: DeleteOfferBackComponent;
  let fixture: ComponentFixture<DeleteOfferBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOfferBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOfferBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
