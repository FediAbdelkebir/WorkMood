import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestupdatesComponent } from './latestupdates.component';

describe('LatestupdatesComponent', () => {
  let component: LatestupdatesComponent;
  let fixture: ComponentFixture<LatestupdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestupdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
