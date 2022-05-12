import { TestBed } from '@angular/core/testing';

import { OfferBackService } from './offer-back.service';

describe('OfferBackService', () => {
  let service: OfferBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
