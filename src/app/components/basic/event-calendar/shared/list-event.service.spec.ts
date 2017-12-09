import { TestBed, inject } from '@angular/core/testing';

import { ListEventService } from './list-event.service';

describe('DeleteEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListEventService]
    });
  });

  it('should be created', inject([ListEventService], (service: ListEventService) => {
    expect(service).toBeTruthy();
  }));
});
