import { TestBed } from '@angular/core/testing';

import { LikeArticleService } from './like-article.service';

describe('LikeArticleService', () => {
  let service: LikeArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
