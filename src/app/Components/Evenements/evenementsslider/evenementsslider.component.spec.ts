import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementssliderComponent } from './evenementsslider.component';

describe('EvenementssliderComponent', () => {
  let component: EvenementssliderComponent;
  let fixture: ComponentFixture<EvenementssliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementssliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementssliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
