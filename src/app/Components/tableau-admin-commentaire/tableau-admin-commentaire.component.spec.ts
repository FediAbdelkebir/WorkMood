import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAdminCommentaireComponent } from './tableau-admin-commentaire.component';

describe('TableauAdminCommentaireComponent', () => {
  let component: TableauAdminCommentaireComponent;
  let fixture: ComponentFixture<TableauAdminCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAdminCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAdminCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
