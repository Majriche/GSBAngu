import { TestBed } from '@angular/core/testing';

import { FichefraisServiceService } from './fichefrais-service.service';

describe('FichefraisServiceService', () => {
  let service: FichefraisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichefraisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
