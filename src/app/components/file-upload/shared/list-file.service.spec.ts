import { TestBed, inject } from '@angular/core/testing';

import { ListFileService } from './list-file.service';

describe('ListFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListFileService]
    });
  });

  it('should be created', inject([ListFileService], (service: ListFileService) => {
    expect(service).toBeTruthy();
  }));
});
