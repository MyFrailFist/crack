import { TestBed, inject } from '@angular/core/testing';

import { PostAnnctService } from './post-annct.service';

describe('PostAnnctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostAnnctService]
    });
  });

  it('should be created', inject([PostAnnctService], (service: PostAnnctService) => {
    expect(service).toBeTruthy();
  }));
});
