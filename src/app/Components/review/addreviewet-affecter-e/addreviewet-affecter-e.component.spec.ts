import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewetAffecterEComponent } from './addreviewet-affecter-e.component';

describe('AddreviewetAffecterEComponent', () => {
  let component: AddreviewetAffecterEComponent;
  let fixture: ComponentFixture<AddreviewetAffecterEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreviewetAffecterEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewetAffecterEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
