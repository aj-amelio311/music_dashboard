import { TestBed, inject } from '@angular/core/testing';

import { ReviewserviceService } from './reviewservice.service';

describe('ReviewserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewserviceService]
    });
  });

  it('should be created', inject([ReviewserviceService], (service: ReviewserviceService) => {
    expect(service).toBeTruthy();
  }));
});
