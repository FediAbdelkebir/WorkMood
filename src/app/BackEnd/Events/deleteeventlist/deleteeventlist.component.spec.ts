import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeventlistComponent } from './deleteeventlist.component';

describe('DeleteeventlistComponent', () => {
  let component: DeleteeventlistComponent;
  let fixture: ComponentFixture<DeleteeventlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteeventlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
