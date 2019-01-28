import { TestBed, inject } from '@angular/core/testing';

import { NewreleasesService } from './newreleases.service';

describe('NewreleasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewreleasesService]
    });
  });

  it('should be created', inject([NewreleasesService], (service: NewreleasesService) => {
    expect(service).toBeTruthy();
  }));
});
