import { TestBed } from '@angular/core/testing';

import { UpdateserviceService } from './updateservice.service';

describe('EditserviceService', () => {
  let service: UpdateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
