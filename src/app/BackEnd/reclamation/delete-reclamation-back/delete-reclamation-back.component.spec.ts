import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReclamationBackComponent } from './delete-reclamation-back.component';

describe('DeleteReclamationBackComponent', () => {
  let component: DeleteReclamationBackComponent;
  let fixture: ComponentFixture<DeleteReclamationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReclamationBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReclamationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
