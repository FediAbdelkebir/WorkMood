import { TestBed } from '@angular/core/testing';

import { ReclamationBackService } from './reclamation-back.service';

describe('ReclamationBackService', () => {
  let service: ReclamationBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
