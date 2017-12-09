import { TestBed, inject } from '@angular/core/testing';

import { ConvertEventService } from './convert-event.service';

describe('ConvertEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertEventService]
    });
  });

  it('should be created', inject([ConvertEventService], (service: ConvertEventService) => {
    expect(service).toBeTruthy();
  }));
});
