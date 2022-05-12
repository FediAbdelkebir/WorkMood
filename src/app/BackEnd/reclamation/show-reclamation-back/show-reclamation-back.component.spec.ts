import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReclamationBackComponent } from './show-reclamation-back.component';

describe('ShowReclamationBackComponent', () => {
  let component: ShowReclamationBackComponent;
  let fixture: ComponentFixture<ShowReclamationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReclamationBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReclamationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
