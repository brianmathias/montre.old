import { TestBed } from '@angular/core/testing';

import { DivisionStylesService } from './division-styles.service';

describe('DivisionStylesService', () => {
  let service: DivisionStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
