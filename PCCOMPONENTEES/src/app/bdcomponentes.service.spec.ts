import { TestBed } from '@angular/core/testing';

import { BdcomponentesService } from './bdcomponentes.service';

describe('BdcomponentesService', () => {
  let service: BdcomponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdcomponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
