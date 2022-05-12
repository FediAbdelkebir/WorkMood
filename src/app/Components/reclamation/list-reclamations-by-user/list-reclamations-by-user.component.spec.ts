import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamationsByUserComponent } from './list-reclamations-by-user.component';

describe('ListReclamationsByUserComponent', () => {
  let component: ListReclamationsByUserComponent;
  let fixture: ComponentFixture<ListReclamationsByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReclamationsByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReclamationsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
