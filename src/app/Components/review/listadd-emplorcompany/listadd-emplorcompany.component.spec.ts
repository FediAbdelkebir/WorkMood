import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaddEmplorcompanyComponent } from './listadd-emplorcompany.component';

describe('ListaddEmplorcompanyComponent', () => {
  let component: ListaddEmplorcompanyComponent;
  let fixture: ComponentFixture<ListaddEmplorcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaddEmplorcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaddEmplorcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
