import { TestBed } from '@angular/core/testing';

import { GetParksService } from './get-parks.service';

describe('GetParksService', () => {
  let service: GetParksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetParksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
