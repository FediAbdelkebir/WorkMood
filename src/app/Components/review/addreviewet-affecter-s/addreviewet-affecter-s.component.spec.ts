import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewetAffecterSComponent } from './addreviewet-affecter-s.component';

describe('AddreviewetAffecterSComponent', () => {
  let component: AddreviewetAffecterSComponent;
  let fixture: ComponentFixture<AddreviewetAffecterSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreviewetAffecterSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewetAffecterSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
