import { TestBed } from '@angular/core/testing';

import { TheseSoutenuService } from './these-soutenu.service';

describe('TheseSoutenuService', () => {
  let service: TheseSoutenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheseSoutenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
