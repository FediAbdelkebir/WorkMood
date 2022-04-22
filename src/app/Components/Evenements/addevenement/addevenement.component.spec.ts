import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddevenementComponent } from './addevenement.component';

describe('AddevenementComponent', () => {
  let component: AddevenementComponent;
  let fixture: ComponentFixture<AddevenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddevenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddevenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
