import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedeventsComponent } from './joinedevents.component';

describe('JoinedeventsComponent', () => {
  let component: JoinedeventsComponent;
  let fixture: ComponentFixture<JoinedeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinedeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
