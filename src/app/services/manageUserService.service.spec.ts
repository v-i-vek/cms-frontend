import { TestBed } from '@angular/core/testing';

import { ManageUserServiceService } from './manageUserService.service';

describe('ManageUserServiceService', () => {
  let service: ManageUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
