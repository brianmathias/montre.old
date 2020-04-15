import { TestBed } from '@angular/core/testing';

import { VirtuosoService } from './virtuoso.service';

describe('VirtuosoService', () => {
  let service: VirtuosoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtuosoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
