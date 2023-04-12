import { TestBed } from '@angular/core/testing';

import { ManageUserServiceService } from './manage-user-service.service';

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
