import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfaqComponent } from './ourfaq.component';

describe('OurfaqComponent', () => {
  let component: OurfaqComponent;
  let fixture: ComponentFixture<OurfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurfaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
