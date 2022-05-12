import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffersBackComponent } from './list-offers-back.component';

describe('ListOffersBackComponent', () => {
  let component: ListOffersBackComponent;
  let fixture: ComponentFixture<ListOffersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOffersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
