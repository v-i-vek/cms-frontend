import { TestBed } from '@angular/core/testing';

import { SerServiceService } from './serService.service';

describe('SerServiceService', () => {
  let service: SerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
