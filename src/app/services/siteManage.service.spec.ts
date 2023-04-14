import { TestBed } from '@angular/core/testing';

import { SiteManageService } from './siteManage.service';

describe('SiteManageService', () => {
  let service: SiteManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
