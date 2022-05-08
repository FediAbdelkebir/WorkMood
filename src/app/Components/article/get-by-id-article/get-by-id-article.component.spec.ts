import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdArticleComponent } from './get-by-id-article.component';

describe('GetByIdArticleComponent', () => {
  let component: GetByIdArticleComponent;
  let fixture: ComponentFixture<GetByIdArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
