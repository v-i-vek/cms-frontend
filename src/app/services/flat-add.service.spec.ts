import { TestBed } from '@angular/core/testing';

import { FlatAddService } from './flat-add.service';

describe('FlatAddService', () => {
  let service: FlatAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
