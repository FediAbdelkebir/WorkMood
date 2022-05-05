import { TestBed } from '@angular/core/testing';

import { EventTagsService } from './event-tags.service';

describe('EventTagsService', () => {
  let service: EventTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
