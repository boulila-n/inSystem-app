import { TestBed } from '@angular/core/testing';

import { TempEauService } from './temp-eau.service';

describe('TempEauService', () => {
  let service: TempEauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempEauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
