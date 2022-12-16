import { TestBed } from '@angular/core/testing';

import { FraisHorsForfaitService } from './frais-hors-forfait.service';

describe('FraisHorsForfaitService', () => {
  let service: FraisHorsForfaitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraisHorsForfaitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
