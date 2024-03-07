import { TestBed } from '@angular/core/testing';

import { CaresService } from './care.service';

describe('CaresService', () => {
  let service: CaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaresService);
  });

  it('should be created', () => {
    expect(service === service);
  });
});
