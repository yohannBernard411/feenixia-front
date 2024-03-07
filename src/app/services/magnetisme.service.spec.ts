import { TestBed } from '@angular/core/testing';

import { MagnetismeService } from './magnetisme.service';

describe('MagnetismeService', () => {
  let service: MagnetismeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagnetismeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
