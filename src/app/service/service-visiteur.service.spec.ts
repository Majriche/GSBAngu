import { TestBed } from '@angular/core/testing';

import { ServiceVisiteurService } from './service-visiteur.service';

describe('ServiceVisiteurService', () => {
  let service: ServiceVisiteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVisiteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
