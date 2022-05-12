import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamationBackComponent } from './add-reclamation-back.component';

describe('AddReclamationBackComponent', () => {
  let component: AddReclamationBackComponent;
  let fixture: ComponentFixture<AddReclamationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReclamationBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReclamationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
