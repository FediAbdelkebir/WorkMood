import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReclamationBackComponent } from './update-reclamation-back.component';

describe('UpdateReclamationBackComponent', () => {
  let component: UpdateReclamationBackComponent;
  let fixture: ComponentFixture<UpdateReclamationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReclamationBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReclamationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
