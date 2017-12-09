import { TestBed, inject } from '@angular/core/testing';

import { EditAnnctService } from './edit-annct.service';

describe('EditAnnctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditAnnctService]
    });
  });

  it('should be created', inject([EditAnnctService], (service: EditAnnctService) => {
    expect(service).toBeTruthy();
  }));
});
