import { TestBed } from '@angular/core/testing';

import { GetIDService } from './get-id.service';

describe('GetIDService', () => {
  let service: GetIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
