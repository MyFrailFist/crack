import { TestBed, inject } from '@angular/core/testing';

import { ShareSelectedAnnctService } from './share-selected-annct.service';

describe('ShareSelectedAnnctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareSelectedAnnctService]
    });
  });

  it('should be created', inject([ShareSelectedAnnctService], (service: ShareSelectedAnnctService) => {
    expect(service).toBeTruthy();
  }));
});
