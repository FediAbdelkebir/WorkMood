import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAdminPostsComponent } from './tableau-admin-posts.component';

describe('TableauAdminPostsComponent', () => {
  let component: TableauAdminPostsComponent;
  let fixture: ComponentFixture<TableauAdminPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAdminPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAdminPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
