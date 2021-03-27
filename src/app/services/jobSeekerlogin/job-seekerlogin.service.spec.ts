import { TestBed } from '@angular/core/testing';

import { JobSeekerloginService } from './job-seekerlogin.service';

describe('JobSeekerloginService', () => {
  let service: JobSeekerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
