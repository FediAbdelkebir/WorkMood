import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedeventssliderComponent } from './joinedeventsslider.component';

describe('JoinedeventssliderComponent', () => {
  let component: JoinedeventssliderComponent;
  let fixture: ComponentFixture<JoinedeventssliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinedeventssliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedeventssliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
