import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAdminArticleComponent } from './tableau-admin-article.component';

describe('TableauAdminArticleComponent', () => {
  let component: TableauAdminArticleComponent;
  let fixture: ComponentFixture<TableauAdminArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAdminArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAdminArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
