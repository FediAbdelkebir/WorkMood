import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreponseComponent } from './addreponse.component';

describe('AddreponseComponent', () => {
  let component: AddreponseComponent;
  let fixture: ComponentFixture<AddreponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
