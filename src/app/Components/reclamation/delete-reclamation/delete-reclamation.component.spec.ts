import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReclamationComponent } from './delete-reclamation.component';

describe('DeleteReclamationComponent', () => {
  let component: DeleteReclamationComponent;
  let fixture: ComponentFixture<DeleteReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
