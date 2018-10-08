import { TestBed, inject } from '@angular/core/testing';

import { PLCOutputsServiceService } from './plcoutputs-service.service';

describe('PLCOutputsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PLCOutputsServiceService]
    });
  });

  it('should be created', inject([PLCOutputsServiceService], (service: PLCOutputsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
