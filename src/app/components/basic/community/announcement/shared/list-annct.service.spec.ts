import { TestBed, inject } from '@angular/core/testing';

import { ListAnnctService } from './list-annct.service';

describe('ListAnnctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAnnctService]
    });
  });

  it('should be created', inject([ListAnnctService], (service: ListAnnctService) => {
    expect(service).toBeTruthy();
  }));
});
