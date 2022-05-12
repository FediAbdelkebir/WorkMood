import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamationsBackComponent } from './list-reclamations-back.component';

describe('ListReclamationsBackComponent', () => {
  let component: ListReclamationsBackComponent;
  let fixture: ComponentFixture<ListReclamationsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReclamationsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReclamationsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
