import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdPostComponent } from './get-by-id-post.component';

describe('GetByIdPostComponent', () => {
  let component: GetByIdPostComponent;
  let fixture: ComponentFixture<GetByIdPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
