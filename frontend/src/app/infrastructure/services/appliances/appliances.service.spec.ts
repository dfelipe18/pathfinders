import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { AppliancesService } from './appliances.service';

describe('AppliancesService', () => {
  let service: AppliancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(AppliancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
